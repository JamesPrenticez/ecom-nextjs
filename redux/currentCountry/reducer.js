let initialState = {
  name: 'United States',
  abbr: 'USD',
  symbol: '$',
  tax: 0.15,
  flag: '/images/flags/united-states.svg'
}

export default function countries(state = initialState, action){
  switch(action.type) {
    case "UPDATE_CURRENT_COUNTRY":
      return action.payload
    
    case "UPDATE_CURRENT_COUNTRY_ERROR":
      console.log("Result from UPDATE_CURRENT_COUNTRY_ERROR", action.err)
      return state

    default: 
      return state
  }
}