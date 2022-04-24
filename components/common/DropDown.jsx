import React, {useState} from "react";
import { ChevronUp, ChevronDown } from '../icons/Chevron'

function DropDown({value, onChange, items, selectClassName, optionsClassName, itemClassName}) {
  const [isOpen, setIsOpen] = useState(true)

  //console.log(items)

  return (
    <>
    {/* Select */}
      <div className={`${selectClassName} relative w-full select-none cursor-pointer rounded-md`}>
        <div
          className="flex justify-between items-center w-full gap-1 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)} value={value}>
          <div className="flex items-center gap-1">
            {/* {true && 
              <div className="rounded-full h-[1.25rem] w-[1.25rem] border-none flex items-center justify-center object-cover overflow-hidden">
                <img className="scale-[135%]"
                  src={items.find(item => item.icon == value)}
                  alt={value}
                />
              </div>
            } */}
            <p>{value}</p>
 
            {isOpen ?
              <ChevronDown onClick={() => setIsOpen(false)} className="h-[1.25rem] w-[1.25rem]"/>
              :
              <ChevronUp onClick={() => setIsOpen(true)} className="h-[1.25rem] w-[1.25rem]"/>
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
              key={item.name}
              value={item.name}
              onClick={() => {onChange(item.name), setIsOpen(!false)}}
              className={`${itemClassName} p-2`}
            >
              <div className="flex items-center space-x-2">
                {/* {item.icon && 
                  <div className="rounded-full h-[2rem] w-[2rem] border-none flex items-center justify-center object-cover">
                    <img className="h-[6rem] w-[6rem] scale-[135%]"
                      src={item.icon}
                      alt={item.name}
                    />
                  </div>
                } */}
                <p>{item.name}</p>
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