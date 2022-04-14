export const setCartItems = (item, color, quantity) => {
  return ({ type: "SET_CART_ITEMS", payload: {...item, color, quantity} })
}

export const deleteCartItem = (item) => {
  return ({ type: "DELETE_CART_ITEM", payload: item})
}

