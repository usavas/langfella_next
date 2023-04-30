import { useRouter } from "next/router";

import ReadingType from "../../types/ReadingType";
import ReadingComp from "../../components/ReadingComp";

import { getReadingById } from "../../fakedata/reading_contents";

function ReadingType() {
  const router = useRouter();

  const { id } = router.query;
  function getReadingContent(): ReadingType {
    return getReadingById(id as string);
  }

  const reading = getReadingContent();

  return <ReadingComp reading={reading}></ReadingComp>;
}

export default ReadingType;
