'use client';

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  slug: string
  price: number
  originalPrice: number
  image: string
  shopName: string
  rentalPeriod: string
  category?: string
}

export function ProductCard({
  name,
  slug,
  price,
  originalPrice,
  image,
  shopName,
  rentalPeriod,
}: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${slug}`} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            <span className="px-3 py-1 text-xs font-medium bg-card text-foreground rounded-full shadow-sm">
              {rentalPeriod}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full shadow-sm"
              onClick={(e) => {
                e.preventDefault()
                // Add to wishlist functionality
              }}
            >
              <Heart className="h-4 w-4 text-foreground" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {shopName}
          </p>
          <h3 className="mt-1 font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-semibold text-foreground">
              ${price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
            <span className="text-xs text-primary font-medium">
              {Math.round((1 - price / originalPrice) * 100)}% off
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
