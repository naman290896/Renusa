import { Flame, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-card to-accent/20 border-t border-border py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <span className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
              RENUSA FOODS PVT. LTD.
            </span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>© {new Date().getFullYear()} RENUSA. Made with</span>
            <Heart className="h-4 w-4 fill-primary animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
