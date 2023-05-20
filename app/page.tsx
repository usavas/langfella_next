import prisma from "lib/prisma";
import HomePage from "./home-page";

export default async function Page() {
  const readingContents = await getReadingContents();
  return (
    <HomePage
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

  return { readings, importedWebPages };
}
