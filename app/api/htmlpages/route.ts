import { NextResponse } from "next/server";
import HtmlPageCreateInputs from "../../../types/api_types/HtmlPageCreateInputs";
import axios from "axios";
import ApiSettings from "../apisettings";
import { Content, CreateArticle } from "app/apitypes/article-types";

export async function POST(request: Request) {
  const { htmlPage, source, languageCode } =
    (await request.json()) as HtmlPageCreateInputs;

  try {
    const contents: Content[] = [];
    htmlPage.elements.map((el) => {
      contents.push({ content: el.content, tag: el.tag }); //TODO: convert tag to string in API
    });

    const articleToCreate: CreateArticle = {
      languageId: languageCode, //TODO: convert languageId to language's short code in API
      chapters: [{ title: "", contents: contents }],
      authors: [],
      source: source,
      title: htmlPage.pageTitle ?? "No title",
    };

    const result = axios.post(
      ApiSettings.baseUri + "/articles/CreateArticle",
      articleToCreate
    );

    return NextResponse.json(result);
  } catch (error: any) {
    console.log({ error });
    return new Response(error, { status: 500 });
  }
}
