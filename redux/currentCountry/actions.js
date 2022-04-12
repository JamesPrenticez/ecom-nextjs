export const updateCurrentCountry = (countryName) => {
  return ({ type: "UPDATE_CURRENT_COUNTRY", currentCountry: countryName })
}
