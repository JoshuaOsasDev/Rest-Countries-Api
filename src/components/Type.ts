import type { ChangeEvent } from "react";

//Type Props
export type DisplayedCountriesProps = {
  displayedCountries: Countries[];
};

export type MapProps = {
  position: [number, number];
  country: Countries;
};

// FUNCTION

export type Currency = {
  name: string;
  symbol: string;
};

export type Currencies = {
  [code: string]: Currency;
};

export type Languages = {
  [code: string]: string;
};

export type SearchProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type Countries = {
  cca2: string; // country code
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  flags: {
    png: string;
    svg: string;
  };
  tld?: string[];
  currencies?: Currencies;
  languages?: Languages;
  borders?: string[];
  cca3?: string;
  latlng?: [number, number];
};
