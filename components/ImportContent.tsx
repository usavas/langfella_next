import { useState } from "react";

function ImportContent() {
  const [source, setSource] = useState("");
  return (
    <div>
      <h6>Import Content</h6>
      <div className="input-group flex flex-col gap-2">
        <input
          id="source"
          className="input-text"
          onChange={handleSourceInput}
        ></input>
        <button className="btn-primary" onClick={importContent}>
          Import
        </button>
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

    const response = await fetch("/api/fetchHtml?url=" + source);
    const data = await response.json();

    //TODO add to readings
  }
}

export default ImportContent;
