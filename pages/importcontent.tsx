import { useState } from "react";
import ImportWebContentComp from "../components/homeComponents/ImportWebContentComp";
import ImportTextContentComp from "../components/homeComponents/ImportTextContentComp";

function ImportContent() {
  const [selectedContentType, setSelectedContentType] = useState<
    "web" | "text"
  >("web");

  return (
    <div className="m-4">
      <div className="flex flex-row gap-2 justify-between">
        <button
          id="web"
          onClick={handleChange}
          className={
            " text-white rounded-md p-2 flex-grow text-sm " +
            (selectedContentType === "web" ? "bg-gray-600" : "bg-gray-400")
          }
        >
          From Web
        </button>
        <button
          id="text"
          onClick={handleChange}
          className={
            "bg-gray-400 text-white rounded-md p-2 flex-grow text-sm " +
            (selectedContentType === "text" ? "bg-gray-600" : "bg-gray-400")
          }
        >
          From Text
        </button>
      </div>
      {selectedContentType === "web" ? (
        <ImportWebContentComp />
      ) : (
        <ImportTextContentComp />
      )}
    </div>
  );

  function handleChange(e: any) {
    setSelectedContentType(e.target.id);
  }
}

export default ImportContent;
