import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import NextImage from 'next/image'

import Stepper from '../../components/checkout/Stepper';
import InputText from '../../components/common/InputText';

import { Wrapper, Status } from "@googlemaps/react-wrapper"
import GoogleAutoComplete from '../../components/map/GoogleAutoComplete';
//import GoogleMaps from '../../components/map/GoogleMaps';


import { useSelector } from 'react-redux';
import { GithubIcon } from '../../components/icons/GithubIcon';
import { GoogleIcon } from '../../components/icons/GoogleIcon';

const myApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY //this is currently public!
let defaultOptions = {
  center: {lat: 36.1699421, lng: -115.1398149}, // Las Vegas
  zoom: 11,
  disableDefaultUI: true, // remove controls
  gestureHandling: "none", // prevent mouse actions panning/scroll zooming
  keyboardShortcuts: false // prevents keyborad actions and removes annoying overlay in bottom right
}

export default function Shipping() {
  const { data: session } = useSession()
  const [showLogInForm, setShowLogInForm] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [contactInfo, setContactInfo] = useState(
    {
      firstName: {value: ""},
      lastName: {value: ""},
      email: {
        value: "",
        errors: {
          required: { message: "Email is required" },
          maxLength: { message: "Email is required", value: 64 },
          pattern1: {message: "", value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
        }
      },
      phoneNumber: {value: Number(0)},
      newsletter: {value: true},
    }
  )

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    street_number: "",
    street_name: "",
    suburb: "",
    city: "",
    state:"",
    country: "",
    postal_code: ""
  })

  const handleChangeContactInfo = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  
  const handleChangeShippingInfo = (event) => {
    setShippingInfo({ ...shippingInfo, [event.target.name]: event.target.value });
  };

  const onSubmit= () => {


    alert(JSON.stringify(contactInfo))
    alert(JSON.stringify(shippingInfo))
  } 

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <h1>LOADING</h1> //spinner
      case Status.FAILURE:
        return <h1>ERROR</h1> // error page
      case Status.SUCCESS:
        return (
        <>
          {/* NEED TO FIX SETADDRESS */}
          <GoogleAutoComplete options={options} setOptions={setOptions} handleChange={handleChangeShippingInfo} shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}/>
          {/* <GoogleMaps options={options} address={address} setOptions={setOptions}/> */}
        </>
        )
    }
  }
  console.log(session.user.email)

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto border-x border-[#d9d9d9]">
      {/* --------- Container - Left ---------  */}
      <div className="w-1/2 p-6">

      <h1> Shipping Details </h1>
      <Stepper activeStep={1} />
      <form 
        onSubmit={onSubmit}
        className="grid grid-cols-6 gap-2 "
      >
        {/* ---------- Contact Information / Already have an account ?---------- */}
        <h5 className="col-span-3">Contact Information</h5>

        {/* ---------- Option 2 - Not logged in then continue as guest ----------  */}
        { session ?
        <>
          <p className="col-span-3 text-xs ml-auto flex items-center">
            <span className="text-primary-link hover:cursor-pointer" onClick={signOut}>Sign Out</span>
          </p>
          <p className="col-span-6">Email: {session.user.email}</p>
          <p className="col-span-6">Name: {session.user.name}</p>
        </>
        : showLogInForm === false ?
          <>
            <p className="col-span-3 text-xs ml-auto flex items-center">
              Already have and account? &nbsp; <span className="text-primary-link hover:cursor-pointer" onClick={() => setShowLogInForm(!showLogInForm)}>Log In</span>
            </p>
            {/* ---------- Email ---------- */}
            <InputText
              name="email"
              label="Email Address"
              color="ring-primary-link"
              className="col-span-6"
              value={contactInfo.email.value}
              handleChange={handleChangeContactInfo}
            />

            {/* ---------- First Name ---------- */}
            <InputText
              name="firstName"
              label="First Name"
              color="ring-primary-link"
              className="col-span-3"
              value={contactInfo.firstName.value}
              handleChange={handleChangeContactInfo}
            />

            {/* ---------- Last Name ---------- */}
            <InputText
              name="lastName"
              label="Last Name"
              color="ring-primary-link"
              className="col-span-3"
              value={contactInfo.lastName.value}
              handleChange={handleChangeContactInfo}
            />
          </>

          //* ---------- Option 3 - Wants to log in ---------- 
          : showLogInForm && !session ?
          <>
            <p className="col-span-3 text-xs ml-auto flex items-center">
              <span className="text-primary-link hover:cursor-pointer" onClick={() => setShowLogInForm(!showLogInForm)}>Continue as guest</span>
            </p>

            <div className="col-span-6 flex w-full flex-wrap justify-center p-2 space-y-4">
              <button
                className="inline-flex items-center justify-center space-x-2 w-full border rounded-full p-2 text-lg border-black text-black hover:bg-black hover:text-white"
                onClick={() => signIn('github')}>
                <GithubIcon className="h-5 w-5 hover:cursor-pointer" />
                <p>Sign in with Github</p>
              </button>
              <button
                className="inline-flex items-center justify-center space-x-2 w-full border rounded-full p-2 text-lg border-black text-black hover:bg-blue-700 hover:text-white"
                onClick={() => signIn("google")}>
                <GoogleIcon className="h-5 w-5 hover:cursor-pointer" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </>
          : null
        }

        {/* ---------- Newsletter Checkbox ---------- */}
        <div className="col-span-6">
          <label className="flex items-center space-x-2 select-none">
            <input 
              type="checkbox"
              name="newsletter"
              className="accent-primary-link text-secondary-text h-4 w-4"
              defaultChecked={contactInfo.newsletter.value}
              onClick={(e) => setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })}
            />
            <small>Email me with new and offers</small>
          </label>
        </div>

        {/* ---------- Shipping Address ---------- */}
        <h5 className="col-span-6 mt-6">Shipping Address</h5>


        {/* ---------- Full Address using Google Auto Complete ---------- */}
        <div className="col-span-6 space-y-4">
          <Wrapper apiKey={myApiKey} render={render} libraries={["places"]}/> 
        </div>

        {/* ---------- street number ---------- */}
        {/* <InputText
          name="street_number"
          label="Street/Apartment Number"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.street_number}
          handleChange={handleChangeShippingInfo}
        /> */}

        {/* ---------- street name ---------- */}
        {/* <InputText
          name="street_name"
          label="Street Name"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.street_name}
          handleChange={handleChangeShippingInfo}
        /> */}

        {/* ---------- suburb ---------- */}
        <InputText
          name="suburb"
          label="Suburb"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.suburb}
          handleChange={handleChangeShippingInfo}
        />

        {/* ---------- city ---------- */}
        <InputText
          name="city"
          label="City"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.city}
          handleChange={handleChangeShippingInfo}
        />

        {/* ---------- country ---------- */}
        <InputText
          name="country"
          label="Country"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.country}
          handleChange={handleChangeShippingInfo}
        />

        {/* ---------- post code ---------- */}
        <InputText
          name="post_code"
          label="Post Code"
          color="ring-primary-link"
          className="col-span-3"
          value={shippingInfo.postal_code}
          handleChange={handleChangeShippingInfo}
        />

        {/* ---------- Continue Shopping Button ---------- */}
        {/* <button 
          className="col-span-3 text-center p-2 w-full border border-yellow-500 rounded-md text-yellow-500 mx-auto hover:bg-yellow-500 hover:text-secondary-text"
          type="submit"
        >
          Continue Shopping
        </button> */}

        {/* ---------- Proceed to Payment Button ---------- */}
        <button 
          className="col-span-6 text-center p-2 w-full border border-primary-action rounded-md text-primary-action mx-auto hover:bg-primary-action hover:text-secondary-text"
          type="submit"
        >
          Proceed to Payment
        </button>
       
        </form>
      </div>

      {/* --------- Container - Right ---------  */}
      <div className="flex-col w-1/2 p-6 bg-[#fafafa] border-l border-[#d9d9d9]">
        <h1>Product</h1>
        <div className="mt-12 grid gap-4">
          {cartItems.map((item) => {
            return (
                <div key={item.id} className="flex items-center space-x-2">
                  <div className="w-16 relative">
                    <NextImage
                      className="rounded-lg"
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      layout={"responsive"}
                    />
                    {/* Quantity Badge */}
                    <div className='bg-gray-500 text-secondary-text rounded-full h-[1rem] w-[1rem] text-xs flex items-center justify-center absolute -right-2 -top-2'>
                      {item.quantity}
                    </div>
                  </div>
       
                  <h3 className="font-normal grow">{item.name}</h3>
                  <p className="font-bold">${item.price} </p>

              </div>
            )
          })}
        </div>
      </div>


    </div>

  );
}