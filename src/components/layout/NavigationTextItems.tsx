"use client"

import React from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationPages } from "@/constants/settings"

function NavigationTextItems(){
  const currentPath = usePathname();
  
  return (
    <div className="hidden md:flex">
      {navigationPages.map((page) => (
        <Link
          key={page.name} 
          href={page.slug}
          className={cn(`
            px-4 h-[4rem] flex items-center justify-center
            text-foreground/70 hover:text-foreground font-medium uppercase 
            border-2 border-transparent hover:border-blue-500/70 rounded-sm
          `, currentPath === page.slug ? "text-primary" : "")}
        >
          <p className="mt-[4px]">{page.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default NavigationTextItems;