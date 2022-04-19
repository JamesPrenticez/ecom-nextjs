import React, { forwardRef, useState } from 'react'

//const InputText = React.forwardRef((props, ref) => {
const InputText = forwardRef(({ className, name, label, value, handleChange}, ref) => {
  const [active, setActive] = useState(false)

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
          onChange={handleChange}
          type="text"
          className="bg-transparent outline-none w-full px-4 py-2"
        />
      </label>
    </fieldset>
    {/* {isError && (
      <>
        <small className="text-red-500 italic pl-4">
          { isError?.type  === "required" ? isError?.message
            : isError?.type === "maxLength" ? isError?.message
            : isError?.type  === "pattern" ? isError?.message
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
