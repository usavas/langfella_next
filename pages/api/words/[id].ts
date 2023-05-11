// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const idVal = parseInt(id as string);
  console.log({ parsedId: id });

  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res, idVal);
      break;

    case "DELETE":
      await handleDeleteRequest(req, res, idVal);
      break;
    default:
      break;
  }
};

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse,
  id: number
) {
  await prisma.word
    .findUnique({ where: { id } })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log({ err });
      res.status(400).json(err);
    });
}

async function handleDeleteRequest(
  req: NextApiRequest,
  res: NextApiResponse,
  id: number
) {
  await prisma.word
    .delete({ where: { id } })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log({ err });
      res.status(400).json(err);
    });
}

export default handleRequest;
