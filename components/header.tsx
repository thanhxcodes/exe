"use client"

import Link from "next/link"
import { Search, ShoppingBag, Menu, X, User } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
              FASHIONORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Browse
            </Link>
            <Link href="/search?category=dresses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dresses
            </Link>
            <Link href="/search?category=suits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Suits
            </Link>
            <Link href="/search?category=accessories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Accessories
            </Link>
            <Link href="/shops" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Shops
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/search">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/search"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse All
              </Link>
              <Link
                href="/search?category=dresses"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dresses
              </Link>
              <Link
                href="/search?category=suits"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Suits
              </Link>
              <Link
                href="/search?category=accessories"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link
                href="/shops"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shops
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
