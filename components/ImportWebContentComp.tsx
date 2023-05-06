import { useEffect, useState } from "react";
import prisma from "../lib/prisma";
import HtmlPageResponse from "../types/api_types/HtmlPageResponse";

function ImportWebContentComp() {
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
        ></input>
        {clipBoardContent && (
          <button
            onClick={copyClipboardToSource}
            className="text-sm underline truncate text-gray-400 hover:text-gray-600"
          >
            {clipBoardContent}
          </button>
        )}
        <button className="btn-primary" onClick={importContent}>
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

  async function importContent(e: any) {
    if (!source || !source.startsWith("http")) {
      return;
    }

    let htmlPage: HtmlPageResponse;

    try {
      const response = await fetch("/api/fetchHtml?url=" + source);
      htmlPage = (await response.json()) as HtmlPageResponse;

      setLabel({ text: "Website content imported", ok: true });
    } catch (error) {
      setLabel({ text: "Content could not be imported", ok: false });
      return;
    }

    //TODO add to readings
    prisma.reading.create({
      data: {
        title: htmlPage.headLine ?? htmlPage.title ?? "",
        contents: [""],
        source: htmlPage.pageUrl,
        language: { connect: { id: 1 } },
      },
    });
  }
}

export default ImportWebContentComp;
