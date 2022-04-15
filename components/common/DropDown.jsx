import React, {useState} from "react";

function ChevronUpIcon({className}){
  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
  )
}

function ChevronDownIcon({className}){
  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
  )
}

function DropDown({value, onChange, items, icons, selectClassName, optionsClassName, itemClassName}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    {/* Select */}
      <div className={`${selectClassName} relative w-full select-none cursor-pointer rounded-md`}>
        <div
          className="flex justify-between items-center w-full gap-1 cursor-pointer transform transition-all hover:scale-110 duration-150 ease-in-out select-none"
          onClick={() => setIsOpen(!isOpen)} value={value}>
          <div className="flex items-center gap-1">
            {icons && 
              <div className="rounded-full h-[1.25rem] w-[1.25rem] border-none flex items-center justify-center object-cover overflow-hidden">
                <img className="scale-[135%]"
                  src={icons.find(icon => icon.name == value).icon}
                  alt={icons.find(icon => icon.name == value).name}
                  />
              </div>
            }
            <p>{value}</p>
 
            {isOpen ?
              <ChevronDownIcon onClick={() => setIsOpen(false)} className="h-[1.25rem] w-[1.25rem]"/>
              :
              <ChevronUpIcon onClick={() => setIsOpen(true)} className="h-[1.25rem] w-[1.25rem]"/>
            }
          </div>
        </div>

      {/* Options */}
      <div 
        className={`${isOpen ? 'hidden' : 'block'} ${optionsClassName} absolute z-50 mt-1 w-full shadow-md`}
        onMouseLeave={() => setIsOpen(!false)}
      >
        {/* Option Items*/}
        {items.map((item) => {
          return (
            <div 
              key={item}
              value={item}
              onClick={() => {onChange(item), setIsOpen(!false)}}
              className={`${itemClassName} p-2`}
            >
              <div className="flex items-center space-x-2">
                {icons && 
                  <div className="rounded-full h-[2rem] w-[2rem] border-none flex items-center justify-center object-cover">
                    <img className="h-[6rem] w-[6rem] scale-[135%]"
                      src={icons.find(icon => icon.name == item).icon}
                      alt={icons.find(icon => icon.name == item).name}
                    />
                  </div>
                }
                <p>{item}</p>
              </div>
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