"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola NODUS, quiero comprar el producto ${product.name}${product.price ? ` (${product.price})` : ''}.`
  )}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.96 }}
      className="group shadow-card relative overflow-hidden rounded-2xl border border-border bg-card flex flex-col transition-colors hover:border-gold/30"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1100}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-100" />
        <div
          className="absolute inset-x-4 bottom-4 hidden sm:inline-flex translate-y-4 items-center justify-center gap-2 rounded-full border border-gold/60 bg-background/70 py-3 text-xs tracking-[0.2em] text-gold uppercase opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold hover:text-black"
        >
          <ShoppingBag size={14} /> Comprar ahora
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 p-4 sm:p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-sm sm:text-lg font-medium text-foreground tracking-wide leading-snug">
              {product.name}
            </h3>
            {product.variants && product.variants.length > 0 && (
              <div className="mt-2.5 flex flex-col gap-1.5">
                {product.variants.map((variant, i) => (
                  <span key={i} className="text-gold-gradient text-xs sm:text-sm font-medium tracking-wide">
                    {variant}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end shrink-0 pt-0.5">
            {product.price && (
              <span className="text-gold-gradient text-base sm:text-lg font-semibold">
                {product.price}
              </span>
            )}
          </div>
        </div>

        {/* Action bar for mobile exclusively to give it an elegant, app-like feel */}
        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3 sm:hidden">
          <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
            Toca para comprar
          </span>
          <span className="flex items-center gap-1.5 text-gold text-[10px] font-semibold uppercase tracking-[0.15em] transition-transform group-active:scale-95">
            <ShoppingBag size={14} /> Comprar
          </span>
        </div>
      </div>
    </motion.a>
  );
}
