import React from "react";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";
import WebPageListItemComp from "./WebPageListItemComp";

type PropTypes = {
  webPages: HtmlPageWContentAndLanguage[];
};

function ImportedWebPagesComp({ webPages }: PropTypes) {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-none scrollbar-hide">
      {webPages.map((p) => (
        <WebPageListItemComp key={p.id} webPage={p} />
      ))}
    </div>
  );
}

export default ImportedWebPagesComp;
