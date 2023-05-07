// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import ReadingResponse from "../../../types/api_types/ReadingResponse";
import { Reading } from "@prisma/client";

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

  const reading = req.body as Reading;

  console.log({ reading });

  prisma.reading
    .create({
      data: reading,
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