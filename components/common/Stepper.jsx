import React from 'react'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '../icons/common';

const steps = [
  { id: 0, name: "Cart", href: "/cart"},
  { id: 1, name: "Order Details", href: "/checkout/order_details"},
  { id: 2, name: "Payment Method", href: "/checkout/order_payment"},
  { id: 3, name: "Confirm Order", href: "/checkout/confirmation"},
]

export default function Stepper({ activeStep = 0 }) {
  const router = useRouter()

  const handleClick = (step, href) => {
    if(step > activeStep) return
    if(step < activeStep) router.push(href)
  }

  return (
    <div className="flex text-xs">
      {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center my-4"
          >
            <a 
              className={`${step.id === activeStep && "font-bold"} ${step.id < activeStep && "cursor-pointer hover:text-primary-link" }`}
              onClick={() => handleClick(step.id, step.href)}
            >
              {step.name}
            </a>
            <ChevronRightIcon className={`${step.id === steps.length -1 && "hidden"} h-[.75rem] w-[.75rem] mx-1 `}/>
          </div>
        )
      )}
    </div>
  )
}