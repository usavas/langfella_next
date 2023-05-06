import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import { Word } from "@prisma/client";
import WordComp from "../components/wordPageComponents/WordComp";

type WordWLangs = Word & {
  sourceLanguage: { name: string; code: string };
  targetLanguage: { name: string; code: string };
};

const Words = ({ words }: { words: WordWLangs[] }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const words = await prisma.word.findMany({
    include: {
      sourceLanguage: { select: { name: true, code: true } },
      targetLanguage: { select: { name: true, code: true } },
    },
  });

  return {
    props: { words },
  };
};

export default Words;
