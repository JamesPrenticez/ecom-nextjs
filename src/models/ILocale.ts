import { ReactNode } from "react";

export interface ILocale {
  countryName: ICountryName;
  currencyAbbr: ICurrencyAbbr;
  flagIcon: ReactNode;
}

export enum ICountryName {
  AUSTRALIA = "Australia",
  CANADA = "Canada",
  NEW_ZEALAND = "New Zealand",
  UNITED_KINGDOM = "United Kingdom",
  UNITED_STATES = "United States",
}

export enum ICurrencyAbbr {
  AUD = "AUD",
  CAD = "CAD",
  NZD = "NZD",
  GBP = "GBP",
  USD = "USD",
}
