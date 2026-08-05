import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { Catalog } from "@/components/sections/catalog";
import { SupportSection } from "@/components/sections/support-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="hairline" />
        <Catalog />
        <SupportSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
