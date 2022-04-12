import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar } from '@mui/material'
import CountrySelector from '../components/CountrySelector'

export default function Layout({title, description, children}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}` : process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
        {description ? <meta name='description' content={description}/> : <meta name="description" content="E-commerce general store" />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" className="bg-secondary-background text-secondary-text">
        <nav className='flex items-center h-16 w-full max-w-7xl mx-auto pr-4'>
          
          {/* Left */}
          <NextLink href="/" passHref>
            <a className='text-2xl bold font-bold hover:text-secondary-hover'>
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </a>
          </NextLink>

          {/* Right */}
          <div className='ml-auto space-x-4 inline-flex'>
            <CountrySelector />
            <NextLink href="/cart" passHref>
              <a className='hover:text-text-secondary-hover flex items-center'>
                Cart
              </a>
            </NextLink>
            <NextLink href="/login" passHref>
              <a className='hover:text-text-secondary-hover flex items-center'>
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