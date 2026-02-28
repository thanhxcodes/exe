import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                FASHIONORA
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Your destination for designer outfit rentals. Connect with trusted rental shops and find the perfect look for any occasion.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/search?category=dresses" className="text-sm text-background/70 hover:text-background transition-colors">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/search?category=suits" className="text-sm text-background/70 hover:text-background transition-colors">
                  Suits & Tuxedos
                </Link>
              </li>
              <li>
                <Link href="/search?category=accessories" className="text-sm text-background/70 hover:text-background transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/search?occasion=wedding" className="text-sm text-background/70 hover:text-background transition-colors">
                  Wedding Collection
                </Link>
              </li>
              <li>
                <Link href="/search?occasion=party" className="text-sm text-background/70 hover:text-background transition-colors">
                  Party Looks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Become a Partner Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Rental Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-sm text-background/50 text-center">
            &copy; {new Date().getFullYear()} FASHIONORA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
