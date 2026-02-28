export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice: number
  image: string
  images: string[]
  category: string
  occasion: string[]
  shopId: string
  shopName: string
  description: string
  sizes: string[]
  color: string
  rentalPeriod: string
  featured: boolean
}

export interface Shop {
  id: string
  name: string
  slug: string
  description: string
  image: string
  rating: number
  reviewCount: number
  location: string
  productCount: number
}

export const categories = [
  {
    id: "dresses",
    name: "Dresses",
    description: "Evening gowns, cocktail dresses & more",
    image: "/images/category-dresses.jpg",
    count: 248,
  },
  {
    id: "suits",
    name: "Suits & Tuxedos",
    description: "Classic and modern formal wear",
    image: "/images/category-suits.jpg",
    count: 156,
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Jewelry, bags, shoes & more",
    image: "/images/category-accessories.jpg",
    count: 312,
  },
]

export const occasions = [
  { id: "wedding", name: "Wedding" },
  { id: "party", name: "Party" },
  { id: "photoshoot", name: "Photoshoot" },
  { id: "prom", name: "Prom" },
  { id: "gala", name: "Gala" },
  { id: "cocktail", name: "Cocktail" },
]

export const shops = [
  {
    id: "1",
    name: "Elegance Boutique",
    slug: "elegance-boutique",
    description: "Premium designer rentals for special occasions",
    image: "/images/shop-1.jpg",
    rating: 4.9,
    reviewCount: 234,
    location: "Downtown",
    productCount: 156,
  },
  {
    id: "2",
    name: "Glamour Studio",
    slug: "glamour-studio",
    description: "Luxury fashion for the modern woman",
    image: "/images/shop-2.jpg",
    rating: 4.8,
    reviewCount: 189,
    location: "Fashion District",
    productCount: 203,
  },
  {
    id: "3",
    name: "Classic Menswear",
    slug: "classic-menswear",
    description: "Distinguished suits and formal attire",
    image: "/images/shop-3.jpg",
    rating: 4.7,
    reviewCount: 156,
    location: "Central",
    productCount: 98,
  },
  {
    id: "4",
    name: "Style Haven",
    slug: "style-haven",
    description: "Trendy pieces for every occasion",
    image: "/images/shop-4.jpg",
    rating: 4.6,
    reviewCount: 112,
    location: "Westside",
    productCount: 178,
  },
]

export const products = [
  {
    id: "1",
    name: "Emerald Silk Evening Gown",
    slug: "emerald-silk-evening-gown",
    price: 150,
    originalPrice: 2400,
    image: "/images/product-1.jpg",
    images: ["/images/product-1.jpg", "/images/product-1-2.jpg", "/images/product-1-3.jpg"],
    category: "dresses",
    occasion: ["wedding", "gala"],
    shopId: "1",
    shopName: "Elegance Boutique",
    description: "A stunning emerald green silk evening gown featuring a flattering A-line silhouette with delicate hand-sewn beading along the neckline. Perfect for formal events and black-tie occasions.",
    sizes: ["XS", "S", "M", "L"],
    color: "Emerald Green",
    rentalPeriod: "4 days",
    featured: true,
  },
  {
    id: "2",
    name: "Midnight Blue Tuxedo Set",
    slug: "midnight-blue-tuxedo-set",
    price: 120,
    originalPrice: 1800,
    image: "/images/product-2.jpg",
    images: ["/images/product-2.jpg", "/images/product-2-2.jpg"],
    category: "suits",
    occasion: ["wedding", "gala", "prom"],
    shopId: "3",
    shopName: "Classic Menswear",
    description: "A sophisticated midnight blue tuxedo set including jacket, trousers, and cummerbund. Italian wool blend with satin lapels for a classic yet modern look.",
    sizes: ["S", "M", "L", "XL"],
    color: "Midnight Blue",
    rentalPeriod: "4 days",
    featured: true,
  },
  {
    id: "3",
    name: "Rose Gold Statement Necklace",
    slug: "rose-gold-statement-necklace",
    price: 45,
    originalPrice: 580,
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg"],
    category: "accessories",
    occasion: ["wedding", "party", "gala"],
    shopId: "2",
    shopName: "Glamour Studio",
    description: "An exquisite rose gold statement necklace featuring cascading crystals that catch the light beautifully. The perfect finishing touch for any elegant outfit.",
    sizes: ["One Size"],
    color: "Rose Gold",
    rentalPeriod: "4 days",
    featured: true,
  },
  {
    id: "4",
    name: "Champagne Sequin Mini Dress",
    slug: "champagne-sequin-mini-dress",
    price: 85,
    originalPrice: 1200,
    image: "/images/product-4.jpg",
    images: ["/images/product-4.jpg", "/images/product-4-2.jpg"],
    category: "dresses",
    occasion: ["party", "cocktail"],
    shopId: "4",
    shopName: "Style Haven",
    description: "A dazzling champagne sequin mini dress that is perfect for parties and special nights out. Features a flattering bodycon fit with subtle stretch for comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Champagne",
    rentalPeriod: "4 days",
    featured: true,
  },
  {
    id: "5",
    name: "Burgundy Velvet Blazer",
    slug: "burgundy-velvet-blazer",
    price: 75,
    originalPrice: 950,
    image: "/images/product-5.jpg",
    images: ["/images/product-5.jpg"],
    category: "suits",
    occasion: ["party", "cocktail"],
    shopId: "3",
    shopName: "Classic Menswear",
    description: "A luxurious burgundy velvet blazer that adds instant sophistication to any outfit. Perfect for holiday parties and upscale events.",
    sizes: ["S", "M", "L", "XL"],
    color: "Burgundy",
    rentalPeriod: "4 days",
    featured: false,
  },
  {
    id: "6",
    name: "Pearl Drop Earrings",
    slug: "pearl-drop-earrings",
    price: 35,
    originalPrice: 420,
    image: "/images/product-6.jpg",
    images: ["/images/product-6.jpg"],
    category: "accessories",
    occasion: ["wedding", "party", "gala"],
    shopId: "2",
    shopName: "Glamour Studio",
    description: "Elegant pearl drop earrings featuring freshwater pearls set in sterling silver. A timeless accessory that complements any formal attire.",
    sizes: ["One Size"],
    color: "Pearl White",
    rentalPeriod: "4 days",
    featured: false,
  },
  {
    id: "7",
    name: "Black Lace Cocktail Dress",
    slug: "black-lace-cocktail-dress",
    price: 95,
    originalPrice: 1400,
    image: "/images/product-7.jpg",
    images: ["/images/product-7.jpg", "/images/product-7-2.jpg"],
    category: "dresses",
    occasion: ["party", "cocktail"],
    shopId: "1",
    shopName: "Elegance Boutique",
    description: "A sophisticated black lace cocktail dress with a modest neckline and elegant three-quarter sleeves. Perfect for cocktail parties and evening events.",
    sizes: ["XS", "S", "M", "L"],
    color: "Black",
    rentalPeriod: "4 days",
    featured: false,
  },
  {
    id: "8",
    name: "Crystal Clutch Bag",
    slug: "crystal-clutch-bag",
    price: 55,
    originalPrice: 780,
    image: "/images/product-8.jpg",
    images: ["/images/product-8.jpg"],
    category: "accessories",
    occasion: ["wedding", "party", "gala", "prom"],
    shopId: "4",
    shopName: "Style Haven",
    description: "A stunning crystal-encrusted clutch bag that sparkles from every angle. Features a detachable chain strap and satin-lined interior.",
    sizes: ["One Size"],
    color: "Silver",
    rentalPeriod: "4 days",
    featured: true,
  },
]

export const reviews = [
  {
    id: "1",
    shopId: "1",
    author: "Sarah M.",
    rating: 5,
    comment: "Amazing selection and the dress was in perfect condition. Will definitely rent again!",
    date: "2026-01-15",
  },
  {
    id: "2",
    shopId: "1",
    author: "Emily R.",
    rating: 5,
    comment: "The customer service was exceptional. They helped me find the perfect gown for my sister's wedding.",
    date: "2026-01-10",
  },
  {
    id: "3",
    shopId: "1",
    author: "Jessica L.",
    rating: 4,
    comment: "Great experience overall. The pickup was quick and easy.",
    date: "2026-01-05",
  },
]
