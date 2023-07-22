import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  try {
    // act like you have user's preference
    const userPreference = "dark";
    if (userPreference === "dark") {
      return NextResponse.json("dark", { status: 200 });
    }
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: any }) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get("theme");
  try {
    // act like you have user's preference
    const userPreference = "dark";
    if (userPreference === "dark") {
      return NextResponse.json("dark", { status: 200 });
    }
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
