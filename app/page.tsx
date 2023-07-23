import HomePage from "./home/page";
import { instance } from "./api/api";
import { Article } from "./apitypes/articles/article-types";

export default async function Page() {
  const readingContents = await getReadingContents();
  return (
    <HomePage
      continueReadings={readingContents.continueReadings}
      readings={readingContents.readings}
    />
  );
}

async function getReadingContents() {
  const result = await instance.get("/Articles/GetArticles");
  //TODO populate this with readings the user started previously
  const continueReadings: Article[] = [];

  return { readings: result.data, continueReadings };
}
