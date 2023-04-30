import { useEffect, useState } from "react";

type Props = {
  word: string;
  close: () => void;
};

const Popup = (props: Props) => {
  const { close } = props;

  const [translation, setTranslation] = useState<string>("");

  useEffect(() => {
    const getTranslation = async () => {
      const apiUrl =
        "/api/translation?word=" +
        props.word +
        "&source=" +
        "es" +
        "&target=" +
        "en";

      try {
        const result = await fetch(apiUrl);
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
          className="bg-white p-4  rounded-lg w-auto mx-8 max-w-lg"
        >
          <h4 className="">Popup Title</h4>
          <p className="text-gray-600 mb-4">{props.word}</p>

          <p className="text-gray-600 mb-4">
            {translation || "getting translation..."}
          </p>
          <button className="bg-gray-500 text-white px-2 py-2 rounded-md mr-2">
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
  );

  function handleInsideClick(e: any) {
    e.stopPropagation();
  }
};

export default Popup;
