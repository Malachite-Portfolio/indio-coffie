"use client";

import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-card border-b border-border/50">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Menu className="h-5 w-5 text-foreground" />
        <span className="sr-only">Menu</span>
      </Button>
      
      <h1 className="text-lg font-semibold tracking-tight text-foreground">
        FeelyTalk
      </h1>
      
      <Button variant="ghost" size="icon" className="rounded-full relative">
        <Bell className="h-5 w-5 text-foreground" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  );
}
