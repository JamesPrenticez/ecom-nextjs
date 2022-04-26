import React, {useRef, useState} from "react"
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { LoginIcon, LogoutIcon, UserIcon } from "../icons/common"


function Hamburger({ session }){
  const [hamburger, setHamburger] = useState(true)
  const dropDownMenu = useRef(null);
  
  return (
        <div 
          className="ml-auto h-20 w-20 flex items-center justify-center cursor-pointer"
          onClick={() => setHamburger(!hamburger)}
        >
          {/* --------- top ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out opacity-0' : 'absolute mb-4 h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
          {/* --------- two in the middle ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out -rotate-45' : 'absolute h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-white rounded transform transition duration-500 ease-in-out rotate-45' : 'absolute h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out '}`}></span>
          {/* --------- bottom ---------*/}
          <span className={`${hamburger ? 'absolute h-1 w-7 bg-white transform transition duration-1000 ease-in-out opacity-0' : 'absolute mt-4 h-1 w-7 rounded bg-white transform transition duration-500 ease-in-out'}`}></span>
        </div>

        
          
          // {session ?
          // <>
          //   <Link href={`/user/${session?.user.email}`} passHref>
          //     <div 
          //     className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
          //     >
          //       ACCOUNT
          //       <UserIcon className="h-7" />
          //     </div>
          //   </Link>

          //   <div 
          //     onClick={signOut}
          //     className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
          //   >
          //     SIGN OUT
          //     <LogoutIcon className="h-7" />
          //   </div>
          // </> 
          // : // !session
          // <>
          //   <div 
          //     onClick={signIn}
          //     className="inline-flex justify-between w-full !text-left cursor-pointer p-4 text-xl font-bold text-green-600 hover:bg-green-600 hover:text-black box-border border-b border-green-600"
          //   >
          //     SIGN IN
          //     <LoginIcon className="h-7" />
          //   </div>
          // </>
          // }
    )
}

export default Hamburger