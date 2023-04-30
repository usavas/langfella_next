import { useRouter } from "next/router";
import ReadingType from "../types/ReadingType";

type Props = {
  reading: ReadingType;
};

function ReadingListItemComp(props: Props) {
  const { reading } = props;
  const router = useRouter();

  function handleRoute(event: any): void {
    router.push("readingcontent/" + reading.id);
  }

  return (
    <div
      className="bg-gray-200 px-2 py-2 rounded-md flex-shrink-0 w-40"
      onClick={handleRoute}
    >
      <p>{reading.title}</p>
      <p className="text-xs font-extralight line-clamp-2">{reading.text[0]}</p>
      <p className="text-xs font-light">10 words</p>
      <p className="text-xs font-light">10 unknown</p>
    </div>
  );
}

export default ReadingListItemComp;
