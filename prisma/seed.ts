import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const langs = await prisma.language.createMany({
    data: [
      { code: "en", name: "English" },
      { code: "es", name: "Spanish" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" },
      { code: "tr", name: "Turkish" },
    ],
  });

  console.log({ langs });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
