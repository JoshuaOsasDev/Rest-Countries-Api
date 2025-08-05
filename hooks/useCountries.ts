import { useEffect, useState } from "react";
import { type Countries } from "../src/components/Type";
import { useSearchParams } from "react-router";

export const useGetCountries = function () {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const value = searchParams.get("region");

  useEffect(() => {
    const getCountries = async function () {
      setIsLoading(true);
      try {
        const url = value
          ? `https://restcountries.com/v3.1/region/${value}`
          : "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,population,region,capital,flags,currencies,languages,borders";
        const res = await fetch(url);
        if (!res.ok) throw new Error("countries can not bee found");
        const data: Countries[] = await res.json();
        setCountries(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setErrors(error.message);
        } else {
          setErrors("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getCountries();
  }, [value]);

  return { isLoading, countries, errors };
};
