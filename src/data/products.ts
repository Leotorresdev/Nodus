import { PRODUCT_IMAGES } from "@/lib/images";

export type Category = "relojes" | "joyas";

export type Product = {
  id: string;
  name: string;
  price?: string;
  variants?: string[];
  colorVariants?: { colorName: string; colorCode: string; image: string }[];
  image: string;
  category: Category;
};

export const products: Product[] = [
  { 
    id: "reloj-curren-8388", 
    name: "Curren 8388", 
    price: "$39.00", 
    image: "/curren-8388-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8388-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8388-green.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8399", 
    name: "Curren 8399", 
    price: "$39.00", 
    image: "/curren-8399-silver.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Plateado", colorCode: "#C0C0C0", image: "/curren-8399-silver.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", image: "/curren-8399-brown.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8398", 
    name: "Curren 8398", 
    price: "$39.00", 
    image: "/curren-8398.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8402", 
    name: "Curren 8402", 
    price: "$39.00", 
    image: "/curren-8402-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8402-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8402-blue.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8442", 
    name: "Curren 8442", 
    price: "$42.00", 
    image: "/curren-8442-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8442-blue.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8442-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8442-white.jpg" },
      { colorName: "Rojo", colorCode: "#FF0000", image: "/curren-8442-red.jpg" },
      { colorName: "Naranja", colorCode: "#FFA500", image: "/curren-8442-orange.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8427", 
    name: "Curren 8427", 
    price: "$39.00", 
    image: "/curren-8427-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8427-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8427-white.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8444", 
    name: "Curren 8444", 
    price: "$30.00", 
    image: "/curren-8444.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8452", 
    name: "Curren 8452", 
    price: "$28.00", 
    image: "/curren-8452-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8452-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8452-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8452-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8452-blue.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8106-white", 
    name: "Curren 8106 White", 
    price: "$29.00", 
    image: "/curren-8106.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8106.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8106-black.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8322", 
    name: "Curren 8322", 
    price: "$30.00", 
    image: "/curren-8322.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8314", 
    name: "Curren 8314", 
    price: "$39.00", 
    image: "/curren-8314.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8291", 
    name: "Curren 8291", 
    price: "$39.00", 
    image: "/curren-8291-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8291-black.jpg" },
      { colorName: "Marrón Claro", colorCode: "#D2B48C", image: "/curren-8291-light-brown.jpg" },
      { colorName: "Marrón Oscuro", colorCode: "#654321", image: "/curren-8291-dark-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8291-blue.jpg" },
      { colorName: "Celeste", colorCode: "#87CEEB", image: "/curren-8291-sky-blue.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8329", 
    name: "Curren 8329", 
    price: "$39.00", 
    image: "/curren-8329.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8324", 
    name: "Curren 8324", 
    price: "$39.00", 
    image: "/curren-8324.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8346", 
    name: "Curren 8346", 
    price: "$39.00", 
    image: "/curren-8346.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8375", 
    name: "Curren 8375", 
    price: "$34.99", 
    image: "/curren-8375.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8384", 
    name: "Curren 8384", 
    price: "$39.00", 
    image: "/curren-8384-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8384-black.jpg" },
      { colorName: "Marrón", colorCode: "#8B4513", image: "/curren-8384-brown.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8384-blue.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-613-silver-case-leather", 
    name: "Poedagar 613 silver case leather", 
    price: "$24.00", 
    image: "/poedagar-613-silver-case-blue-leather.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-613-silver-case-blue-leather.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-613-silver-case-black-leather.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-613-silver-case-white-leather.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-613-rose-gold", 
    name: "Poedagar 613 rose gold", 
    price: "$32.00", 
    image: "/poedagar-613-rose-gold-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Oro Rosa/Negro", colorCode: "#000000", image: "/poedagar-613-rose-gold-black.jpg" },
      { colorName: "Oro Rosa/Azul", colorCode: "#1E3A8A", image: "/poedagar-613-rose-gold-blue.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-928-leather-silver", 
    name: "Poedagar 928 Leather", 
    price: "$36.00", 
    image: "/poedagar-928-leather-black-silver.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-928-leather-black-silver.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-928-leather-case-silver-blue.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-928-leather-black", 
    name: "Poedagar 928 Leather Black", 
    price: "$36.00", 
    image: "/poedagar-928-leather-case-black-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-928-leather-case-black-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-928-leather-black-blue.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-825-monocolor", 
    name: "Poedagar 825", 
    price: "$32.00", 
    image: "/poedagar-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-black.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/poedagar-825-gold.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-825", 
    name: "Poedagar 825", 
    price: "$34.00", 
    image: "/poedagar-825-gold-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Dorado/Blanco", colorCode: "#FFFFFF", image: "/poedagar-825-gold-white.jpg" },
      { colorName: "Dorado/Verde", colorCode: "#14532D", image: "/poedagar-825-gold-green.jpg" },
      { colorName: "Dorado/Azul", colorCode: "#1E3A8A", image: "/poedagar-825-gold-blue.jpg" },
      { colorName: "Dorado/Negro", colorCode: "#000000", image: "/poedagar-825-gold-black.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-893", 
    name: "Poedagar 893", 
    price: "$35.00", 
    image: "/poedagar-893-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-893-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-893-white.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-928", 
    name: "Poedagar 928", 
    price: "$35.00", 
    image: "/poedagar-928-silver-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Plata/Negro", colorCode: "#333333", image: "/poedagar-928-silver-black.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-613-leather", 
    name: "Poedagar 613 Leather", 
    price: "$28.00", 
    image: "/poedagar-613-leather-green.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Verde", colorCode: "#14532D", image: "/poedagar-613-leather-green.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-613-leather-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-613-leather-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-613-leather-black.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-613", 
    name: "Poedagar 613", 
    price: "$29.60", 
    image: "/poedagar-613-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-613-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-613-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-613-blue.jpg" },
      { colorName: "Verde", colorCode: "#14532D", image: "/poedagar-613-green.jpg" }
    ]
  },
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
