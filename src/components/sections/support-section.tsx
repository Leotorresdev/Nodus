"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Channel = {
  href: string;
  icon: IconComponent;
  title: string;
  sub: string;
  tone: string;
};

const channels: Channel[] = [
  {
    href: WHATSAPP_URL,
    icon: MessageCircle,
    title: "WhatsApp",
    sub: "Respuesta inmediata y fotos reales",
    tone: "var(--whatsapp)",
  },
  {
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    title: "Instagram",
    sub: "Mira el catálogo completo y envía DM",
    tone: "var(--instagram)",
  },
];

export function SupportSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent),transparent_70%)] opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="eyebrow">Atención directa</span>
          <h2 className="mt-4 text-3xl sm:text-5xl">
            Hablemos de tu{" "}
            <span className="text-gold-gradient">próxima pieza</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Te asesoramos por chat: disponibilidad, tallas, envíos y fotos
            reales en el momento.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {channels.map(({ href, icon: Icon, title, sub, tone }, i) => (
            <motion.a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group shadow-card relative flex items-center gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7"
            >
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15"
                style={{ background: tone }}
              />
              <span
                className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
                style={{ background: tone, color: "var(--primary-foreground)" }}
              >
                <Icon className="h-[26px] w-[26px]" />
              </span>
              <span className="relative min-w-0">
                <span className="block text-lg font-medium text-foreground">
                  {title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {sub}
                </span>
              </span>
              <ArrowUpRight
                size={20}
                className="relative ml-auto shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
