import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

type PropTypes = {
  webPage: HtmlPageWContentAndLanguage;
};

function WebPageListItemComp({ webPage }: PropTypes) {
  return (
    <div className="card">
      <Link href={`webPageReading/${webPage.id}`} className="hover:underline">
        <p className="line-clamp-2">{webPage.pageTitle ?? webPage.headline}</p>
      </Link>
      <p className="text-xs font-extralight line-clamp-2 mt-2">
        {webPage.contents.filter((c) => c.tag === "p")[0].content}
      </p>
      <div className="flex flex-row mt-2 justify-between items-end">
        <div>
          <span className="text-sm font-light ">10 words</span>
          <span className="text-sm font-light block">10 unknown</span>
        </div>
        <DeleteButton deleteApi={`api/htmlpages/${webPage.id}`} />
      </div>
    </div>
  );
}

export default WebPageListItemComp;
