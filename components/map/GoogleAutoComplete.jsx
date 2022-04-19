import React, {useRef, useState, useEffect} from 'react'
import { addressFormatter,  } from './googleMapsHelpers'
import InputText from '../common/InputText'

export default function GoogleAutoComplete({ setOptions, setAddress, handleChange, value}) {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const inputRef = useRef()
  
  const handleChangePlace = () => {
    let infoObj = autoComplete.getPlace()
    let location = infoObj.geometry.location
    let address_components = infoObj.address_components
    let address = addressFormatter(address_components)
    setAddress(address)
    setOptions({
      center: location,
      zoom: 9,
      disableDefaultUI: true, 
      gestureHandling: "none",
      keyboardShortcuts: false,
    })
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
      autoComplete.addListener("place_changed", () => handleChangePlace());
    }

  }, [inputRef, autoComplete])

  return (
    <InputText
      ref={inputRef}
      name="address"
      label="Address"
      color="ring-primary-link"
      className="col-span-2"
      value={value}
      handleChange={handleChange}
    />
  )
  
  // <input type="text" className="w-full h-12" placeholder="Enter your address..." ref={inputRef} />
}