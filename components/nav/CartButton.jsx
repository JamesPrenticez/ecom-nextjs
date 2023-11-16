import React from 'react'
import Link from 'next/link'
import { useSelector } from "react-redux";
import { CartIcon } from '../icons/common';

export default function CartButton() {
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <Link href="/cart" className='hover:text-text-secondary-hover flex items-center gap-1 relative cursor-pointer transform transition-all hover:scale-110 duration-150 ease-in-out select-none'>
      <p className='text-lg '>Cart</p>
      <CartIcon className='text-secondary-text h-[1.25rem] w-[1.5rem]'/>

      {cartItems.length > 0 && 
        <div className='bg-primary-danger rounded-full h-[1rem] w-[1rem] text-xs flex items-center justify-center absolute -right-2 -top-2'>{cartItems.length}</div>
      }
  </Link>
  )
}