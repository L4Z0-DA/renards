export type Product = {
  id: string
  name: string
  price: number
  category: "tops" | "bottoms" | "outerwear" | "accessories"
  image: string
  description: string
  sizes: string[]
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: "rnrd-001",
    name: "OVERSIZED HOODIE NOIR",
    price: 2890,
    category: "tops",
    image: "/images/product-1.jpg",
    description: "Hoodie oversized de algodón premium 380gsm. Corte drop-shoulder con capucha doble capa. Bordado RENARDS en tono sobre tono.",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "rnrd-002",
    name: "CARGO PANTS TACTICAL",
    price: 3290,
    category: "bottoms",
    image: "/images/product-2.jpg",
    description: "Pantalón cargo con 6 bolsillos utilitarios. Tela ripstop reforzada. Cintura ajustable con cordón interno. Corte relajado.",
    sizes: ["28", "30", "32", "34", "36"],
    isNew: true,
  },
  {
    id: "rnrd-003",
    name: "TEE GRAPHIC DISTORTION",
    price: 1490,
    category: "tops",
    image: "/images/product-3.jpg",
    description: "Playera oversize con gráfico abstracto serigrafíado a mano. Algodón 240gsm. Cuello reforzado doble costura.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "rnrd-004",
    name: "BOMBER JACKET STEALTH",
    price: 4590,
    category: "outerwear",
    image: "/images/product-4.jpg",
    description: "Bomber jacket con exterior de nylon mate y forro de satén. Bolsillos ocultos con cierre YKK. Ribetes elásticos en puños y cintura.",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "rnrd-005",
    name: "TEE ESSENTIAL BLANC",
    price: 990,
    category: "tops",
    image: "/images/product-5.jpg",
    description: "Básico esencial en algodón premium 200gsm. Logo mínimo RENARDS bordado en pecho. Corte boxy relajado.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "rnrd-006",
    name: "JOGGER PHANTOM",
    price: 2490,
    category: "bottoms",
    image: "/images/product-6.jpg",
    description: "Jogger de french terry 360gsm. Cintura elástica con cordón. Bolsillos laterales con cierre oculto. Puños elásticos.",
    sizes: ["S", "M", "L", "XL"],
  },
]

export const categories = [
  { value: "all", label: "TODO" },
  { value: "tops", label: "TOPS" },
  { value: "bottoms", label: "BOTTOMS" },
  { value: "outerwear", label: "OUTERWEAR" },
  { value: "accessories", label: "ACCESORIOS" },
]

export const lookbookImages = [
  {
    id: 1,
    src: "/images/lookbook-1.jpg",
    alt: "RENARDS Lookbook - Editorial urbano",
    caption: "FW26 — UNDERGROUND",
  },
  {
    id: 2,
    src: "/images/lookbook-2.jpg",
    alt: "RENARDS Lookbook - Nocturno",
    caption: "FW26 — NOCTURNAL",
  },
  {
    id: 3,
    src: "/images/lookbook-3.jpg",
    alt: "RENARDS Lookbook - Rooftop",
    caption: "FW26 — ELEVATED",
  },
  {
    id: 4,
    src: "/images/lookbook-4.jpg",
    alt: "RENARDS Lookbook - Detalle",
    caption: "FW26 — DETAIL",
  },
]
