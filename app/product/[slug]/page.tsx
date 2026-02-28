"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products, shops, type Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import {
  Heart,
  Share2,
  Star,
  MapPin,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react"

export default function ProductPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const router = useRouter()
  const product = products.find((p) => p.slug === slug)
  const shop = shops.find((s) => s.id === product?.shopId)

  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product || !shop) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Product not found
            </h1>
            <Button className="mt-4" onClick={() => router.push("/search")}>
              Browse Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      return
    }
    const sizeToAdd = selectedSize || product.sizes[0]
    addItem(product, sizeToAdd)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/search"
              className="hover:text-foreground transition-colors"
            >
              Browse
            </Link>
            <span>/</span>
            <Link
              href={`/search?category=${product.category}`}
              className="hover:text-foreground transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-24 rounded-lg overflow-hidden bg-muted ${
                        selectedImage === index
                          ? "ring-2 ring-primary"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Shop Badge */}
              <Link
                href={`/shop/${shop.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full hover:bg-muted transition-colors"
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={shop.image || "/placeholder.svg"}
                    alt={shop.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {shop.name}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-xs text-muted-foreground">
                    {shop.rating}
                  </span>
                </div>
              </Link>

              {/* Title & Price */}
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-foreground">
                    ${product.price} / Day
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Color
                  </span>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {product.color}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Occasion
                  </span>
                  <p className="mt-1 text-sm font-medium text-foreground capitalize">
                    {product.occasion.join(", ")}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">
                      Select Size
                    </span>
                    <button className="text-sm text-primary hover:underline">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-primary/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.sizes.length > 1 && !selectedSize}
                  className="flex-1 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 bg-transparent">
                  <Heart className="w-5 h-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 bg-transparent">
                  <Share2 className="w-5 h-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>

              {/* Shop Info Card */}
              <Link
                href={`/shop/${shop.slug}`}
                className="block p-5 bg-secondary rounded-xl hover:bg-muted transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={shop.image || "/placeholder.svg"}
                      alt={shop.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {shop.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {shop.description}
                    </p>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-medium text-foreground">
                          {shop.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({shop.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{shop.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
