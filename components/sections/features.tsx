"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, Droplets, Leaf, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee Beans",
    description:
      "Sourced from the finest coffee plantations around the world, ensuring exceptional quality in every cup.",
  },
  {
    icon: Droplets,
    title: "Fresh Brewing Process",
    description:
      "Our state-of-the-art brewing techniques preserve the natural flavors and aromas of our premium beans.",
  },
  {
    icon: Leaf,
    title: "Organic Ingredients",
    description:
      "We use 100% organic, sustainably sourced ingredients to create a pure and natural coffee experience.",
  },
  {
    icon: Sparkles,
    title: "Modern Coffee Experience",
    description:
      "Combining traditional craftsmanship with modern innovation to deliver the perfect cup every time.",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What Makes Our Coffee
            <span className="text-primary"> Special</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the qualities that set Indio Coffee apart and make every
            cup an extraordinary experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 md:p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
