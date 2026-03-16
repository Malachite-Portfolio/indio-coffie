"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "portrait", label: "Portrait" },
  { id: "nature", label: "Nature" },
  { id: "vintage", label: "Vintage" },
  { id: "vibrant", label: "Vibrant" },
  { id: "minimal", label: "Minimal" },
];

export function CategoryChips() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="px-4 py-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:bg-muted"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
