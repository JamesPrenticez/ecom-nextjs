export const setCartItems = (product, color, quantity) => {
  return ({ type: "SET_CART_ITEMS", payload: {...product, color, quantity} })
}