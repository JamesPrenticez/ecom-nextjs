"use client"
import React, { useState } from "react"
import { CrossIcon, HamburgerIcon } from "../icons/commonIcons";

function Hamburger(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button 
      className="text-black md:hidden ml-auto focus-visible:outline-ring" 
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label="Navigation Menu"
    >
      <div className="block relative">
        {isOpen ? (
          <HamburgerIcon height={32} width={32} />
        ) : (
          <CrossIcon height={32} width={32} />
        )}
      </div>
    </button>
  )
}

export default Hamburger;