import React, {useRef, useState, useEffect} from 'react'
import { googleMaker } from './GoogleMarker'





















export default function GoogleAutoComplete() {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const [address, setAddress] = useState(initialStateAddress)
  const inputRef = useRef();

  const handleChangePlace = () => {
    let infoObj = autoComplete.getPlace()
    let geometry = infoObj.geometry
    let address = infoObj.address_components.map(item => item.)

    
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


  return <input type="text" className="w-full h-12" placeholder="Enter your address..." ref={inputRef} />
}

//https://codesandbox.io/s/94s8c?file=/src/App.js:130-162