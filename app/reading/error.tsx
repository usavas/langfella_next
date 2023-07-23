"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <p className="">Error</p>
      <p className="">{error.message}</p>
      <p className="">{error.digest}</p>
    </div>
  );
}
