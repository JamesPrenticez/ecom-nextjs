"use client"

import React from "react";
import Avatar from "./Avatar";
import { useRightMenu } from "@/components/Providers";
import { User } from "@/payload-types"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { INavigationItem } from "@/models";
import { project, navigationItems } from "@/constants"

interface Props {
  user: User | null;
}

function RightMenu({ user }: Props) {
  const pathname = usePathname();
  const { isRightMenuOpen, toggleRightMenu } = useRightMenu()

  return (
    <div className={`fixed inset-[64px_0_0_0] md:inset-[80px_0_0_0] z-50 ${isRightMenuOpen ? "block" : "hidden" }`}>

      {/* Black Overlay */}
      <div 
        className="bg-slate-900/80 absolute w-full h-full" 
        onClick={toggleRightMenu} 
      />

      {/* White Right Navigation */}
      <div className="absolute right-0 bg-primary-foreground h-full w-full md:w-[450px] p-6 space-y-2 flex flex-col">
        
        <div className="flex flex-col grow">
          <Link href="/">
            <h1 
              className="text-2xl font-bold hover:text-primary"
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
                  className={`flex space-x-4 py-2 hover:text-primary font-medium
                    ${pathname === slug ? "text-primary hover:text-primary" : ""}
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

        {/* Sign out  */}
        {user && (
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
        )}
      </div>
    </div>
  )
};

export default RightMenu;
