import React from 'react'

function Minus({className}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  )
}

function Plus({className}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

export default function Counter({item, handleClick, handleChange}) {
  console.log(item)
  const currQty = item.quantity
  const min = 1
  const max = item.numInStock

  return (
    <div className='flex'>
      <button 
        disabled={currQty <= min} onClick={() => handleClick(item, currQty - 1)}
        className="bg-gray-300 p-1 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed"
      >
        <Minus className="h-[1rem] w-[1rem]"/>
      </button>
      <div 
        contenteditable="true"
        type="number"
        value={currQty || min}
        onChange={(e) => handleChange(e, item, min, max)}
        className="flex text-center justify-center outline-none py-1 text-[1rem] w-[3rem]" 
      >
        {currQty || min}
      </div>
      <button 
        disabled={currQty >= max} 
        onClick={() => handleClick(item, currQty + 1)}
        className="bg-gray-300 p-1 rounded-tr-md rounded-br-md disabled:cursor-not-allowed"
      >
        <Plus className="h-[1rem] w-[1rem]"/>
      </button>
  </div> 
  )
}
