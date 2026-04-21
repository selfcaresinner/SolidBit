'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating initial load time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
          >
            <div className="w-24 h-24 text-cyan-accent">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <path d="M50 50 L50 25 L57 32 L50 35 L50 30 L43 32 Z" />
                    <path d="M50 50 L75 50 L68 57 L65 50 L70 50 L68 43 Z" />
                    <path d="M50 50 L50 75 L43 68 L50 65 L50 70 L57 68 Z" />
                    <path d="M50 50 L25 50 L32 43 L35 50 L30 50 L32 57 Z" />
                    <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M42 42 L58 42 L58 58 L42 58 Z" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
                </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
