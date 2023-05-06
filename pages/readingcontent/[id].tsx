import { useRouter } from "next/router";
import ReadingComp from "../../components/ReadingPageComponents/ReadingComp";
import { getReadingById } from "../../fakedata/reading_contents";
import { Reading } from "@prisma/client";

function ReadingType() {
  const router = useRouter();

  const { id } = router.query;
  function getReadingContent(): Reading {
    return getReadingById(id as string);
  }

  const reading = getReadingContent();

  return <ReadingComp reading={reading}></ReadingComp>;
}

export default ReadingType;
