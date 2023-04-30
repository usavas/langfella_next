// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const getWordTranslation = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(req.query);
  const { word, source, target } = req.query;

  const translationReqBody: TranslationRequest = {
    q: word as string,
    source: source as string,
    target: target as string,
  };

  const response = await axios.post(
    "http://localhost:6000/translate",
    translationReqBody
  );

  const result: TranslationResponse = await response.data;
  res.status(200).json(result);
};

export default getWordTranslation;
