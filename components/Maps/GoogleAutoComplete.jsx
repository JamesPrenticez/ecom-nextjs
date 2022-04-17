import React, {useRef, useState, useEffect} from 'react'

export default function GoogleAutoComplete() {
  const [autoComplete, setAutoComplete] = useState(undefined)
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && !autoComplete) {
      setAutoComplete(
        new google.maps.places.Autocomplete(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: ["US", "CA", "UK", "AU", "NZ"] },
          fields: ["geometry"],
        })
      )
    }
  }, [inputRef, autoComplete])

  return <input type="text" className="w-full h-12" ref={inputRef} />
}
