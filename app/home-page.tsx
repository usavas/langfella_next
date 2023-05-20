"use client";

import ReadingListComp from "./home/ReadingListComp";
import ImportedWebPages from "./home/WebPageListComp";
import Link from "next/link";
import ReadingWAuthorAndLang from "types/ReadingWAuthorsAndLanguage";
import HtmlPageWContentAndLanguage from "types/HtmlPageWContentAndLanguage";

type PropsType = {
  continueReadings: (HtmlPageWContentAndLanguage | ReadingWAuthorAndLang)[];
  readings: ReadingWAuthorAndLang[];
  importedWebPages: HtmlPageWContentAndLanguage[];
};

const Home = ({ continueReadings, readings, importedWebPages }: PropsType) => {
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

export default Home;
