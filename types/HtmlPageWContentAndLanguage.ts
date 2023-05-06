import { HtmlContentItem, HtmlPage, Language } from "@prisma/client";

type HtmlPageWContentAndLanguage = HtmlPage & { language: Language } & {
  contents: HtmlContentItem[];
};

export default HtmlPageWContentAndLanguage;
