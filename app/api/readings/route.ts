// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import { Reading } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const reading = (await request.json()) as Reading;

  try {
    const result = prisma.reading.create({
      data: reading,
    });
    return NextResponse.json(result);
  } catch (error: any) {
    console.log({ error });
    return new Response(error, { status: 500 });
  }
}
