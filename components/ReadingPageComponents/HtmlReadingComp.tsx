import { ReactElement, useState } from "react";
import TranslationPopupComp from "./TranslationPopupComp";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";

type Props = {
  webPage: HtmlPageWContentAndLanguage;
};

type WordPopupSettings = {
  word: string;
  shown: boolean;
};

function HtmlReadingComp({ webPage: webPage }: Props) {
  const [wordPopupSetting, setWordPopupSetting] = useState<WordPopupSettings>({
    word: "",
    shown: false,
  });

  let prevSelection: string = "";

  let firstImgComp: ReactElement | null = null;
  const firstImage = webPage.contents.find((i) => i.type === "img");
  if (firstImage) {
    firstImgComp = (
      <img src={firstImage.content} alt="Main image of the article" />
    );
  }

  const renderText = webPage.contents.map((t, i) => {
    switch (t.type) {
      case "h1":
        return <h1>{t.content}</h1>;
      case "h2":
        return <h2>{t.content}</h2>;
      case "h3":
        return <h3>{t.content}</h3>;
      case "h4":
        return <h4>{t.content}</h4>;
      case "h5":
        return <h5>{t.content}</h5>;
      case "h6":
        return <h6>{t.content}</h6>;
      case "p":
        return (
          <p className="word" key={i}>
            {t.content}
          </p>
        );
      default:
        break;
    }
  });

  return (
    <div
      className="max-w-3xl mx-4 my-8"
      onTouchEndCapture={handleSelection}
      onMouseUp={handleSelection}
    >
      {wordPopupSetting.shown && (
        <TranslationPopupComp
          word={wordPopupSetting.word}
          close={handleClose}
        ></TranslationPopupComp>
      )}
      <h1>{webPage.headline ?? webPage.pageTitle}</h1>
      {firstImgComp && firstImgComp}
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

export default HtmlReadingComp;
