import { PRODUCT_IMAGES } from "@/lib/images";

export type Category = "relojes" | "joyas";

export type Product = {
  id: string;
  name: string;
  detail: string;
  price: string;
  image: string;
  category: Category;
};

export const products: Product[] = [
  {
    id: "olevs-azul",
    name: "Olevs Royal Blue",
    detail: "Acero inoxidable · Quartz 30M",
    price: "$89",
    image: PRODUCT_IMAGES.relojAzul,
    category: "relojes",
  },
  {
    id: "aureo-noir",
    name: "Áureo Noir",
    detail: "Cronógrafo · Baño de oro 18k",
    price: "$129",
    image: PRODUCT_IMAGES.relojOro,
    category: "relojes",
  },
  {
    id: "cruz-divina",
    name: "Cruz Divina",
    detail: "Cadena rolo · Oro laminado",
    price: "$65",
    image: PRODUCT_IMAGES.cruz,
    category: "joyas",
  },
  {
    id: "cadena-atlas",
    name: "Cadena Atlas",
    detail: "Tejido espiga · 50 cm",
    price: "$79",
    image: PRODUCT_IMAGES.cadenaOro,
    category: "joyas",
  },
  {
    id: "pulsera-cuban",
    name: "Pulsera Cuban",
    detail: "Eslabón cubano · Cierre reforzado",
    price: "$59",
    image: PRODUCT_IMAGES.pulseraOro,
    category: "joyas",
  },
  {
    id: "set-lumiere",
    name: "Set Lumière",
    detail: "Argollas + anillo solitario",
    price: "$72",
    image: PRODUCT_IMAGES.joyasSet,
    category: "joyas",
  },
];
