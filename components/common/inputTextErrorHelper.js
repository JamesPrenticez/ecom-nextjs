export const required = (value) => {
  if(!value) return true
  return false
}

export const maxLength = (value, max) => {
  console.log(value, max)
  if(!value) return
  if(value.length < max) return false
  return true
}

export const pattern = (value, regex) => {
  return regex.test(value)
}