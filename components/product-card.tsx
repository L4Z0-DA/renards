"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye } from "lucide-react"
import type { Product } from "@/lib/data"

type ProductCardProps = {
  product: Product
  onQuickView: (product: Product) => void
  index: number
}

export function ProductCard({ product, onQuickView, index }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article
      className="group relative opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-foreground text-background px-6 py-3 font-mono text-xs tracking-[0.2em] flex items-center gap-2 hover:bg-foreground/90"
            aria-label={`Vista rápida de ${product.name}`}
          >
            <Eye className="h-4 w-4" />
            VISTA RAPIDA
          </button>
        </div>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-foreground text-background font-mono text-[10px] tracking-[0.2em] px-2 py-1">
            NUEVO
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-mono text-xs tracking-[0.15em] text-foreground">
          {product.name}
        </h3>
        <p className="font-mono text-xs text-muted-foreground">
          ${product.price.toLocaleString()} MXN
        </p>
      </div>
    </article>
  )
}
