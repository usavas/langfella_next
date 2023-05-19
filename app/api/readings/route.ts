// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma";
import { Reading } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const reading = (await request.json()) as Reading;

  prisma.reading
    .create({
      data: reading,
    })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      console.log({ err });
      return new Response(err, { status: 500 });
    });
}
