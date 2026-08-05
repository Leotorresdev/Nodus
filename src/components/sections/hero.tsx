"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_IMAGE } from "@/lib/images";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <Image
        src={HERO_IMAGE}
        alt="Reloj de lujo con esfera azul sobre terciopelo negro"
        width={1600}
        height={1104}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,transparent,var(--background)_85%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center"
      >
        <motion.span
          variants={item}
          className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2"
        >
          <Sparkles size={13} /> NODUS · Relojes & Joyas
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 text-4xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl"
        >
          Elegancia Atemporal.
          <span className="text-gold-gradient block">
            Detalles que definen tu estilo.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Piezas seleccionadas a mano: relojes de precisión y joyería en oro
          laminado, con asesoría personalizada y entrega directa.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <motion.a
            href="#catalogo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 0 0 oklch(0.82 0.11 88 / 35%)",
                "0 0 0 14px oklch(0.82 0.11 88 / 0%)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="bg-gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground"
          >
            Ver catálogo <ArrowRight size={16} />
          </motion.a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm tracking-wide text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Asesoría personalizada
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
