import { useState } from "react";
import Popup from "./PopupComp";
import ReadingType from "../types/ReadingType";

type Props = {
  reading: ReadingType;
};

type WordPopupSettings = {
  word: string;
  shown: boolean;
};

function ReadingComp(props: Props) {
  const { reading } = props;

  const [wordPopupSetting, setWordPopupSetting] = useState<WordPopupSettings>({
    word: "",
    shown: false,
  });

  let prevSelection: string = "";

  const renderText = reading.text.map((t, i) => (
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
        <Popup word={wordPopupSetting.word} close={handleClose}></Popup>
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
