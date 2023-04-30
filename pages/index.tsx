import ReadingListComp from "../components/ReadingListComp";
import { getAllReadings } from "../fakedata/reading_contents";

export default function Home() {
  return (
    <div className="mx-4 my-4">
      <h1>LangFella</h1>
      <h3>Readings</h3>
      <ReadingListComp readings={getAllReadings()}></ReadingListComp>
      <h3>Readings</h3>
      <ReadingListComp readings={getAllReadings()}></ReadingListComp>
      <h3>Readings</h3>
      <ReadingListComp readings={getAllReadings()}></ReadingListComp>
    </div>
  );
}
