import { Reading } from "@prisma/client";

type ReadingWAuthorAndLang = Reading & {
  author: { firstName: string; lastName: string };
  language: { code: string; name: string };
};

export default ReadingWAuthorAndLang;
