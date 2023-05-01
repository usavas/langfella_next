// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const fetchHtml = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  const response = await axios.get(url as string);

  const result = await response.data;
  res.status(200).json(result);
};

export default fetchHtml;
