import { Article } from "app/apitypes/articles/article-types";
import ReadingComp from "./ReadingComp";
import axios from "axios";
import ApiSettings from "app/api/apisettings";

export default async function Reading({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const reading: Article | null = await getReadings(params.id);
  return <ReadingComp reading={reading}></ReadingComp>;
}

const getReadings = async (id: string): Promise<Article> => {
  const reading: Article = await axios.get(
    ApiSettings.baseUri + "/articles/GetArticleById/" + id
  );
  return reading!;
};
