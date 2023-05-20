import prisma from "lib/prisma";
import HomePage from "./home-page";
import HtmlPageWContentAndLanguage from "types/HtmlPageWContentAndLanguage";
import ReadingWAuthorAndLang from "types/ReadingWAuthorsAndLanguage";

export default async function Page() {
  const readingContents = await getReadingContents();
  return (
    <HomePage
      continueReadings={readingContents.continueReadings}
      readings={readingContents.readings}
      importedWebPages={readingContents.importedWebPages}
    />
  );
}

async function getReadingContents() {
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
  //TODO populate this with readings the user started previously
  const continueReadings: (
    | HtmlPageWContentAndLanguage
    | ReadingWAuthorAndLang
  )[] = [];

  return { readings, importedWebPages, continueReadings };
}
