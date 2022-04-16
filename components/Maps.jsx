import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

const myApiKey = process.env.GOOGLE_API_KEY
//lat: -45.87250749878004, //North/South
//lng:  170.58633466961433 //East/West

let map

let location = {
  lat: -36.1699, //North/South
  lng:  115.1398 //East/West
}

let options = {
  center: location,
  zoom: 9
}

let defaultPlace = {
  lat: -36.1699, //North/South
  lng:  115.1398 //East/West
}

function MyMapComponent(){
  const [autoComplete, setAutoComplete] = useState(undefined)
  //const [place, setPlace] = useState(defaultPlace)
  const mapRef = useRef()
  const inputRef = useRef()

  // --------- Input --------- 
  useEffect(() => {
    // Instansiate the input field 
    // Takes two arguments 1. html element 2. an object with options
    // https://developers.google.com/maps/documentation/javascript/places-autocomplete
    // geometry = lat/lng
    if (inputRef.current && !autoComplete) {
      setAutoComplete(
        new google.maps.places.Autocomplete(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: ["US", "CA", "UK", "AU", "NZ"] },
          fields: ["geometry"],
        })
      );
    }
    
  }, [inputRef, autoComplete])

  useEffect(() => {
    let place

    if(autoComplete) {
      place = autoComplete.getPlace()
    }

    if(autoComplete && place){
      console.log(place)
      autoComplete.addListener("place_changed", () => {
        new google.maps.Marker({
          position: place.geometry.location,
          //title: place.address
        })
      })
    }
  })
  
  // --------- Map --------- 
  useEffect(() => {
    if(navigator.geolocation){
      //Nav.geo has a success callback and a erro call back depending if user allows us to read their location
      navigator.geolocation.getCurrentPosition(
      //Handle Success
      (userLocation) => {
        location.lat = userLocation.coords.latitude,
        location.lng = userLocation.coords.longitude
        // Write map with user location
        map = new window.google.maps.Map(mapRef.current, options)
        console.log("Success")
      },
      //Handle Error
      (err) => {
          console.log("User declined geolocation access", err)
          map = new window.google.maps.Map(mapRef.current, options)
        }
      )
    }else {
      map = new window.google.maps.Map(mapRef.current, options)
    }  
  })

  return (
    <>
      <input type="text" className="w-64 h-12" ref={inputRef} />
      <div className="h-64 w-64" ref={mapRef}  />
    </>
  )
}

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h1>LOADING</h1>
    case Status.FAILURE:
      return <h1>ERROR</h1>
    case Status.SUCCESS:
      return <MyMapComponent />
  }
}

export default function Maps() {
  return (
    <Wrapper apiKey="AIzaSyC8ylALbEGioCRfyRgRaYPryTZwd4frXyQ" render={render} libraries={["places"]}/>
  )
}

//https://stackoverflow.com/questions/70464613/google-maps-react-wrapper-places-api