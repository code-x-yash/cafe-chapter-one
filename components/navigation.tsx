"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { Menu, X, Coffee, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartContext } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { getCartItemCount } = useContext(CartContext)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/visit", label: "Visit Us" },
  ]

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300 navbar-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Coffee className="h-10 w-10 md:h-8 md:w-8 text-gold" />
              <span className="font-serif text-2xl md:text-xl font-bold text-coffee">Chapter One</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link text-lg font-bold">
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-coffee relative bg-transparent font-bold text-base px-6 py-3"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                Cart
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-coffee text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <Button variant="ghost" size="lg" className="text-coffee relative p-3" onClick={() => setCartOpen(true)}>
                <ShoppingCart className="h-6 w-6" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-coffee text-sm rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="lg" className="text-coffee p-3" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-cream/98 backdrop-blur-md border-t-2 border-gold/30 shadow-lg">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-4 text-coffee hover:text-gold hover:bg-gold/10 transition-all duration-200 rounded-lg font-bold text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button
                    className="w-full btn-primary text-lg py-4"
                    onClick={() => {
                      setCartOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    View Cart ({getCartItemCount()})
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
