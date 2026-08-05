"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:grid-cols-3">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-12 shrink-0">
            <Image
              src="/products/logo.jpg"
              alt="Nodus Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="font-display truncate text-lg tracking-[0.35em] text-foreground">
            NODUS
          </span>
        </a>

        <div className="hidden items-center justify-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold-gradient after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Instagram"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
