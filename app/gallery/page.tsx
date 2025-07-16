"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "interior" | "food" | "ambience"
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/cafe-interior-1.jpg", alt: "Modern café interior", category: "interior" },
  { id: 2, src: "/images/coffee-service.jpg", alt: "Coffee service with latte art", category: "food" },
  { id: 3, src: "/images/dining-area.jpg", alt: "Cozy dining area", category: "interior" },
  { id: 4, src: "/images/signature-dish.jpg", alt: "Signature continental dish", category: "food" },
  { id: 5, src: "/images/window-seating.jpg", alt: "Window seating area", category: "ambience" },
  { id: 6, src: "/images/food-drinks.jpg", alt: "Food and beverages", category: "food" },
  { id: 7, src: "/images/upper-dining.jpg", alt: "Upper level dining", category: "interior" },
  { id: 8, src: "/images/cafe-exterior-night.jpg", alt: "Café exterior at night", category: "ambience" },
  { id: 9, src: "/images/cafe-exterior-day.jpg", alt: "Café exterior during day", category: "ambience" },
]

const categories = ["All", "Interior", "Food", "Ambience"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory.toLowerCase())

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 fade-in">Gallery</h1>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed slide-up">
              Explore the visual story of Chapter One through our collection of interior shots, delicious food, and warm
              ambience.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream border-b border-wood/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-gold hover:bg-gold/90 text-coffee"
                    : "border-gold text-gold hover:bg-gold hover:text-coffee"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="masonry-item group cursor-pointer relative overflow-hidden rounded-lg shadow-lg bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-warm-brown font-medium">{image.alt}</p>
                  <span className="text-xs text-warm-brown/70 bg-wood/10 px-2 py-1 rounded mt-2 inline-block capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-coffee/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-coffee/60 hover:bg-coffee/80 text-cream z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-cream rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-cover w-full max-h-[70vh]"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-coffee mb-2">{selectedImage.alt}</h3>
                <span className="text-sm text-warm-brown/70 bg-wood/10 px-3 py-1 rounded capitalize">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="py-20 bg-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">Follow Our Journey</h2>
            <p className="text-lg text-warm-brown max-w-2xl mx-auto mb-8">
              Stay connected with us on Instagram @chapterone_nagaon for daily updates, behind-the-scenes moments, and
              special offers.
            </p>
            <Button asChild className="btn-primary">
              <a href="https://instagram.com/chapterone_nagaon" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Experience It Yourself</h2>
          <p className="text-xl mb-8 text-cream/90">
            Pictures tell a story, but nothing beats experiencing our warm hospitality in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-coffee text-lg px-8 py-4">
              <a href="/visit">Visit Us Today</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-coffee text-lg px-8 py-4 bg-transparent"
            >
              <a href="/menu">View Menu</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
