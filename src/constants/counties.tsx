import React, { type ReactNode } from 'react'
import { 
  AustraliaFlagIcon,
  CanadaFlagIcon,
  NewZealandFlagIcon,
  UnitedKingdomFlagIcon,
  UnitedStatesFlagIcon,
} from '@/components/icons/countryIcons';

interface ICountry {
  name: string;
  abbr: string;
  symbol: string;
  icon: ReactNode;
}

export const countries: ICountry[] = [
  {
    name: 'Australia',
    abbr: 'AUD',
    symbol: '$',
    icon: <AustraliaFlagIcon />,
  },
  {
    name: 'Canada',
    abbr: 'CAD',
    symbol: '$',
    icon: <CanadaFlagIcon />,
  },
  {
    name: 'New Zealand',
    abbr: 'NZD',
    symbol: '$',
    icon: <NewZealandFlagIcon />,
  },
  {
    name: 'United Kingdom',
    abbr: 'GBP',
    symbol: '£',
    icon: <UnitedKingdomFlagIcon />
  },
  {
    name: 'United States',
    abbr: 'USD',
    symbol: '$',
    icon: <UnitedStatesFlagIcon />
  },
]