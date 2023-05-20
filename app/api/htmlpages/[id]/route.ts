import prisma from "lib/prisma";

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await prisma.reading.delete({ where: { id: parseInt(params.id) } });
    return new Response("Html Reading successfully created", { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(error, { status: 500 });
  }
}
