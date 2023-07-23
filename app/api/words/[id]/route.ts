import { instance } from "app/api/api";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    const result = await instance.get("/words/GetWordById/" + params.id);
    return NextResponse.json(result);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  const result = await instance.delete("/words/DeleteWord/" + params.id);
  return NextResponse.json(result);
}
