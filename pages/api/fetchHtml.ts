// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer, { ElementHandle, Page } from "puppeteer";

const fetchHtml = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url as string);

  const pageTitle = await page.title();
  const pageUrl = page.url();

  let elements: ElementHandle<Element>[];
  const article = await page.$$("article");
  if (article != null) {
    elements = await page.$$(
      "article h1,h2,h3,h4,h5,h6,p,img,blockquote,ul,table"
    );
  } else {
    elements = await page.$$("h1,h2,h3,h4,h5,h6,p,img,blockquote,ul,table");
  }

  const contentArray = [];
  for (let element of elements) {
    const tagName = await element.evaluate((node) => node.tagName);
    let content: string | null = "";

    const textNodes = /H1|H2|H3|H4|H5|H6|P|BLOCKQUOTE/i;

    if (tagName === "IMG") {
      const src = await element.evaluate((node) => node.getAttribute("src"));
      content = src;
    } else if (textNodes.test(tagName)) {
      content = await element.evaluate((node) => node.textContent);
    } else {
      content = await element
        .getProperty("innerHTML")
        .then((property) => property.jsonValue());
    }

    contentArray.push({
      type: tagName,
      content: content ?? "",
    });
  }

  const result: HtmlPage = {
    pageUrl: pageUrl,
    title: pageTitle,
    headLine: contentArray.find((c) => c.type === "H1")?.content ?? undefined,
    elements: contentArray,
  };

  console.log(result);

  await browser.close();
  res.status(200).send(result);
};

export default fetchHtml;
