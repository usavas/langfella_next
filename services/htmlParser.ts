import cheerio from "cheerio";
import { HtmlItemTag } from "@prisma/client";

export type HtmlPage = {
  pageTitle: string;
  contents: HtmlContent[];
};

export type HtmlContent = {
  tag: HtmlItemTag;
  content: string;
};

// use cheerio to load and get elements in web page.
const parseHtml = async (htmlContent: string): Promise<HtmlPage> => {
  const $ = cheerio.load(htmlContent);

  const title = $("title").text();

  const article = $("article");
  const articleSelector = article.length ? "article" : "";
  const nodesSelector = [
    articleSelector,
    "h1, h2, h3, h4, h5, h6, p, img, blockquote, ul, ol, table",
  ].join(" ");

  const nodesResult: HtmlContent[] = [];
  const nodes = $(nodesSelector);

  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    const tag: HtmlItemTag = $(element).prop("tagName").toLowerCase();
    let content: string = "";

    if (tag === "img") {
      content = $(element).prop("src");
    } else if (tag === "ul" || tag === "ol") {
      //TODO handle ul and ol lists
      continue;
    } else if (tag === "table") {
      //TODO handle table
      continue;
    } else {
      content = $(element).text();
    }

    nodesResult.push({ tag, content });
  }

  return { pageTitle: title, contents: nodesResult };
};

export default parseHtml;
