"use client";

import ImportedWebPages from "./home/WebPageListComp";
import Link from "next/link";
import ReadingWAuthorAndLang from "types/ReadingWAuthorsAndLanguage";

type PropsType = {
  continueReadings: ReadingWAuthorAndLang[];
  readings: ReadingWAuthorAndLang[];
};

const Home = ({ continueReadings, readings }: PropsType) => {
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
        {readings.length > 0 && (
          <>
            <h3>Imported Web Pages</h3>
            <ImportedWebPages readings={readings} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
