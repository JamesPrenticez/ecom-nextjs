

import type { ReactNode } from "react"
import type { Metadata,  } from "next"
import { Nunito, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { project } from "@/constants/settings"
import Navbar from "@/components/layout/Navbar/Navbar"
import Providers, { RightMenuProvider } from "@/components/Providers"
import { Toaster } from "sonner"
import Footer from "@/components/layout/Footer"


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
          <Providers>
            <RightMenuProvider>
              <Navbar />
            </RightMenuProvider>
            <main className="h-screen-4rem md:h-screen-5rem overflow-y-auto flex flex-col bg-muted relative"> 
              <div className="flex-grow flex-1">
                {children}
                <Footer />
              </div>
            </main>
          </Providers>
        <Toaster position="top-center" richColors/>
      </body>
    </html>
  )
}
