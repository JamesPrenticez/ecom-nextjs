"use client"

import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import LogoAndName from '@/components/layout/LogoAndName';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationPages } from "@/constants/settings"
import { ShoppingCartIcon, CrossIcon, HamburgerIcon } from '../icons/commonIcons';
import { Button } from '../ui/button';
import { NewZealandFlagIcon } from '../icons/countryIcons'; // TODO hook to locale data
import { User2Icon } from 'lucide-react';
import Cart from '../cart/Cart';

function Navbar() {

  return (
    <div className="bg-white ">
      <MaxWidthWrapper>
        <header className="flex items-center h-[4rem] px-2 sm:px-4">
          <LogoAndName />
          <Hamburger />
          <div className="flex ml-auto">


            <NavigationTextItems />
            <NavigationIconItems />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar;

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

function NavigationTextItems(){
  const currentPath = usePathname();
  return (
    <div className="hidden md:flex">
      {navigationPages.map((page) => (
        <Link
          key={page.name} 
          href={page.slug}
          className={cn(`
            px-4 h-[4rem] flex items-center justify-center
            text-foreground/70 hover:text-foreground font-medium uppercase 
            border-2 border-transparent hover:border-blue-500/70 rounded-sm
          `, currentPath === page.slug ? "text-primary" : "")}
        >
          <p className="mt-[4px]">{page.name}</p>
        </Link>
      ))}
    </div>
  )
}

function NavigationIconItems(){
  return (
            // <div key={page.name} className='w-32 h-[4rem] flex items-center justify-center border-2 hover:border-red-500'>
    <div className="hidden md:flex">
 
        
      {/* <LocationButton /> */}
      {/* <CartButton /> */}
      <Cart />
      {/* <UserButton /> */}
    </div>
  )
}

function CartButton(){
  // const cartItems = useSelector((state) => state.cart.cartItems)
  const cartItems =  ["","","","",""]
  const itemsCount = cartItems.length

  return (
    <Link
      href={"/cart"}
      className="
        px-4 h-[4rem] flex items-center justify-center
        text-foreground hover:text-foreground/70 font-medium uppercase 
        border-2 border-transparent hover:border-blue-500/70 rounded-sm
        group
      "
    >
      <div className="relative group-hover:scale-110 transform transition-all duration-300 ease-in-out">
        <ShoppingCartIcon 
          className="text-foreground -translate-x-[2px]"
          width={28}
          height={28}
        />

        {itemsCount > 0 && (
          <span 
            className="
              absolute -top-[4px] -right-[8px] 
              w-[18px] h-[18px] text-[12px] min-w-[1em]
              flex items-center justify-center 
              bg-danger text-danger-foreground font-medium rounded-full text-center 
            ">
            {itemsCount}
          </span>
        )}
      </div>
    </Link>
  )
}

function UserButton(){
  const isAuthenticated = false

  return (
    isAuthenticated ? (
      <Link 
        href="/profile"
        className="
          relative
          text-foreground hover:text-foreground/70
          cursor-pointer select-none 
          border-2 border-foreground rounded-full
          transform-gpu transition-all hover:scale-105 duration-150 ease-in-out
        ">
        <User2Icon className="text-foreground" width={28} height={28} />
      </Link>
    ) : (
      <Button asChild className="bg-gradient-to-t from-[#aa00ff] to-[#663dff]" >
        <Link href="/sign-in">
          Sign In
        </Link>
      </Button>
    )
  )
}

function LocationButton(){
  return (
    <NewZealandFlagIcon className="aspect-[4/3] cursor-pointer select-none" height={26}/>
  )
}


// TODO
// borders like amazon

    // <Link href="/cart"
    //   className="
    //     px-4 h-4 flex items-center justify-center
    //     text-foreground hover:text-foreground/70 
    //     relative cursor-pointer select-none
    //     transform transition-all hover:scale-105 duration-150 ease-in-out
    //     border-2 border-transparent hover:border-primary
    //   "
    // >
    //   <CartIcon className="text-foreground translate-y-[2px]" width={28} height={28} />
      
            {/* <ShoppingBag className="text-foreground" width={32} height={32} /> */}
            {/* <ShoppingCartIcon className="text-foreground" width={32} height={32} /> */}   