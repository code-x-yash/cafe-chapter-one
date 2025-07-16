import Link from "next/link"
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-coffee text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-gold" />
              <span className="text-gold font-serif text-2xl font-bold">Chapter One</span>
            </div>
            <p className="text-cream/80 mb-4 max-w-md">
              A cozy book-themed café in Nagaon, Assam. Where every sip tells a story and every bite begins a new
              chapter.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/chapterone_nagaon"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gold hover:text-gold/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream/80 hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream/80 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-cream/80 hover:text-gold transition-colors">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/80">Nagaon, Assam, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-cream/80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-cream/80">hello@chapteronecafe.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div className="text-cream/80">
                  <div>Mon-Sun: 8:00 AM - 10:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">© {new Date().getFullYear()} Cafe Chapter One. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
