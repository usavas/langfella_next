import { PrismaClient } from "@prisma/client";
import { data } from "cheerio/lib/api/attributes";
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

  await prisma.reading.create({
    data: {
      title: "Test Title",
      languageId: 1,
      contents: {
        create: [
          { tag: "h1", content: "Content Item 1" },
          { tag: "p", content: "Content Item 2" },
        ],
      },
    },
  });

  await prisma.reading.create({
    data: {
      title: "Test Title 2",
      languageId: 1,
      contents: {
        create: [
          { tag: "h1", content: "Content Item 3" },
          { tag: "p", content: "Content Item 4" },
        ],
      },
    },
  });

  await prisma.reading.create({
    data: {
      title: "Test Title 3",
      languageId: 1,
      contents: {
        create: [
          { tag: "h1", content: "Content Item 5" },
          { tag: "p", content: "Content Item 6" },
        ],
      },
    },
  });
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
