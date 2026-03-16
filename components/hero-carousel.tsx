"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const banners = [
  {
    id: 1,
    title: "New Filter Collection",
    subtitle: "Summer Vibes 2024",
    gradient: "from-primary to-accent",
  },
  {
    id: 2,
    title: "Portrait Magic",
    subtitle: "Professional Quality",
    gradient: "from-rose-500 to-orange-400",
  },
  {
    id: 3,
    title: "Vintage Classics",
    subtitle: "Timeless Aesthetics",
    gradient: "from-amber-500 to-pink-500",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative px-4 py-4">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={cn(
                "min-w-full h-40 flex flex-col justify-center items-start px-6 bg-gradient-to-br",
                banner.gradient
              )}
            >
              <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
                Featured
              </span>
              <h2 className="text-2xl font-bold text-primary-foreground mt-1">
                {banner.title}
              </h2>
              <p className="text-primary-foreground/90 mt-1">{banner.subtitle}</p>
              <button className="mt-3 px-4 py-1.5 bg-primary-foreground text-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                Explore Now
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              currentSlide === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
