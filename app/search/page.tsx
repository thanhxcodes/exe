"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, occasions, shops } from "@/lib/data"
import { SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

function SearchContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || ""
  const initialOccasion = searchParams.get("occasion") || ""

  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  )
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>(
    initialOccasion ? [initialOccasion] : []
  )
  const [selectedShops, setSelectedShops] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    { id: "dresses", name: "Dresses" },
    { id: "suits", name: "Suits & Tuxedos" },
    { id: "accessories", name: "Accessories" },
  ]

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedOccasions.length > 0) {
      result = result.filter((p) =>
        p.occasion.some((o) => selectedOccasions.includes(o))
      )
    }

    if (selectedShops.length > 0) {
      result = result.filter((p) => selectedShops.includes(p.shopId))
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.reverse()
        break
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [selectedCategories, selectedOccasions, selectedShops, priceRange, sortBy])

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleOccasion = (id: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
    )
  }

  const toggleShop = (id: string) => {
    setSelectedShops((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedOccasions([])
    setSelectedShops([])
    setPriceRange([0, 500])
  }

  const activeFilterCount =
    selectedCategories.length +
    selectedOccasions.length +
    selectedShops.length +
    (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Browse Outfits
            </h1>
            <p className="mt-2 text-muted-foreground">
              {filteredProducts.length} items available for rent
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="relative"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
              {activeFilterCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground"
                >
                  Clear all
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("list")}
                >
                  <LayoutList className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } lg:block w-full lg:w-64 flex-shrink-0`}
            >
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <span className="text-sm text-foreground">
                          {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Occasion
                  </h3>
                  <div className="space-y-3">
                    {occasions.map((occasion) => (
                      <label
                        key={occasion.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedOccasions.includes(occasion.id)}
                          onCheckedChange={() => toggleOccasion(occasion.id)}
                        />
                        <span className="text-sm text-foreground">
                          {occasion.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Shops */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Shop
                  </h3>
                  <div className="space-y-3">
                    {shops.map((shop) => (
                      <label
                        key={shop.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedShops.includes(shop.id)}
                          onCheckedChange={() => toggleShop(shop.id)}
                        />
                        <span className="text-sm text-foreground">
                          {shop.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Price Range
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Min
                      </label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-full bg-secondary border-0 rounded-lg px-3 py-2 text-sm text-foreground"
                        min={0}
                        max={priceRange[1]}
                      />
                    </div>
                    <span className="text-muted-foreground mt-5">-</span>
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Max
                      </label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full bg-secondary border-0 rounded-lg px-3 py-2 text-sm text-foreground"
                        min={priceRange[0]}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Close Button */}
                <Button
                  variant="outline"
                  className="w-full lg:hidden bg-transparent"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="w-4 h-4 mr-2" />
                  Close Filters
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">
                    No items match your filters.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-6"
                  }
                >
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      slug={product.slug}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      shopName={product.shopName}
                      rentalPeriod={product.rentalPeriod}
                      category={product.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SearchContent />
    </Suspense>
  )
}
