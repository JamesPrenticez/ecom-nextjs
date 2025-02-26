import React from "react"
import LogoAndName from "@/components/layout/LogoAndName";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SignInButton from "@/components/layout/SignInButton";
import Hamburger from "@/components/layout/Navbar/Hamburger";
import Avatar from "@/components/layout/Navbar/Avatar";
import RightMenu from "@/components/layout/Navbar/RightMenu";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers"

async function Navbar() {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)
  // console.log(user)

  return (
    <header className="flex h-[4rem] md:h-[5rem] items-center px-2 sm:px-4 bg-primary-foreground border-b-[1px] border-muted box-border">
      <LogoAndName />

      <div className="flex ml-auto">
        {user ? (
          <Avatar user={user} />
          ): (
          <SignInButton />
        )}
        <Hamburger/>
      </div>

      <RightMenu {...{user}}/>
    </header>
  )
}

export default Navbar;