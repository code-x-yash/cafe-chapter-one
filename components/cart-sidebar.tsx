"use client"

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react"
import { CartContext } from "@/contexts/cart-context"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-coffee/60 backdrop-blur-sm z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b-2 border-gold/30 bg-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-coffee flex items-center gap-3">
            <ShoppingCart className="h-7 w-7" />
            Your Cart
          </h2>
          <Button variant="ghost" size="lg" className="p-3" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-20 w-20 text-gold mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-bold text-coffee mb-4">Your cart is empty</h3>
              <p className="text-warm-brown font-semibold text-lg mb-6">Add some delicious items to get started!</p>
              <Button asChild className="btn-primary" onClick={onClose}>
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-coffee text-lg mb-1 leading-tight">{item.name}</h4>
                    <p className="text-gold font-bold text-lg">₹{item.price}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-10 w-10 p-0 border-2 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-10 w-10 p-0 border-2 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-500 hover:text-red-700 p-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t-2 border-gold/30 p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-2xl font-bold text-coffee">Total:</span>
              <span className="font-bold text-3xl text-gold">₹{getCartTotal()}</span>
            </div>
            <div className="space-y-4">
              <Button asChild className="w-full btn-primary text-lg py-4" onClick={onClose}>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream font-bold text-lg py-4"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
