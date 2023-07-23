import Link from "next/link";
import DeleteButton from "../components/DeleteButton";
import { Article } from "app/apitypes/articles/article-types";

type PropTypes = {
  reading: Article;
};

function ReadingListItemComp({ reading: reading }: PropTypes) {
  return (
    <div className="card">
      <Link href={`reading/${reading.id}`} className="hover:underline">
        <p className="line-clamp-2">{reading.title}</p>
      </Link>
      <p className="text-xs font-extralight line-clamp-2 mt-2">
        {reading.chapters[0].contents.filter((c) => c.tag === 6)[0].content}
      </p>
      <div className="flex flex-row mt-2 justify-between items-end">
        <div>
          <span className="text-sm font-light ">{reading.wordCount} words</span>
          <span className="text-sm font-light block">
            {reading.uniqueWordCount} unique words
          </span>
          <span className="text-sm font-light block">
            {reading.chapters.length} chapters
          </span>
        </div>
        <DeleteButton deleteApi={`api/htmlpages/${reading.id}`} />
      </div>
    </div>
  );
}

export default ReadingListItemComp;
