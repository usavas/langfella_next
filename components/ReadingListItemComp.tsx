import { useRouter } from "next/router";
import ReadingWAuthorAndLang from "../types/ReadingWAuthorsAndLanguage";

type Props = {
  reading: ReadingWAuthorAndLang;
};

function ReadingListItemComp(props: Props) {
  const { reading } = props;
  const router = useRouter();

  function handleRoute(event: any): void {
    router.push("readingcontent/" + reading.id);
  }

  return (
    <div
      className="bg-gray-200 px-2 py-2 rounded-md flex-shrink-0 w-40 cursor-pointer hover:bg-opacity-60"
      onClick={handleRoute}
    >
      <p className="text-base font-normal">{reading.title}</p>
      <p className="text-xs font-extralight line-clamp-2">
        {reading.contents[0]}
      </p>
      <span className="text-sm font-light mt-2">10 words</span>
      <span className="text-sm font-light block">10 unknown</span>
    </div>
  );
}

export default ReadingListItemComp;
