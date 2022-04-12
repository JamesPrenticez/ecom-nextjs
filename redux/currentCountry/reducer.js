let initialState = "United States"

export default function countries(state = initialState, action){
  switch(action.type) {
    case "UPDATE_CURRENT_COUNTRY":
      return action.currentCountry
    
    case "UPDATE_CURRENT_COUNTRY_ERROR":
      console.log("Result from SET_HABITS_ERROR", action.err)
      return state

    default: 
      return state
  }
}