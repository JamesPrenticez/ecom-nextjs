export const setUserShippingInfo = (userShippingInfo) => {
  // Make a call to db and fetch username, email

  return ({ type: "SET_USER_SHIPPING_INFO", payload: userShippingInfo })
}