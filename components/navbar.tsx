"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const navLinks = [
  { href: "#productos", label: "SHOP" },
  { href: "#lookbook", label: "LOOKBOOK" },
  { href: "#about", label: "ABOUT" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openCart, totalItems } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="font-mono text-xl tracking-[0.3em] text-foreground font-bold">
          RENARDS
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-mono w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-2xl tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
