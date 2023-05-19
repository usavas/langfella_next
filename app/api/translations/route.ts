import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get("word");
  const source = searchParams.get("source");
  const target = searchParams.get("target");

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
  return NextResponse.json(result);
}
