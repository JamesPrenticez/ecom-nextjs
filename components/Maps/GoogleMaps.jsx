import React, {useEffect, useRef} from 'react'

let location = {
  lat: 36.1699421,
  lng: -115.1398149
}

let options = {
  center: location,
  zoom: 9
}

export default function GoogleMaps() {
  const mapRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      //navigator.geolocation has a success callback and a error call back depending if user allows us to read their location or not
      navigator.geolocation.getCurrentPosition(
        //Handle Success
        (userLocation) => {
          (location.lat = userLocation.coords.latitude),
          (location.lng = userLocation.coords.longitude);
          // Re-write options with our new user location
          new window.google.maps.Map(mapRef.current, options);
          console.log("User location updated with:", options);
        },
        //Handle Error
        (err) => {
          console.log("User declined geolocation access", err)
          console.log("Proceed to rende map with dafault setting:", options)
          new window.google.maps.Map(mapRef.current, options);
        }
      )
    }
  })

  return <div className="h-64 w-64" ref={mapRef} />
}