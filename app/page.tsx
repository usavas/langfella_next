import axios from "axios";
import HomePage from "./home-page";
import ApiSettings from "./api/apisettings";
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
  const readings: Article[] = await axios.get(
    ApiSettings.baseUri + "/Articles/GetArticles"
  );
  //TODO populate this with readings the user started previously
  const continueReadings: Article[] = [];

  return { readings, continueReadings };
}
