const intialState = {
  address: "",
  street_number: "",
  street_name: "",
  suburb: "",
  city: "",
  state:"",
  country: "",
  postal_code: ""
}

export default function userShippingInfo(state=intialState, action){
  switch(action.type) {
    case "SET_USER_SHIPPING_INFO":
      return action.payload
    
    default: 
      return state
  }
}