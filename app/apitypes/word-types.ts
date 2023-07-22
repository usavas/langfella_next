export interface CreateWord {
  text: string;
  sourceLanguageId: number;
  targetLanguageId: number;
  translations: string[];
  exampleSentence: string;
}

export interface Word {
  text: string;
  sourceLanguageId: number;
  targetLanguageId: number;
  articleId: string;
  translations: string[];
  exampleSentences: string[];
}
