'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'motion/react';

export function Pillars() {
  const pillars = [
    { title: "Desarrollo Personalizado", desc: "Creamos software exacto para lo que tu negocio necesita." },
    { title: "Independencia Tecnológica", desc: "Tú eres dueño de tu tecnología, sin ataduras a plantillas externas." },
    { title: "Soluciones Confiables", desc: "Construimos sistemas sólidos que funcionan siempre, a prueba de fallos." }
  ];

  return (
    <section className="py-20 px-8 bg-deep-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-slate-card border-surgical-border rounded-lg p-8 h-full flex flex-col justify-between hover:border-cyan-accent transition-colors duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-sans text-2xl text-text-p">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 font-sans text-text-s text-base leading-relaxed">
                {p.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
