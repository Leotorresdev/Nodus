/**
 * Site-wide constants for the NODUS landing.
 * Update these to retarget the brand, the WhatsApp line or the Instagram handle.
 */
export const WHATSAPP_NUMBER = "584149712020";

export const WHATSAPP_MESSAGE =
  "¡Hola, NODUS! 👋 Me gustaría recibir asesoría personalizada para elegir un reloj o joya que se adapte a mi estilo.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/nodusbrand_?igsh=Mm9jMnBsZ3R4dGY5";

export const SITE = {
  name: "NODUS",
  tagline: "Relojes & Joyas",
  description:
    "Piezas seleccionadas a mano: relojes de precisión y joyería en oro laminado.",
} as const;
