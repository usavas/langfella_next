import { HtmlItemType } from "@prisma/client";

type HtmlPage = {
  pageUrl: string;
  /**
   * page title (in the address bar)
   */
  title?: string;
  /**
   * first h1 in the page, news title
   */
  headline?: string;
  /**
   * page elements such as img, h1, h2, p, blockquote
   * dump html content of ul, table and non-standard text nodes
   */
  elements: {
    /**
     * from prisma, set of html elements (h1-h6, p, blockquote)
     */
    type: HtmlItemType;
    /**
     * text content of the html element
     * src for image,
     * html dump for other elems such as ul, table etc.
     */
    content: string;
  }[];
};

export default HtmlPage;
