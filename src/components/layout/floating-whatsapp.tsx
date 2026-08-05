"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Floating action button anchored to the bottom-right of the viewport.
 * Always visible to offer a quick WhatsApp handoff on every device.
 */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="shadow-lux fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full text-primary-foreground"
      style={{ background: "var(--whatsapp)" }}
    >
      <motion.span
        aria-hidden
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full"
        style={{ background: "var(--whatsapp)" }}
      />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  );
}
