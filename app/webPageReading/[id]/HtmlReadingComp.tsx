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
  location?: { x: number; y: number };
};

function HtmlReadingComp({ webPage: reading }: Props) {
  const [wordPopupSetting, setWordPopupSetting] = useState<WordPopupSettings>({
    word: "",
    shown: false,
    location: { x: 0, y: 0 },
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
    <div>
      <div
        className="max-w-3xl mx-4 my-8"
        onTouchEnd={handleSelection}
        onMouseUp={handleSelection}
      >
        {wordPopupSetting.shown && (
          <TranslationPopupComp
            word={wordPopupSetting.word}
            htmlPageId={reading.id}
            readingLang={reading.language}
            location={wordPopupSetting.location ?? { x: 0, y: 0 }}
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
    </div>
  );

  function handleClose() {
    setWordPopupSetting({ shown: false, word: "", location: { x: 0, y: 0 } });
  }

  /**
   *
   * @param evt
   * @returns Handle text selection for both mouse and touch selection
   */
  function handleSelection(evt: any): void {
    const selection = window.getSelection();
    const selectedString = selection?.toString();

    // // selected nodes must be text nodes
    // if (
    //   !IsSelectionValid(selection) ||
    //   selection === null ||
    //   selection.anchorNode === null ||
    //   selection.anchorNode.textContent === null ||
    //   selection.anchorNode !== selection.focusNode
    //   // || !IsSelectionTextNode(selection)
    // ) {
    //   return;
    // }

    // // limit the word selection by 3 words for now.
    // if (!selectedString || selectedString.split(" ").length > 3) {
    //   prevSelection = "";
    //   return;
    // }

    // // get start and end positions
    // let startPos = selection.anchorOffset;
    // let endPos = selection.focusOffset;
    // if (selection.anchorOffset - selection.focusOffset > 0) {
    //   startPos = selection.focusOffset;
    //   endPos = selection.anchorOffset;
    // }

    // // TODO disregard punctuations just like space (" ") char
    // while (startPos > 0 && getCharAt(startPos - 1) !== " ") {
    //   if (getCharAt(startPos) === " ") {
    //     startPos++;
    //     break;
    //   }
    //   startPos--;
    // }

    // while (
    //   endPos < selection.anchorNode.textContent.length - 1 &&
    //   getCharAt(endPos) !== " "
    // ) {
    //   if (getCharAt(endPos) === " ") {
    //     endPos--;
    //     break;
    //   }

    //   endPos++;
    // }

    // // make the new selection
    // overrideLastSelectionOnWindow(selection, startPos, endPos);

    const updatedSelectionString = window.getSelection()?.toString();

    if (prevSelection === updatedSelectionString) {
      return;
    }
    if (updatedSelectionString) {
      prevSelection = updatedSelectionString;

      // show popup for translation
      setWordPopupSetting({
        shown: true,
        word: updatedSelectionString,
        location: { x: evt.target.X, y: evt.target.Y },
      });
    }

    function getCharAt(i: number): string {
      return selection!.anchorNode!.textContent!.charAt(i);
    }

    function IsSelectionValid(selection: Selection | null): boolean {
      return (selection?.isCollapsed ?? false) === false;
    }

    function overrideLastSelectionOnWindow(
      selection: Selection,
      start: number,
      end: number
    ): void {
      const range = document.createRange();
      range.setStart(selection.anchorNode!, start);
      range.setEnd(selection.anchorNode!, end);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    // function IsSelectionTextNode(selection: Selection | null): boolean {
    //   if (!selection) return false;

    //   return (
    //     (selection.focusNode?.TEXT_NODE ?? false) &&
    //     (selection.anchorNode?.TEXT_NODE ?? false)
    //   );
    // }
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
