"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { occasions } from "@/lib/data"

export function Hero() {
  const router = useRouter()
  const [occasion, setOccasion] = useState("")
  const [category, setCategory] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (occasion) params.set("occasion", occasion)
    if (category) params.set("category", category)
    if (priceRange) params.set("price", priceRange)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Over 500+ rental shops</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
            Rent Designer Outfits for Every Occasion
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Discover stunning outfits from multiple rental shops. Find your perfect look for weddings, parties, photoshoots, and more — all in one place.
          </p>

          {/* Search Box */}
          <div className="mt-10 bg-card rounded-2xl p-4 shadow-lg border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Occasion */}
              <div className="text-left">
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  <option value="">Any Occasion</option>
                  {occasions.map((occ) => (
                    <option key={occ.id} value={occ.id}>
                      {occ.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="text-left">
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Type
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  <option value="">All Types</option>
                  <option value="dresses">Dresses</option>
                  <option value="suits">Suits & Tuxedos</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="text-left">
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Budget
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  <option value="">Any Budget</option>
                  <option value="0-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200+</option>
                </select>
              </div>
            </div>

            <Button
              onClick={handleSearch}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-medium"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Outfits
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Wedding", "Party", "Photoshoot", "Prom"].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setOccasion(tag.toLowerCase())
                  handleSearch()
                }}
                className="px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:bg-secondary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
