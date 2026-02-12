"use client"

import { useState, useMemo } from "react"
import { products, categories } from "@/lib/data"
import type { Product } from "@/lib/data"
import { ProductCard } from "./product-card"
import { QuickView } from "./quick-view"

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="productos" className="px-6 lg:px-12 py-24">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-[10px] tracking-[0.5em] text-muted-foreground mb-2">
            COLECCION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            SHOP
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-[10px] tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {filteredProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={setQuickViewProduct}
            index={i}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            NO HAY PRODUCTOS EN ESTA CATEGORIA
          </p>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  )
}
