import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar } from '@mui/material'
import CountrySelector from '../components/CountrySelector'
import CartButton from '../components/CartButton'

export default function Layout({title, description, children}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}` : process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
        {description ? <meta name='description' content={description}/> : <meta name="description" content="E-commerce general store" />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" className="">
        <nav className='flex items-center h-16 w-full max-w-7xl mx-auto pr-4 bg-secondary-background text-secondary-text'>
          
          {/* Left */}
          <NextLink href="/" passHref>
            <a className='text-2xl bold font-bold hover:text-secondary-hover'>
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </a>
          </NextLink>

          {/* Right */}
          <div className='ml-auto space-x-6 inline-flex'>
            <CountrySelector />
            <CartButton />
            <NextLink href="/login" passHref>
              <a className='text-lg hover:text-text-secondary-hover flex items-center cursor-pointer transform transition-all hover:scale-110 duration-150 ease-in-out select-none'>
                Login
              </a>
            </NextLink>
          </div>
          
        </nav>
      </AppBar>

      <main className="h-full min-h-screenNav m-[1rem] w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-sm">
        {children}
      </main>

      <footer className="flex items-center justify-center h-16 bg-secondary-background text-secondary-text">
        <p>All rights reserved. {process.env.NEXT_PUBLIC_COMPANY_NAME} &trade;</p>
      </footer>
    </>
  )
}

