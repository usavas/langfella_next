import { useEffect, useState } from "react";

function ImportWebContentComp() {
  const [source, setSource] = useState("");
  const [clipBoardContent, setClipBoardContent] = useState("");
  const [label, setLabel] = useState({ content: "", ok: false });

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
          {label.content}
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

    try {
      const response = await fetch("/api/fetchHtml?url=" + source);
      const data = await response.json();

      setLabel({ content: "Website content imported", ok: true });
    } catch (error) {
      setLabel({ content: "Content could not be imported", ok: false });
    }

    //TODO add to readings
  }
}

export default ImportWebContentComp;
