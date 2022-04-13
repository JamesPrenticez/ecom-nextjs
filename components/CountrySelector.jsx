import React from 'react'
import DropDown from './DropDown'
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentCountry } from "../redux/currentCountry/actions"
import { data } from '../utils/data'

export default function CountrySelector() {
  const currentCountry = useSelector((state) => state.currentCountry)
  const dispatch = useDispatch();
  const countries = data.countries

  const handleCurrencyChange = (countryName) => {
    dispatch(updateCurrentCountry(countryName))
  }

  return (
    <DropDown 
      selectClassName="text-lg"
      optionsClassName="bg-secondary-background text-secondary-text"
      itemClassName="hover:bg-primary-background hover:text-primary-text"
      items={countries.map(country => country.name)}
      value={currentCountry}
      icons={countries.map((country) => {return ({name: country.name, icon: country.flag})})}
      onChange={handleCurrencyChange}
    />
  )
}