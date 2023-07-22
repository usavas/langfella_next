import cheerio from "cheerio";

export type HtmlPage = {
  pageTitle: string;
  contents: HtmlContent[];
};

export type HtmlContent = {
  tag: string;
  content: string;
};

// use cheerio to load and get elements in web page.
const parseHtml = async (htmlContent: string): Promise<HtmlPage> => {
  const $ = cheerio.load(htmlContent);

  const title = $("title").text();
  const body = $("body")?.first();
  const article = $(body)?.find("article")?.first();
  const tags: string =
    "h1, h2, h3, h4, h5, h6, p, img, blockquote, ul, ol, table";

  let nodes: cheerio.Cheerio;
  if (article.length) {
    nodes = article.find(tags);
  } else {
    nodes = body.find(tags);
  }

  // const nodes = $(nodesSelector);

  const nodesResult: HtmlContent[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    const tag: string = $(element).prop("tagName").toLowerCase();
    let content: string = "";

    if (tag === "img") {
      content = $(element).prop("src");
      console.log("could not get src of image");
      console.log(element);
    } else if (tag === "ul" || tag === "ol") {
      //TODO handle ul and ol lists
      continue;
    } else if (tag === "table") {
      //TODO handle table
      continue;
    } else {
      content = $(element).text();
    }

    if (tag && content) {
      nodesResult.push({ tag, content });
    }
  }

  return { pageTitle: title, contents: nodesResult };
};

export default parseHtml;
