import React from "react";

function DropDown({items, onChange, value}) {
  return (
    <div>
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
    </div>
  );
}

export default DropDown;
