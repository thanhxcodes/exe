import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, ArrowRight } from "lucide-react"
import { shops } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function FeaturedShops() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Featured Rental Shops
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Trusted partners with exceptional service and quality
            </p>
          </div>
          <Link href="/shops">
            <Button variant="outline" className="group bg-transparent">
              All Shops
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <Link
              key={shop.id}
              href={`/shop/${shop.slug}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={shop.image || "/placeholder.svg"}
                  alt={shop.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {shop.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {shop.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium text-foreground">{shop.rating}</span>
                    <span className="text-sm text-muted-foreground">({shop.reviewCount})</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{shop.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
