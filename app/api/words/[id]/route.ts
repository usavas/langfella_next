import ApiSettings from "app/api/apisettings";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    const result = axios.get(
      ApiSettings.baseUri + "/words/GetWordById/" + params.id
    );
    return NextResponse.json(result);
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  const result = await axios.delete(
    ApiSettings.baseUri + "/words/DeleteWord/" + params.id
  );
  return NextResponse.json(result);
}
