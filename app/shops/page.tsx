import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { shops } from "@/lib/data"
import { Star, MapPin, Package } from "lucide-react"

export default function ShopsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Rental Shops
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Discover trusted rental shops offering premium designer outfits for every occasion
            </p>
          </div>

          {/* Shops Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <Link
                key={shop.id}
                href={`/shop/${shop.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/9] bg-muted">
                  <Image
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {shop.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {shop.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm font-medium text-foreground">
                        {shop.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({shop.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{shop.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Package className="w-4 h-4" />
                      <span>{shop.productCount} items</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
