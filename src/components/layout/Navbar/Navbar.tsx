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
    <div className="bg-white ">
      <MaxWidthWrapper>
        <header className="flex items-center h-[4rem] px-2 sm:px-4">
          <LogoAndName />

          <div className="flex ml-auto">

            {user ? (
              <Avatar user={user} />
              ): (
              <SignInButton />
            )}

            <Hamburger/>
     
          </div>
        </header>

        <RightMenu {...{user}}/>

      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar;