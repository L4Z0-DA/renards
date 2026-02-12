"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"

type QuickViewProps = {
  product: Product
  onClose: () => void
}

export function QuickView({ product, onClose }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true)
      return
    }
    addItem(product, selectedSize)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista rápida de ${product.name}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Cerrar vista rápida"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative aspect-[3/4] md:w-1/2 bg-secondary shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-foreground text-background font-mono text-[10px] tracking-[0.2em] px-2 py-1">
                NUEVO
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-8 md:w-1/2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
                {product.category.toUpperCase()}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                {product.name}
              </h2>
              <p className="font-mono text-lg text-foreground mb-6">
                ${product.price.toLocaleString()} MXN
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Sizes */}
              <div className="mb-8">
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
                  TALLA {sizeError && <span className="text-destructive ml-2">— Selecciona una talla</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size)
                        setSizeError(false)
                      }}
                      className={`font-mono text-xs tracking-wider px-4 py-2 border transition-all duration-200 ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-foreground text-background font-mono text-xs tracking-[0.2em] py-4 hover:bg-foreground/90 transition-colors"
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
