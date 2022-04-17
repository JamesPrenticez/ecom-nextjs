import React, {useState} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import GoogleMaps from './GoogleMaps'
import GoogleAutoComplete from './GoogleAutoComplete'

let defaultOptions = {
  center: {lat: 36.1699421, lng: -115.1398149}, // Las Vegas
  zoom: 9
}

export default function Maps() {
  const [options, setOptions] = useState(defaultOptions)
  const [address, setAddress] = useState(null)

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
          <GoogleMaps options={options} address={address} setOptions={setOptions}/>
          <GoogleAutoComplete setOptions={setOptions} setAddress={setAddress}/>
        </div>
        )
    }
  }

  return (
    <Wrapper apiKey={myApiKey} render={render} libraries={["places"]}/>
  )
}