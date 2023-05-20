import prisma from "lib/prisma";
import ReadingWContentAndLanguage from "types/HtmlPageWContentAndLanguage";
import HtmlReadingComp from "app/webPageReading/[id]/HtmlReadingComp";

type PropsTypes = {
  webPage: ReadingWContentAndLanguage;
};

export default async function ReadingType({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const webPage: ReadingWContentAndLanguage = await getHtmlReading(params.id);
  return <HtmlReadingComp webPage={webPage} />;
}

const getHtmlReading = async (id: string) => {
  const webPage: ReadingWContentAndLanguage | null =
    await prisma.htmlPage.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        contents: true,
        language: true,
      },
    });

  return webPage!;
};
