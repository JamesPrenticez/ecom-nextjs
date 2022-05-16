export const setToastList = (toastList) => {
  return ({ type: "SET_TOAST_LIST", payload: toastList })
}

export const deleteToastItem = (item) => {
  return ({ type: "DELETE_TOAST_ITEM", payload: item})
}