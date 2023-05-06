//TODO need the following variables to save the word to Database
/**
 * reading or html page id
 * source language id
 * target language Id
 */

import { Word, Prisma } from "@prisma/client";
import { useEffect, useState } from "react";

type Props = {
  word: string;
  close: () => void;
};

const TranslationPopupComp = (props: Props) => {
  const { close, word } = props;

  const [translation, setTranslation] = useState<string>("");

  useEffect(() => {
    const getTranslation = async () => {
      const apiUrl =
        "/api/translations?word=" +
        props.word +
        "&source=" +
        "es" +
        "&target=" +
        "en";

      try {
        const result = await fetch(apiUrl, { method: "GET" });
        const translation = await result.json();
        setTranslation(translation.translatedText);
      } catch (error) {
        console.log({ error });
      }
    };
    getTranslation();
  });

  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-20 flex items-center justify-center"
        onClick={close}
      >
        <div
          onClick={handleInsideClick}
          className="bg-white p-4  rounded-lg w-auto mx-8 min-w-[20rem] max-w-lg"
        >
          <h4 className=""></h4>
          <p className="text-gray-600 mb-2 flex flex-row justify-between gap-2">
            <span className="uppercase text-xs font-medium">word</span>
            <span> {props.word} </span>
          </p>

          <p className="text-gray-600 mb-2 flex flex-row justify-between gap-2">
            <span className="uppercase text-xs font-medium">translation</span>
            <span>{translation || "getting translation..."}</span>
          </p>
          <div className="flex flex-row gap-2">
            <button
              className="bg-gray-500 text-white px-2 py-2 rounded-md flex-grow"
              onClick={saveWord}
            >
              Save Word
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  async function saveWord(e: any) {
    e.stopPropagation();
    // save to db props.word;

    if (!translation || !props.word) {
      alert("cannot save without word or translation provided");
      return;
    }

    const word: Prisma.WordCreateArgs["data"] = {
      text: props.word,
      translation: [translation],
      htmlPageId: 1,
      readingId: 1,
      sourceLangId: 1,
      targetLangId: 2,
      status: "1", // default status is 1. (means not familiar with this newly added word)
      // exampleSentences: [""],
    };

    await fetch("/api/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(word),
    });

    close();
  }

  function handleInsideClick(e: any) {
    e.stopPropagation();
  }
};

export default TranslationPopupComp;
