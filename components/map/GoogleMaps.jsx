import React, {useEffect, useRef} from 'react'
import { googleMapMarker } from '../helpers/googleMapsHelpers'

export default function GoogleMaps({ mapOptions, shippingInfo, setMapOptions}) {
  const mapRef = useRef()
  let map

  useEffect(() => {
    if (navigator.geolocation) {
      //navigator.geolocation has a success callback and a error call back depending if user allows us to read their location or not
      navigator.geolocation.getCurrentPosition(
        //Handle Success
        (userLocation) => {
          // Re-write options with our new user location
          setMapOptions({...mapOptions,
            center: {
              lat: userLocation.coords.latitude,
              lng: userLocation.coords.longitude
            },
          })
        },
        //Handle Error
        (err) => {
          console.log("User declined geolocation access", err)
        }
      )
    }
  }, [])

  //Drop a marker on the map if street name exists
  useEffect(() => {
    //console.log(shippingInfo)
    map = new window.google.maps.Map(mapRef.current, mapOptions)
    if(shippingInfo.street_name){ //need to get address/shippingInfo if using geolocation and update this object
      let location = mapOptions.center
      googleMapMarker(location, shippingInfo, map)
    }
  }, [mapOptions])

  return <div id="map" className="h-[28rem] w-full map" ref={mapRef} />
}