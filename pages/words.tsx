import BottomNavigation from "../components/BottomNavigation";

function Words() {
  const words = [
    { word: "word", translation: "translation", status: 4 },
    { word: "word 2", translation: "translation 2", status: 3 },
    { word: "word 3", translation: "translation 3", status: 5 },
  ];

  return (
    <div className="m-4 ">
      <ul className=" divide-y divide-gray-200">
        {words.map((w, i) => (
          <li key={i} className="py-3">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-gray-700 truncate">
                  {w.word}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-500">
                  {w.translation}
                </p>
              </div>
              <div className="inline-flex justify-center align-middle rounded-full bg-gray-200 w-4 h-4 p-4 items-center text-base font-medium text-gray-900 ">
                {w.status}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <BottomNavigation></BottomNavigation>
    </div>
  );
}

export default Words;
