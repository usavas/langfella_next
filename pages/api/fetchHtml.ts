// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer, { ElementHandle, Page } from "puppeteer";
import HtmlPageResponse from "../../types/api_types/HtmlPageResponse";
import { HtmlItemType } from "@prisma/client";

const fetchHtml = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  const decodedUrl = decodeURIComponent(url as string);
  console.log({ decodedUrl });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url as string);
  } catch (error) {
    throw error;
  }

  const pageTitle = await page.title();
  const pageUrl = page.url();

  let elements: ElementHandle<Element>[];
  const article = await page.$$("article");
  if (article != null) {
    elements = await page.$$(
      "article h1,h2,h3,h4,h5,h6,p,img,blockquote" //,ul,table"
    );
  } else {
    elements = await page.$$(
      "h1,h2,h3,h4,h5,h6,p,img,blockquote" //,ul,table"
    );
  }

  const contentArray: { type: HtmlItemType; content: string }[] = [];
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
      const handle = await element.getProperty("innerHTML");
      content = await handle.jsonValue();
    }

    contentArray.push({
      type: tagName.toLowerCase() as HtmlItemType,
      content: content ?? "",
    });
  }

  const result: HtmlPageResponse = {
    pageUrl: pageUrl,
    pageTitle: pageTitle,
    headline: contentArray.find((c) => c.type === "h1")?.content ?? "",
    elements: contentArray,
  };

  await browser.close();

  res.status(200).json(result);
};

export default fetchHtml;
