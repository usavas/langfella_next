import prisma from "lib/prisma";
import HomePage from "./home-page";
import ReadingWAuthorAndLang from "types/ReadingWAuthorsAndLanguage";

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
  const readings = await prisma.reading.findMany({
    include: {
      contents: true,
      authors: true,
      language: true,
    },
  });
  //TODO populate this with readings the user started previously
  const continueReadings: ReadingWAuthorAndLang[] = [];

  return { readings, continueReadings };
}
