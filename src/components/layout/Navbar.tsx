import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import LogoAndName from '@/components/layout/LogoAndName';
import Link from 'next/link';


import { Button } from '../ui/button';
import { NewZealandFlagIcon } from '../icons/countryIcons'; // TODO hook to locale data
import { User2Icon } from 'lucide-react';

import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers"
import Hamburger from "./Hamburger";
import NavigationTextItems from "./NavigationTextItems";
import NavigationIconItems from "./NavigationIconItems";
import Avatar from "./Avatar";

async function Navbar() {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)
  console.log(user)

  return (
    <div className="bg-white ">
      <MaxWidthWrapper>
        <header className="flex items-center h-[4rem] px-2 sm:px-4">
          <LogoAndName />
          {/* <Hamburger /> */}
          <div className="flex ml-auto">


            {/* <NavigationTextItems />
            <NavigationIconItems /> */}

            {user ? (
              <Avatar user={user} />
              ): (
              <SignInButton />
            )}

            
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  )
}

function SignInButton(){
  return (
    <Button asChild variant="ghost">
      <Link href="/sign-in">
        Sign in
      </Link>
    </Button>
  )
}

export default Navbar;