const intialState = {
  cart: {
    cartItems: []
  }
}

export default function cart(state=intialState, action){
  switch(action.type) {
    case "ADD_TO_CART":
      //Check if item is already added to cart
      const newItem = action.payload
      const itemExists = state.cart.cartItems.find(item => item.id == newItem.id)

      //If itemExists then overwrite with newItem otherwise concat cart with newItem 
      const cartItems = itemExists ? state.cart.cartItems.map(item => item.id == itemExists.id ? newItem : item) : [...state.cart.cartItems, newItem]

      return {...state, cart: {cartItems}}
    
    case "ADD_TO_CART_ERROR":
      console.log("Result from ADD_TO_CART_ERROR", action.err)
      return state

    default: 
      return state
  }
}