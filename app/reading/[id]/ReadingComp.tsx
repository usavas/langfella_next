"use client";

import { useState } from "react";
import TranslationPopupComp from "app/components/TranslationPopupComp";
import ReadingWAuthorAndLang from "types/ReadingWAuthorsAndLanguage";

type Props = {
  reading: ReadingWAuthorAndLang;
};

type WordPopupSettings = {
  word: string;
  shown: boolean;
  location?: { x: number; y: number };
};

function ReadingComp({ reading }: Props) {
  const [wordPopupSetting, setWordPopupSetting] = useState<WordPopupSettings>({
    word: "",
    shown: false,
    location: { x: 0, y: 0 },
  });

  let prevSelection: string = "";

  const renderText = reading.contents.map((t, i) => (
    <p className="word" key={i}>
      {t}
    </p>
  ));

  return (
    <div
      className="max-w-3xl mx-4 my-8"
      onTouchEndCapture={handleSelection}
      onMouseUp={handleSelection}
    >
      {wordPopupSetting.shown && (
        <TranslationPopupComp
          word={wordPopupSetting.word}
          readingId={reading.id}
          readingLang={reading.language}
          location={{ x: 0, y: 0 }}
          close={handleClose}
        ></TranslationPopupComp>
      )}
      <h1>{reading.title}</h1>
      {renderText}
    </div>
  );

  function handleClose() {
    setWordPopupSetting({ shown: false, word: "" });
  }

  /**
   *
   * @param e
   * @returns Handle text selection for both mouse and touch selection
   */
  function handleSelection(e: any): void {
    console.log("in");

    const selectedString = window.getSelection()?.toString();

    if (!selectedString) {
      prevSelection = "";
      return;
    }
    if (prevSelection === selectedString) {
      return;
    }
    if (selectedString) {
      prevSelection = selectedString;

      // show popup for translation
      setWordPopupSetting({ shown: true, word: selectedString });
    }
  }
}

export default ReadingComp;
