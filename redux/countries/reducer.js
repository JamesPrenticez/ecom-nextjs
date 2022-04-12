import { data } from '../../utils/data'
let initialState = data.countries

export default function countries(state = initialState, action){
  switch(action.type) {
    case "SET_CURRENT_COUNTRIES":
      //console.log("Result from SET_HABITS:", [...state, ...action.habits])
      return action.countries//initialState.concat(action.habits)
    
    case "SET_COUNTRIES_ERROR":
      //console.log("Result from SET_HABITS_ERROR", action.err)
      return state

    default: 
      return state
  }
}