import prisma from "lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    const result = await prisma.word.findUnique({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json(result);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  const result = await prisma.word.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(result);
}
