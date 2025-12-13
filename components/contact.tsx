"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="border-white/20 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <Phone className="h-8 w-8 text-white group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Phone</h3>
              
              <a
                href="tel:+911234567890"
                className=" hover:underline font-medium text-lg transition-colors"
              >
                +91 123 456 7890
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/20 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom delay-200">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <Mail className="h-8 w-8 text-white group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Email</h3>
              
              <a
                href="mailto:info@yourcompany.com"
                className=" hover:underline font-medium transition-colors break-all"
              >
                info@yourcompany.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/20 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom delay-300">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <MapPin className="h-8 w-8 text-white group-hover:bounce transition-transform" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Address</h3>
              <p className=" font-medium">Vidhya Palace, Indore, Madhya Pradesh 452005</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
