import ReadingWContentAndLanguage from "types/ReadingWAuthorsAndLanguage";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

type PropTypes = {
  webPage: ReadingWContentAndLanguage;
};

function WebPageListItemComp({ webPage: reading }: PropTypes) {
  return (
    <div className="card">
      <Link href={`webPageReading/${reading.id}`} className="hover:underline">
        <p className="line-clamp-2">{reading.title}</p>
      </Link>
      <p className="text-xs font-extralight line-clamp-2 mt-2">
        {reading.contents.filter((c) => c.tag === "p")[0].content}
      </p>
      <div className="flex flex-row mt-2 justify-between items-end">
        <div>
          <span className="text-sm font-light ">10 words</span>
          <span className="text-sm font-light block">10 unknown</span>
        </div>
        <DeleteButton deleteApi={`api/htmlpages/${reading.id}`} />
      </div>
    </div>
  );
}

export default WebPageListItemComp;
