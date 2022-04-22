const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  newsletter: true,
}

export default function userContactInfo(state=intialState, action){
  switch(action.type) {
    case "SET_USER_CONTACT_INFO":
      return action.payload
    
    default: 
      return state
  }
}