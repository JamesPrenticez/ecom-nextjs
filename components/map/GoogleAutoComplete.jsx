import React, {useRef, useState, useEffect} from 'react'
import { addressFormatter,  } from '../helpers/googleMapsHelpers'
import InputText from '../common/InputText'
import { useDispatch } from 'react-redux';

export default function GoogleAutoComplete({ mapOptions, setMapOptions, handleChange, userShippingInfo, setUserShippingInfo,}) {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const inputRef = useRef()
  const dispatch = useDispatch();
  
  const handleChangePlace = () => {
    let infoObj = autoComplete.getPlace()
    let location = infoObj.geometry.location
    let address_components = infoObj.address_components
    let formattedAddress = addressFormatter(address_components)
    dispatch(setUserShippingInfo({...formattedAddress, address: formattedAddress.street_number + " " +  formattedAddress.street_name}))
    setMapOptions({
      ...mapOptions,
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

  console.log(userShippingInfo)  

  return (
    <InputText
      ref={inputRef}
      name="address"
      label="Street Address"
      color="ring-primary-link"
      className="col-span-2"
      value={userShippingInfo.address}
      handleChange={handleChange}
    />
  )
  
  // <input type="text" className="w-full h-12" placeholder="Enter your address..." ref={inputRef} />
}