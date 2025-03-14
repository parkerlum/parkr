import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ParkShare - Find and Book Parking Spaces",
  description: "Rent private driveways, garages, and parking spaces in your neighborhood.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ WebkitUserModify: "read-only", userModify: "read-only" }}>
        {children}
      </body>
    </html>
  )
}

