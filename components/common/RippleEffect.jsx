// TO USE THIS COMPONENT ITS PARENT MUST HAVE STYLE: {{display: relative, overflow: hidden}}

import React, { useLayoutEffect, useState } from 'react'

export default function RippleEffect() {
  const [rippleArray, setRippleArray] = useState([]);
  let duration = 2000

  useLayoutEffect(() => {
    let timer = null;
    let rippleCount = rippleArray.length

    if (rippleCount > 0) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        setRippleArray([]);
        clearTimeout(timer);
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [rippleArray]);

  const addRipple = (e) => {
    let container = e.currentTarget.getBoundingClientRect()
    let size = container.width > container.height
                ? container.width
                : container.height
    let x = e.pageX - container.x - container.width / 2
    let y = e.pageY - container.y - container.height / 2

    let newRipple = {
      x,
      y,
      size
    }

    setRippleArray((prevState) => [...prevState, newRipple])
  }

  return (
    <>
    {/* ripple container */}
    <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-50" onClick={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          // Ripple
          return (
            <span 
              key={index}
              className={`bg-gray-400 absolute transform scale-0 rounded-full opacity-75 duration-[${duration}] animate-ripple`}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            >
            </span>
          )
        }) 
      }
    </div>
  </>
  )
}

//From https://dev.to/rohanfaiyazkhan/recreating-the-material-design-ripple-effect-in-react-54p