const intialState = {}

export default function userInfo(state=intialState, action){
  switch(action.type) {
    case "SET_USER_INFO":
      return action.payload
    
    default: 
      return state
  }
}