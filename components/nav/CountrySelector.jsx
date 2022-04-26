import React from 'react'
import DropDown from '../common/DropDown'
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentCountry } from "../../redux/currentCountry/actions"
import { data } from '../../utils/data'

export default function CountrySelector() {
  const currentCountry = useSelector((state) => state.currentCountry)
  const dispatch = useDispatch();
  const countries = data.countries

  const handleCountryChange = (countryName) => {
    let country = countries.find(country => country.name === countryName)
    dispatch(updateCurrentCountry(country))
  }

  return (
    <DropDown 
      selectClassName="text-lg"
      optionsClassName="bg-secondary-background text-secondary-text"
      itemClassName="hover:bg-primary-background hover:text-primary-text"
      value={currentCountry.name}
      items={countries.map(country => country)}
      onChange={handleCountryChange}
    />
  )
}