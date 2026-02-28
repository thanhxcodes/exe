import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Categories } from "@/components/home/categories"
import { FeaturedProducts } from "@/components/home/featured-products"
import { FeaturedShops } from "@/components/home/featured-shops"
import { HowItWorks } from "@/components/home/how-it-works"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <FeaturedShops />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
