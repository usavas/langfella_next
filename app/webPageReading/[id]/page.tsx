import prisma from "lib/prisma";
import ReadingWAuthorsAndLanguage from "types/ReadingWAuthorsAndLanguage";
import HtmlReadingComp from "app/webPageReading/[id]/HtmlReadingComp";

type PropsTypes = {
  webPage: ReadingWAuthorsAndLanguage;
};

export default async function ReadingType({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const webPage: ReadingWAuthorsAndLanguage = await getHtmlReading(params.id);
  return <HtmlReadingComp webPage={webPage} />;
}

const getHtmlReading = async (id: string) => {
  const webPage: ReadingWAuthorsAndLanguage | null =
    await prisma.reading.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        contents: true,
        language: true,
        authors: true,
      },
    });

  return webPage!;
};
