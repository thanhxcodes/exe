"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Product } from "./data"

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((product: Product, size: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      }
      return [...prev, { product, size, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, size)
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
