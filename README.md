# NODUS — Landing de Lujo

Landing page de alta gama para una marca de relojes y joyas (NODUS), construida
con **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion** y
**Lucide React**.

> Adaptación profesional del proyecto fuente `elegance-unveiled` (TanStack
> Start) hacia el stack Next.js que usa el resto del workspace.

## Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Estilos:** Tailwind CSS v4 (`@theme inline`, `@utility`)
- **Animaciones:** Framer Motion 12
- **Iconografía:** Lucide React
- **Estado:** Zustand (solo se añade si surge un carrito o filtros globales;
  hoy la app no lo necesita)
- **Utilidades:** `clsx` + `tailwind-merge` (`cn`)

## Estructura

```
src/
├── app/                       # (reservado) rutas App Router
├── components/
│   ├── layout/                # Navbar, Footer, FloatingWhatsApp
│   ├── sections/              # Hero, Catalog, ProductCard, SupportSection
│   └── ui/                    # primitivos reutilizables (botones, etc.)
├── data/
│   └── products.ts            # catálogo seed (relojes y joyas)
├── hooks/
│   ├── use-is-mobile.ts
│   └── use-scrolled.ts
├── lib/
│   ├── images.ts              # URLs Unsplash curadas (placeholders)
│   ├── site.ts                # constantes de marca / contacto
│   └── utils.ts               # cn()
└── styles/
    └── globals.css            # design system NODUS
```

## Design system

- **Paleta:** obsidiana + oro champagne, definida con `oklch` en
  `src/styles/globals.css`.
- **Tipografía:** Playfair Display (display) + Inter (sans) vía `next/font`.
- **Utilities personalizadas:** `text-gold-gradient`, `bg-gold-gradient`,
  `shadow-lux`, `shadow-card`, `hairline`, `eyebrow`, `container-page`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Notas

- Las imágenes usan Unsplash como placeholder. Reemplazar por assets propios
  en `public/products/` y ajustar `src/lib/images.ts`.
- `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE` e `INSTAGRAM_URL` viven en
  `src/lib/site.ts` para retargeting rápido.
