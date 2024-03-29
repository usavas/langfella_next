"use client";

import { useState } from "react";

function ImportTextContentComp() {
  const [source, setSource] = useState("");
  const [label, setLabel] = useState({ text: "", ok: false });

  return (
    <div>
      <h6>Import Text Content</h6>
      <div className="input-group flex flex-col gap-2">
        <textarea
          id="source"
          className="input-text line-clamp-4 "
          onChange={handleSourceInput}
          placeholder="Paste your content here"
          rows={6}
        ></textarea>
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

    try {
      //TODO import text content

      //TODO set label text based on success status

      //TODO add to readings

      setLabel({ text: "Content content imported", ok: true });
    } catch (error) {
      setLabel({ text: "Content could not be imported", ok: false });
    }
  }
}

export default ImportTextContentComp;
