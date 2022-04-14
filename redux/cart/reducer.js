const intialState = { 
  cartItems: [
    // {id: 0},
    // {id: 1}
  ]
}


export default function cart(state=intialState, action){
  switch(action.type) {
    case "SET_CART_ITEMS":
      //Check if item is already added to cart
      const newItem = action.payload
      const itemExists = state.cartItems.find(item => item.id == newItem.id)

      // This removes the need for an update function
      //If itemExists then overwrite with newItem otherwise concat cart with newItem 
      const updatedCartItems = itemExists ? state.cartItems.map(item => item.id == itemExists.id ? newItem : item) : [...state.cartItems, newItem]
      //console.log(updatedCartItems)
      return {...state, cartItems: updatedCartItems}
    
    default: 
      return state
  }
}