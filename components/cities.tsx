"use client"

import { MapPin, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const cities = [
  "Indore", "Jabalpur",  "Pune", "Nashik", "Nagpur", "Bhopal", "Shambhaji Nagar", "Raipur"
]

export function Cities() {
  return (
    <section id="cities" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-10 w-10 text-white animate-bounce" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">Our Presence</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Available across major cities in India
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {cities.map((city, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base md:text-lg px-6 py-3 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default border-2 border-white/30 hover:border-primary animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {city}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group animate-in fade-in slide-in-from-bottom delay-300">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2 font-serif group-hover:scale-110 transition-transform">
              7+
            </div>
            <div className="text-lg text-muted-foreground">Cities</div>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group animate-in fade-in slide-in-from-bottom delay-500">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2 font-serif group-hover:scale-110 transition-transform">
              150+
            </div>
            <div className="text-lg text-muted-foreground">Retail Partners</div>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group animate-in fade-in slide-in-from-bottom delay-700">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">❤️</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2 font-serif group-hover:scale-110 transition-transform">
              50k+
            </div>
            <div className="text-lg text-muted-foreground">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
