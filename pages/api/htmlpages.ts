// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import HtmlPage from "../../types/api_types/HtmlPageResponse";
import { Reading } from "@prisma/client";

const getWordTranslation = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    default:
      break;
  }
};

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const htmlPage = req.body as HtmlPage;

  const savedPage = await prisma.reading.create({
    data: {
      title: htmlPage.headLine ?? htmlPage.title ?? "",
      contents: [""],
      source: htmlPage.pageUrl,
      language: { connect: { id: 1 } },
    },
  });

  res.status(200).json(savedPage);
}

export default getWordTranslation;
