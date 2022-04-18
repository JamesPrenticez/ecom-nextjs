import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import Stepper from '../../components/checkout/Stepper';
import InputText from '../../components/common/InputText';
import Map from '../../components/map/Map'

export default function Shipping() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [checked, setChecked] = useState(true);

  const router = useRouter();

  const defaultValues = {
    firstName: "James", // user.firstName
    lastName: "Bond", // user.lastName
    email: 'JamesBond@example.com', // user.email
  };

  const shippingAddress = {
    fullName: "James Prentice", 
    address: "2 Mission Cove",
    city: "Dunedin",
    postalCode: 9016,
    country: "New Zealand"
  }

  const userInfo = {
    fullName: "James Prentice", 
    address: "2 Mission Cove",
    city: "Dunedin",
    postalCode: 9016,
    country: "New Zealand"
  }


  const handleClickNewsletter = () => {
    console.log("user subbed to newletter")
  }

  // const {userInfo, cart: { shippingAddress }} = state;
  // const { location } = shippingAddress;

  const onSubmit  = (data) => {
    alert(JSON.stringify(data))
  }

  const chooseLocationHandler = () => {}

  // const submitHandler = ({ fullName, address, city, postalCode, country }) => {
  //   dispatch({
  //     type: 'SAVE_SHIPPING_ADDRESS',
  //     payload: { fullName, address, city, postalCode, country, location },
  //   });
  //   router.push('/payment');
  // };

  // const chooseLocationHandler = () => {
  //   const fullName = getValues('fullName');
  //   const address = getValues('address');
  //   const city = getValues('city');
  //   const postalCode = getValues('postalCode');
  //   const country = getValues('country');
  //   dispatch({
  //     type: 'SAVE_SHIPPING_ADDRESS',
  //     payload: { fullName, address, city, postalCode, country },
  //   });

  //   router.push('/map');
  // }

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto border-x border-[#d9d9d9]">
      {/* --------- Container - Left ---------  */}
      <div className="w-1/2 p-6">

      <h1> Shipping Details </h1>
      <Stepper activeStep={1} />
      <form 
        onSubmit={handleSubmit(onSubmit)}
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
          className="col-span-2"
          color="ring-primary-link"
          name="Email Address"
          value="email"
          register={register}
          errors={errors}
          mistakes={{
            required: {message: "email address required"}, 
            maxLength: {message: "maximum of 32 characters", value: 32}, 
          }}
        />

        {/* ---------- New Letter Checkbox ---------- */}
        <div className="col-span-2 flex items-center space-x-2">
          <input 
            type="checkbox"
            className="accent-primary-link text-secondary-text h-4 w-4"
            checked={checked}
            onClick={(e) => setChecked(e.target.checked)}
            {...register("newsletter")}
            />
          <label className="text-xs">Email me with new and offers</label>
        </div>

        {/* ---------- Shipping Address ---------- */}
        <h5 className="col-span-2 mt-6">Shipping Address</h5>

        {/* ---------- First Name ---------- */}
        <InputText
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
        />

        {/* ---------- Last Name ---------- */}
        <InputText
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
        />

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