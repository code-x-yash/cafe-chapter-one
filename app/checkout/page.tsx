"use client"

import type React from "react"

import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ShoppingCart,
  User,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Wallet,
  Clock,
  CheckCircle,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
} from "lucide-react"
import { CartContext } from "@/contexts/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, getCartTotal, updateQuantity, removeFromCart, clearCart } = useContext(CartContext)
  const [step, setStep] = useState<"cart" | "details" | "payment" | "confirmation">("cart")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    specialInstructions: "",
  })

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "upi">("cash")

  const deliveryFee = 30
  const tax = Math.round(getCartTotal() * 0.05) // 5% tax
  const finalTotal = getCartTotal() + deliveryFee + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true)
    setStep("confirmation")

    // Clear cart after successful order
    setTimeout(() => {
      clearCart()
    }, 2000)
  }

  const isFormValid = customerDetails.name && customerDetails.email && customerDetails.phone && customerDetails.address

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen pt-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-warm-brown mb-8 font-semibold">Add some delicious items to get started!</p>
            <Button asChild className="btn-primary">
              <a href="/menu">Browse Menu</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Button
            variant="ghost"
            className="mb-4 text-coffee hover:text-gold font-bold text-lg"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">
            {step === "confirmation" ? "Order Confirmed!" : "Checkout"}
          </h1>

          {/* Progress Steps */}
          {!orderPlaced && (
            <div className="flex items-center space-x-4 mb-8">
              <div className={`flex items-center ${step === "cart" ? "text-gold" : "text-warm-brown"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === "cart" ? "bg-gold text-coffee" : "bg-warm-brown/20"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 font-bold text-base md:text-lg">Cart Review</span>
              </div>
              <div className="flex-1 h-1 bg-warm-brown/20 mx-4">
                <div className={`h-full bg-gold transition-all duration-300 ${step !== "cart" ? "w-full" : "w-0"}`} />
              </div>
              <div className={`flex items-center ${step === "details" ? "text-gold" : "text-warm-brown"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === "details" ? "bg-gold text-coffee" : "bg-warm-brown/20"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 font-bold text-base md:text-lg">Details</span>
              </div>
              <div className="flex-1 h-1 bg-warm-brown/20 mx-4">
                <div
                  className={`h-full bg-gold transition-all duration-300 ${step === "payment" ? "w-full" : "w-0"}`}
                />
              </div>
              <div className={`flex items-center ${step === "payment" ? "text-gold" : "text-warm-brown"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === "payment" ? "bg-gold text-coffee" : "bg-warm-brown/20"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 font-bold text-base md:text-lg">Payment</span>
              </div>
            </div>
          )}
        </div>

        {step === "cart" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-coffee mb-6">Your Order</h2>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-cream/50 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-coffee text-lg mb-1 truncate">{item.name}</h4>
                        <p className="text-gold font-bold text-lg">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-10 w-10 p-0 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-10 w-10 p-0 bg-transparent"
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
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="font-serif text-2xl font-bold text-coffee mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-warm-brown font-semibold">Subtotal:</span>
                    <span className="font-bold text-coffee">₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-warm-brown font-semibold">Delivery Fee:</span>
                    <span className="font-bold text-coffee">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-warm-brown font-semibold">Tax (5%):</span>
                    <span className="font-bold text-coffee">₹{tax}</span>
                  </div>
                  <div className="border-t-2 border-gold/30 pt-4">
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-coffee">Total:</span>
                      <span className="font-bold text-gold text-2xl">₹{finalTotal}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-primary text-lg py-4" onClick={() => setStep("details")}>
                  Proceed to Details
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Details Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-coffee mb-6">Delivery Details</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-coffee font-bold mb-2 text-lg">
                        <User className="inline h-5 w-5 mr-2" />
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={customerDetails.name}
                        onChange={handleInputChange}
                        className="form-input text-lg"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-coffee font-bold mb-2 text-lg">
                        <Phone className="inline h-5 w-5 mr-2" />
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={customerDetails.phone}
                        onChange={handleInputChange}
                        className="form-input text-lg"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-coffee font-bold mb-2 text-lg">
                      <Mail className="inline h-5 w-5 mr-2" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      className="form-input text-lg"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-coffee font-bold mb-2 text-lg">
                      <MapPin className="inline h-5 w-5 mr-2" />
                      Delivery Address *
                    </label>
                    <Textarea
                      name="address"
                      value={customerDetails.address}
                      onChange={handleInputChange}
                      className="form-input text-lg resize-none"
                      rows={3}
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-coffee font-bold mb-2 text-lg">Special Instructions</label>
                    <Textarea
                      name="specialInstructions"
                      value={customerDetails.specialInstructions}
                      onChange={handleInputChange}
                      className="form-input text-lg resize-none"
                      rows={2}
                      placeholder="Any special requests or instructions..."
                    />
                  </div>
                </form>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    className="flex-1 btn-secondary bg-transparent"
                    onClick={() => setStep("cart")}
                  >
                    Back to Cart
                  </Button>
                  <Button className="flex-1 btn-primary" onClick={() => setStep("payment")} disabled={!isFormValid}>
                    Continue to Payment
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="font-serif text-2xl font-bold text-coffee mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-base">
                      <span className="text-warm-brown font-semibold truncate mr-2">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-bold text-coffee">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-gold/30 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-coffee">Total:</span>
                    <span className="font-bold text-gold text-2xl">₹{finalTotal}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-wood/10 rounded-lg">
                  <div className="flex items-center text-warm-brown font-semibold">
                    <Clock className="h-5 w-5 mr-2" />
                    Estimated Delivery: 30-45 mins
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Options */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-coffee mb-6">Payment Method</h2>

                <div className="space-y-4 mb-8">
                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      paymentMethod === "cash" ? "border-gold bg-gold/10" : "border-warm-brown/20 hover:border-gold/50"
                    }`}
                    onClick={() => setPaymentMethod("cash")}
                  >
                    <div className="flex items-center">
                      <Wallet className="h-6 w-6 text-gold mr-4" />
                      <div>
                        <h3 className="font-bold text-coffee text-lg">Cash on Delivery</h3>
                        <p className="text-warm-brown font-semibold">Pay when your order arrives</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      paymentMethod === "upi" ? "border-gold bg-gold/10" : "border-warm-brown/20 hover:border-gold/50"
                    }`}
                    onClick={() => setPaymentMethod("upi")}
                  >
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-gold mr-4" />
                      <div>
                        <h3 className="font-bold text-coffee text-lg">UPI Payment</h3>
                        <p className="text-warm-brown font-semibold">Pay using UPI apps like GPay, PhonePe</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      paymentMethod === "card" ? "border-gold bg-gold/10" : "border-warm-brown/20 hover:border-gold/50"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="flex items-center">
                      <CreditCard className="h-6 w-6 text-gold mr-4" />
                      <div>
                        <h3 className="font-bold text-coffee text-lg">Card Payment</h3>
                        <p className="text-warm-brown font-semibold">Pay using Credit/Debit card</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 btn-secondary bg-transparent"
                    onClick={() => setStep("details")}
                  >
                    Back to Details
                  </Button>
                  <Button className="flex-1 btn-primary" onClick={handlePlaceOrder}>
                    Place Order - ₹{finalTotal}
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="font-serif text-2xl font-bold text-coffee mb-6">Final Order</h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-cream/50 rounded-lg">
                    <h4 className="font-bold text-coffee mb-2">Delivery To:</h4>
                    <p className="text-warm-brown font-semibold text-sm">{customerDetails.name}</p>
                    <p className="text-warm-brown font-semibold text-sm">{customerDetails.phone}</p>
                    <p className="text-warm-brown font-semibold text-sm">{customerDetails.address}</p>
                  </div>

                  <div className="space-y-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-base">
                        <span className="text-warm-brown font-semibold truncate mr-2">
                          {item.name} x{item.quantity}
                        </span>
                        <span className="font-bold text-coffee">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-gold/30 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-coffee">Total:</span>
                    <span className="font-bold text-gold text-2xl">₹{finalTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee mb-4">Order Confirmed!</h2>
              <p className="text-xl text-warm-brown mb-8 font-semibold">
                Thank you for your order! We'll start preparing your delicious meal right away.
              </p>

              <div className="bg-gold/10 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-coffee text-xl mb-4">Order Details</h3>
                <div className="text-left space-y-2">
                  <p className="text-warm-brown font-semibold">
                    <strong>Order Total:</strong> ₹{finalTotal}
                  </p>
                  <p className="text-warm-brown font-semibold">
                    <strong>Payment Method:</strong>{" "}
                    {paymentMethod === "cash"
                      ? "Cash on Delivery"
                      : paymentMethod === "upi"
                        ? "UPI Payment"
                        : "Card Payment"}
                  </p>
                  <p className="text-warm-brown font-semibold">
                    <strong>Estimated Delivery:</strong> 30-45 minutes
                  </p>
                  <p className="text-warm-brown font-semibold">
                    <strong>Delivery Address:</strong> {customerDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary">
                  <a href="/menu">Order More</a>
                </Button>
                <Button asChild variant="outline" className="btn-secondary bg-transparent">
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
