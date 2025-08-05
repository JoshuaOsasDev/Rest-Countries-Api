import { memo, type JSX } from "react";
import { Link } from "react-router";
import type { DisplayedCountriesProps } from "./Type";

function DisplayedCountries({
  displayedCountries,
}: DisplayedCountriesProps): JSX.Element {
  return (
    <>
      {displayedCountries.map((country) => (
        <Link
          key={country.cca2}
          to={`/country/${country.cca2}`}
          className="rounded-lg bg-white shadow-sm transition-transform hover:scale-105 dark:bg-blue-900"
        >
          <img
            className="h-45 w-full rounded-t-lg"
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />
          <div className="p-4">
            <h3 className="my-3 font-extrabold">{country.name.common}</h3>
            <p className="my-1 font-bold">
              Population:{" "}
              <span className="font-extralight">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="my-1 font-bold">
              Region: <span className="font-extralight">{country.region}</span>
            </p>
            <p className="font-bold">
              Capital:{" "}
              <span className="font-extralight">
                {country.capital?.[0] ?? "N/A"}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default memo(DisplayedCountries);
