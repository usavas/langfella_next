// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

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
  //TODO handle request
  const readingBody = req.body;

  const response = await axios.post(
    "http://localhost:5000/readings",
    readingBody
  );

  const result = await response.data;
  res.status(200).json(result);
}

export default getWordTranslation;
