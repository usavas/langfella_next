import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  await prisma.word
    .findUnique({ where: { id: parseInt(params.id) } })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      return new Response(err, { status: 500 });
    });
}

export async function DELETE(request: Request, { params }: { params: any }) {
  const result = await prisma.word.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(result);
}
