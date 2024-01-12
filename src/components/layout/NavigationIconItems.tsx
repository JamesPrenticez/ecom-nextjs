import React from "react"
import Cart from '../cart/Cart';
import Link from "next/link"
import { ShoppingCartIcon} from '../icons/commonIcons';
import { User2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { NewZealandFlagIcon } from "../icons/countryIcons";

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

export default NavigationIconItems;