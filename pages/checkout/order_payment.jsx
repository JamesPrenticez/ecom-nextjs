import React from 'react'
import NextImage from 'next/image'
import { useImageLoader } from '../../components/hooks/useImageLoader'
import { useSelector } from 'react-redux';
import Stepper from '../../components/common/Stepper'

import getStripe from '../../components/helpers/getStripe'

export default function OrderPayment() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userContactInfo = useSelector((state) => state.userContactInfo);
  const userShippingInfo = useSelector((state) => state.userShippingInfo);

  const handleCheckout = () => {
    const stripe = await getStripe()
    const response = await fetch('/api/stripe0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems: cartItems
        //Do we need to pass userContactInfo & userShippingInfo?
        //userContactInfo: userContactInfo,
        //userShippingInfo: userShippingInfo
      })
    })
    
    if(response.statusCode === 500) return 

    const data = await response.json()
    
  }

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto border-x border-[#d9d9d9]">
      {/* --------- Container - Left ---------  */}
      <div className="w-1/2 p-6">
        <h1> Payment Method</h1>
        <Stepper activeStep={2} />
        <form 
          onSubmit={handleCheckout}
          className="grid grid-cols-6 gap-2 bg-red-500"
        >

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
                    loader={useImageLoader}
                    src={item.images[0]}
                    alt={item.name}
                    width={50}
                    height={50}
                    layout={"responsive"}
                    priority
                    placeholder="blur"
                    blurDataURL="/images/default.jpg"
                  />
                  {/* Quantity Badge */}
                  <div className="bg-gray-500 text-secondary-text rounded-full h-[1rem] w-[1rem] text-xs flex items-center justify-center absolute -right-2 -top-2">
                    {item.quantity}
                  </div>
                </div>

                <h3 className="font-normal grow">{item.name}</h3>
                <p className="font-bold">${item.price * item.quantity} </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
