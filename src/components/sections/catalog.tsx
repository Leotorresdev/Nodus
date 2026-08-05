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
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProducts = useMemo(() => {
    let filtered = filter === "todo"
      ? products
      : products.filter((p) => p.category === filter);
      
    if (!isExpanded) {
      if (filter === "todo") {
        // Mostrar máximo 6 productos en "Todo": hasta 3 relojes y completar con joyas
        const watches = products.filter((p) => p.category === "relojes");
        const jewelry = products.filter((p) => p.category === "joyas");
        
        const selectedWatches = watches.slice(0, 3);
        const selectedJewelry = jewelry.slice(0, 6 - selectedWatches.length);
        
        filtered = [...selectedWatches, ...selectedJewelry];
      } else {
        filtered = filtered.slice(0, 6);
      }
    }
    
    return filtered;
  }, [filter, isExpanded]);

  const hasMore = useMemo(() => {
    const total = filter === "todo" 
      ? products.length 
      : products.filter((p) => p.category === filter).length;
    return total > visibleProducts.length;
  }, [filter, visibleProducts.length]);

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
    setIsExpanded(false);
  };

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
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
              onClick={() => handleFilterChange(t.id)}
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
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visibleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative overflow-hidden rounded-full border border-gold/40 bg-transparent px-8 py-3 text-sm tracking-widest text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <span className="relative z-10 uppercase text-xs">Cargar más modelos</span>
            <div className="absolute inset-0 -z-0 bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>
      )}
    </section>
  );
}
