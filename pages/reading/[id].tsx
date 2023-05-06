import ReadingComp from "../../components/ReadingPageComponents/ReadingComp";
import { GetServerSideProps } from "next";
import ReadingWAuthorAndLang from "../../types/ReadingWAuthorsAndLanguage";
import prisma from "../../lib/prisma";

type PropsTypes = {
  reading: ReadingWAuthorAndLang;
};

const ReadingType: React.FC<PropsTypes> = ({ reading }) => {
  return <ReadingComp reading={reading}></ReadingComp>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const reading = await prisma.reading.findUnique({
    where: { id: parseInt(id as string) },
  });

  return { props: { reading } };
};

export default ReadingType;
