export interface CreateArticle {
  languageId: number;
  title: string;
  source: string;
  authors: Author[];
  chapters: Chapter[];
}

export interface Author {
  firstName: string;
  lastName: string;
}

export interface Chapter {
  title: string;
  contents: Content[];
}

export interface Content {
  tag: number;
  content: string;
}
