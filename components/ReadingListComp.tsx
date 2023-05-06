import ReadingListItemComp from "./ReadingListItemComp";
import ReadingWAuthorAndLang from "../types/ReadingWAuthorsAndLanguage";

type Props = {
  readings: ReadingWAuthorAndLang[];
};

function ReadingList(props: Props) {
  const { readings } = props;
  return (
    // TODO use scrollbar-hide only for mobile or PWA (because it cannot be swiped with mouse, it captures the mouse down event)
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-none scrollbar-hide">
      {readings.map((r) => (
        <ReadingListItemComp key={r.id} reading={r}></ReadingListItemComp>
      ))}
    </div>
  );
}

export default ReadingList;
