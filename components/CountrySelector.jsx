import React from 'react'
import DropDown from './DropDown'
import { connect, useDispatch } from "react-redux";
import { updateCurrentCountry } from "../redux/currentCountry/actions"
import { data } from '../utils/data'

function CountrySelector({items, currentCountry}) {
  const dispatch = useDispatch();
  const countries = data.countries

  const handleCurrencyChange = (countryName) => {
    dispatch(updateCurrentCountry(countryName))
  }

  return (
    <DropDown 
      selectClassName=""
      optionsClassName="bg-secondary-background text-secondary-text"
      itemClassName="hover:bg-primary-background hover:text-primary-text"
      items={countries.map(country => country.name)}
      value={currentCountry}
      icons={countries.map((country) => {return ({name: country.name, icon: country.flag})})}
      onChange={handleCurrencyChange}
    />
  )
}

function mapStateToProps(state) {
  return {
    currentCountry: state.currentCountry,
  };
}

export default connect(mapStateToProps)(CountrySelector);