"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { lookbookImages } from "@/lib/data"

export function Lookbook() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % lookbookImages.length)
  }

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + lookbookImages.length) % lookbookImages.length
    )
  }

  return (
    <section id="lookbook" className="px-6 lg:px-12 py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-[0.5em] text-muted-foreground mb-2">
          EDITORIAL
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          LOOKBOOK
        </h2>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lookbookImages.map((img, i) => (
          <button
            key={img.id}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden opacity-0 animate-fade-in cursor-pointer ${
              i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"
            }`}
            style={{ animationDelay: `${i * 150}ms` }}
            aria-label={`Ver ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-mono text-[10px] tracking-[0.3em] text-foreground">
                {img.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox del lookbook"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition-colors z-10"
            aria-label="Cerrar lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 text-foreground hover:text-muted-foreground transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 text-foreground hover:text-muted-foreground transition-colors z-10"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[85vh] m-8">
            <Image
              src={lookbookImages[lightboxIndex].src}
              alt={lookbookImages[lightboxIndex].alt}
              fill
              className="object-contain animate-scale-in"
              sizes="100vw"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
              {lookbookImages[lightboxIndex].caption} — {lightboxIndex + 1}/{lookbookImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
