import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NODUS Brand — Relojes y Joyas de Lujo",
  description:
    "Relojes de precisión y joyería en oro laminado con asesoría personalizada.",
  authors: [{ name: "Nodus Brand" }],
  openGraph: {
    type: "website",
    title: "NODUS Brand — Relojes y Joyas de Lujo",
    description:
      "Relojes de precisión y joyería en oro laminado con asesoría personalizada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NODUS Brand — Relojes y Joyas de Lujo",
    description:
      "Relojes de precisión y joyería en oro laminado con asesoría personalizada.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
