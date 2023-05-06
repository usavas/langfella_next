import { GetServerSideProps } from "next";
import ReadingListComp from "../components/homeComponents/ReadingListComp";
import ImportedWebPages from "../components/homeComponents/WebPageListComp";
import Link from "next/link";
import prisma from "../lib/prisma";
import ReadingWAuthorAndLang from "../types/ReadingWAuthorsAndLanguage";
import HtmlPageWContentAndLanguage from "../types/HtmlPageWContentAndLanguage";

type PropsType = {
  readings: ReadingWAuthorAndLang[];
  importedWebPages: HtmlPageWContentAndLanguage[];
};

const Home = ({ readings, importedWebPages }: PropsType) => {
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
        {importedWebPages.length > 0 && (
          <>
            <h3>Imported Web Pages</h3>
            <ImportedWebPages webPages={importedWebPages} />
          </>
        )}
        {readings.length > 0 && (
          <>
            <h3>Readings</h3>
            <ReadingListComp readings={readings} />
          </>
        )}
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
  const importedWebPages = await prisma.htmlPage.findMany({
    include: {
      contents: true,
      language: true,
    },
  });

  return { props: { readings, importedWebPages } };
};

export default Home;
