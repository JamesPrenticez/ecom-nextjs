import React, {useEffect, useRef} from 'react'
import { googleMapMarker } from './googleMapsHelpers'

export default function GoogleMaps({ options, address, setOptions}) {
  const mapRef = useRef()
  let map

  useEffect(() => {
    if (navigator.geolocation) {
      //navigator.geolocation has a success callback and a error call back depending if user allows us to read their location or not
      navigator.geolocation.getCurrentPosition(
        //Handle Success
        (userLocation) => {
          // Re-write options with our new user location
          setOptions({
            center: {
              lat: userLocation.coords.latitude,
              lng: userLocation.coords.longitude
            },
            zoom: 9
          })
        },
        //Handle Error
        (err) => {
          console.log("User declined geolocation access", err)
        }
      )
    }
  }, [])

  useEffect(() => {
    map = new window.google.maps.Map(mapRef.current, options)
    if(address){
      let location = options.center
      googleMapMarker(location, address, map) // asssigns to the old map...
    }
  }, [options])

  return <div className="h-64 w-64" ref={mapRef} />
}