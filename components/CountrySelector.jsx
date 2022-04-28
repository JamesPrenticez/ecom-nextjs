import React from 'react'
import DropDown from './common/DropDown'
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentCountry } from "../redux/currentCountry/actions"
import { data } from '../utils/data'

export default function CountrySelector({className}) {
  const currentCountry = useSelector((state) => state.currentCountry)
  const dispatch = useDispatch();
  const countries = data.countries

  const handleCountryChange = (countryName) => {
    let country = countries.find(country => country.name === countryName)
    dispatch(updateCurrentCountry(country))
  }

  return (
    <DropDown 
      selectClassName={`${className}`}
      optionsClassName="bg-white text-primary-text"
      itemClassName="hover:bg-primary-link hover:text-secondary-text"
      value={currentCountry.name}
      items={countries.map(country => country)}
      onChange={handleCountryChange}
    />
  )
}