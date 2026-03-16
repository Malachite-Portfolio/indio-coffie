"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Coffee Street, Brew City, BC 12345",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@indiocoffee.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sun: 7:00 AM - 9:00 PM",
  },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Get In Touch
            <span className="text-primary"> With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or want to place an order? We&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-primary bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-primary bg-background"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    className="h-12 rounded-xl border-border/50 focus:border-primary bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="rounded-xl border-border/50 focus:border-primary bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-3xl overflow-hidden h-64 bg-muted relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    Indio Coffee
                  </p>
                  <p className="text-xs text-muted-foreground">
                    123 Coffee Street
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
