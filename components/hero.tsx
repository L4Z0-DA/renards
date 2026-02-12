"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="RENARDS - Underground Streetwear"
          fill
          className={`object-cover object-center transition-transform duration-[2s] ease-out ${
            loaded ? "scale-100" : "scale-110"
          }`}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p
          className={`font-mono text-xs tracking-[0.5em] text-muted-foreground uppercase mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          FW26 Collection
        </p>

        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] text-foreground text-balance leading-none transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          RENARDS
        </h1>

        <p
          className={`font-mono text-xs md:text-sm tracking-[0.3em] text-muted-foreground mt-6 max-w-md transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          BORN FROM THE UNDERGROUND
        </p>

        {/* Marquee */}
        <div
          className={`absolute bottom-24 left-0 right-0 overflow-hidden border-t border-b border-border py-3 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
              >
                UNDERGROUND STREETWEAR — RAW AESTHETICS — CLEAN DESIGN — HANDCRAFTED —
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#productos"
          className={`absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-1000 delay-[1200ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          aria-label="Scroll to products"
        >
          <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
