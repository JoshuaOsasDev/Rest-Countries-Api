import type { JSX } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import type { SearchProps } from "../components/Type";

function Search({ onSearch }: SearchProps): JSX.Element {
  return (
    <div className="relative w-full text-lg md:w-100">
      <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search for a country"
        onChange={onSearch}
        className="font-lg w-full rounded-md border border-gray-300 bg-white py-3 pr-3 pl-10 text-gray-700 shadow-sm outline-none dark:border-0 dark:bg-blue-900 dark:text-white"
      />
    </div>
  );
}

export default Search;
