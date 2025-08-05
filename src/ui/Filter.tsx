import type { JSX, ChangeEvent } from "react";
import { useSearchParams } from "react-router";

type Option = {
  value: string;
  label: string;
};

type FilterProps = {
  options: Option[];
  value: string;
};

function Filter({ options, value }: FilterProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedUrlValue = searchParams.get(value) || "";

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue) {
      searchParams.set(value, selectedValue);
    } else {
      searchParams.delete(value);
    }

    setSearchParams(searchParams);
  };

  return (
    <div>
      <select
        value={selectedUrlValue}
        onChange={handleChange}
        className="mt-10 w-50 rounded-md border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-sm transition outline-none focus:ring-0 md:mt-0 dark:border-0 dark:bg-blue-900 dark:text-white"
      >
        <option value="">Filter by {value}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
