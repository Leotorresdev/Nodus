"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola NODUS, quiero comprar el producto ${product.name} (${product.price}).`
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group shadow-card relative overflow-hidden rounded-2xl border border-border bg-card flex flex-col"
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
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-4 bottom-4 inline-flex translate-y-4 items-center justify-center gap-2 rounded-full border border-gold/60 bg-background/70 py-3 text-xs tracking-[0.2em] text-gold uppercase opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold hover:text-black"
        >
          <ShoppingBag size={14} /> Comprar ahora
        </a>
      </div>

      <div className="flex items-start justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {product.detail}
          </p>
        </div>
        <div className="flex flex-col items-end shrink-0 justify-center">
          <span className="text-gold-gradient text-lg font-semibold">
            {product.price}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
