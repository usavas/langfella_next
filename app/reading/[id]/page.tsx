import ReadingComp from "app/reading/[id]/ReadingComp";
import { Article } from "app/apitypes/articles/article-types";
import { instance } from "app/api/api";

export default async function ReadingType({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const webPage: Article = await getHtmlReading(params.id);
  return <ReadingComp reading={webPage} />;
}

const getHtmlReading = async (id: string) => {
  const webPage: Article = (
    await instance.get("/Articles/GetArticleById/" + id)
  ).data;

  return webPage;
};
