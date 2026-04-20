'use client';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen flex flex-col justify-center items-center text-center p-6 border-b border-surgical-border"
    >
      <div className="z-10 max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-text-p">
          Ingeniería de Alta Fidelidad para la Complejidad Real
        </h1>
        <p className="font-mono text-cyan-accent text-xl">
          Software soberano desarrollado íntegramente en Sonora, México.
        </p>
      </div>
    </motion.section>
  );
}
