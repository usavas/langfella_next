import ReadingListComp from "../components/ReadingListComp";
import BottomNavigation from "../components/BottomNavigation";
import { getAllReadings } from "../fakedata/reading_contents";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 my-4">
      <main className="mb-24">
        <h1>LangFella</h1>
        <Link
          href="/importcontent"
          className="mt-2 text-sm bg-gray-400 rounded-md p-2"
        >
          Import Content
        </Link>
        <h3>Readings</h3>
        <ReadingListComp readings={getAllReadings()}></ReadingListComp>
        <h3>Readings</h3>
        <ReadingListComp readings={getAllReadings()}></ReadingListComp>
        <h3>Readings</h3>
        <ReadingListComp readings={getAllReadings()}></ReadingListComp>
      </main>

      <BottomNavigation></BottomNavigation>
    </div>
  );
}
