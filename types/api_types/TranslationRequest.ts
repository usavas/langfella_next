type TranslationRequest = {
  q: string;
  /**
   * 2-letter language code "en", "es", "tr"
   * "auto" for auto detection
   */
  source: string;
  /**
   * 2-letter language code "en", "es", "tr"
   */
  target: string;
};
