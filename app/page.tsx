import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Blueprint } from "@/components/blueprint";
import { ContactForm } from "@/components/contact";
import { GridOverlay } from "@/components/grid-overlay";
import { CircuitOverlay } from "@/components/circuit-overlay";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-black">
      <GridOverlay />
      <CircuitOverlay />
      <Hero />
      <Pillars />
      <Blueprint />
      <ContactForm />
    </main>
  );
}
