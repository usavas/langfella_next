import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import HtmlPageCreateInputs from "../../../types/api_types/HtmlPageCreateInputs";

export async function POST(request: Request) {
  const { htmlPage, source, languageCode } =
    (await request.json()) as HtmlPageCreateInputs;

  await prisma.htmlPage
    .create({
      data: {
        headline: htmlPage.headline ?? "",
        pageTitle: htmlPage.pageTitle ?? "",
        uri: source,
        contents: { createMany: { data: htmlPage.elements } },
        language: { connect: { code: languageCode } },
      },
    })
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((err) => {
      console.log({ err });
      return new Response(err, { status: 500 });
    });
}
