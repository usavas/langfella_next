import ReadingType from "../types/ReadingType";

export function getReadingById(id: string): ReadingType {
  return readingList.find((r) => r.id === id)!;
}

export function getAllReadings(): ReadingType[] {
  return readingList;
}

const readingList: ReadingType[] = [
  {
    id: "1",
    title: "Test Title",
    text: [
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, at, id soluta autem ipsam dolore modi tempora, consectetur numquam eos nostrum nihil dolores deleniti voluptatibus suscipit explicabo fugit ea distinctio quam quos cumque!`,
      `Molestiae vitae delectus, cumque illum odio harum deserunt unde maiores veniam nisi iusto minima facere? Iste optio inventore aliquid delectus repellat! Fugiat, temporibus illo quia, perferendis laborum recusandae asperiores explicabo, culpa veniam ut architecto soluta fugit natus impedit! Numquam voluptas obcaecati consequatur explicabo dicta vitae, expedita ipsum dolorum aspernatur iusto distinctio quae enim, harum inventore veritatis excepturi saepe earum soluta facilis modi maiores, sequi tempora tempore. Ipsam!`,
    ],
  },
  {
    id: "2",
    title: "Test Title 2",
    text: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium at sit sequi possimus vel? Pariatur, consequuntur, velit modi veritatis error quae eum aperiam vel fugiat enim ipsa eveniet accusamus ullam voluptate beatae nihil distinctio in nobis repellendus dignissimos eius soluta assumenda, eligendi placeat.",
      "Eligendi sequi aliquam magni iusto quod. Sunt soluta pariatur ducimus inventore officiis ea veniam error, quod mollitia placeat animi porro libero. Doloribus, nisi minima dolores harum facilis voluptates, in possimus eos debitis vel veritatis similique itaque, iusto impedit veniam. Consequatur voluptatem obcaecati quia dolore et fugit!",
      "Accusamus culpa consequatur atque quo eos harum ratione deleniti cum.",
    ],
  },
  {
    id: "3",
    title: "Test 3",
    text: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo, sit unde labore deleniti iure placeat consequuntur aperiam recusandae veniam optio animi molestias non culpa quis suscipit vitae fugiat necessitatibus tempore dolores mollitia libero quos.",
      "Aliquid odit suscipit sunt, alias nobis libero, a pariatur cum deleniti rerum ducimus nihil at distinctio tempora iste veritatis? Reprehenderit, commodi ea qui officia nihil neque assumenda a.",
      "Aspernatur quaerat harum amet repellendus a suscipit nam quo quod tenetur tempora provident explicabo quas odio quam nisi, aliquid numquam inventore. Cupiditate quos vero totam alias veniam dicta rem! Dolore nihil quam perspiciatis numquam repellat in tempore.",
    ],
  },
  {
    id: "4",
    title: "Test 4",
    text: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatem. Rerum, cumque magni sapiente voluptatibus corporis, voluptatem qui architecto quasi repellendus iusto maxime expedita blanditiis error accusamus impedit odio a aspernatur quae. Ex possimus hic quibusdam numquam nesciunt provident pariatur eaque atque, laudantium delectus exercitationem quas perferendis alias soluta qui vitae error architecto, distinctio nisi reprehenderit sed, accusamus voluptas. Rerum non quam sit culpa excepturi ab molestiae, porro, impedit voluptates adipisci aspernatur similique itaque provident at enim perferendis, tenetur id.",
    ],
  },
  {
    id: "5",
    title: "Test 5",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dignissimos perferendis repudiandae odit vero at enim nulla distinctio sed, sint eligendi a iste natus nemo aliquid laudantium rerum nesciunt ducimus. Commodi architecto quisquam aliquid quos soluta voluptates, quo necessitatibus quaerat?",
    ],
  },
  {
    id: "6",
    title: "Test 6",
    text: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quia dolores, porro aspernatur ab ipsum nam, fuga laudantium voluptas autem et ullam temporibus dolorum. Id voluptatibus itaque eligendi nobis voluptate consequuntur optio exercitationem nam voluptates maiores nesciunt, quae corporis ducimus esse, dolorum vel eveniet. Eius dolor fuga optio, deleniti quaerat, quam culpa perspiciatis et magni sint similique repellat, ipsum ullam.",
    ],
  },
  {
    id: "7",
    title: "Test 7",
    text: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex sunt laboriosam quae accusantium, dolor laudantium commodi suscipit et inventore?",
    ],
  },
];
