"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="eyebrow mb-3">Sobre Nosotros</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight">
                El arte del tiempo y <span className="text-gold-gradient">la elegancia eterna</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                En <strong>NODUS</strong>, creemos que un reloj no solo marca las horas, sino que cuenta la historia de quien lo lleva. Nuestra pasión es seleccionar meticulosamente piezas que combinan ingeniería de precisión con un diseño deslumbrante.
              </p>
              <p>
                Cada joya de nuestro catálogo está forjada con materiales de primera calidad, pensada para quienes no se conforman con lo ordinario y buscan reflejar su éxito y sofisticación en cada detalle de su vida diaria.
              </p>
            </div>
            
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <span className="text-sm font-medium text-foreground">Calidad Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="text-sm font-medium text-foreground">Garantía Exclusiva</span>
              </div>
            </div>
          </motion.div>

          {/* Image with elegant shadows/glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Elegant Glow effect behind the image */}
            <div className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-gold/30 to-gold-deep/10 blur-3xl rounded-[3rem] opacity-70" />
            
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 shadow-lux bg-secondary/50">
              <Image
                src="/products/reloj-oro.jpg"
                alt="Reloj de oro elegante"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
