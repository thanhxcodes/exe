import { Search, ShoppingBag, Calendar, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Compare",
    description: "Explore outfits from multiple rental shops. Filter by occasion, style, and budget to find your perfect match.",
  },
  {
    icon: ShoppingBag,
    title: "Add to Cart",
    description: "Select items from different shops and add them to your unified cart. Mix and match to create your complete look.",
  },
  {
    icon: Calendar,
    title: "Submit Request",
    description: "Send your rental request with your preferred dates. Shops receive your contact info for direct confirmation.",
  },
  {
    icon: Sparkles,
    title: "Wear & Shine",
    description: "Coordinate pickup or delivery with the shop. Enjoy your stunning outfit and make memories that last.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
            How It Works
          </h2>
          <p className="mt-4 text-background/70 max-w-2xl mx-auto">
            Renting your perfect outfit has never been easier
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-background/10 flex items-center justify-center mt-6">
                <step.icon className="w-8 h-8 text-background" />
              </div>
              
              {/* Content */}
              <h3 className="mt-6 text-lg font-semibold text-background">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-background/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
