"use client"

import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/format"

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Carrito de compras">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <aside className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-foreground" />
            <h2 className="font-mono text-xs tracking-[0.2em] text-foreground">
              CARRITO
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground text-center">
                TU CARRITO ESTA VACIO
              </p>
              <button
                onClick={closeCart}
                className="font-mono text-[10px] tracking-[0.2em] text-foreground border border-border px-6 py-2 hover:border-foreground transition-colors"
              >
                SEGUIR COMPRANDO
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 p-6 animate-fade-in"
                >
                  {/* Image */}
                  <div className="relative w-20 h-24 bg-secondary shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <h3 className="font-mono text-[10px] tracking-[0.15em] text-foreground truncate">
                        {item.product.name}
                      </h3>
                      <p className="font-mono text-[10px] text-muted-foreground mt-1">
                        TALLA: {item.size}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs text-foreground w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Price and remove */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-foreground">
                          ${formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size)
                          }
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Eliminar ${item.product.name}`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                SUBTOTAL
              </span>
              <span className="font-mono text-sm text-foreground">
                ${formatPrice(totalPrice)} MXN
              </span>
            </div>
            <button className="w-full bg-foreground text-background font-mono text-xs tracking-[0.2em] py-4 hover:bg-foreground/90 transition-colors">
              CHECKOUT
            </button>
            <p className="font-mono text-[10px] text-muted-foreground text-center">
              Envio calculado al checkout
            </p>
          </div>
        )}
      </aside>
    </div>
  )
}
