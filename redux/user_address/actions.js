export const setUserShippingInfo = (id) => {
  // Make a call to db and fetch username, email

  return ({ type: "SET_USER_SHIPPING_INFO", payload: {user_address} })
}
