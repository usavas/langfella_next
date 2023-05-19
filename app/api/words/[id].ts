import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { id }: { id: number }) {
  await prisma.word
    .findUnique({ where: { id } })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      return new Response(err, { status: 500 });
    });
}

export async function DELETE(request: Request, { id }: { id: number }) {
  await prisma.word
    .delete({ where: { id } })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      console.log({ err });
      return new Response(err, { status: 500 });
    });
}
