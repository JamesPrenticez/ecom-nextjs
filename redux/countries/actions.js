export const setCountries = () => {
  return async (dispatch) => {
    //make async call to db
    await fetch("/api/countries", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        //send to the reducer
        dispatch({ type: "SET_COUNTRIES", countries: data })
      })
      .catch((err) => {
        dispatch({ type: "SET_COUNTRIES_ERROR", err })
      })
  }
}
// export const setCurrentCountry = () => {
//   return async (dispatch) => {
//     //make async call to db
//     await fetch("/api/countries", {
//       method: "GET",
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         //console.log(data)
//         //send to the reducer
//         dispatch({ type: "SET_COUNTRIES", countries: data })
//       })
//       .catch((err) => {
//         dispatch({ type: "SET_HABITS_ERROR", err })
//       })
//   }
// }