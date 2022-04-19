import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import Stepper from '../../components/checkout/Stepper';
import InputText from '../../components/common/InputText';

import { Wrapper, Status } from "@googlemaps/react-wrapper"
import GoogleAutoComplete from '../../components/map/GoogleAutoComplete';
import Map from '../../components/map/Map'
import GoogleMaps from '../../components/map/GoogleMaps';

const myApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY //this is currently public!
let defaultOptions = {
  center: {lat: 36.1699421, lng: -115.1398149}, // Las Vegas
  zoom: 9,
  disableDefaultUI: true, // remove controls
  gestureHandling: "none", // prevent mouse actions panning/scroll zooming
  keyboardShortcuts: false // prevents keyborad actions and removes annoying overlay in bottom right
}

export default function Shipping() {
  const [options, setOptions] = useState(defaultOptions)
  const [address, setAddress] = useState("") // this need to be fixed in GoogleAutoComplete

  const [contactInfo, setContactInfo] = useState(
    {
      email: "",
      firstName: "",
      lastName: "",
      address: ""
    }
  )
  
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const onSubmit= () => {
    const data = contactInfo
    alert(JSON.stringify(data))
  } 

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <h1>LOADING</h1> //spinner
      case Status.FAILURE:
        return <h1>ERROR</h1> // error page
      case Status.SUCCESS:
        return (
        <div className="col-span-2">
          <GoogleAutoComplete setOptions={setOptions} setAddress={setAddress} handleChange={handleChange} value={contactInfo.address}/>
          <GoogleMaps options={options} address={address} setOptions={setOptions}/>
        </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto border-x border-[#d9d9d9]">
      {/* --------- Container - Left ---------  */}
      <div className="w-1/2 p-6">

      <h1> Shipping Details </h1>
      <Stepper activeStep={1} />
      <form 
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-2 "
      >
        {/* ---------- Contact Information / Already have an account ?---------- */}
        <h5 className="col-span-1">Contact Information</h5>
        <p className="col-span-1 text-xs ml-auto flex items-center">
          Already have an account? &nbsp;
          <span className="text-primary-link hover:cursor-pointer" onClick={signIn}>Log In</span>
        </p>

        {/* ---------- Email ---------- */}
        <InputText
          name="email"
          value={contactInfo.email}
          className="col-span-2"
          color="ring-primary-link"
          label="Email Address"
          handleChange={handleChange}
        />

        {/* ---------- New Letter Checkbox ---------- */}
        <div className="col-span-2 flex items-center space-x-2">
          <input 
            type="checkbox"
            name="newsletter"
            className="accent-primary-link text-secondary-text h-4 w-4"
            defaultChecked={contactInfo.newsletter}
            onClick={(e) => setContactInfo({ ...contactInfo, [e.target.name]: e.target.checked })}
          />
          <label className="text-xs">Email me with new and offers</label>
        </div>

        {/* ---------- Shipping Address ---------- */}
        <h5 className="col-span-2 mt-6">Shipping Address</h5>

        {/* ---------- First Name ---------- */}
        {/* <InputText
          className="col-span-1"
          color="ring-primary-link"
          name="First Name"
          value="firstName"
          register={register}
          errors={errors}
          mistakes={{
            required: {message: "first name required"}, 
            maxLength: {message: "maximum of 32 characters", value: 32}, 
          }}
        /> */}

        {/* ---------- Last Name ---------- */}
        {/* <InputText
          className="col-span-1"
          color="ring-primary-link"
          name="Last Name"
          value="lastName"
          register={register}
          errors={errors}
          mistakes={{
            required: {message: "last name required"}, 
            maxLength: {message: "maximum of 32 characters", value: 32}, 
          }}
        /> */}

        <Wrapper apiKey={myApiKey} render={render} libraries={["places"]}/> 


        {/* ---------- Submit Button ---------- */}
        <button 
          className="text-center p-2 w-full border border-primary-action rounded-md text-primary-action mx-auto hover:bg-primary-action hover:text-secondary-text"
          type="submit"
        >
          Continue
        </button>

        {/* ---------- First Name ---------- */}
        {/* <label htmlFor="firstName" className="mb-5 cols-span-1 bg-purple-500 ">
          <h5 className="text-primary-text">First Name</h5>
          {errors.firstName && (
            <>
              <small className="text-red-500 italic">- &nbsp;
                { errors.firstName.type === "required" ? errors.firstName.message
                  : errors.firstName.type === "maxLength" ? errors.firstName.message
                  : null }
              </small>
            </>
            )
          }
          <input
            type="text"
            className={`shadow rounded py-2 px-3 mt-1 block w-1/2 outline-none focus:ring-2 ${errors.firstName ? "ring-red-500" : "ring-primary-link"}`}
            defaultValue={defaultValues.firstName}
            placeholder="firstname"
            {...register("firstName", 
              { required: "first name required",
                maxLength: { 
                  value: 32,
                  message: "maximum of 32 characters"
                },
              }
            )}
          />
        </label> */}

        {/* ---------- Last Name ---------- */}
        {/* <label htmlFor="lastName" className="inline w-1/2 mb-5">
          <h5 className="inline text-primary-text">Last Name</h5>
          {errors.lastName && (
            <>
              <small className="text-red-500 italic">- &nbsp;
                { errors.lastName.type === "required" ? errors.lastName.message
                  : errors.lastName.type === "maxLength" ? errors.lastName.message
                  : null }
              </small>
            </>
            )
          }
          <input
            type="text"
            className={`shadow rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-2 ${errors.lastName ? "ring-red-500" : "ring-primary-link"}`}
            defaultValue={defaultValues.lastName}
            placeholder="lastname"
            {...register("lastName", 
              { required: "last name required",
                maxLength: { 
                  value: 32,
                  message: "maximum of 32 characters"
                },
              }
            )}
          />
        </label> */}

        {/* ---------- Email ---------- */}
        {/* <label htmlFor="email" className="blck mb-5">
          <h5 className="text-primary-text">Email Address</h5>
          {errors.email && (
            <>
              <small className="text-red-500 italic">- &nbsp;
                { errors.email.type === "required" ? errors.email.message
                  : errors.email.type === "maxLength" ? errors.email.message
                  : errors.email.type === "pattern" ? errors.email.message
                  : null }
              </small>
            </>
            )
          }
          <input
            type="text"
            className={`shadow rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-2 ${errors.firstName ? "ring-red-500" : "ring-primary-link"}`}
            defaultValue={defaultValues.email}
            placeholder="email@example.com"
            {...register("email", 
              { required: "email address required",
                maxLength: { 
                  value: 64,
                  message: "maximum of 64 characters"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email is contains invalid characters"
                }
              }
            )}
          />
        </label> */}

        {/* <button
              type="button"
              onClick={chooseLocationHandler}
            >
              Choose on map
            </button>
            <p>
              {location.lat && `${location.lat}, ${location.lat}`}
            </p> */}

        </form>
      </div>

      {/* --------- Container - Right ---------  */}
      <div className="flex-col w-1/2 p-6 bg-[#fafafa] border-l border-[#d9d9d9]">
        <h1>Product</h1>
      </div>


    </div>

  );
}