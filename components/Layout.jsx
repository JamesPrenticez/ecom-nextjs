import React, { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import CountrySelector from './nav/CountrySelector'
import CartButton from './nav/CartButton'
import { signIn, signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image'
import Hamburger from './nav/Hamburger'

export default function Layout({title, description, children}) {
  const {data: session} = useSession();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`
            : process.env.NEXT_PUBLIC_COMPANY_NAME}
        </title>
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <meta name="description" content="E-commerce general store" />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-secondary-background">
        <nav className="flex items-center h-16 w-full max-w-7xl mx-auto pr-4 text-secondary-text">
          {/* Left */}
          <Hamburger session={session}/>

          <NextLink href="/" passHref>
            <a className="mx-auto md:m-0 text-2xl bold font-bold hover:text-secondary-hover">
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </a>
          </NextLink>

          {/* Right */}
          <div className="hidden md:inline-flex ml-auto space-x-6 items-center">
            <CountrySelector />
            <CartButton />

            {!session ? (
              <a
                className="text-lg hover:text-text-secondary-hover flex items-center cursor-pointer transform transition-all hover:scale-110 duration-150 ease-in-out select-none"
                onClick={signIn}
              >
                Login
              </a>
            ) : (
              <div
                className="flex whitespace-nowrap items-center space-x-4 relative"
                onClick={() => setIsOpen(!isOpen)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <p className="text-lg">{session?.user.name}</p>

                <div
                  className="h-[2.5rem] w-[2.5rem] bg-red-500 rounded-full object-cover hover:cursor-pointer overflow-hidden bubble"
                  
                >
                  <NextImage
                    src={session?.user.image}
                    alt={session?.user.image}
                    width={25}
                    height={25}
                    layout={"responsive"}
                  />
                </div>
                {/* Hitbox for onmouseleave */}
                <div className={`${isOpen ? "block" : "hidden"} bg-transparent w-64 h-64 absolute top-0 -right-[1rem] z-40`}></div>
                <div
                  className={`${isOpen ? "block" : "hidden"} absolute z-50 top-[3.8rem] -right-[1rem] w-64 bg-secondary-background cursor-pointer border-2 border-secondary-background rounded-lg tooltiptext`}
                >
                  <div
                    className="p-4 hover:bg-primary-background hover:text-primary-text rounded-tl-md rounded-tr-md border-b"
                    onClick={() => {}}
                  >
                    <p>Profile</p>
                  </div>
                  <div
                    className="p-4 hover:bg-primary-background hover:text-primary-text border-b"
                    onClick={() => {}}
                  >
                    <p>My Account</p>
                  </div>
                  <div
                    className="p-4 hover:bg-primary-background hover:text-primary-text rounded-bl-md rounded-br-md"
                    onClick={signOut}
                  >
                    <p>Sign Out</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="h-full min-h-screenNavFoot m-[1rem] w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-sm">
        {children}
      </main>

      <footer className="flex items-center justify-center h-16 bg-secondary-background text-secondary-text">
        <p>
          All rights reserved. {process.env.NEXT_PUBLIC_COMPANY_NAME} &trade;
        </p>
      </footer>
    </>
  );
}

