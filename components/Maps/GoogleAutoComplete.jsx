import React, {useRef, useState, useEffect} from 'react'

export default function GoogleAutoComplete() {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const inputRef = useRef();

  const handleChangePlace = () => {
    let address = autoComplete.getPlace()
    console.log(address)
  }

  useEffect(() => {
    if (inputRef && !autoComplete) {
      setAutoComplete(
        new google.maps.places.Autocomplete(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: ["US", "CA", "UK", "AU", "NZ"] },
          fields: ["geometry", "address_components"],
        })
      )
    }

    if(autoComplete){
      autoComplete.addListener("place_changed", handleChangePlace);
    }

  }, [inputRef, autoComplete])


  return <input type="text" className="w-full h-12" ref={inputRef} />
}

//https://codesandbox.io/s/94s8c?file=/src/App.js:130-162