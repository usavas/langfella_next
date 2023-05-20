import prisma from "lib/prisma";
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

  try {
    const result = await prisma.word.create({
      data: word,
    });
    return NextResponse.json(result);
  } catch (error: any) {
    console.error({ error });
    return new Response(error, { status: 500 });
  }
}
