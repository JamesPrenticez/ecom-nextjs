import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Controller, useForm } from 'react-hook-form';
import CheckoutWizard from '../../components/CheckoutWizard';

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const router = useRouter();

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

  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, []);

  const submitHandler = () => {}
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
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)} className="">
        <h1> Shipping Details </h1>
            <Controller
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
            ></Controller>
            <Controller
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
                  // helperText={
                  //   errors.address
                  //     ? errors.address.type === 'minLength'
                  //       ? 'Address length is more than 1'
                  //       : 'Address is required'
                  //     : ''
                  // }
                  {...field}
                ></input>
              )}
            ></Controller>
            <Controller
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
                  // helperText={
                  //   errors.city
                  //     ? errors.city.type === 'minLength'
                  //       ? 'City length is more than 1'
                  //       : 'City is required'
                  //     : ''
                  // }
                  {...field}
                />
              )}
            ></Controller>
            <Controller
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
                  // helperText={
                  //   errors.postalCode
                  //     ? errors.postalCode.type === 'minLength'
                  //       ? 'Postal Code length is more than 1'
                  //       : 'Postal Code is required'
                  //     : ''
                  // }
                  {...field}
                />
              )}
            ></Controller>
            <Controller
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
                  // helperText={
                  //   errors.country
                  //     ? errors.country.type === 'minLength'
                  //       ? 'Country length is more than 1'
                  //       : 'Country is required'
                  //     : ''
                  // }
                  {...field}
                />
              )}
            ></Controller>
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