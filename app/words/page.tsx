import { Word } from "app/apitypes/word-types";
import WordComp from "./WordComp";
import { instance } from "app/api/api";

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
  return (await instance.get("/words/GetWords")).data;
}

export default Words;
