export interface Article {
  id: string;
  languageCode: string;
  title: string;
  source: string;
  authors: Author[];
  chapters: Chapter[];
  wordCount: number;
  uniqueWordCount: number;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Chapter {
  id: number;
  title: string;
  contents: Content[];
}

export interface Content {
  id: number;
  tag: number;
  content: string;
}
