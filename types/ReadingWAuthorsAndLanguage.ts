import { Reading } from "@prisma/client";

type ReadingWAuthorAndLang = Reading & {
  authors: { firstName: string; lastName: string }[];
  language: { code: string; name: string };
};

export default ReadingWAuthorAndLang;
