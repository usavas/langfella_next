// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import axios from "axios";
import { CreateArticle } from "app/apitypes/articles/create-article-types";

export async function POST(request: Request) {
  const articleToCreate = (await request.json()) as CreateArticle;

  try {
    const result = (
      await axios.post("/articles/CreateArticle", articleToCreate)
    ).data;

    return NextResponse.json(result);
  } catch (error: any) {
    console.log({ error });
    return new Response(error, { status: 500 });
  }
}
