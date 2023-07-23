"use client";

import { Article } from "./apitypes/articles/article-types";
import ReadingListComp from "./home/ReadingListComp";
import Link from "next/link";

type PropsType = {
  continueReadings: Article[];
  readings: Article[];
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
          Import Reading Content
        </Link>
        {readings.length > 0 && (
          <>
            <h3>Reading Items</h3>
            <ReadingListComp readings={readings} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
