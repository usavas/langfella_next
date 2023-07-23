import React from "react";
import ReadingListItemComp from "./ReadingListItemComp";
import { Article } from "app/apitypes/articles/article-types";

type PropTypes = {
  readings: Article[];
};

function ReadingListComp({ readings }: PropTypes) {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-none scrollbar-hide">
      {readings.map((p) => (
        <ReadingListItemComp key={p.id} reading={p} />
      ))}
    </div>
  );
}

export default ReadingListComp;
