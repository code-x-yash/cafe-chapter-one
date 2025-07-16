import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cafe Chapter One - Nagaon, Assam",
  description:
    "A cozy book-themed café in Nagaon, Assam. Serving coffee, momos, burgers, and continental fusion dishes. Perfect for students, travelers, and creatives.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
    </head>
      <body className="font-sans bg-cream text-coffee">
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
