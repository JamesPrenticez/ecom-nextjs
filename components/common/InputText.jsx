import React, { forwardRef, useEffect, useState } from 'react'
import {required, maxLength, pattern} from '../helpers/inputTextErrorHelper'

//const InputText = React.forwardRef((props, ref) => {
const InputText = forwardRef(({ className, name, label, value, errors, handleChange}, ref) => {
  const [active, setActive] = useState(false)
  const [isError, setIsError] = useState({type: ""})
  
  useEffect(() => {
    if(!value) return 
    else setActive(true)
  }, [value])
  
  function handleErrors(e){
    //console.log(e.target.value)
    if(!errors) return
    //if(required(value)) return setIsError({type: "required"})
    //if(maxLength(e.target.value, errors.maxLength.value)) return setIsError({type: "maxLength"})
    if(pattern(e.target.value, errors.pattern.value)) return setIsError({type: "pattern"})
  }

  function handleFocus(){
    setActive(true)
  }
  
  function handleBlur(e){
    if (e.target.value) {
      return;
    } else {
      setActive(false)
    }
  }

  return (
    <div className={className}>
      <fieldset className={`relative bg-transparent border rounded w-full mt-2 transition ease-in-out
        ${""}//isError && "border-red-500"}
        ${active ? "border-primary-link" : "border-[#d9d9d9]"}`}
        >

        <legend
          className={`text-primary-text text-[1rem] tansform transition origin-top-left ease-in-out ml-2 px-2 select-none pointer-events-none
          ${active ? "text-[.75rem] !leading-[0rem] " : "absolute translate-y-2"}`}
        >
          {label}
        </legend>

        <label htmlFor={name} 
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >

        <input
          ref={ref}
          name={name}
          value={value}
          placeholder=""
          onChange={(e) => {handleChange(e); handleErrors(e)}}
          type="text"
          className="bg-transparent outline-none w-full px-4 py-2"
        />
      </label>
    </fieldset>
    {/* {isError && (
      <>
        <small className= "text-red-500 italic pl-4">
          { isError.type  === "required" ? errors.required.message
            : isError.type === "maxLength" ? errors.maxLength.message
            : isError.type  === "pattern" ? errors.pattern.message
            : null }
        </small>
      </>
      )
    } */}
  </div>
  )
})


export default InputText

//https://medium.com/@junaama/creating-a-floating-label-input-in-react-using-functional-components-2777aa193dfd