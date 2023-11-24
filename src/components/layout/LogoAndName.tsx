import React from "react"
import { project } from "@/constants/settings"
import Link from "next/link"
import Logo from "@/components/layout/Logo"
import { cn } from "@/lib/utils"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const LogoAndName = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 cursor-pointer ">
        <Logo className="w-8" />
        <h1 className={cn("hidden md:block text-4xl font-bold font text-foreground hover:text-foreground/70 uppercase", playfair.className)}>
          {project.name}
        </h1>
      </div>
    </Link>
  )
}

export default LogoAndName