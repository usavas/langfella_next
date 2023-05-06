import { GetServerSideProps } from "next";
import ReadingListComp from "../components/ReadingListComp";
import Link from "next/link";
import prisma from "../lib/prisma";
import ReadingWAuthorAndLang from "../types/ReadingWAuthorsAndLanguage";

type PropsType = {
  props: { readings: ReadingWAuthorAndLang[] };
};

const Home = ({ readings }: { readings: ReadingWAuthorAndLang[] }) => {
  return (
    <div className="mx-4 my-4">
      <main className="">
        <h1>LangFella</h1>
        <Link
          href="/importcontent"
          className="mt-2 text-sm bg-gray-400 rounded-md p-2"
        >
          Import Content
        </Link>
        <h3>Readings</h3>
        <ReadingListComp readings={readings}></ReadingListComp>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const readings = await prisma.reading.findMany({
    include: {
      authors: { select: { firstName: true, lastName: true } },
      language: { select: { code: true, name: true } },
    },
  });
  return { props: { readings } };
};

export default Home;
