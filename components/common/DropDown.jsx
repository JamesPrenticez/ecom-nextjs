import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "../icons/Chevron";

function DropDown({
  value,
  onChange,
  items,
  selectClassName,
  optionsClassName,
  itemClassName,
}) {
  const [isOpen, setIsOpen] = useState(false);
  let currentIcon = items.find((item) => item.name == value).icon;

  return (
    <>
      {/* Select */}
      <div
        className={`${selectClassName} relative select-none cursor-pointer rounded-md bg-green-600`}
      >
        <div
          className="flex justify-between items-center space-x-2"
          onClick={() => setIsOpen(!isOpen)}
          value={value}
        >
          <div className="rounded-full h-[2rem] w-[2rem] border-none flex items-center justify-center object-cover">
            <img className="h-[1rem] w-[1rem]" src={currentIcon} alt={value} />
          </div>

          <p className="grow">{value}</p>

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
          className={`${
            isOpen ? "block" : "invisible"
          } ${optionsClassName} absolute z-50 mt-1 shadow-md`}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Option Items*/}
          {items.map((item) => {
            return (
              <div
                key={item.name}
                value={item.name}
                onClick={() => {
                  onChange(item.name), setIsOpen(false);
                }}
                className={`${itemClassName} p-2`}
              >
                <div className="flex justify-between items-center space-x-2">
                  {item.icon && (
                    <div className="rounded-full h-[1.5rem] w-[1.5rem] border-none flex items-center justify-center object-cover">
                      <img
                        className="h-[1rem] w-[1rem]"
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>
                  )}
                  <p className="w-full">{item.name}</p>
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