import { useRouter } from "next/router";
import ReadingWAuthorAndLang from "../../types/ReadingWAuthorsAndLanguage";

type Props = {
  reading: ReadingWAuthorAndLang;
};

function ReadingListItemComp(props: Props) {
  const { reading } = props;
  const router = useRouter();

  function handleRoute(event: any): void {
    router.push("reading/" + reading.id);
  }

  return (
    <div className="card" onClick={handleRoute}>
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
