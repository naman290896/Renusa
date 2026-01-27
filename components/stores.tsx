"use client"

import { useState } from "react"
import { Store } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "@/node_modules/next/image"

const stores = [
  {
    name: "Reliance Retail",
    description: "Available at Reliance Retail Stores",
    logo: "/reliance-retail-logo.jpg",
  },
  {
    name: "DMart",
    description: "Stocked in DMart stores",
    logo: "/dmart.jpg",
  },
  {
    name: "Shubham K Mart",
    description: "Find us at Shubham K Mart",
    logo: "/shubham-k-mart-logo.jpg",
  },
  {
    name: "Local Stores",
    description: "Also available at premium local retailers",
    logo: "/shop-store-icon.jpg",
  },
]

export function Stores() {
  return (
    <section id="stores" className="py-24 bg-muted/30 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.015)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Store className="h-10 w-10 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/10 blur-xl" />
            </div>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">Where to Find Us</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Available at leading retail chains and stores near you
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group transition-all duration-500 border-border animate-in fade-in slide-in-from-bottom pt-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 text-center relative">
                <div className="mb-6 h-24 flex items-center justify-center relative">
                  <Image
                    src={store.logo || "/placeholder.svg"}
                    alt={store.name}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 transition-colors">
                  {store.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed hidden md:block">{store.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
