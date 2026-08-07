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

          {/* Images Collage */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full">
            {/* Elegant Glow effect behind everything */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-gold/30 to-gold-deep/10 blur-[60px] rounded-full opacity-60" />
            
            {/* Main Image: Reloj Oro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-[70%] h-[80%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-secondary/50 z-10"
            >
              <Image
                src="/products/reloj-oro.jpg"
                alt="Reloj de oro elegante"
                fill
                sizes="(max-width: 768px) 70vw, 40vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

            {/* Second Image: Combinacion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="absolute right-0 bottom-0 w-[60%] h-[65%] overflow-hidden rounded-[2rem] border border-gold/30 shadow-[0_30px_70px_rgba(0,0,0,0.8)] bg-secondary/50 z-20 ring-4 ring-background"
            >
              <Image
                src="/products/combinacion.jpg"
                alt="Combinación exclusiva de joyería y reloj"
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
