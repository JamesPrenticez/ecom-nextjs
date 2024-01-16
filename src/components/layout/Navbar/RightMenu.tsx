import React from "react";
import Avatar from "./Avatar";
import { useRightMenu } from "@/components/Providers";
import { User } from "@/payload-types"
import Link from "next/link"
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import type { INavigationItem } from "@/models";
import { project, navigationItems } from "@/constants"

interface Props {
  user: User | null;
}

function RightMenu({ user }: Props) {
  const router = useRouter();
  const { pathname } = router;

  const { isRightMenuOpen, toggleRightMenu } = useRightMenu()

  return (
    <div 
      className={`fixed inset-[60px_0_0_0] md:inset-[80px_0_0_0] bg-slate-900/80 z-50 
        ${isRightMenuOpen ? "block" : "hidden" }
      `}
    >
      <div className="absolute right-0 bg-muted h-full w-full md:w-[450px] p-6 space-y-2 text-muted flex flex-col">
        
        <div className="flex flex-col grow">
          <Link href="/">
            <h1 
              className={`text-2xl font-bold  hover:text-major ${pathname === "/" ? 'text-major hover:text-major' : 'text-muted'}`}
              onClick={toggleRightMenu}
            >
              {project.name}
            </h1>
          </Link>

          {user && (
            <div className="flex mt-6">
              <Avatar />
              <div className="ml-6">
                <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
                <h3>{user.email}</h3>
              </div>
            </div>
          )}

          <div className="pt-6 select-none">
            {navigationItems
              .filter((item: INavigationItem) => !item.requiresAuth)
              .map((item: INavigationItem, index: any) => {

              let slug 
              
              if(user){
                if (item.requiresAuth) {
                  slug = `/user/${user.id}/${item.slug}`;
                } 
              } 

              slug = item.slug;

              return (
                <Link
                  key={index}
                  href={slug}
                  onClick={toggleRightMenu}
                  className={`flex space-x-4 py-2 hover:text-white font-medium
                    ${location.pathname === slug ? 'text-major hover:text-major' : 'text-muted'}
                  `}
                >
                  <span className="flex items-center text-major">
                    {item.icon} 
                  </span>
                  <p>
                    {item.name}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Sign in/out  */}
        <div>
            {!user ? (
              <Link href="/sign-in">
                <Button 
                  variant="outline"
                  color="major"
                  className="w-full text-major"
                  onClick={toggleRightMenu}
                  >
                  Sign In
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                color="error"
                className="w-full text-red-500"
                onClick={() => { 
                  // TODO Sign Out
                  console.log("signout")
                }}
              >
                Sign Out
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
};

export default RightMenu;
