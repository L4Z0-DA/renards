"use client"

import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { Lookbook } from "@/components/lookbook"
import { CartSidebar } from "@/components/cart-sidebar"
import { Footer } from "@/components/footer"

export function AppShell() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <Lookbook />
      </main>
      <Footer />
      <CartSidebar />
    </CartProvider>
  )
}
