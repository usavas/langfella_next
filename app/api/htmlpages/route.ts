import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import HtmlPageCreateInputs from "../../../types/api_types/HtmlPageCreateInputs";

export async function POST(request: Request) {
  const { htmlPage, source, languageCode } =
    (await request.json()) as HtmlPageCreateInputs;

  try {
    const result = await prisma.reading.create({
      data: {
        title: htmlPage.pageTitle ?? "No Title",
        source,
        contents: { createMany: { data: htmlPage.elements } },
        language: { connect: { code: languageCode } },
      },
    });
    return NextResponse.json(result);
  } catch (error: any) {
    console.log({ error });
    return new Response(error, { status: 500 });
  }
}
