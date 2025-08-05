import type { JSX } from "react";
import Filter from "../ui/Filter";
import Search from "../ui/Search";
import type { SearchProps } from "./Type";

function RegionFilterOpreations({ onSearch }: SearchProps): JSX.Element {
  return (
    <div className="m-auto mt-10 mb-5 flex max-w-90 flex-col md:max-w-[800px] md:flex-row md:items-center md:justify-between lg:max-w-[1200px]">
      <Search onSearch={onSearch} />
      <Filter
        value={"region"}
        options={[
          { value: "africa", label: "Africa" },
          { value: "europe", label: "Europe" },
          { value: "asia", label: "Asia" },
          { value: "america", label: "America" },
          { value: "oceania", label: "Oceania" },
        ]}
      />
    </div>
  );
}

export default RegionFilterOpreations;
