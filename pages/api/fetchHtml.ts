// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import ParsedHtmlPage from "../../types/api_types/ParsedHtmlPage";
import parseHtml, { HtmlPage } from "../../services/htmlParser";

const fetchHtml = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  const decodedUrl = decodeURIComponent(url as string);

  const pageContentResult = await fetch(decodedUrl);
  const pageContent = await pageContentResult.text();

  const parsed: HtmlPage = await parseHtml(pageContent);

  const result: ParsedHtmlPage = {
    pageTitle: parsed.pageTitle,
    headline: parsed.contents.find((c) => c.tag === "h1")?.content ?? "",
    elements: parsed.contents,
  };

  res.status(200).json(result);
};

export default fetchHtml;
