import ReadingWAuthorAndLang from "../types/ReadingWAuthorsAndLanguage";
import Link from "next/link";

type Props = {
  reading: ReadingWAuthorAndLang;
};

function ReadingListItemComp(props: Props) {
  const { reading } = props;

  return (
    <Link className="card" href={`reading/${reading.id}`}>
      <p className="text-base font-normal">{reading.title}</p>
      <p className="text-xs font-extralight line-clamp-2">
        {reading.contents[0]}
      </p>
      <span className="text-sm font-light mt-2">10 words</span>
      <span className="text-sm font-light block">10 unknown</span>
    </Link>
  );
}

export default ReadingListItemComp;
