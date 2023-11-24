
import type { ReactNode } from "react"
import type { Metadata,  } from "next"
import { Nunito, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { project } from "@/constants/settings"
import Navbar from "@/components/layout/Navbar"


const nunito = Nunito({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full antialiased", nunito.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
