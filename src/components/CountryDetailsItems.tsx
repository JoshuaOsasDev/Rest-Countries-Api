import type { JSX } from "react";
import { useParams, useNavigate } from "react-router";
import NavBar from "../ui/NavBar";
import type { Countries } from "../components/Type";
import { useGetCountryByCode, useGetCountries } from "../../hooks/useCountries";
import Message from "../ui/Message";
import Spinner from "../ui/Spinner";
import Map from "./Map";

function CountryDetailsItems(): JSX.Element {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { country, isLoading, errors } = useGetCountryByCode(code);

  // Fetch minimal list to resolve border countries
  const { countries } = useGetCountries();

  if (errors) return <Message message={`❌ ${errors}`} />;
  if (isLoading || !country) return <Spinner />;

  // Get currencies and languages
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  // Get border countries names
  const borderCountries: Countries[] =
    (country.borders
      ?.map((borderCode) =>
        countries.find(
          (c) => c.cca3?.toUpperCase() === borderCode.toUpperCase(),
        ),
      )
      .filter(Boolean) as Countries[]) || [];

  const position: [number, number] = country.latlng ?? [0, 0];

  return (
    <>
      <NavBar />
      <div className="mx-auto my-10 max-w-lg p-6 md:max-w-[800px] lg:max-w-[1200px] dark:text-white">
        <button
          onClick={() => navigate(-1)}
          className="mb-15 cursor-pointer bg-white px-6 py-2 shadow-lg transition-colors hover:bg-gray-200 dark:bg-blue-900 dark:hover:bg-blue-950"
        >
          &larr; Back
        </button>

        <div className="md:grid md:grid-cols-3 md:items-start md:gap-10">
          <img
            className="w-full object-cover md:row-span-2 md:h-full md:object-fill"
            src={country.flags?.png}
            alt={`${country.name.common} flag`}
          />

          <div className="md:col-span-1 md:ml-15">
            <h1 className="my-7 text-3xl font-bold">{country.name.common}</h1>

            <p className="mt-2 font-bold">
              Native Name:{" "}
              <span className="font-extralight">
                {Object.values(country.name.nativeName || {})[0]?.common ??
                  country.name.common}
              </span>
            </p>
            <p className="mt-2 font-bold">
              Population:{" "}
              <span className="font-extralight">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="mt-1 font-bold">
              Region: <span className="font-extralight">{country.region}</span>
            </p>
            <p className="mt-1 font-bold">
              Sub Region:{" "}
              <span className="font-extralight">
                {country.subregion ?? "N/A"}
              </span>
            </p>
            <p className="mt-1 font-bold">
              Capital:{" "}
              <span className="font-extralight">
                {country.capital?.[0] ?? "N/A"}
              </span>
            </p>
          </div>

          <div className="mt-5 md:col-span-1 md:mt-20">
            <p className="mt-1 font-bold">
              Top Level Domain:{" "}
              <span className="font-extralight">
                {country.tld?.[0] ?? "N/A"}
              </span>
            </p>
            <p className="mt-1 font-bold">
              Currency: <span className="font-extralight">{currencies}</span>
            </p>
            <p className="mt-1 font-bold">
              Language: <span className="font-extralight">{languages}</span>
            </p>
          </div>

          <div className="mt-6 md:col-span-2 md:ml-15 md:flex md:flex-wrap md:items-center">
            <h3 className="mr-4 mb-2 w-full text-xl font-bold md:w-auto">
              Border Countries:
            </h3>
            {borderCountries.length > 0 ? (
              borderCountries.map((borderCountry) => (
                <button
                  key={borderCountry.cca3}
                  className="m-2 ml-0 cursor-pointer rounded-sm bg-white p-3 shadow-md transition-colors hover:bg-gray-200 dark:bg-blue-900 dark:hover:bg-blue-950"
                  onClick={() => navigate(`/country/${borderCountry.cca2}`)}
                >
                  {borderCountry.name.common}
                </button>
              ))
            ) : (
              <p className="mt-2 font-extralight">No border countries</p>
            )}
          </div>
        </div>

        {position && <Map position={position} country={country} />}
      </div>
    </>
  );
}

export default CountryDetailsItems;
