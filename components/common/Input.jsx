import React, { useState } from 'react'

export default function Input({
  color,
  type,
  name,
  value,
  defaultValue,
  placeholder,
  register,
  errors,
  mistakes
}){

const [active, setActive] = useState(true)

const handleFocus = (e) => {
  console.log("foucus", e.target.value)
  setActive(true)
}

const handleBlur = (e) => {
  console.log("blur", e.target.value)
  if (e.target.value) {
    return;
 } else {
   setActive(false)
 }
}

let isError = Object.values(errors)[0]
//console.log(isError)

console.log(active)
  return (
    <div>
    <fieldset className={`relative bg-transparent border-2  shadow rounded w-full mt-2
       ${errors.value && "border-red-500"}
       ${active ? "border-blue-500" : "border-transparent"}`}
      >

      <legend
        className={`text-primary-text text-[1rem] tansform transition origin-top-left ease-in-out ml-2 px-2
        ${active ? "text-[.75rem] !leading-[0rem] " : "absolute translate-y-2"}`}
      >
        {name}
      </legend>
      <label htmlFor={value} 
        onFocus={handleFocus}
        onBlur={handleBlur}
      >

      <input
        type={type}
        className="bg-transparent outline-none w-full px-4 py-2"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register(value, 
          { required: mistakes?.required?.message,
            maxLength: { 
              value: mistakes?.maxLength?.value,
              message: mistakes?.maxLength?.message
            },
            pattern: {
              value: mistakes?.pattern?.value,
              message:  mistakes?.pattern?.message
            }
          }
        )}
      />


    </label>
  </fieldset>
    {isError && (
      <>
        <small className="text-red-500 italic pl-4">
          { isError?.type  === "required" ? isError?.message
            : isError?.type === "maxLength" ? isError?.message
            : isError?.type  === "pattern" ? isError?.message
            : null }
        </small>
      </>
      )
    }
  </div>
  )
}

//https://medium.com/@junaama/creating-a-floating-label-input-in-react-using-functional-components-2777aa193dfd
