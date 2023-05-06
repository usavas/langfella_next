import { HtmlContentItem, HtmlPage, Language } from "@prisma/client";

type HtmlPageWContentAndLanguage = HtmlPage & Language & HtmlContentItem;

export default HtmlPageWContentAndLanguage;
