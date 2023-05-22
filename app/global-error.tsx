/**
 * This error is shown when an error occurs
 *  in layout and other components at the root level
 */

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-full h-full bg-slate-400 flex justify-center items-center">
      <h2 className="text-white">
        Oops, there is something wrong in the application...
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default GlobalError;
