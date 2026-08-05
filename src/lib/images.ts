/**
 * Product imagery.
 * Files live in `public/products/` and are served by Next.js as static assets.
 * They are the original assets shipped with the source design, copied as-is.
 * The Cruz Divina piece originally came from a Lovable-hosted asset that is
 * not reachable from outside that platform, so it is replaced with a curated
 * Unsplash image that fits the gold-cross brief.
 */
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMAGE = "/products/hero.jpg";

export const PRODUCT_IMAGES = {
  relojAzul: "/products/reloj-azul.jpg",
  relojOro: "/products/reloj-oro.jpg",
  pulseraOro: "/products/pulsera-oro.jpg",
  joyasSet: "/products/joyas-set.jpg",
  cadenaOro: "/products/cadena-oro.jpg",
  cruz: u("photo-1602173574767-37ac01994b2a"),
} as const;
