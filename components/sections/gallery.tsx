"use client"

import { useEffect, useRef, useState } from "react"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    alt: "Coffee shop interior",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Latte art",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    alt: "Coffee beans",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
    alt: "Coffee brewing",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    alt: "Barista at work",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80",
    alt: "Coffee and pastry",
    span: "col-span-2",
  },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section
      id="gallery"
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
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            A Glimpse Into Our
            <span className="text-primary"> Coffee World</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the artistry and passion behind every cup we serve.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer",
                image.span,
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
