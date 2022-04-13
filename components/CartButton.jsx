import React from 'react'
import NextLink from 'next/link'
import { connect } from "react-redux";
import cart from '../redux/cart/reducer';

function CartIcon({className}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  )
}

function CartButton({cartItems}) {
  console.log(cartItems)
  return (
    <NextLink href="/cart" passHref>
    <a className='hover:text-text-secondary-hover flex items-center gap-1 relative'>
      <p className='text-xl'>Cart</p>
      <CartIcon className='text-secondary-text h-[1.5rem] w-[1.5rem]'/>

      {cartItems.length > 0 && 
        <div className='bg-red-500 rounded-full h-[1rem] w-[1rem] text-xs flex items-center justify-center absolute -right-2 top-0'>{cartItems.length}</div>
      }
    </a>
  </NextLink>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    cartItems: state.cart.cart.cartItems,
  };
}

export default connect(mapStateToProps)(CartButton);