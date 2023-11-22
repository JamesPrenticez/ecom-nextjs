
import type { ReactNode } from "react"
import type { Metadata,  } from "next"
import { M_PLUS_2, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { PROJECT_DESCRIPTION, PROJECT_NAME } from "@/constants/settings"

const m2 = M_PLUS_2({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
