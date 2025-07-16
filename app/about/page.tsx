"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, Coffee, Heart, Users } from "lucide-react"

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const ambientImages = [
    { src: "/images/cafe-interior-1.jpg", alt: "Modern café interior with wooden menu boards" },
    { src: "/images/dining-area.jpg", alt: "Cozy dining area with artistic wall design" },
    { src: "/images/window-seating.jpg", alt: "Window seating with warm lighting" },
    { src: "/images/upper-dining.jpg", alt: "Upper level dining with street views" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ambientImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ambientImages.length) % ambientImages.length)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream to-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 fade-in">Our Story</h1>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed slide-up">
              Every great story has a beginning. Ours started with a simple dream: to create a space where stories
              unfold, friendships bloom, and every cup tells a tale.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-gold mr-3" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee">Why Chapter One?</h2>
              </div>
              <p className="text-lg text-warm-brown mb-6 leading-relaxed">
                The name "Chapter One" represents new beginnings – the first page of a book, the first sip of morning
                coffee, the first meeting with a friend. We believe that every visit to our café marks the beginning of
                something beautiful.
              </p>
              <p className="text-lg text-warm-brown mb-6 leading-relaxed">
                Located in the vibrant heart of Nagaon, Assam, we opened our doors with a vision to create more than
                just a café. We wanted to build a community hub where students could study in peace, travelers could
                find comfort, and creatives could draw inspiration from the warm, book-themed atmosphere.
              </p>
              <p className="text-lg text-warm-brown leading-relaxed">
                Our carefully curated menu reflects our commitment to quality and creativity. From perfectly brewed
                coffees to delicious momos, hearty burgers to innovative continental fusion dishes, every item tells its
                own story of flavor and craftsmanship.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/cafe-exterior-day.jpg"
                alt="Cafe Chapter One exterior during daytime"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-gold p-4 rounded-lg shadow-lg">
                <Coffee className="h-8 w-8 text-coffee" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">Our Values</h2>
            <p className="text-lg text-warm-brown max-w-2xl mx-auto">
              The principles that guide us in creating exceptional experiences for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-block p-6 bg-cream rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Heart className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-coffee mb-4">Passion</h3>
              <p className="text-warm-brown leading-relaxed">
                Every cup we serve and every dish we prepare is infused with genuine passion for hospitality and
                quality.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-block p-6 bg-cream rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-coffee mb-4">Community</h3>
              <p className="text-warm-brown leading-relaxed">
                We believe in fostering connections and creating a space where everyone feels welcome and valued.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-block p-6 bg-cream rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <BookOpen className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-coffee mb-4">Stories</h3>
              <p className="text-warm-brown leading-relaxed">
                Every corner of our café is designed to inspire stories, conversations, and memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambience Carousel */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">Experience Our Ambience</h2>
            <p className="text-lg text-warm-brown max-w-2xl mx-auto">
              Step into our world and feel the warmth, comfort, and inspiration that defines Chapter One.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={ambientImages[currentSlide].src || "/placeholder.svg"}
                alt={ambientImages[currentSlide].alt}
                width={800}
                height={500}
                className="object-cover w-full h-96 md:h-[500px]"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-coffee/60 hover:bg-coffee/80 text-cream"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-coffee/60 hover:bg-coffee/80 text-cream"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {ambientImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-gold" : "bg-warm-brown/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl mb-8 text-cream/90">Visit us today and let's write the next chapter together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-coffee text-lg px-8 py-4">
              <a href="/visit">Find Us</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-coffee text-lg px-8 py-4 bg-transparent"
            >
              <a href="/menu">Explore Menu</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
