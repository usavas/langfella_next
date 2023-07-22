import ApiSettings from "app/api/apisettings";
import axios from "axios";

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await axios.delete(
      ApiSettings.baseUri + "/articles/deleteArticle/" + params.id
    );
    return new Response(null, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(error, { status: 500 });
  }
}
