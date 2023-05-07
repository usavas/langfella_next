import React from "react";
import HtmlPageWContentAndLanguage from "../../types/HtmlPageWContentAndLanguage";
import { useRouter } from "next/router";

type PropTypes = {
  webPage: HtmlPageWContentAndLanguage;
};

function WebPageListItemComp({ webPage }: PropTypes) {
  const router = useRouter();

  return (
    <div className="card" onClick={handleClick}>
      <p className="line-clamp-2">{webPage.pageTitle ?? webPage.headline}</p>
      <p className="text-xs font-extralight line-clamp-2 mt-2">
        {webPage.contents.filter((c) => c.tag === "p")[0].content}
      </p>
      <span className="text-sm font-light mt-2">10 words</span>
      <span className="text-sm font-light block">10 unknown</span>
    </div>
  );

  function handleClick(e: any) {
    router.push("webPageReading/" + webPage.id);
  }
}

export default WebPageListItemComp;
