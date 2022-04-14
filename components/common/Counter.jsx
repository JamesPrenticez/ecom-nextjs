import React from 'react'

export default function Counter({value, min, max, boobs, handleChange}) {
  //console.log(value)
  return (
    <div className='flex'>
      <button disabled={value <= min} onClick={() => boobs(value - 1)} className={`${classNameButtons} w-12 bg-gray-300 p-2 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed`}>
        &ndash;
      </button>
      <input type="number" value={value} onChange={(e) => handleChange(e, min, max)} className="w-full text-center outline-none p-2"/>
        <button 
          disabled={value >= max} onClick={() => boobs(value + 1)} className={`${classNameButtons} w-12 bg-gray-300 p-2 rounded-tl-md rounded-bl-md disabled:cursor-not-allowed`}>
        &#43;
      </button>
  </div> 
  )
}
