import React, {useState} from 'react'
import { CrossIcon } from '../icons/common'

const toastList = [
  {message: "toast 1"},
  {message: "toast 2"},
]

function Toast({key, type, message}) {
  const [active, setActive] = useState(true)


  return (
    <div className={`
      fixed h-[4rem] w-[16rem] bg-white text-primary-text drop-shadow-[0px_3px_10px_rgba(54,54,54,0.25)] rounded-md p-4
      top-0 left-[50%] -translate-x-[50%]
      transform transition duration-700 ease-in-out 
      ${active ? 'translate-y-[2rem]' : '-translate-y-[4rem]'}
    `}>
      <div className="flex">
        <p>
          {message}
        </p>
        <button className="ml-auto" onClick={() => setActive(!active)}>
          <CrossIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default function Toaster(){
  return (
    <>
      {toastList.map((toast, index) => (
        <Toast 
          key={index}
          type={toast.type}
          message={toast.message}
        />
      ))}
    </>
  )
}