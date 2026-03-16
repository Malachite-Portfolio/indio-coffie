"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    name: "Espresso",
    description: "Rich, bold, and intense single shot of pure coffee essence.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80",
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and velvety foam.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
  },
  {
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk and light foam.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
  {
    name: "Mocha",
    description: "Espresso meets rich chocolate and steamed milk perfection.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 24 hours, smooth and refreshingly bold.",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80",
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water for a lighter, rich taste.",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
]

export function MenuSection() {
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
    <section id="menu" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Discover Our
            <span className="text-primary"> Signature Coffees</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each cup is crafted with passion, using premium beans and expert
            techniques to deliver an unforgettable experience.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
