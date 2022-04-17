import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMaps from './GoogleMaps';
import GoogleAutoComplete from './GoogleAutoComplete'

const myApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h1>LOADING</h1>
    case Status.FAILURE:
      return <h1>ERROR</h1>
    case Status.SUCCESS:
      return (
      <div className='w-64'>
        <GoogleAutoComplete />
        <GoogleMaps />
      </div>
      )
  }
}

export default function Maps() {
  return (
    <Wrapper apiKey={myApiKey} render={render} libraries={["places"]}/>
  )
}

//https://stackoverflow.com/questions/70464613/google-maps-react-wrapper-places-api
// Takes two arguments 1. html element 2. an object with options
// https://developers.google.com/maps/documentation/javascript/places-autocomplete
// geometry = lat/lng