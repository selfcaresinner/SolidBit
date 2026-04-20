'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'motion/react';

export function Pillars() {
  const pillars = [
    { title: "Desarrollo a la Medida", desc: "Soluciones desde cero con Clean Architecture." },
    { title: "Soberanía Tecnológica", desc: "Control total, rendimiento, sin dependencia de plantillas." },
    { title: "Ingeniería de Robustez", desc: "Sistemas escalables basados en principios SOLID." }
  ];

  return (
    <section className="py-24 px-6 bg-deep-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-slate-card border-surgical-border rounded-none p-6 relative before:absolute before:top-0 before:left-0 before:w-1 before:h-1 before:bg-cyan-accent">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-sans text-xl text-text-p">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 font-sans text-text-s text-sm">
                {p.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
