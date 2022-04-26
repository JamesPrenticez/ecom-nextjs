import React, {useRef, useState} from "react"
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { CartIcon, LoginIcon, LogoutIcon, UserIcon } from "../icons/common"

function Hamburger({ session }){
  const [hamburger, setHamburger] = useState(false)
  const dropDownMenu = useRef(null);

  const handleClickHamburger = () => {
    if(!hamburger) document.body.style.overflowY = "hidden"
    else document.body.style.overflowY = "scroll";
    setHamburger(!hamburger)
  }
  
  return (
    <>
      <div 
        className="flex md:hidden h-20 w-7 pl-4 items-center justify-center cursor-pointer"
        onClick={handleClickHamburger}
        >
        {/* --------- top ---------*/}
        <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
        {/* --------- two in the middle ---------*/}
        <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
        <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out '}`}></span>
        {/* --------- bottom ---------*/}
        <span className={`${hamburger ? 'absolute h-1 w-7 bg-white transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
      </div>

      <div className={`md:hidden bg-gray-600 h-screenNav w-full fixed top-[4rem] -left-full z-50 ${hamburger ? 'transform transition duration-700 ease-in-out translate-x-full' : 'transform transition duration-700 ease-in-out -translate-x-full'}`}> 
        <div className="bg-primary-background h-screenNav"> 
        
        {}
          <Link href={`/user/${session?.user.email}`} passHref>
            <a className="hamburgerItem">
              Cart
              <CartIcon className="h-7" />
            </a>
          </Link>


        {session ?
        <>
          <Link href={`/user/${session?.user.email}`} passHref>
            <a className="hamburgerItem">
              Settings
              <UserIcon className="h-7" />
            </a>
          </Link>

          <div 
            onClick={signOut}
            className="hamburgerItem"
          >
            Logout
            <LogoutIcon className="h-7" />
          </div>
        </> 
        : // !session
        <>
          <div 
            onClick={signIn}
            className="hamburgerItem"
          >
            Login
            <LoginIcon className="h-7" />
          </div>
        </>
        }          
        </div>
      </div>
    </>
  )
}

export default Hamburger