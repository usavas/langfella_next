import prisma from "../../../lib/prisma";
import HtmlPageWContentAndLanguage from "../../../types/HtmlPageWContentAndLanguage";
import HtmlReadingComp from "../../../app/webPageReading/[id]/HtmlReadingComp";

type PropsTypes = {
  webPage: HtmlPageWContentAndLanguage;
};

export default async function ReadingType({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const webPage: HtmlPageWContentAndLanguage = await getHtmlReading(params.id);
  return <HtmlReadingComp webPage={webPage} />;
}

export const getHtmlReading = async (id: string) => {
  const webPage: HtmlPageWContentAndLanguage | null =
    await prisma.htmlPage.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        contents: true,
        language: true,
      },
    });

  return webPage!;
};
