"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from "lucide-react"

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 fade-in">Visit Us</h1>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed slide-up">
              Find us in the heart of Nagaon, Assam. We're excited to welcome you to Chapter One and share our passion
              for great coffee and food.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="slide-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Address</h3>
                    <p className="text-warm-brown font-medium">
                      Chapter One Café
                      <br />
                      Nagaon, Assam, India
                      <br />
                      PIN: 782001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Phone</h3>
                    <p className="text-warm-brown">+91 XXXXX XXXXX</p>
                    <p className="text-sm text-warm-brown/70">Call for reservations & takeaway orders</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Email</h3>
                    <p className="text-warm-brown">hello@chapteronecafe.com</p>
                    <p className="text-sm text-warm-brown/70">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee mb-1">Opening Hours</h3>
                    <div className="text-warm-brown space-y-1">
                      <p>Monday - Sunday: 8:00 AM - 10:00 PM</p>
                      <p className="text-sm text-warm-brown/70">Open all days of the week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-coffee mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/chapterone_nagaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-200"
                  >
                    <Instagram className="h-6 w-6 text-gold" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6 text-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="slide-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee mb-8">Find Us</h2>
              <div className="bg-wood/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                  <p className="text-warm-brown text-lg">Interactive Google Map</p>
                  <p className="text-warm-brown/70 text-sm mt-2">Nagaon, Assam, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-wood/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">Send Us a Message</h2>
            <p className="text-lg text-warm-brown max-w-2xl mx-auto">
              Have a question, suggestion, or want to make a reservation? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coffee mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-coffee mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-coffee mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" className="btn-primary text-lg px-8 py-3 flex items-center gap-2 mx-auto">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Instagram Feed Strip */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee mb-4">Latest from Instagram</h2>
            <p className="text-warm-brown">Follow @chapterone_nagaon for daily updates and behind-the-scenes moments</p>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 bg-wood/10 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-wood/20 transition-colors duration-200"
              >
                <div className="text-center">
                  <Instagram className="h-12 w-12 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-warm-brown text-sm">Instagram Post {index}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="btn-secondary">
              <a href="https://instagram.com/chapterone_nagaon" target="_blank" rel="noopener noreferrer">
                View All Posts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">We Can't Wait to Meet You</h2>
          <p className="text-xl mb-8 text-cream/90">
            Come experience the warmth, comfort, and exceptional flavors that make Chapter One special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-coffee text-lg px-8 py-4">
              <a href="/menu">View Our Menu</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-coffee text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+91XXXXXXXXX">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
