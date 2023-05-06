import React from "react";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";

type PropTypes = {
  webPages: HtmlPageWContentAndLanguage[];
};

function ImportedWebPagesComp({ webPages }: PropTypes) {
  return (
    <div>
      {webPages.map((p) => (
        <p>{p.title}</p>
      ))}
    </div>
  );
}

export default ImportedWebPagesComp;
