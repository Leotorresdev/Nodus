import { PRODUCT_IMAGES } from "@/lib/images";

export type Category = "relojes" | "joyas";

export type Product = {
  id: string;
  name: string;
  price?: string;
  variants?: string[];
  image: string;
  category: Category;
};

export const products: Product[] = [
  { id: "reloj-1", name: "Poedagar 827", price: "$30", image: PRODUCT_IMAGES.reloj1, category: "relojes" },
  { id: "reloj-2", name: "Curren 8443", price: "$35", image: PRODUCT_IMAGES.reloj2, category: "relojes" },
  { id: "reloj-3", name: "Curren 8439", price: "$30", image: PRODUCT_IMAGES.reloj3, category: "relojes" },
  { id: "reloj-4", name: "Curren 8459", price: "$35", image: PRODUCT_IMAGES.reloj4, category: "relojes" },
  { id: "reloj-5", name: "Curren 8458", price: "$35", image: PRODUCT_IMAGES.reloj5, category: "relojes" },
  { id: "reloj-6", name: "Curren 8471", price: "$30", image: PRODUCT_IMAGES.reloj6, category: "relojes" },
  { id: "reloj-7", name: "Wlisth 6144", price: "$25", image: PRODUCT_IMAGES.reloj7, category: "relojes" },
  { id: "reloj-8", name: "Curren 8480", price: "$25", image: PRODUCT_IMAGES.reloj8, category: "relojes" },
  { id: "reloj-9", name: "Curren 8474", price: "$35", image: PRODUCT_IMAGES.reloj9, category: "relojes" },
  { id: "joya-2", name: "Cubana", variants: ["2mm $13", "3mm $14", "4mm $15"], image: PRODUCT_IMAGES.joya2, category: "joyas" },
  { id: "joya-3", name: "Cordón San Francisco", variants: ["2mm $10", "3mm $13", "4mm $15"], image: PRODUCT_IMAGES.joya3, category: "joyas" },
  { id: "joya-4", name: "Gucci 3mm", price: "$15", image: PRODUCT_IMAGES.joya4, category: "joyas" },
  { id: "joya-5", name: "Fígaro 3mm + Dije", price: "$18", image: PRODUCT_IMAGES.joya5, category: "joyas" },
  { id: "joya-6", name: "Esclavas", variants: ["2mm $10", "3mm $10", "4mm $12"], image: PRODUCT_IMAGES.joya6, category: "joyas" },
  { id: "joya-7", name: "Cubana Cerrada 3mm + Dije", price: "$20", image: PRODUCT_IMAGES.joya7, category: "joyas" },
  { id: "joya-8", name: "Box 3mm + Dije", price: "$18", image: PRODUCT_IMAGES.joya8, category: "joyas" },
  { id: "joya-9", name: "Cubana 3mm + Dije", price: "$19", image: PRODUCT_IMAGES.joya9, category: "joyas" },
  { id: "joya-10", name: "Tejido Chino 3mm + Dije", price: "$20", image: PRODUCT_IMAGES.joya10, category: "joyas" },
  { id: "joya-11", name: "Tejido Chino 3mm + Dije", price: "$20", image: PRODUCT_IMAGES.joya11, category: "joyas" },
  { id: "joya-12", name: "Cadena Veneciana + Dije", price: "$15", image: PRODUCT_IMAGES.joya12, category: "joyas" },
  { id: "joya-13", name: "Cubana 3mm", price: "$14", image: PRODUCT_IMAGES.joya13, category: "joyas" },
];
