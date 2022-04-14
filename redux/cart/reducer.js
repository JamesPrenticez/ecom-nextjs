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

      // This removes the need for an UPDATE_CART_ITEM case
      // If itemExists then overwrite with newItem otherwise concat cart with newItem 
      const updatedCartItems = itemExists ? state.cartItems.map(item => item.id == itemExists.id ? newItem : item) : [...state.cartItems, newItem]
      return {...state, cartItems: updatedCartItems}

    case "DELETE_CART_ITEM":  
      const itemToDelete = action.payload
      const filteredCartItems = state.cartItems.filter(item => item.id !== itemToDelete.id)
      return {...state, cartItems: filteredCartItems}
    
    default: 
      return state
  }
}