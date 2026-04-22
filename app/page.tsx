import { Hero3D } from "@/components/Hero3D";
import { Pillars } from "@/components/pillars";
import { Framework } from "@/components/blueprint";
import { Portfolio } from "@/components/portfolio";
import { ContactForm } from "@/components/contact";
import { CircuitOverlay } from "@/components/circuit-overlay";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-black text-white p-6 md:p-12">
      <CircuitOverlay />
      
      <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] border-b border-surgical-border">
        <h1 className="text-8xl md:text-[12rem] font-sans font-bold tracking-tighter text-white uppercase italic">SolidBit</h1>
        <Hero3D />
        <p className="text-xl md:text-2xl font-mono text-cyan-accent mb-12 text-center">ELEGANCIA EN INGENIERÍA / FORMA ARTÍSTICA</p>
      </section>

      <section id="pillars">
        <Pillars />
      </section>
      
      <section id="framework">
        <Framework />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
      
      <Footer />
    </main>
  );
}
