import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { FeaturesSection } from "@/components/sections/features"
import { MenuSection } from "@/components/sections/menu"
import { GallerySection } from "@/components/sections/gallery"
import { CTASection } from "@/components/sections/cta"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
