import { CreateWord, Word } from "app/apitypes/word-types";
import { NextResponse } from "next/server";
import { instance } from "../api";

export async function GET(request: Request) {
  try {
    const words: Word[] = (await instance.get("/words/GetWords")).data;
    return NextResponse.json(words);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function POST(request: Request) {
  const word: CreateWord = (await request.json()) as CreateWord;

  try {
    const result = (await instance.post("/words/CreateWord", word)).data;
    return NextResponse.json(result);
  } catch (error: any) {
    console.error({ error });
    return new Response(error, { status: 500 });
  }
}
