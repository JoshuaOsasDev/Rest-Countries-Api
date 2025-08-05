// hooks/useGetAllCountries.ts
import { useEffect, useState } from "react";
import type { Countries } from "../src/components/Type";

export const useGetAllCountries = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCountries = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,population,region,capital,flags,currencies,languages,borders",
        );
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data: Countries[] = await res.json();
        setCountries(data);
      } catch (err) {
        setErrors(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllCountries();
  }, []);

  return { isLoading, countries, errors };
};
