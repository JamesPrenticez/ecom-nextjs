import React, { useEffect, useRef } from 'react'
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

function MyMapComponent(){
  const ref = useRef();

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   let userLocation = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   }
      
      //console.log("Latitude is :", position.coords.latitude)
      //console.log("Longitude is :", position.coords.longitude)
    //})

    if(navigator.geolocation){
      //Nav.geo has a success callback and a erro call back depending if user allows us to read their location
      navigator.geolocation.getCurrentPosition(
      //Handle Success
      (userLocation) => {
        location.lat = userLocation.coords.latitude,
        location.lng = userLocation.coords.longitude
        // Write map with user location
        map = new window.google.maps.Map(ref.current, options);
        console.log("Success")
      },
      //Handle Error
      (err) => {
        console.log("User declined geolocation access")
        map = new window.google.maps.Map(ref.current, options);
        }
      )
    }else {
      map = new window.google.maps.Map(ref.current, options);

    }
    
  }, []);

  return <div className="h-64 w-64" ref={ref} id="map" />
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
    <Wrapper apiKey="AIzaSyC8ylALbEGioCRfyRgRaYPryTZwd4frXyQ" render={render}/>
  )
}
