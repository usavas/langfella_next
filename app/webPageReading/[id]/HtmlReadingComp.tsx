"use client";

import { ReactElement, useState } from "react";
import TranslationPopupComp from "app/components/TranslationPopupComp";
import ReadingWAuthorsAndLanguage from "types/ReadingWAuthorsAndLanguage";
import { ContentItem } from "@prisma/client";

type Props = {
  webPage: ReadingWAuthorsAndLanguage;
};

type WordPopupSettings = {
  word: string;
  shown: boolean;
};

function HtmlReadingComp({ webPage: reading }: Props) {
  const [wordPopupSetting, setWordPopupSetting] = useState<WordPopupSettings>({
    word: "",
    shown: false,
  });

  let prevSelection: string = "";

  let firstImgComp: ReactElement | null = null;
  const firstImage = reading.contents.find((i: ContentItem) => i.tag === "img");
  if (firstImage) {
    firstImgComp = (
      <img src={firstImage.content} alt="Main image of the article" />
    );
  }

  const renderText = reading.contents.map((t) => {
    return t.content === reading.title ? (
      <div key={t.id}></div>
    ) : (
      getTextNodeByTag(t)
    );
  });

  return (
    <div
      className="max-w-3xl mx-4 my-8"
      onClick={() => console.log("test")}
      onTouchEndCapture={handleSelection}
      onMouseUp={handleSelection}
    >
      {wordPopupSetting.shown && (
        <TranslationPopupComp
          word={wordPopupSetting.word}
          htmlPageId={reading.id}
          close={handleClose}
        ></TranslationPopupComp>
      )}
      <h1>{reading.title}</h1>
      {firstImgComp && firstImgComp}
      {renderText}
      <footer key={reading.id}>
        <p className="text-sm text-gray-400 italic">
          Page Source: {reading.source}
        </p>
      </footer>
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
    const selectedString = window.getSelection()?.toString();

    // limit the word selection by 3 words for now.
    if (!selectedString || selectedString.split(" ").length > 3) {
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

  function getTextNodeByTag(t: ContentItem): JSX.Element {
    switch (t.tag) {
      case "h1":
        return <h1 key={t.id}>{t.content}</h1>;
      case "h2":
        return <h2 key={t.id}>{t.content}</h2>;
      case "h3":
        return <h3 key={t.id}>{t.content}</h3>;
      case "h4":
        return <h4 key={t.id}>{t.content}</h4>;
      case "h5":
        return <h5 key={t.id}>{t.content}</h5>;
      case "h6":
        return <h6 key={t.id}>{t.content}</h6>;
      case "p":
        return (
          <p className="word" key={t.id}>
            {t.content}
          </p>
        );
      default:
        return <div key={t.id}></div>;
    }
  }
}

export default HtmlReadingComp;
