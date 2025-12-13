"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const productsByCategory = {
  "Fryums": [
    {
      name: "Red Chilli Papad",
      description: "Traditional fennel seeds with a perfect blend of sweet and aromatic flavors",
      image: "/redChilliPapad.jpg",
    },
    {
      name: "Oval Pani Patashe Papad",
      description: "Extra large premium fennel seeds with enhanced sweetness",
      image: "/ovalPaniPatashe.jpg",
    },
    {
      name: "3D Papad",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/3DPapad.jpg",
    },
    {
      name: "Jeera Papad",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/jeeraPapad.jpg",
    },
    {
      name: "Nally Papad",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/nallyPapad.jpg",
    },
    {
      name: "Wavy Papad",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/wavyPapad.jpg",
    },
    {
      name: "Raw Aaloo Papad",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/rawAlloo.jpg",
    }
  ],
  "Traditional Saunf": [
    {
      name: "Classic Saunf",
      description: "Traditional fennel seeds with a perfect blend of sweet and aromatic flavors",
      image: "/fennel-seeds-saunf-colorful-indian-spices.jpg",
    },
    {
      name: "Premium Saunf",
      description: "Extra large premium fennel seeds with enhanced sweetness",
      image: "/fennel-seeds-saunf-colorful-indian-spices.jpg",
    },
    {
      name: "Roasted Saunf",
      description: "Lightly roasted fennel seeds with a smoky aroma",
      image: "/fennel-seeds-saunf-colorful-indian-spices.jpg",
    },
  ],
  "Mukhwas Mix": [
    {
      name: "Premium Mukhwas",
      description: "A delightful mix of sesame seeds, coconut, and aromatic spices",
      image: "/colorful-indian-mukhwas-mouth-freshener-mix.jpg",
    },
    {
      name: "Royal Mukhwas",
      description: "Luxurious blend with saffron and dry fruits",
      image: "/colorful-indian-mukhwas-mouth-freshener-mix.jpg",
    },
    {
      name: "Colorful Mix",
      description: "Vibrant assortment of seeds and spices for special occasions",
      image: "/colorful-indian-mukhwas-mouth-freshener-mix.jpg",
    },
  ],
  "Coated Varieties": [
    {
      name: "Mint Coated",
      description: "Cool and refreshing mint-coated seeds for instant freshness",
      image: "/mint-coated-colorful-candy-seeds.jpg",
    },
    {
      name: "Sweet Delight",
      description: "Sugar-coated seeds with a sweet finish",
      image: "/colorful-sugar-coated-candy-seeds.jpg",
    },
    {
      name: "Chocolate Coated",
      description: "Unique chocolate-covered fennel seeds for dessert lovers",
      image: "/colorful-sugar-coated-candy-seeds.jpg",
    },
  ],  
  "Specialty Blends": [
    {
      name: "Rose Gulkand",
      description: "Delicate rose petal preserve with aromatic seeds",
      image: "/rose-gulkand-pink-indian-sweet.jpg",
    },
    {
      name: "Spicy Mix",
      description: "Bold and spicy blend for those who love a kick",
      image: "/spicy-indian-namkeen-snack-mix.jpg",
    },
    {
      name: "Digestive Blend",
      description: "Specially crafted mix to aid digestion after meals",
      image: "/colorful-indian-mukhwas-mouth-freshener-mix.jpg",
    },
  ],
}

export function Products() {  
  const [selectedCategory, setSelectedCategory] = useState<string>("Fryums")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [...Object.keys(productsByCategory)]

  const displayProducts = productsByCategory[selectedCategory as keyof typeof productsByCategory]

  return (
    <section id="products" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-white/5" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/20"
          style={{ animation: "spin 20s linear infinite" }}
        />
        <div
          className="absolute top-32 right-20 w-24 h-24 rounded-full border-4 border-white/20"
          style={{ animation: "spin 15s linear infinite reverse" }}
        />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-white/5 blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 right-32 w-16 h-16" style={{ animation: "bounce 3s ease-in-out infinite" }}>
          <Sparkles className="w-full h-full text-white/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">Our Products</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Handpicked selection of the finest mouth fresheners and fyrums
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              size="lg"
              className={`transition-all duration-300 animate-in fade-in slide-in-from-bottom ${
                selectedCategory === category ? "scale-105 shadow-lg shadow-primary/20" : "hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {displayProducts.map((product, index) => (
            <Card
              key={`${selectedCategory}-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border-white/20 hover:border-primary/50 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden relative h-40">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-white animate-pulse" />
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-lg font-bold mb-1 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
