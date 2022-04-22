export const setUserContactInfo = (userContactInfo) => {
  return ({ type: "SET_USER_CONTACT_INFO", payload: {userContactInfo} })
}
