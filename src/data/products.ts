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
  { id: "joya-1", name: "Joya Exclusiva 1", detail: "Pieza fina de colección", price: "$45", image: PRODUCT_IMAGES.joya1, category: "joyas" },
  { id: "joya-2", name: "Joya Exclusiva 2", detail: "Pieza fina de colección", price: "$50", image: PRODUCT_IMAGES.joya2, category: "joyas" },
  { id: "joya-3", name: "Joya Exclusiva 3", detail: "Pieza fina de colección", price: "$55", image: PRODUCT_IMAGES.joya3, category: "joyas" },
  { id: "joya-4", name: "Joya Exclusiva 4", detail: "Pieza fina de colección", price: "$60", image: PRODUCT_IMAGES.joya4, category: "joyas" },
  { id: "joya-5", name: "Joya Exclusiva 5", detail: "Pieza fina de colección", price: "$65", image: PRODUCT_IMAGES.joya5, category: "joyas" },
  { id: "joya-6", name: "Joya Exclusiva 6", detail: "Pieza fina de colección", price: "$70", image: PRODUCT_IMAGES.joya6, category: "joyas" },
  { id: "joya-7", name: "Joya Exclusiva 7", detail: "Pieza fina de colección", price: "$75", image: PRODUCT_IMAGES.joya7, category: "joyas" },
  { id: "joya-8", name: "Joya Exclusiva 8", detail: "Pieza fina de colección", price: "$80", image: PRODUCT_IMAGES.joya8, category: "joyas" },
  { id: "joya-9", name: "Joya Exclusiva 9", detail: "Pieza fina de colección", price: "$85", image: PRODUCT_IMAGES.joya9, category: "joyas" },
  { id: "joya-10", name: "Joya Exclusiva 10", detail: "Pieza fina de colección", price: "$90", image: PRODUCT_IMAGES.joya10, category: "joyas" },
  { id: "joya-11", name: "Joya Exclusiva 11", detail: "Pieza fina de colección", price: "$95", image: PRODUCT_IMAGES.joya11, category: "joyas" },
  { id: "joya-12", name: "Joya Exclusiva 12", detail: "Pieza fina de colección", price: "$100", image: PRODUCT_IMAGES.joya12, category: "joyas" },
  { id: "joya-13", name: "Joya Exclusiva 13", detail: "Pieza fina de colección", price: "$105", image: PRODUCT_IMAGES.joya13, category: "joyas" },
];
