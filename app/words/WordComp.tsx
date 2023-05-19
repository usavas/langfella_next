"use client";

import { Word } from "@prisma/client";

function WordComp({ word }: { word: Word }) {
  return (
    <div
      className="flex items-center justify-between gap-2 space-x-4 cursor-pointer"
      onClick={openWordView}
    >
      <div className="flex-1">
        <p className="text-base font-medium text-gray-700 truncate">
          {word.text}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-500 text-ellipsis">
          {word.translation}
        </p>
        <p className="mt-2 italic text-sm text-gray-600 line-clamp-2">
          {word.exampleSentences.join(", ")}
        </p>
      </div>
      <span
        className="bg-red-400 text-white rounded-md px-2"
        onClick={handleDelete}
      >
        Del
      </span>
      <div className="inline-flex justify-center align-middle rounded-full bg-gray-200 w-4 h-4 p-4 items-center text-base font-medium text-gray-900 ">
        {word.status}
      </div>
    </div>
  );

  function handleDelete(e: any) {
    console.log({ word });
    fetch("/api/words/" + word.id, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        console.log("word deleted successfully");
        //TODO update content on the client side
        // Router.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //TODO open a popup or navigate to window of the word details
  function openWordView(e: any) {}
}

export default WordComp;
