import ReadingComp from "./ReadingComp";
import ReadingWAuthorAndLang from "../../../types/ReadingWAuthorsAndLanguage";
import prisma from "../../../lib/prisma";

export default async function Reading({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const reading: ReadingWAuthorAndLang | null = await getReadings(params.id);
  return <ReadingComp reading={reading}></ReadingComp>;
}

const getReadings = async (id: string) => {
  const reading = await prisma.reading.findUnique({
    where: { id: parseInt(id) },
    include: { authors: true, language: true },
  });

  return reading!;
};
