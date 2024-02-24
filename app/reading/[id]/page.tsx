import ChapterComp from "app/reading/[id]/ChapterComp";
import { Article } from "app/apitypes/articles/article-types";
import { instance } from "app/api/api";
import Details from "../details/page";

export default async function Reading({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const reading: Article = await getHtmlReading(params.id);

  if (reading.chapters.length > 0) {
    return <Details reading={reading} />;
  } else {
    return <ChapterComp chapter={reading.chapters[0]}  languageCode=""/>;
  }
}

const getHtmlReading = async (id: string) => {
  const webPage: Article = (
    await instance.get("/Articles/GetArticleById/" + id)
  ).data;

  return webPage;
};
