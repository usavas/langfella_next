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

  const readings = await prisma.reading.createMany({
    data: [
      {
        title: "Test Title",
        contents: [
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, at, id soluta autem ipsam dolore modi tempora, consectetur numquam eos nostrum nihil dolores deleniti voluptatibus suscipit explicabo fugit ea distinctio quam quos cumque!`,
          `Molestiae vitae delectus, cumque illum odio harum deserunt unde maiores veniam nisi iusto minima facere? Iste optio inventore aliquid delectus repellat! Fugiat, temporibus illo quia, perferendis laborum recusandae asperiores explicabo, culpa veniam ut architecto soluta fugit natus impedit! Numquam voluptas obcaecati consequatur explicabo dicta vitae, expedita ipsum dolorum aspernatur iusto distinctio quae enim, harum inventore veritatis excepturi saepe earum soluta facilis modi maiores, sequi tempora tempore. Ipsam!`,
        ],
        languageId: 1,
      },
      {
        title: "Test 2",
        contents: [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium at sit sequi possimus vel? Pariatur, consequuntur, velit modi veritatis error quae eum aperiam vel fugiat enim ipsa eveniet accusamus ullam voluptate beatae nihil distinctio in nobis repellendus dignissimos eius soluta assumenda, eligendi placeat.",
          "Eligendi sequi aliquam magni iusto quod. Sunt soluta pariatur ducimus inventore officiis ea veniam error, quod mollitia placeat animi porro libero. Doloribus, nisi minima dolores harum facilis voluptates, in possimus eos debitis vel veritatis similique itaque, iusto impedit veniam. Consequatur voluptatem obcaecati quia dolore et fugit!",
          "Accusamus culpa consequatur atque quo eos harum ratione deleniti cum.",
        ],
        languageId: 1,
      },
      {
        title: "This Might Have Been a Long Title",
        contents: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dignissimos perferendis repudiandae odit vero at enim nulla distinctio sed, sint eligendi a iste natus nemo aliquid laudantium rerum nesciunt ducimus. Commodi architecto quisquam aliquid quos soluta voluptates, quo necessitatibus quaerat?",
        ],
        languageId: 1,
      },
    ],
  });

  console.log({ langs, readings });
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
