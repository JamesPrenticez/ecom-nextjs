import React, {useRef, useState, useEffect} from 'react'
import { addressFormatter,  } from './googleMapsHelpers'
import InputText from '../common/InputText'

export default function GoogleAutoComplete({ options, setOptions, handleChange, shippingInfo, setShippingInfo,}) {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const inputRef = useRef()
  
  const handleChangePlace = () => {
    let infoObj = autoComplete.getPlace()
    let location = infoObj.geometry.location
    let address_components = infoObj.address_components
    let formattedAddress = addressFormatter(address_components)
    setShippingInfo({formattedAddress, address: formattedAddress.street_number + " " +  formattedAddress.street_name})
    setOptions({
      ...options,
      center: location,
      zoom: 16,
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
      label="Street Address"
      color="ring-primary-link"
      className="col-span-2"
      value={shippingInfo.address}
      handleChange={handleChange}
    />
  )
  
  // <input type="text" className="w-full h-12" placeholder="Enter your address..." ref={inputRef} />
}