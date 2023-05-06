import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";
import HtmlReadingComp from "../../components/ReadingPageComponents/HtmlReadingComp";

type PropsTypes = {
  webPage: HtmlPageWContentAndLanguage;
};

const ReadingType: React.FC<PropsTypes> = ({ webPage }) => {
  return <HtmlReadingComp webPage={webPage} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const webPage: HtmlPageWContentAndLanguage | null =
    await prisma.htmlPage.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        contents: true,
        language: true,
      },
    });

  return { props: { webPage } };
};

export default ReadingType;
