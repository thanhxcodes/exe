import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured)

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Featured Rentals
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Hand-picked pieces from our top-rated rental shops
            </p>
          </div>
          <Link href="/search">
            <Button variant="outline" className="group bg-transparent">
              View All
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-card text-foreground rounded-full">
                    {product.rentalPeriod}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {product.shopName}
                </p>
                <h3 className="mt-1 font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-foreground">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
