"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";

const productsByCategory = {
  Fryums: [
    {
      name: "Red Chilli Papad",
      description:
        "Spicy red chilli papad delivering bold heat, crisp texture, and authentic traditional Indian flavor",
      image: "/redChilliPapad.jpg",
    },
    {
      name: "Oval Pani Patashe Papad",
      description:
        "Extra-large oval papad designed for pani patashe, offering superior crunch and excellent filling support",
      image: "/ovalPaniPatashe.jpg",
    },
    {
      name: "3D Papad",
      description:
        "Innovative 3D papad that puffs beautifully, delivering light texture, airy crunch, and premium taste",
      image: "/3DPapad.jpg",
    },
    {
      name: "Lehsun Papad",
      description:
        "Garlic-infused papad with rich aroma, savory depth, and perfectly crisp traditional Indian bite",
      image: "/lehsunPapad.jpg",
    },
    {
      name: "Sabudana Papad",
      description:
        "Classic sabudana papad crafted for lightness, delicate crunch, and authentic homemade taste",
      image: "/nallyPapad.jpg",
    },
    {
      name: "Raw Aaloo Papad",
      description:
        "Traditional potato papad offering clean flavor, satisfying crunch, and versatile serving possibilities",
      image: "/rawAlloo.jpg",
    },
  ],
  Candies: [
    {
      name: "Orange Candy",
      description:
        "Zesty orange-flavored candy offering refreshing citrus sweetness, smooth texture, and delightful long-lasting fruity taste",
      image: "/orangeCandy.jpg",
    },
    {
      name: "Green Candy",
      description:
        "Premium green candy crafted with aromatic fennel notes, gentle sweetness, and a refreshing mouth-freshening finish",
      image: "/greenCandy.jpg",
    },
  ],
  "Mukhwas Mix": [
    {
      name: "Premium Mukhwas",
      description:
        "Exquisite premium mukhwas crafted with aromatic seeds, coconut flakes, and traditional Indian spice blends",
      image: "/fennel-seeds-saunf-colorful-indian-spices.jpg",
    },
    {
      name: "Colorful Mix",
      description:
        "Vibrant colorful mukhwas mix combining seeds, spices, sweetness, and festive flavors for special occasions",
      image: "/colorful-indian-mukhwas-mouth-freshener-mix.jpg",
    },
  ],
};

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Fryums");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [...Object.keys(productsByCategory)];

  const displayProducts =
    productsByCategory[selectedCategory as keyof typeof productsByCategory];

  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-muted/20" />
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-border/60"
          style={{ animation: "spin 20s linear infinite" }}
        />
        <div
          className="absolute top-32 right-20 w-24 h-24 rounded-full border-4 border-border/60"
          style={{ animation: "spin 15s linear infinite reverse" }}
        />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-pulse delay-1000" />
        <div
          className="absolute bottom-32 right-32 w-16 h-16"
          style={{ animation: "bounce 3s ease-in-out infinite" }}
        >
          <Sparkles className="w-full h-full text-primary/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Handpicked selection of the finest mouth fresheners and fryums
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outline"
              size="lg"
              className={`
              transition-all duration-300
              animate-in fade-in slide-in-from-bottom
              cursor-pointer
          
              hover:scale-105
              hover:bg-orange-500
              hover:text-white
              hover:border-orange-500
          
              ${
                selectedCategory === category
                  ? "scale-105 bg-orange-500 text-white border-orange-500"
                  : ""
              }
            `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative group/carousel">
          <div className="flex sm:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto border-border"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex sm:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto border-border"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex sm:grid overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 gap-4 md:gap-5 snap-x snap-mandatory scrollbar-hide sm:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {displayProducts.map((product, index) => (
              <Card
                key={`${selectedCategory}-${index}`}
                className="group min-w-[280px] sm:min-w-0 snap-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border-border hover:border-primary/50 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="aspect-square overflow-hidden relative h-40">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-primary-foreground animate-pulse" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
