import prisma from "../../../lib/prisma";
import { Prisma, Word } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const words: Word[] = await prisma.word.findMany();
    return NextResponse.json(words);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function POST(request: Request) {
  const word = (await request.json()) as Prisma.WordCreateArgs["data"];

  await prisma.word
    .create({
      data: word,
    })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      console.error({ err });
      return new Response(err, { status: 500 });
    });
}
