"use client";

import { useEffect, useState, useTransition } from "react";
import ParsedHtmlPage from "types/api_types/ParsedHtmlPage";
import HtmlPageCreateInputs from "types/api_types/HtmlPageCreateInputs";
import { useRouter } from "next/navigation";

function ImportWebContentComp() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [source, setSource] = useState("");
  const [clipBoardContent, setClipBoardContent] = useState("");
  const [label, setLabel] = useState({ text: "", ok: false });

  useEffect(() => {
    try {
      navigator.clipboard.readText().then((text) => {
        if (text.startsWith("http")) {
          setClipBoardContent(text);
        }
      });
    } catch (error) {
      console.log("cannot access to clipboard content " + error);
    }
  }, []);

  return (
    <div>
      <h6>Import Web Content</h6>
      <div className="input-group flex flex-col gap-2">
        <input
          id="source"
          value={source}
          className="input-text"
          onChange={handleSourceInput}
          placeholder="Paste the website url here"
        ></input>
        {clipBoardContent && (
          <button
            onClick={copyClipboardToSource}
            className="text-sm underline truncate text-gray-400 hover:text-gray-600"
          >
            {clipBoardContent}
          </button>
        )}
        <button className="btn-primary" onClick={importWebContent}>
          Import
        </button>
        <label
          className={"text-sm " + (label.ok ? "text-gray-900" : "text-red-600")}
        >
          {label.text}
        </label>
      </div>
    </div>
  );

  function copyClipboardToSource(e: any) {
    setSource(clipBoardContent);
  }

  function handleSourceInput(e: any) {
    const val = e.target.value;

    if (val) {
      setSource(e.target.value);
    } else {
      setSource("");
    }
  }

  async function importWebContent(e: any) {
    if (!source || !source.startsWith("http")) {
      return;
    }

    try {
      const response = await fetch(
        "/api/fetchHtml?url=" + encodeURIComponent(source)
      );
      const htmlPage = (await response.json()) as ParsedHtmlPage;

      const htmlPageCreateArgs: HtmlPageCreateInputs = {
        htmlPage,
        source,
        languageCode: "en",
      };

      const postResult = await fetch("/api/htmlpages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(htmlPageCreateArgs),
      });

      startTransition(() => {
        router.refresh();
      });

      setLabel({ text: "Website content imported", ok: true });
    } catch (error) {
      setLabel({ text: "Content could not be imported", ok: false });
    }
  }
}

export default ImportWebContentComp;
