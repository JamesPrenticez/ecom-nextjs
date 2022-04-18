import React from 'react';
import ChevronRight from '../icons/ChevronRight';

const steps = [
  { id: 0, name: "Login"},
  { id: 1, name: "Shipping Address"},
  { id: 2, name: "Payment Method"},
  { id: 3, name: "Place Order"},
]

export default function Stepper({ activeStep = 0 }) {
  return (
    <div className="flex  text-sm">
      {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center my-4"
          >
            <p className={`${step.id === activeStep && "font-bold"}`}>
              {step.name}
            </p>
            <ChevronRight className={`${step.id === steps.length -1 && "hidden"} h-3 w-3 mx-1 `}/>
          </div>
        )
      )}
    </div>
  )
}