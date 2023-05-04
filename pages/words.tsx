import { GetServerSideProps } from "next";
import BottomNavigation from "../components/BottomNavigation";
import prisma from "../lib/prisma";
import { Word } from "@prisma/client";
import WordComp from "../components/WordComp";

type WordWLangs = Word & {
  sourceLanguage: { name: string; code: string };
  targetLanguage: { name: string; code: string };
};

const Words = ({ words }: { words: WordWLangs[] }) => {
  console.log(words); // status is not retrieved from db prisma client update'e ragmen

  return (
    <div className="m-4 ">
      <ul className=" divide-y divide-gray-200">
        {words.map((w, i) => (
          <li key={i} className="py-3">
            <WordComp word={w}></WordComp>
          </li>
        ))}
      </ul>
      <BottomNavigation></BottomNavigation>
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

  console.log(words);

  return {
    props: { words },
  };
};

export default Words;
