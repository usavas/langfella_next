import { Article } from "app/apitypes/articles/article-types";
import ChapterComponent from "../[id]/ChapterComp";

type PropTypes = {
  reading: Article;
};

const Details = (props: PropTypes) => {
  // reading details, statistics, chapters, etc.
  return (
    <div>
      {props.reading.chapters.map((c) => (
        <ChapterComponent chapter={props.reading} />
      ))}
    </div>
  );
};

export default Details;
