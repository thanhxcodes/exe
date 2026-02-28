import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/data"

export function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Browse by Category
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections for every style and occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/search?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-semibold text-background">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-background/80">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-background">
                  <span>{category.count} items</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
