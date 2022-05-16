const intialState = []

export default function toastList(state=intialState, action){
  switch(action.type) {
    case "SET_TOAST_LIST":
      return action.payload

    case "DELETE_TOAST_ITEM":
      return action.payload
    
    default: 
      return state
  }
}