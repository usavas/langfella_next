import React from "react";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";
import WebPageListItemComp from "./WebPageListItemComp";

type PropTypes = {
  webPages: HtmlPageWContentAndLanguage[];
};

function ImportedWebPagesComp({ webPages }: PropTypes) {
  return (
    <div>
      {webPages.map((p) => (
        <WebPageListItemComp key={p.id} webPage={p} />
      ))}
    </div>
  );
}

export default ImportedWebPagesComp;
