import React, {useState} from 'react'
import DropDown from './DropDown'

export default function CountrySelector({items}) {
  console.log(items)
  const [current, setCurrent] = useState("New Zealand");
  
  const handleCurrencyChange = (item) => {
    setCurrent(item)
  };

  return (
    <div className='inline-flex'>
      <DropDown 
        className="border border-red-500 bg-green-500 text-black space-x-4"
        items={items}
        value={current}
        //icons={countries.map((country) => {return ({name: country.name, icon: country.flag})})}
        onChange={handleCurrencyChange}
      />
    </div>
  );
}