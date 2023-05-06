// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import HtmlPageResponse from "../../../types/api_types/HtmlPageResponse";

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      break;
  }
};

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  console.log({ reqbody: req.body });

  const htmlPage = req.body as HtmlPageResponse;

  console.log({ htmlPage });

  prisma.htmlPage
    .create({
      data: {
        title: htmlPage.title ?? "",
        headline: htmlPage.headline ?? "",
        contents: { createMany: { data: htmlPage.elements } },
        uri: htmlPage.pageUrl,
        language: { connect: { code: "en" } },
      },
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log({ err });
      res.status(400).json(err);
    });
}

export default handleRequest;
