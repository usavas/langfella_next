import React from "react";
import ReadingWAuthorsAndLanguage from "types/ReadingWAuthorsAndLanguage";
import WebPageListItemComp from "./WebPageListItemComp";

type PropTypes = {
  readings: ReadingWAuthorsAndLanguage[];
};

function ReadingsComponent({ readings }: PropTypes) {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-none scrollbar-hide">
      {readings.map((p) => (
        <WebPageListItemComp key={p.id} webPage={p} />
      ))}
    </div>
  );
}

export default ReadingsComponent;
