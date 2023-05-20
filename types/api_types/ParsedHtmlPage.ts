import { HtmlItemTag } from "@prisma/client";

type ParsedHtmlPage = {
  /**
   * page title (in the address bar)
   */
  pageTitle?: string;
  /**
   * page elements such as img, h1, h2, p, blockquote
   * dump html content of ul, table and non-standard text nodes
   */
  elements: {
    /**
     * from prisma, set of html elements (h1-h6, p, blockquote)
     */
    tag: HtmlItemTag;
    /**
     * text content of the html element
     * src for image,
     * html dump for other elems such as ul, table etc.
     */
    content: string;
  }[];
};

export default ParsedHtmlPage;
