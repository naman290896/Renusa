"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Products", href: "products" },
    { label: "Stores", href: "stores" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      {/* Accent line when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:opacity-90 transition-opacity duration-300">
                RENUSA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium -mt-0.5 block">
                Foods
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2.5 rounded-lg text-foreground/80 font-medium transition-all duration-300 cursor-pointer group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary/0 group-hover:bg-primary/60 rounded-full transition-all duration-300" />
              </button>
            ))}
            <div className="w-px h-6 bg-border mx-2" aria-hidden />
            <Button
              onClick={() => scrollToSection("cities")}
              className="
    ml-2
    bg-orange-500 text-white
    shadow-md shadow-orange-500/25
    hover:bg-orange-600
    hover:shadow-lg hover:shadow-orange-500/40
    transition-all duration-300
  "
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-accent transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300 bg-card/98 backdrop-blur-xl border border-border rounded-2xl shadow-lg mt-2">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-4" />
            <div className="pb-6 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-foreground/90 hover:text-primary hover:bg-accent font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 px-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full shadow-md shadow-primary/15"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
