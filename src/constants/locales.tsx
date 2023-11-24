import React from 'react'

import { 
  ILocale,
  ICountryName,
  ICurrencyAbbr
} from '@/models/ILocale';

import { 
  AustraliaFlagIcon,
  CanadaFlagIcon,
  NewZealandFlagIcon,
  UnitedKingdomFlagIcon,
  UnitedStatesFlagIcon,
} from '@/components/icons/countryIcons';

export const locales: ILocale[] = [
  {
    countryName: ICountryName["AUSTRALIA"],
    currencyAbbr: ICurrencyAbbr["AUD"],
    flagIcon: <AustraliaFlagIcon />,
  },
  {
    countryName: ICountryName["CANADA"],
    currencyAbbr: ICurrencyAbbr["CAD"],
    flagIcon: <CanadaFlagIcon />,
  },
  {
    countryName: ICountryName["NEW_ZEALAND"],
    currencyAbbr: ICurrencyAbbr["NZD"],
    flagIcon: <NewZealandFlagIcon />,
  },
  {
    countryName: ICountryName["UNITED_KINGDOM"],
    currencyAbbr: ICurrencyAbbr["GBP"],
    flagIcon: <UnitedKingdomFlagIcon />,
  },
  {
    countryName: ICountryName["UNITED_STATES"],
    currencyAbbr: ICurrencyAbbr["USD"],
    flagIcon: <UnitedStatesFlagIcon />,
  }
]
