import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar } from '@mui/material'

export default function Layout({title, description, children}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}` : process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
        {description ? <meta name='description' content={description}/> : <meta name="description" content="E-commerce general store" />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" className="bg-[#203040] text-[#ffffff]">
        <nav className='flex items-center h-16 w-full max-w-7xl mx-auto pr-4'>
          <NextLink href="/" passHref>
            <a className='text-2xl bold font-bold hover:text-gray-200 bg-red-500 p-4'>
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </a>
          </NextLink>
          <div className='ml-auto space-x-4'>
            <NextLink href="/cart" passHref>
              <a className='hover:text-gray-200'>
                Cart
              </a>
            </NextLink>
            <NextLink href="/login" passHref>
              <a className='hover:text-gray-200'>
                Login
              </a>
            </NextLink>
          </div>
        </nav>
      </AppBar>

      <main className="h-full min-h-screenNav m-[1rem] w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-sm">
        {children}
      </main>

      <footer className="flex items-center justify-center h-16 bg-[#203040] text-[#ffffff]">
        <p>All rights reserved. {process.env.NEXT_PUBLIC_COMPANY_NAME} &trade;</p>
      </footer>
    </>
  )
}