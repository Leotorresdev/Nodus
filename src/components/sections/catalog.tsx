"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, type Category } from "@/data/products";
import { ProductCard } from "@/components/sections/product-card";

type Filter = "todo" | Category;

const tabs: { id: Filter; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "relojes", label: "Relojes" },
  { id: "joyas", label: "Joyas" },
];

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("todo");
  const visible = useMemo(
    () =>
      filter === "todo"
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="eyebrow">Colección</span>
        <h2 className="mt-4 text-3xl sm:text-5xl">Catálogo Nodus</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
          Cada pieza es seleccionada por su acabado, su peso y su presencia.
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-card/60 p-1 backdrop-blur">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              aria-pressed={filter === t.id}
              className={`relative rounded-full px-5 py-2.5 text-xs tracking-[0.18em] uppercase transition-colors duration-300 sm:px-7 ${
                filter === t.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === t.id && (
                <motion.span
                  layoutId="tab-pill"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="bg-gold-gradient absolute inset-0 rounded-full"
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
