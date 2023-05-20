import { Author, ContentItem, Language, Reading } from "@prisma/client";

type ReadingWAuthorAndLang = Reading & {
  contents: ContentItem[];
  authors: Author[];
  language: Language;
};

export default ReadingWAuthorAndLang;
