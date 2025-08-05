import type { JSX } from "react";

function SkeletonCard(): JSX.Element {
  return (
    <div className="animate-pulse rounded-lg bg-white shadow-sm dark:bg-blue-900">
      <div className="h-45 w-full rounded-t-lg bg-gray-300 dark:bg-blue-700" />
      <div className="space-y-3 p-4">
        <div className="h-5 w-2/3 rounded bg-gray-300 dark:bg-blue-700" />
        <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-blue-700" />
        <div className="h-4 w-1/3 rounded bg-gray-300 dark:bg-blue-700" />
        <div className="h-4 w-1/4 rounded bg-gray-300 dark:bg-blue-700" />
      </div>
    </div>
  );
}

export default SkeletonCard;
