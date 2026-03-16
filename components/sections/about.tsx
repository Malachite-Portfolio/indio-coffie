"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, Leaf, Award, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: Coffee, label: "Premium Beans" },
  { icon: Leaf, label: "Organic" },
  { icon: Award, label: "Award Winning" },
  { icon: Heart, label: "Made with Love" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                alt="Coffee beans and cup"
                className="w-full h-full object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  {highlights.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground/70">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Crafting the Perfect
              <span className="text-primary"> Coffee Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Indio Coffee, we believe that every cup tells a story. Our
              journey began with a simple passion: to deliver premium quality
              coffee with rich flavor, crafted from the finest beans sourced
              from sustainable farms around the world.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each blend is carefully roasted to perfection, ensuring that every
              sip delivers an extraordinary experience that awakens your senses
              and fuels your day.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  Organic Beans
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  Partner Farms
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Fresh Brewing
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">
                  Stars Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
