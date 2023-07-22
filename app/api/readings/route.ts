// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { CreateArticle } from "app/apitypes/article-types";
import axios from "axios";
import ApiSettings from "../apisettings";

export async function POST(request: Request) {
  const articleToCreate = (await request.json()) as CreateArticle;

  try {
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
