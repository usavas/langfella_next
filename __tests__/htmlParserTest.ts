import bbchtmlcontent from "../__test_fake_data__/bbchtmlcontent";
import parseHtml, { HtmlContent, HtmlPage } from "../services/htmlParser";

export default describe("tests", () => {
  it("get all elements under article component", async () => {
    const html: string = bbchtmlcontent;
    const result: HtmlPage = await parseHtml(html);

    expect(result.contents).not.toContain((el: HtmlContent) => el.tag === "h1");
  });

  it("get html with h1 tag contains h1 tag", async () => {
    const html: string = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <main>
          <h1>Must contain data</h1>
        </main>
      </body>
    </html>`;
    const result: HtmlPage = await parseHtml(html);

    expect(result.contents.some((el) => el.tag === "h1"));
  });

  it("get img node's source", async () => {
    const html: string = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <main>
          <h1></h1>
          <img src="http://fake/source" alt="alt text">
        </main>
      </body>
    </html>`;

    const result: HtmlPage = await parseHtml(html);
    expect(result.contents.filter((i) => i.tag === "img")[0].content).toContain(
      "fake/source"
    );
  });

  it("get 3 paragraphs", async () => {
    const html: string = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <main>
          <h1></h1>
          <img src="http://fake/source" alt="alt text" />
          <p>Lorem, ipsum dolor.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel et fugit
            officiis culpa cum alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            numquam id accusamus modi itaque minus soluta aut culpa. Possimus
            corporis dolore temporibus doloribus quasi inventore velit minus
            nesciunt voluptatibus quae eveniet, totam omnis esse facere, est ipsum
            eligendi dolorem blanditiis!
          </p>
        </main>
      </body>
    </html>
    `;

    const result: HtmlPage = await parseHtml(html);
    const pNodes: HtmlContent[] = result.contents.filter((r) => r.tag === "p");
    expect(pNodes.length).toEqual(3);
    expect(pNodes[0].content).toContain("Lorem, ipsum");
  });
});
