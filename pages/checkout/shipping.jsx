import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { useForm } from 'react-hook-form';

import CheckoutWizard from '../../components/CheckoutWizard';

export default function Shipping() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

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
    <Layout title="Shipping Address">
      <h1> Shipping Details </h1>
      <CheckoutWizard activeStep={1} />
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col-2 p-5 max-w-7xl mx-auto"
      >
      {/* Container - Left */}
      <div className="flex-col w-1/2 p-6">

        {/* ---------- First Name ---------- */}
        <label htmlFor="firstName" className="block mb-5">
          <h5 className="inline text-primary-text">First Name</h5>
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
            className={`shadow rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-2 ${errors.firstName ? "ring-red-500" : "ring-primary-link"}`}
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
        </label>

        {/* ---------- Last Name ---------- */}
        <label htmlFor="lastName" className="block mb-5">
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
        </label>

        {/* ---------- Email ---------- */}
        <label htmlFor="email" className="blck mb-5">
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
        </label>

      </div>



            {/* <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                  type="text"
                  id="fullName"
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  {...field}
                />
              )}
            ></Controller> */}



            {/* <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                  type="text"
                  id="address"
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'Address length is more than 1'
                        : 'Address is required'
                      : ''
                  }
                  {...field}
                ></input>
              )}
            ></Controller> */}

            {/* <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                  type="text"
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'City length is more than 1'
                        : 'City is required'
                      : ''
                  }
                  {...field}
                />
              )}
            ></Controller> */}

            {/* <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input  
                  type="text"
                  id="postalCode"
                  label="Postal Code"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? 'Postal Code length is more than 1'
                        : 'Postal Code is required'
                      : ''
                  }
                  {...field}
                />
              )}
            ></Controller> */}

            {/* <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                  type="text"
                  id="country"
                  label="Country"
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'Country length is more than 1'
                        : 'Country is required'
                      : ''
                  }
                  {...field}
                />
              )}
            ></Controller> */}

            <button
              type="button"
              onClick={chooseLocationHandler}
            >
              Choose on map
            </button>
            <p>
              {location.lat && `${location.lat}, ${location.lat}`}
            </p>
            <button variant="contained" type="submit">
              Continue
            </button>
      </form>
    </Layout>
  );
}