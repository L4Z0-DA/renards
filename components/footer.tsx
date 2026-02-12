import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="border-t border-border px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-lg tracking-[0.3em] text-foreground font-bold">
            RENARDS
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Underground streetwear nacido de la cultura urbana. Piezas diseñadas para quienes viven fuera del mainstream.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            NAVEGACION
          </span>
          <nav className="flex flex-col gap-2">
            {[
              { href: "#productos", label: "Shop" },
              { href: "#lookbook", label: "Lookbook" },
              { href: "#about", label: "Nosotros" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social + Newsletter hint */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            CONECTA
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors font-mono text-xs tracking-wider flex items-center"
              aria-label="TikTok"
            >
              TK
            </a>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Sigue nuestro movimiento. Drops exclusivos anunciados primero en nuestras redes.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          RENARDS {new Date().getFullYear()}. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          MADE IN MEXICO
        </p>
      </div>
    </footer>
  )
}
