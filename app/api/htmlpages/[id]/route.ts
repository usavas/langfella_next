import { instance } from "app/api/api";

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await instance.delete("/articles/deleteArticle/" + params.id);
    return new Response("Html Reading successfully deleted", { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(error, { status: 500 });
  }
}
