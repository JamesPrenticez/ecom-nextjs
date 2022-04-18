import React from 'react'

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

let isError = Object.values(errors)[0]
//console.log(isError)

  return (
    <label htmlFor={value} className="mb-5">
    <h5 className="text-primary-text">{name}</h5>
     {isError && (
      <>
        <small className="text-red-500 italic">- &nbsp;
          { isError.type  === "required" ? isError.message
            : isError.type === "maxLength" ? isError.message
            : isError.type  === "pattern" ? isError.message
            : null }
        </small>
      </>
      )
    } 
    <input
      type={type}
      className={`shadow rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-2 ${errors.value ? "ring-red-500" : color}`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...register(value, 
        { required: mistakes.required.message,
          maxLength: { 
            value: mistakes.maxLength.value,
            message: mistakes.maxLength.message
          },
          pattern: {
            value: mistakes.pattern.value,
            message:  mistakes.pattern.message
          }
        }
      )}
    />
  </label>
  )
}

//https://medium.com/@junaama/creating-a-floating-label-input-in-react-using-functional-components-2777aa193dfd
