import React, {useState} from "react";

function ChevronLeftIcon({className}){
  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  )
}

function ChevronDownIcon({className}){
  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
  )
}


function DropDown({items, value, onChange, className}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    <div className={`${className} relative w-full bg-white select-none cursor-pointer rounded-md `}>

      <div className="flex justify-between items-center w-full p-2 " onClick={() => setIsOpen(!isOpen)} value={value}>
        {value}
        {isOpen ?
            <ChevronLeftIcon onClick={() => setIsOpen(true)} className='h-[1rem] w-[1rem] cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
            :
            <ChevronDownIcon onClick={() => setIsOpen(false)} className='h-[1rem] w-[1rem] cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
        }
      </div>

      <div 
        className={`${isOpen ? 'hidden' : 'block'}  absolute z-50 mt-1 bg-white w-full shadow-md`}
        onMouseLeave={() => setIsOpen(!false)}
      >
        {items.map((item) => {
          return (
            <div 
              key={item}
              value={item}
              onClick={() => {onChange(item), setIsOpen(!false)}}
              className='p-2 hover:bg-primary-hover hover:text-secondary-text'
            >
              {item}
            </div>
            )
          })}
      </div>
    </div>
  </>
  );
}

export default DropDown;

    {/* <div className="custom-select w-full h-20">
      <select
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-md outline-none cursor-pointer"
        >
        {items.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
            );
          })}
      </select>
    </div> */}