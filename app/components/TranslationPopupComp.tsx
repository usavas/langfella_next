"use client";

import { instance } from "app/api/api";
//TODO need the following variables to save the word to Database
/**
 * reading or html page id
 * source language id
 * target language Id
 */

import { useEffect, useState } from "react";

type Props = {
  word: string;
  articleId?: string;
  readingLangCode: string;
  location: { x: number; y: number };
  close: () => void;
};

const TranslationPopupComp = (props: Props) => {
  const { close, word, articleId, location } = props;

  const [translation, setTranslation] = useState<string>("");

  useEffect(() => {
    const getTranslation = async () => {
      const apiUrl =
        "/api/translations?word=" +
        props.word +
        "&source=" +
        props.readingLangCode +
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

  // const locationClasses = location.x === 0 && location.y === 0 ?

  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-20 flex items-center justify-center `}
      onClick={close}
    >
      <div
        onClick={handleInsideClick}
        className="bg-white p-4 rounded-lg w-auto mx-8 min-w-[20rem] max-w-lg"
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
          <button onClick={handleSpeech}>Listen</button>
        </div>
      </div>
    </div>
  );

  function handleSpeech() {
    var msg = new SpeechSynthesisUtterance();
    msg.rate = 0.8; // too fast on google chrome (non-understandable)
    msg.text = props.word;
    msg.lang = props.readingLangCode;
    window.speechSynthesis.speak(msg);
  }

  async function saveWord(e: any) {
    e.stopPropagation();

    if (!translation || !props.word) {
      alert("cannot save without word or translation provided");
      return;
    }

    await instance.post("/api/words", word);

    close();
  }

  function handleInsideClick(e: any) {
    e.stopPropagation();
  }
};

export default TranslationPopupComp;
