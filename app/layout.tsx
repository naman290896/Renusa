import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Renusa Foods | Premium Mouth Fresheners & Fyrums",
  description:
    "Discover our exquisite collection of traditional mouth fresheners and fyrums. Quality products available across major cities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
