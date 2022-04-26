import React, { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "../icons/Chevron";
import { useInitialDimensions } from "../hooks/useInitialDimensions"

function DropDown({
  value,
  onChange,
  items,
  selectClassName,
  optionsClassName,
  itemClassName,
}) {
  const [isOpen, setIsOpen] = useState(false);
  let currentIcon = items.find((item) => item.name == value)?.icon;
  
  const childRef = useRef()
  const { width, height } = useInitialDimensions(childRef)

  return (
    <>
      {/* Select */}
      <div
        className={`${selectClassName} select-none cursor-pointer border rounded-md`}
        style={{width: width}}
      >
        <div
          className="flex justify-between items-center space-x-2 p-1"
          onClick={() => setIsOpen(!isOpen)}
          value={value}
        >
          <div className="rounded-full h-[2rem] w-[2rem] border-none flex items-center justify-center object-cover">
            <img className="h-[1rem] w-[1rem]" src={currentIcon} alt={value} />
          </div>

          <p className="w-full">{value}</p>

          {isOpen ? (
            <ChevronDown
              onClick={() => setIsOpen(true)}
              className="h-[1.25rem] w-[1.25rem]"
            />
          ) : (
            <ChevronUp
              onClick={() => setIsOpen(false)}
              className="h-[1.25rem] w-[1.25rem]"
            />
          )}
        </div>

        {/* Options */}
        <div
          //ref={childRef}
          className={`${
            isOpen ? "block" : "invisible"
          } ${optionsClassName} absolute z-50 mt-1 shadow-md`}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Item*/}
          {items.map((item) => {
            return (
              <div
              ref={childRef}
                key={item.name}
                value={item.name}
                onClick={() => {
                  onChange(item.name), setIsOpen(false);
                }}
                className={`${itemClassName} p-1`}
              >
                <div className="flex justify-between items-center space-x-2">
                  {item.icon && (
                    <div className="rounded-full h-[2rem] w-[2rem] border-none flex items-center justify-center object-cover">
                      <img
                        className="h-[1rem] w-[1rem]"
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>
                  )}
                  <p className="w-full">{item.name}</p>
                  <ChevronUp className="h-[1.25rem] w-[1.25rem] text-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DropDown;