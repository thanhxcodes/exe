"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { shops, products, reviews } from "@/lib/data"
import { Star, MapPin, Package, MessageCircle, Phone, Mail } from "lucide-react"

export default function ShopPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const router = useRouter()
  const shop = shops.find((s) => s.slug === slug)
  const shopProducts = products.filter((p) => p.shopId === shop?.id)
  const shopReviews = reviews.filter((r) => r.shopId === shop?.id)

  if (!shop) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Shop not found
            </h1>
            <Button className="mt-4" onClick={() => router.push("/shops")}>
              Browse Shops
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Shop Header */}
        <div className="relative">
          {/* Cover Image */}
          <div className="relative h-48 sm:h-64 lg:h-80 bg-muted">
            <Image
              src={shop.image || "/placeholder.svg"}
              alt={shop.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          </div>

          {/* Shop Info */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-16 sm:-mt-20 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                {/* Shop Logo */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-card border-4 border-background shadow-lg">
                  <Image
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Shop Details */}
                <div className="flex-1">
                  <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                    {shop.name}
                  </h1>
                  <p className="mt-2 text-muted-foreground max-w-xl">
                    {shop.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                      <span className="font-semibold text-foreground">
                        {shop.rating}
                      </span>
                      <span className="text-muted-foreground">
                        ({shop.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>{shop.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Package className="w-5 h-5" />
                      <span>{shop.productCount} items</span>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="flex gap-3 mt-4 sm:mt-0">
                  <Button variant="outline" size="icon">
                    <Phone className="w-5 h-5" />
                    <span className="sr-only">Call shop</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email shop</span>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Shop
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Available Rentals
                </h2>
                <span className="text-sm text-muted-foreground">
                  {shopProducts.length} items
                </span>
              </div>

              {shopProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {shopProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      slug={product.slug}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      shopName={shop.name}
                      rentalPeriod={product.rentalPeriod}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-secondary rounded-xl">
                  <p className="text-muted-foreground">
                    No items available at the moment.
                  </p>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Reviews
                </h2>

                {/* Rating Summary */}
                <div className="bg-card rounded-xl border border-border p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground">
                        {shop.rating}
                      </div>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(shop.rating)
                                ? "text-accent fill-accent"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {shop.reviewCount} reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review List */}
                <div className="space-y-4">
                  {shopReviews.length > 0 ? (
                    shopReviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-card rounded-xl border border-border p-5"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                              <span className="text-sm font-semibold text-foreground">
                                {review.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-foreground">
                                {review.author}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(review.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-accent fill-accent"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 bg-secondary rounded-xl">
                      <p className="text-muted-foreground text-sm">
                        No reviews yet.
                      </p>
                    </div>
                  )}
                </div>

                {shopReviews.length > 0 && (
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Reviews
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
