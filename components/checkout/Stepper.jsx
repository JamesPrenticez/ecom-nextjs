import React from 'react'
import { useRouter } from 'next/router'
import ChevronRight from '../icons/ChevronRight';

const steps = [
  { id: 0, name: "Cart", href: "/cart"},
  { id: 1, name: "Shipping Address", href: "/shipping"},
  { id: 2, name: "Payment Method", href: "/payment"},
  { id: 3, name: "Place Order", href: "/confirmation"},
]

export default function Stepper({ activeStep = 0 }) {
  const router = useRouter()

  const handleClick = (step, href) => {
    if(step > activeStep) return
    if(step < activeStep) router.push(href)
  }

  return (
    <div className="flex  text-sm">
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
            <ChevronRight className={`${step.id === steps.length -1 && "hidden"} h-3 w-3 mx-1 `}/>
          </div>
        )
      )}
    </div>
  )
}