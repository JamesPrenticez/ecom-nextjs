export const setUserInfo = (id) => {
  // Make a call to db and fetch username, email

  return ({ type: "SET_USER_INFO", payload: {user} })
}
