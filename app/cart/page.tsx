"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { shops } from "@/lib/data"
import { useCart, type CartItem } from "@/lib/cart-context"
import {
  Trash2,
  Calendar,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Store,
  Send,
} from "lucide-react"

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useCart()
  const [rentalDates, setRentalDates] = useState({
    startDate: "",
    endDate: "",
  })
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  // Group items by shop
  const itemsByShop = items.reduce(
    (acc, item) => {
      const shopId = item.product.shopId
      if (!acc[shopId]) {
        acc[shopId] = []
      }
      acc[shopId].push(item)
      return acc
    },
    {} as Record<string, CartItem[]>
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    clearCart()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="max-w-md mx-auto text-center px-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-semibold text-foreground">
              Request Submitted!
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your rental request has been sent. The shops will contact you directly to confirm availability and arrange pickup/delivery.
            </p>
            <div className="mt-8 space-y-3">
              <Link href="/search">
                <Button className="w-full">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center px-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Your Cart is Empty
            </h1>
            <p className="mt-4 text-muted-foreground max-w-sm mx-auto">
              Start browsing our collection to find the perfect outfit for your special occasion.
            </p>
            <Link href="/search">
              <Button className="mt-8">
                Browse Outfits
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Rental Cart
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { num: 1, label: "Cart" },
              { num: 2, label: "Details" },
              { num: 3, label: "Submit" },
            ].map((step, index) => (
              <div key={step.num} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {step.num}
                  </div>
                  <span className="text-sm font-medium text-foreground hidden sm:block">
                    {step.label}
                  </span>
                </div>
                {index < 2 && (
                  <div className="w-8 sm:w-16 h-px bg-border" />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {/* Items Grouped by Shop */}
                {Object.entries(itemsByShop).map(([shopId, shopItems]) => {
                  const shop = shops.find((s) => s.id === shopId)
                  return (
                    <div
                      key={shopId}
                      className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                      {/* Shop Header */}
                      <div className="flex items-center gap-3 p-4 bg-secondary">
                        <Store className="w-5 h-5 text-muted-foreground" />
                        <Link
                          href={`/shop/${shop?.slug}`}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {shop?.name}
                        </Link>
                        <span className="text-sm text-muted-foreground">
                          ({shopItems.length} item{shopItems.length > 1 ? "s" : ""})
                        </span>
                      </div>

                      {/* Items */}
                      <div className="divide-y divide-border">
                        {shopItems.map((item) => (
                          <div
                            key={`${item.product.id}-${item.size}`}
                            className="flex gap-4 p-4"
                          >
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="relative w-24 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0"
                            >
                              <Image
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                            </Link>
                            <div className="flex-1 min-w-0">
                              <Link
                                href={`/product/${item.product.slug}`}
                                className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
                              >
                                {item.product.name}
                              </Link>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Size: {item.size}
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Color: {item.product.color}
                              </p>
                              
                              <div className="mt-2 flex items-center justify-between">
                                <span className="font-semibold text-foreground">
                                   Rate: ${item.product.price / 4} / Day
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.product.id, item.size)}
                                  className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span className="sr-only">Remove item</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}

                

                {/* Contact Information */}
                {/* <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-semibold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Shops will use this information to contact you and confirm your rental.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        value={contactInfo.name}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Address
                        </label>
                        <Input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          placeholder="Select your address..."
                          className="w-full"
                        />
                      </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Notes (optional)
                      </label>
                      <textarea
                        value={contactInfo.notes}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            notes: e.target.value,
                          }))
                        }
                        placeholder="Any special requests or notes for the shop..."
                        rows={3}
                        className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div> */}

                {/* Rental Dates */}
                {/* <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <h2 className="font-semibold text-foreground">
                      Rental Dates
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Start Date
                      </label>
                      <Input
                        type="date"
                        value={rentalDates.startDate}
                        onChange={(e) =>
                          setRentalDates((prev) => ({
                            ...prev,
                            startDate: e.target.value,
                          }))
                        }
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        End Date
                      </label>
                      <Input
                        type="date"
                        value={rentalDates.endDate}
                        onChange={(e) =>
                          setRentalDates((prev) => ({
                            ...prev,
                            endDate: e.target.value,
                          }))
                        }
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                </div> */}

                {/* Rental Dates */}
                {/* <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <h2 className="font-semibold text-foreground">
                      Cost
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <span className="font-semibold text-foreground">
                      Rental cost: $100
                    </span>
                    <span className="font-semibold text-foreground">
                      Deposit cost: $100
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Order Summary */}
              {/* <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl border border-border p-6">
                  <h2 className="font-semibold text-foreground mb-4">
                    Order Summary
                  </h2>

                  <div className="space-y-3 pb-4 border-b border-border">
                    {items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground line-clamp-1 flex-1 pr-4">
                          {item.product.name}
                        </span>
                        <span className="text-foreground font-medium">
                          ${item.product.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="py-4 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-medium">
                        ${total}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="text-foreground font-medium">$0</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-4">
                    <span className="font-semibold text-foreground">
                      Estimated Total
                    </span>
                    <span className="font-semibold text-foreground text-xl">
                      ${total}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    Final price will be confirmed by each shop. Deposit may be required.
                  </p>

                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Rental Request
                  </Button>

                  <p className="mt-4 text-xs text-center text-muted-foreground">
                    By submitting, you agree to our Terms of Service and Rental Policy
                  </p>
                </div>
              </div> */}

              <div className="lg:col-span-1">
                {/* <div className="sticky top-24 bg-card rounded-xl border border-border p-6"> */}
                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Create Order
                  </Button>
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
