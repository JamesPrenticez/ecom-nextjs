import React from 'react'
import {data} from './data'
import { addressFormatter } from './addressFormatter'


export default function Test() {

  console.log(addressFormatter(data.address_components))

  return (
    <div>Test</div>
  )
}
