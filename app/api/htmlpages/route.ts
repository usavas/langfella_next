import { NextResponse } from "next/server";
import HtmlPageCreateInputs from "../../../types/api_types/HtmlPageCreateInputs";
import { Content } from "app/apitypes/articles/article-types";
import { CreateArticle } from "app/apitypes/articles/create-article-types";
import { instance } from "../api";

export async function POST(request: Request) {
  const { htmlPage, source, languageCode } =
    (await request.json()) as HtmlPageCreateInputs;

  try {
    const contents: Content[] = [];
    htmlPage.elements.map((el) => {
      contents.push({ content: el.content, tag: el.tag }); //TODO: convert tag to string in API
    });

    const articleToCreate: CreateArticle = {
      languageCode: languageCode, //TODO: convert languageId to language's short code in API
      chapters: [{ title: "", contents: contents }],
      authors: [],
      source: source,
      title: htmlPage.pageTitle ?? "No title",
    };

    const result = instance.post("/articles/CreateArticle", articleToCreate);

    return NextResponse.json(result);
  } catch (error: any) {
    console.log({ error });
    return new Response(error, { status: 500 });
  }
}
