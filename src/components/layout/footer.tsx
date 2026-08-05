import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { INSTAGRAM_URL, WHATSAPP_URL, SITE } from "@/lib/site";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-12 shrink-0">
              <Image
                src="/products/logo.jpg"
                alt="Nodus Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="font-display text-base tracking-[0.35em]">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Relojes y joyería de lujo accesible. Piezas seleccionadas, atención
            personal.
          </p>
        </div>

        <nav className="text-sm">
          <p className="eyebrow">Navegación</p>
          <ul className="mt-4 space-y-2.5 text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="eyebrow">Escríbenos</p>
          <div className="mt-4 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
