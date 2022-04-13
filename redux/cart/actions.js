export const addToCart = (product, color, quantity) => {
  return ({ type: "ADD_TO_CART", payload: {...product, color, quantity} })
}
