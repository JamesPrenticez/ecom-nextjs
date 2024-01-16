"use client"

import React from "react"
import { useRightMenu } from "@/components/Providers";

function Hamburger(){
  const { isRightMenuOpen, toggleRightMenu } = useRightMenu()
  const baseClass = "bg-black group-hover:bg-primary block h-[0.2rem] rounded-full transform transition-all duration-200 ease-in-out";

  return (
    <button 
      className="outline-none" 
      onClick={toggleRightMenu}
      aria-label="Navigation Menu"
    >
      <div className="block relative group">
        {/* top */}
        <span className={`${baseClass} mb-1 w-[30px] ${isRightMenuOpen && 'opacity-0'}`}></span>
        {/* two in the middle */}
        <span className={`${baseClass} absolute w-[30px] right-0 ${isRightMenuOpen && '-rotate-45'}`}></span>
        <span className={`${baseClass} absolute w-[30px] right-0 ${isRightMenuOpen && 'rotate-45'}`}></span>
        {/* bottom */}
        <span className={`${baseClass} mt-3 ml-auto w-[22px] ${isRightMenuOpen && 'opacity-0'}`}></span>
      </div>
    </button>
  )
}

export default Hamburger;