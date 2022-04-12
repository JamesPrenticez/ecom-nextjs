import React, {useState} from 'react'
import DropDown from './DropDown'

export default function CurrencySelector({countries}) {
  const [current, setCurrent] = useState("New Zealand");
  
  const handleCurrencyChange = (item) => {
    setCurrent(item)
  };

  return (
    <DropDown 
      className="border border-red-500"
      items={countries.map(countires => countires.name)}
      value={current}
      onChange={handleCurrencyChange}
    />
  );
}