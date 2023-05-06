type HtmlPage = {
  pageUrl: string;
  /**
   * page title (in the address bar)
   */
  title?: string;
  /**
   * first h1 in the page, news title
   */
  headLine?: string;
  /**
   * page elements such as img, h1, h2, p, blockquote
   * dump html content of ul, table and non-standard text nodes
   */
  elements: {
    type: string;
    /**
     * text content for h1-h6, p, blockquote
     * src for image,
     * html dump for other elems such as ul, table etc.
     */
    content: string;
  }[];
};

export default HtmlPage;
