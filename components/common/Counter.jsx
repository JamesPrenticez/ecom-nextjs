import React from 'react'

export default function Counter({item, handleClick, handleChange}) {
  console.log(item)
  const currQty = item.quantity
  const min = 1
  const max = item.numInStock

  return (
    <div className='flex'>
      <button disabled={currQty <= min} onClick={() => handleClick(item, currQty - 1)} className="w-12 bg-gray-300 p-2 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed">
        &ndash;
      </button>
      <input type="number" value={currQty} onChange={(e) => handleChange(e, item, min, max)} className="text-center outline-none p-2"/>
        <button 
          disabled={currQty >= max} onClick={() => handleClick(item, currQty + 1)} className="w-12 bg-gray-300 p-2 rounded-tr-md rounded-br-md disabled:cursor-not-allowed">
        &#43;
      </button>
  </div> 
  )
}
