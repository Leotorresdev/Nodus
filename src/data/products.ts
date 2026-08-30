import { PRODUCT_IMAGES } from "@/lib/images";

export type Category = "relojes" | "relojes-dama" | "joyas";

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
    id: "reloj-curren-9079", 
    name: "Curren 9079", 
    price: "$29.00", 
    image: "/curren-9079.jpg", 
    category: "relojes-dama",
    colorVariants: []
  },
  { 
    id: "reloj-curren-9072", 
    name: "Curren 9072", 
    price: "$32.00", 
    image: "/curren-9072.jpg", 
    category: "relojes-dama",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-9072.jpg" },
      { colorName: "Rosado", colorCode: "#FFC0CB", image: "/curren-9072-pink.jpg" }
    ]
  },
  { 
    id: "reloj-curren-9093", 
    name: "Curren 9093", 
    price: "$29.00", 
    image: "/curren-9093.jpg", 
    category: "relojes-dama",
    colorVariants: []
  },
  { 
    id: "reloj-curren-9067-gold", 
    name: "Curren 9067", 
    price: "$29.00", 
    image: "/curren-9067-gold.jpg", 
    category: "relojes-dama",
    colorVariants: [
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/curren-9067-gold.jpg" },
      { colorName: "Oro Rosa", colorCode: "#B76E79", image: "/curren-9067-gold-pink.jpg" }
    ]
  },
  { 
    id: "reloj-curren-9024-black", 
    name: "Curren 9024 Black", 
    price: "$29.00", 
    image: "/curren-9024-black.jpg", 
    category: "relojes-dama",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-9024-black.jpg" }
    ]
  },
  { 
    id: "reloj-curren-9051", 
    name: "Curren 9051", 
    price: "$29.00", 
    image: "/curren-9051.jpg", 
    category: "relojes-dama",
    colorVariants: [
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/curren-9051.jpg" },
      { colorName: "Rosado", colorCode: "#FFC0CB", image: "/curren-9051-pink.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-9051-blue.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8462", 
    name: "Curren 8462", 
    price: "$39.00", 
    image: "/curren-8462-green.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8462-green.jpg" },
      { colorName: "Gris", colorCode: "#808080", image: "/curren-8462-grey.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8464", 
    name: "Curren 8464", 
    price: "$39.00", 
    image: "/curren-8464-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8464-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8464-black.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8461", 
    name: "Curren 8461", 
    price: "$39.00", 
    image: "/curren-8461-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8461-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8461-green.jpg" },
      { colorName: "Gris", colorCode: "#808080", image: "/curren-8461-gray.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8467", 
    name: "Curren 8467", 
    price: "$34.00", 
    image: "/curren-8467-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8467-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/curren-8467-white.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8467-black.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8467-green.jpg" }
    ]
  },
  { 
    id: "reloj-skmei-2423", 
    name: "Skmei 2423", 
    price: "$39.00", 
    image: "/skmei-2423-gold.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/skmei-2423-gold.jpg" },
      { colorName: "Plateado", colorCode: "#C0C0C0", image: "/skmei-2423-silver.jpg" },
      { colorName: "Plateado-Blanco", colorCode: "#F5F5F5", image: "/skmei-2423-silver-white.jpg" }
    ]
  },
  { 
    id: "reloj-skmei-2222", 
    name: "Skmei 2222", 
    price: "$27.00", 
    image: "/skmei-2222.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-chenxi-949", 
    name: "Chenxi 949", 
    price: "$39.00", 
    image: "/chenxi-949.jpg", 
    category: "relojes",
    colorVariants: []
  },
  { 
    id: "reloj-curren-8465", 
    name: "Curren 8465", 
    price: "$32.00", 
    image: "/curren-8465-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8465-blue.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8465-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/curren-8465-black.jpg" },
      { colorName: "Gris", colorCode: "#808080", image: "/curren-8465-grey.jpg" }
    ]
  },
  { 
    id: "reloj-curren-8472", 
    name: "Curren 8472", 
    price: "$32.00", 
    image: "/curren-8472-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/curren-8472-blue.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/curren-8472-green.jpg" }
    ]
  },
  { 
    id: "reloj-skmei-1990", 
    name: "Skmei 1990", 
    price: "$39.00", 
    image: "/skmei-1990.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Plateado", colorCode: "#C0C0C0", image: "/skmei-1990.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/skmei-1990-2.jpg" }
    ]
  },
  { 
    id: "reloj-skmei-2382", 
    name: "Skmei 2382", 
    price: "$24.80", 
    image: "/skmei-2382-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/skmei-2382-black.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/skmei-2382-gold.jpg" },
      { colorName: "Plateado", colorCode: "#C0C0C0", image: "/skmei-2382-silver.jpg" },
      { colorName: "Militar", colorCode: "#556B2F", image: "/skmei-2382-military.jpg" }
    ]
  },
  { 
    id: "reloj-megir-8601", 
    name: "Megir 8601", 
    price: "$45.00", 
    image: "/megir-8601-green.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Verde", colorCode: "#008000", image: "/megir-8601-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/megir-8601-black.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/megir-8601-blue.jpg" }
    ]
  },
  { 
    id: "reloj-megir-2220", 
    name: "Megir 2220", 
    price: "$39.00", 
    image: "/megir-2220-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/megir-2220-blue.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/megir-2220-black.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-926", 
    name: "Poedagar 926", 
    price: "$39.00", 
    image: "/poedagar-926-black.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Negro", colorCode: "#000000", image: "/poedagar-926-black.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-926-white.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-825-3480", 
    name: "Poedagar 825", 
    price: "$34.80", 
    image: "/poedagar-825-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-825-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/poedagar-825-green.jpg" },
      { colorName: "Dorado/Blanco", colorCode: "#D4AF37", image: "/poedagar-825-gold-white-new.jpg" },
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/poedagar-825-blue.jpg" },
      { colorName: "Dorado/Negro", colorCode: "#000000", image: "/poedagar-825-gold-black.jpg" },
      { colorName: "Negro", colorCode: "#222222", image: "/poedagar-825-black-new.jpg" },
      { colorName: "Dorado", colorCode: "#D4AF37", image: "/poedagar-825-gold.jpg" }
    ]
  },
  { 
    id: "reloj-poedagar-930", 
    name: "Poedagar 930", 
    price: "$28.80", 
    image: "/poedagar-930-white.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/poedagar-930-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/poedagar-930-green.jpg" }
    ]
  },
  { 
    id: "reloj-nibosi-2628", 
    name: "Nibosi 2628", 
    price: "$39.00", 
    image: "/nibosi-2628-blue.jpg", 
    category: "relojes",
    colorVariants: [
      { colorName: "Azul", colorCode: "#1E3A8A", image: "/nibosi-2628-blue.jpg" },
      { colorName: "Blanco", colorCode: "#FFFFFF", image: "/nibosi-2628-white.jpg" },
      { colorName: "Verde", colorCode: "#008000", image: "/nibosi-2628-green.jpg" },
      { colorName: "Negro", colorCode: "#000000", image: "/nibosi-2628-black.jpg" }
    ]
  },
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
