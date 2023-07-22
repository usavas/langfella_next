import { Word } from "app/apitypes/word-types";
import WordComp from "./WordComp";
import axios from "axios";
import ApiSettings from "app/api/apisettings";

const Words = async () => {
  const words = await getWordList();
  return (
    <div className="m-4 ">
      <ul className=" divide-y divide-gray-200">
        {words.map((w, i) => (
          <li key={i} className="py-3">
            <WordComp word={w}></WordComp>
          </li>
        ))}
      </ul>
    </div>
  );
};

async function getWordList(): Promise<Word[]> {
  const words: Word[] = await axios.get(
    ApiSettings.baseUri + "/words/GetWords"
  );
  return words;
}

export default Words;
