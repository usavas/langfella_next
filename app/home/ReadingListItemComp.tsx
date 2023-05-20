import ReadingWAuthorAndLang from "../../types/ReadingWAuthorsAndLanguage";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

type Props = {
  reading: ReadingWAuthorAndLang;
};

function ReadingListItemComp(props: Props) {
  const { reading } = props;

  return (
    <div className="card">
      <Link href={`reading/${reading.id}`} className="hover:underline">
        <p className="text-base font-normal">{reading.title}</p>
      </Link>
      <p className="text-xs font-extralight line-clamp-2">
        {reading.contents[0]}
      </p>
      <div className="flex flex-row mt-2 justify-between items-end">
        <div>
          <span className="text-sm font-light ">10 words</span>
          <span className="text-sm font-light block">10 unknown</span>
        </div>
        <DeleteButton deleteApi={`api/readings/${reading.id}`} />
      </div>
    </div>
  );
}

export default ReadingListItemComp;
