import HtmlReadingComp from "app/webPageReading/[id]/WebPageReadingComp";
import axios from "axios";
import ApiSettings from "app/api/apisettings";
import { Article } from "app/apitypes/articles/article-types";

type PropsTypes = {
  webPage: Article;
};

export default async function ReadingType({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const idInt = parseInt(params.id);
  const webPage: Article = await getHtmlReading(idInt);
  return <HtmlReadingComp webPage={webPage} />;
}

const getHtmlReading = async (id: number) => {
  const webPage: Article | null = await axios.get(
    ApiSettings.baseUri + "/articles/GetArticleByid/" + id
  );

  return webPage!;
};
