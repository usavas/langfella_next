import bbchtmlcontent from "../__test_fake_data__/bbchtmlcontent";
import parseHtml from "../services/htmlParser";

export default describe("tests", () => {
  it("get all elements under article component", async () => {
    const html: string = bbchtmlcontent;
    const result: string = await parseHtml(html);
    console.log({ result });
  });
});
