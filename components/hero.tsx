"use client"

import { Sparkles, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #ef4444 0%, #dc2626 50%, transparent 100%)",
            animation: "orbit 30s linear infinite",
          }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #f97316 0%, #ea580c 50%, transparent 100%)",
            animation: "orbit 40s linear infinite reverse",
            animationDelay: "5s",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-in fade-in slide-in-from-left duration-1000">
              <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
              <span className="text-sm font-medium">Premium Quality Since 2020</span>
            </div>

            {/* Main Heading with creative typography */}
            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-none text-balance">
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent relative">
                Taste the Tradition
                  <Sparkles className="absolute -top-4 -right-12 h-8 w-8 text-orange-500 animate-pulse" />
                </span>
                <span className="block text-white/80">of Freshness</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-white/70 mx-auto max-w-xl text-pretty leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-300">
              Discover our curated collection of premium mouth fresheners and fyrums. Handcrafted with authentic
              ingredients, delivering an unforgettable burst of flavor with every bite.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center flex-wrap gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-500">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
                onClick={() => scrollToSection("products")}
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/5 border-white/20 backdrop-blur-sm hover:bg-white/10"
                onClick={() => scrollToSection("stores")}
              >
                Find Nearest Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
