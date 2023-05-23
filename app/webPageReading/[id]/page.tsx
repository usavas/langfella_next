import prisma from "lib/prisma";
import ReadingWAuthorsAndLanguage from "types/ReadingWAuthorsAndLanguage";
import HtmlReadingComp from "app/webPageReading/[id]/WebPageReadingComp";
import DefaultUser from "fakedata/user";

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
  const idInt = parseInt(params.id);
  const webPage: ReadingWAuthorsAndLanguage = await getHtmlReading(idInt);
  return <HtmlReadingComp webPage={webPage} />;
}

const getHtmlReading = async (id: number) => {
  // check if there is a userReading with this readingId
  const userReading = await prisma.userReading.findFirst({
    where: { readingId: id },
  });

  // if user does not have this reading in their library, then add it
  if (!userReading) {
    const result = await prisma.userReading.create({
      data: {
        readingId: id,
        userId: DefaultUser.id,
      },
    });
  }

  const webPage: ReadingWAuthorsAndLanguage | null =
    await prisma.reading.findUnique({
      where: { id: id },
      include: {
        contents: true,
        language: true,
        authors: true,
      },
    });

  return webPage!;
};
