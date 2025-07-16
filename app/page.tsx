"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Users, Heart, Star } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = heroRef.current.querySelector(".parallax-bg") as HTMLElement
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative z-10 text-center fade-in bg-white text-black mx-0 px-[px]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="parallax-bg absolute inset-0 z-0">
          <Image
            src="/images/cafe-exterior-day.jpg"
            alt="Cafe Chapter One at night"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-coffee/50" />
        </div>

      <div className="relative z-10 text-center px-4 py-12 md:py-16 bg-white/20 rounded-3xl shadow-2xl border border-white max-w-5xl mx-auto fade-in">
  <div className="mb-10 md:mb-14">
    <div className="inline-block p-6 md:p-4 rounded-full bg-gold/30 backdrop-blur-md shadow-lg mb-8 md:mb-6">
      <Coffee className="h-16 w-16 md:h-16 md:w-16 text-gold" />
    </div>
    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
      Chapter One
    </h1>
    <p className="text-2xl font-semibold text-white/90 drop-shadow-md leading-relaxed max-w-xl mx-auto mb-10 md:mb-12">
      Sip. Savor. Stay Awhile.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row gap-6 md:gap-4 justify-center px-4">
    <Button
      asChild
      className="text-xl md:text-lg px-10 py-5 md:px-8 md:py-4 rounded-xl bg-gold text-white shadow-md hover:shadow-lg transition-all duration-200"
    >
      <Link href="/menu">Explore Menu</Link>
    </Button>
    <Button
      asChild
      variant="ghost"
      className="text-xl md:text-lg px-10 py-5 md:px-8 md:py-4 rounded-xl bg-white/90 text-black shadow-md hover:shadow-lg transition-all duration-200"
    >
      <Link href="/about">Our Story</Link>
    </Button>
  </div>
</div>

      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 items-center">
            <div className="slide-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-8 md:mb-6 leading-tight">
                Welcome to Your Literary Haven
              </h2>
              <p className="text-xl md:text-lg text-warm-brown mb-8 md:mb-6 leading-relaxed font-semibold">
                Nestled in the heart of Nagaon, Assam, Chapter One is more than just a café – it's a sanctuary for book
                lovers, dreamers, and coffee enthusiasts. Our warm, cozy atmosphere provides the perfect backdrop for
                your next great adventure, whether it's between the pages of a book or in a cup of our expertly crafted
                coffee.
              </p>
              <p className="text-xl md:text-lg text-warm-brown mb-10 md:mb-8 leading-relaxed font-semibold">
                From aromatic coffees to delicious momos, hearty burgers to continental fusion dishes, every item on our
                menu is crafted with love and attention to detail.
              </p>
              <Button asChild className="btn-primary">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/cafe-interior-1.jpg"
                alt="Cozy interior of Cafe Chapter One"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-lg">
                <Coffee className="h-8 w-8 text-coffee" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-wood/10">
        <div className="max-w-7xl mx-auto px-6 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-6 md:mb-4 leading-tight">
              Why Choose Chapter One?
            </h2>
            <p className="text-xl md:text-lg text-warm-brown max-w-2xl mx-auto font-semibold leading-relaxed">
              Discover what makes our café special and why we're the favorite spot for students, travelers, and
              creatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="text-center group">
              <div className="inline-block p-8 md:p-6 bg-gold/20 rounded-full mb-8 md:mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <Coffee className="h-16 w-16 md:h-12 md:w-12 text-gold" />
              </div>
              <h3 className="font-serif text-3xl md:text-2xl font-semibold text-coffee mb-6 md:mb-4 leading-tight">
                Premium Coffee
              </h3>
              <p className="text-warm-brown leading-relaxed font-semibold text-lg md:text-base">
                Expertly crafted beverages using the finest beans, served with passion and precision in every cup.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-block p-8 md:p-6 bg-gold/20 rounded-full mb-8 md:mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <Users className="h-16 w-16 md:h-12 md:w-12 text-gold" />
              </div>
              <h3 className="font-serif text-3xl md:text-2xl font-semibold text-coffee mb-6 md:mb-4 leading-tight">
                Community Hub
              </h3>
              <p className="text-warm-brown leading-relaxed font-semibold text-lg md:text-base">
                A welcoming space where students study, travelers share stories, and creatives find inspiration.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-block p-8 md:p-6 bg-gold/20 rounded-full mb-8 md:mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <Heart className="h-16 w-16 md:h-12 md:w-12 text-gold" />
              </div>
              <h3 className="font-serif text-3xl md:text-2xl font-semibold text-coffee mb-6 md:mb-4 leading-tight">
                Made with Love
              </h3>
              <p className="text-warm-brown leading-relaxed font-semibold text-lg md:text-base">
                Every dish and drink is prepared with care, using fresh ingredients and time-honored recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-6 md:mb-4 leading-tight">
              Taste the Difference
            </h2>
            <p className="text-xl md:text-lg text-warm-brown max-w-2xl mx-auto font-semibold leading-relaxed">
              From aromatic coffees to fusion delights, explore our carefully curated menu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/coffee-service.jpg"
                  alt="Coffee service"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-coffee/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Star className="h-10 w-10 md:h-8 md:w-8 text-gold mx-auto mb-3 md:mb-2" />
                    <p className="text-white font-serif text-xl md:text-lg font-bold">Signature Coffees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/food-drinks.jpg"
                  alt="Food and drinks"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-coffee/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-cream">
                    <Star className="h-10 w-10 md:h-8 md:w-8 text-gold mx-auto mb-3 md:mb-2" />
                    <p className="text-white font-serif text-xl md:text-lg font-bold">Snacks & Shakes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/signature-dish.jpg"
                  alt="Signature dish"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-coffee/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-cream">
                    <Star className="h-10 w-10 md:h-8 md:w-8 text-gold mx-auto mb-3 md:mb-2" />
                    <p className="text-white font-serif text-xl md:text-lg font-bold">Continental Fusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary text-xl md:text-lg px-10 py-5 md:px-8 md:py-4">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold font-serif text-4xl md:text-5xl font-bold mb-8 md:mb-6 leading-tight">
            Ready to Start Your Next Chapter?
          </h2>
          <p className="text-2xl md:text-xl mb-12 md:mb-8 text-cream/90 font-semibold leading-relaxed">
            Join us for an unforgettable experience where great food meets great stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-4 justify-center">
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-coffee text-xl md:text-lg px-10 py-5 md:px-8 md:py-4 font-bold"
            >
              <Link href="/visit">Visit Us Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-coffee text-xl md:text-lg px-10 py-5 md:px-8 md:py-4 bg-transparent font-bold"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
