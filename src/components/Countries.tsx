import { type JSX, type ChangeEvent, memo, useMemo, useCallback } from "react";
import { useState } from "react";
import { useGetCountries } from "../../hooks/useCountries";
import RegionFilterOpreations from "./RegionFilterOpreations";
import DisplayedCountries from "./DisplayedCountries";
import SkeletonCard from "../ui/SkeletonCard ";
import Message from "../ui/Message";

function Countries(): JSX.Element {
  const { countries, isLoading, errors } = useGetCountries();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Filter countries by search query
  const filteredCountries = useCallback(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search),
    );
  }, [countries, search]);

  const displayedCountries = useMemo(
    () => filteredCountries().slice(0, 20),
    [filteredCountries],
  );
  return (
    <>
      <RegionFilterOpreations onSearch={handleSearch} />

      <div className="m-auto grid max-w-90 grid-cols-1 gap-10 p-4 pt-7 md:max-w-[800px] md:grid-cols-3 md:gap-13 md:pl-0 lg:max-w-[1200px] lg:grid-cols-4">
        {isLoading ? (
          // Loading Skeletons
          Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
        ) : errors ? (
          // Error message
          <Message message={`❌ An Error occured( ${errors})`} />
        ) : !displayedCountries.length ? (
          // Empty state message
          <Message message="No Country, please enter a valid query" />
        ) : (
          // Display countries
          <DisplayedCountries displayedCountries={displayedCountries} />
        )}
      </div>
    </>
  );
}

export default memo(Countries);
