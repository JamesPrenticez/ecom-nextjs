import React from 'react'
import { Plus } from '../icons/Plus'
import { Minus } from '../icons/Minus'

export default function Counter({className, item, quantity, handleClick}) {
  const currQty = quantity
  const min = 1
  const max = item.numInStock

  return (
    <div className={`${className} flex items-center`}>
      <button 
        disabled={currQty <= min} onClick={() => handleClick(item, currQty - 1)}
        className="flex items-center bg-gray-300 text-white rounded-md h-[1.5rem] w-[1.5rem] p-1 disabled:cursor-not-allowed"
      >
        <Minus className="h-full w-full"/>
      </button>
      <div 
        contentEditable="true"
        suppressContentEditableWarning={true}
        type="number"
        value={currQty}
        className="flex text-center justify-center outline-none py-1 px-3 text-[1rem] " 
      >
        {currQty}
      </div>
      <button 
        disabled={currQty >= max} 
        onClick={() => handleClick(item, currQty + 1)}
        className="flex items-center bg-gray-300 text-white rounded-md h-[1.5rem] w-[1.5rem] p-1 disabled:cursor-not-allowed"
      >
        <Plus className="h-full w-full"/>
      </button>
  </div> 
  )
}
