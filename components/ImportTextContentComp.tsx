import { useState } from "react";

function ImportTextContentComp() {
  const [source, setSource] = useState("");
  const [label, setLabel] = useState({ content: "", ok: false });

  return (
    <div>
      <h6>Import Text Content</h6>
      <div className="input-group flex flex-col gap-2">
        <input
          id="source"
          className="input-text"
          onChange={handleSourceInput}
        ></input>
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

  function handleSourceInput(e: any) {
    const val = e.target.value;

    if (val) {
      setSource(e.target.value);
    } else {
      setSource("");
    }
  }

  async function importContent(e: any) {
    if (!source) {
      return;
    }

    //TODO import text content

    //TODO set label text based on success status

    //TODO add to readings
  }
}

export default ImportTextContentComp;
