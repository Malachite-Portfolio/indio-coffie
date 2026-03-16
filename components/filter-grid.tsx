"use client";

import { Heart, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  {
    id: 1,
    name: "Sunset Glow",
    category: "Warm",
    isPremium: false,
    isLiked: true,
    color: "from-orange-400 to-rose-500",
  },
  {
    id: 2,
    name: "Ocean Breeze",
    category: "Cool",
    isPremium: false,
    isLiked: false,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 3,
    name: "Vintage Film",
    category: "Classic",
    isPremium: true,
    isLiked: false,
    color: "from-amber-600 to-yellow-400",
  },
  {
    id: 4,
    name: "Neon Nights",
    category: "Vibrant",
    isPremium: false,
    isLiked: true,
    color: "from-fuchsia-500 to-indigo-500",
  },
  {
    id: 5,
    name: "Soft Portrait",
    category: "Portrait",
    isPremium: true,
    isLiked: false,
    color: "from-pink-300 to-rose-400",
  },
  {
    id: 6,
    name: "Moody Dark",
    category: "Dramatic",
    isPremium: false,
    isLiked: false,
    color: "from-slate-600 to-slate-800",
  },
  {
    id: 7,
    name: "Spring Bloom",
    category: "Nature",
    isPremium: true,
    isLiked: true,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 8,
    name: "Golden Hour",
    category: "Warm",
    isPremium: false,
    isLiked: false,
    color: "from-yellow-400 to-orange-500",
  },
];

export function FilterGrid() {
  return (
    <div className="px-4 pb-28">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Popular Filters</h2>
        <button className="text-sm font-medium text-primary hover:underline">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filters.map((filter) => (
          <div
            key={filter.id}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow"
          >
            <div
              className={cn(
                "aspect-[4/3] bg-gradient-to-br flex items-center justify-center relative",
                filter.color
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {filter.isPremium && (
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                  <Lock className="h-3 w-3" />
                  PRO
                </div>
              )}

              <button
                className={cn(
                  "absolute top-2 right-2 p-1.5 rounded-full transition-all",
                  filter.isLiked
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                )}
              >
                <Heart
                  className={cn(
                    "h-4 w-4",
                    filter.isLiked && "fill-current"
                  )}
                />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">
                      {filter.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-medium text-foreground text-sm truncate">
                {filter.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {filter.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
