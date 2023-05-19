import ParsedHtmlPage from "../../../types/api_types/ParsedHtmlPage";
import parseHtml, { HtmlPage } from "../../../services/htmlParser";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const decodedUrl = decodeURIComponent(url as string);

  const pageContentResult = await fetch(decodedUrl);
  const pageContent = await pageContentResult.text();

  const parsed: HtmlPage = await parseHtml(pageContent);

  const result: ParsedHtmlPage = {
    pageTitle: parsed.pageTitle,
    headline: parsed.contents.find((c) => c.tag === "h1")?.content ?? "",
    elements: parsed.contents,
  };

  return NextResponse.json(result);
}
