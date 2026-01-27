"use client"

import { Sparkles, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

/* Stable positions for spice-like dots (avoids layout shift) */
const SPICE_DOTS = [
  { left: 6, top: 12, color: "bg-amber-400/30", size: "w-2 h-2", shape: "rounded-full", dur: 14, delay: 0 },
  { left: 94, top: 8, color: "bg-rose-400/25", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 16, delay: 1 },
  { left: 12, top: 72, color: "bg-emerald-400/25", size: "w-2.5 h-2", shape: "rounded-full", dur: 12, delay: 3 },
  { left: 88, top: 68, color: "bg-orange-400/28", size: "w-2 h-2", shape: "rounded-[40%]", dur: 18, delay: 2 },
  { left: 22, top: 22, color: "bg-amber-500/20", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 15, delay: 4 },
  { left: 78, top: 28, color: "bg-rose-300/22", size: "w-3 h-1.5", shape: "rounded-full", dur: 13, delay: 1 },
  { left: 8, top: 48, color: "bg-orange-300/20", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 17, delay: 5 },
  { left: 90, top: 52, color: "bg-emerald-300/22", size: "w-2 h-2", shape: "rounded-[35%]", dur: 11, delay: 2 },
  { left: 4, top: 88, color: "bg-amber-400/18", size: "w-2 h-2", shape: "rounded-full", dur: 19, delay: 0 },
  { left: 96, top: 85, color: "bg-rose-400/20", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 14, delay: 3 },
  { left: 32, top: 8, color: "bg-emerald-500/20", size: "w-2 h-2", shape: "rounded-full", dur: 16, delay: 2 },
  { left: 68, top: 14, color: "bg-amber-500/22", size: "w-2.5 h-1.5", shape: "rounded-full", dur: 12, delay: 4 },
  { left: 16, top: 55, color: "bg-rose-500/18", size: "w-2 h-2", shape: "rounded-full", dur: 15, delay: 1 },
  { left: 84, top: 60, color: "bg-orange-500/20", size: "w-2.5 h-2", shape: "rounded-[45%]", dur: 13, delay: 5 },
  { left: 42, top: 78, color: "bg-amber-400/22", size: "w-2 h-1.5", shape: "rounded-full", dur: 17, delay: 0 },
  { left: 58, top: 82, color: "bg-emerald-400/20", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 14, delay: 3 },
  { left: 28, top: 38, color: "bg-orange-400/16", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 18, delay: 2 },
  { left: 72, top: 42, color: "bg-rose-400/18", size: "w-2 h-2", shape: "rounded-full", dur: 11, delay: 4 },
  { left: 50, top: 18, color: "bg-amber-500/14", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 16, delay: 1 },
  { left: 38, top: 92, color: "bg-emerald-500/18", size: "w-2 h-2", shape: "rounded-full", dur: 13, delay: 5 },
  { left: 62, top: 6, color: "bg-rose-500/16", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 15, delay: 0 },
  { left: 2, top: 32, color: "bg-orange-500/18", size: "w-2 h-2", shape: "rounded-full", dur: 14, delay: 3 },
  { left: 98, top: 38, color: "bg-amber-400/20", size: "w-1.5 h-1.5", shape: "rounded-full", dur: 17, delay: 2 },
  { left: 18, top: 92, color: "bg-emerald-400/22", size: "w-2.5 h-2", shape: "rounded-[50%]", dur: 12, delay: 4 },
] as const

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ═══ Creative food-themed background ═══ */}
      <div className="absolute inset-0 z-0">
        {/* 1. Animated mesh base: 3 overlapping gradients that shift */}
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 20% 20%, #fef3c7 0%, transparent 50%),
              radial-gradient(ellipse 90% 70% at 85% 75%, #ecfdf5 0%, transparent 50%),
              radial-gradient(ellipse 80% 100% at 50% 50%, #ffedd5 0%, #fef7ed 40%, transparent 70%),
              linear-gradient(160deg, #fffbeb 0%, #fef9e7 25%, #fff5e6 50%, #f0fdf4 85%, #ecfdf5 100%)
            `,
            backgroundSize: "120% 120%, 110% 110%, 100% 100%, 100% 100%",
            backgroundPosition: "0% 0%, 100% 100%, 50% 50%, 0% 0%",
            animation: "hero-gradient-shift 18s ease-in-out infinite",
          }}
        />

        {/* 2. Warm vignette at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(251,191,36,0.08) 70%, rgba(249,115,22,0.12) 100%)",
          }}
        />

        {/* 3. Center glow for headline readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 75% 60% at 50% 42%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 45%, transparent 70%)",
          }}
        />

        {/* 4. Morphing organic blobs (spice / mukhwas feel) */}
        <div
          className="absolute top-[10%] right-[5%] w-[320px] h-[320px] opacity-[0.2] blur-[60px]"
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)",
            animation: "hero-morph 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[15%] left-[3%] w-[280px] h-[280px] opacity-[0.18] blur-[55px]"
          style={{
            background: "linear-gradient(180deg, #34d399 0%, #6ee7b7 50%, #a7f3d0 100%)",
            animation: "hero-morph 16s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute top-[60%] right-[25%] w-[200px] h-[200px] opacity-[0.15] blur-[50px]"
          style={{
            background: "linear-gradient(225deg, #fb7185 0%, #f9a8d4 100%)",
            animation: "hero-morph 12s ease-in-out infinite 1s",
          }}
        />

        {/* 5. Aroma / steam wisps */}
        <div
          className="absolute top-[25%] left-[15%] w-[180px] h-[40px] rounded-full blur-[25px] opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.4) 30%, rgba(251,146,60,0.35) 70%, transparent 100%)",
            animation: "hero-wisp 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[55%] right-[10%] w-[160px] h-[36px] rounded-full blur-[22px] opacity-25"
          style={{
            background: "linear-gradient(270deg, transparent 0%, rgba(52,211,153,0.35) 40%, rgba(110,231,183,0.3) 70%, transparent 100%)",
            animation: "hero-wisp-2 10s ease-in-out infinite 1.5s",
          }}
        />
        <div
          className="absolute bottom-[28%] left-[20%] w-[140px] h-[32px] rounded-full blur-[20px] opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(251,113,133,0.3) 50%, transparent 100%)",
            animation: "hero-wisp 9s ease-in-out infinite 3s",
          }}
        />

        {/* 6. Large soft orbs (saffron, coral, mint, golden) */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.25] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #f59e0b 0%, #fbbf24 45%, transparent 70%)",
            animation: "hero-orb-drift 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[58%] -left-20 w-[380px] h-[380px] rounded-full opacity-[0.22] blur-[90px]"
          style={{
            background: "radial-gradient(circle, #f97316 0%, #fb923c 50%, transparent 70%)",
            animation: "hero-orb-drift-2 26s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[10%] w-[340px] h-[340px] rounded-full opacity-[0.2] blur-[80px]"
          style={{
            background: "radial-gradient(circle, #34d399 0%, #6ee7b7 50%, transparent 70%)",
            animation: "hero-orb-drift-2 24s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute top-[15%] right-[20%] w-[260px] h-[260px] rounded-full opacity-[0.18] blur-[70px]"
          style={{
            background: "radial-gradient(circle, #eab308 0%, #fde047 55%, transparent 75%)",
            animation: "hero-orb-drift 18s ease-in-out infinite 1s",
          }}
        />

        {/* 7. Dual seed pattern: dots + finer scatter */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #b45309 1.2px, transparent 1.2px),
              radial-gradient(circle at center, #78350f 0.8px, transparent 0.8px)
            `,
            backgroundSize: "32px 36px, 20px 22px",
            backgroundPosition: "0 0, 10px 11px",
          }}
        />

        {/* 8. Subtle diagonal streaks (spice trails) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(105deg, transparent, transparent 120px, rgba(180,83,9,0.4) 120px, rgba(180,83,9,0.4) 121px)",
          }}
        />

        {/* 9. Floating spice-like dots (mixed shapes) */}
        {SPICE_DOTS.map((d, i) => (
          <div
            key={i}
            className={`absolute ${d.shape} ${d.color} ${d.size}`}
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              animation: i % 4 === 0 ? `hero-float-slow ${d.dur}s ease-in-out infinite` : `hero-float ${d.dur}s ease-in-out infinite`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-sm animate-in fade-in slide-in-from-left duration-1000">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium">Premium Quality Since 2017</span>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-none text-balance">
                <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent relative">
                  Taste the Tradition
                  <Sparkles className="absolute -top-4 -right-12 h-8 w-8 text-amber-500/90 animate-pulse" />
                </span>
                <span className="block text-foreground/90">of Freshness</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mx-auto max-w-xl text-pretty leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-300">
              Discover our curated collection of premium mouth fresheners and fryums. Handcrafted with
              authentic ingredients, delivering an unforgettable burst of flavor with every bite.
            </p>

            <div className="flex justify-center flex-wrap gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-500">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 border-0 text-white"
                onClick={() => scrollToSection("products")}
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-card/90 border-border backdrop-blur-sm hover:bg-accent shadow-sm"
                onClick={() => scrollToSection("stores")}
              >
                Find Nearest Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
