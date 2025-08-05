import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Countries } from "../src/components/Type";

const BASE_URL = "https://restcountries.com/v3.1";

const MINIMAL_FIELDS =
  "cca2,cca3,name,population,region,capital,flags,borders,latlng,languages";

export const useGetCountries = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const value = searchParams.get("region");

  useEffect(() => {
    const getCountries = async () => {
      setIsLoading(true);
      try {
        const url = value
          ? `${BASE_URL}/region/${value}?fields=${MINIMAL_FIELDS}`
          : `${BASE_URL}/all?fields=${MINIMAL_FIELDS}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Countries could not be found");

        const data: Countries[] = await res.json();
        setCountries(data);
      } catch (error) {
        setErrors(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    getCountries();
  }, [value]);

  return { isLoading, countries, errors };
};

/**
 * Fetch full details for a single country by code
 */
export const useGetCountryByCode = (code: string | undefined) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<Countries | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    const getCountry = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/alpha/${code}`);
        if (!res.ok) throw new Error("Country could not be found");

        const data: Countries[] = await res.json();
        setCountry(data[0]);
      } catch (error) {
        setErrors(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, [code]);

  return { isLoading, country, errors };
};
