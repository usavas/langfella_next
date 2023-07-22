import { CreateWord, Word } from "app/apitypes/word-types";
import axios from "axios";
import { NextResponse } from "next/server";
import ApiSettings from "../apisettings";

export async function GET(request: Request) {
  try {
    const words: Word[] = await axios.get(
      ApiSettings.baseUri + "/words/GetWords"
    );
    return NextResponse.json(words);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function POST(request: Request) {
  const word: CreateWord = (await request.json()) as CreateWord;

  try {
    const result = await axios.post(
      ApiSettings.baseUri + "/words/CreateWord",
      word
    );
    return NextResponse.json(result);
  } catch (error: any) {
    console.error({ error });
    return new Response(error, { status: 500 });
  }
}
