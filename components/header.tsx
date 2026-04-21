'use client';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useRouter } from 'next/navigation';

export function Header() {
  const { cart } = useCart();
  const router = useRouter();
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-deep-black/80 backdrop-blur-md border-b border-surgical-border z-50">
      <div 
        className="w-10 h-10 text-cyan-accent cursor-pointer hover:opacity-80 transition-opacity" 
        onClick={() => router.push('/')}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M50 50 L50 25 L57 32 L50 35 L50 30 L43 32 Z" />
            <path d="M50 50 L75 50 L68 57 L65 50 L70 50 L68 43 Z" />
            <path d="M50 50 L50 75 L43 68 L50 65 L50 70 L57 68 Z" />
            <path d="M50 50 L25 50 L32 43 L35 50 L30 50 L32 57 Z" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M42 42 L58 42 L58 58 L42 58 Z" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
        </svg>
      </div>
      <nav className="hidden md:flex gap-6 font-sans text-sm text-text-s">
        <button onClick={() => scrollTo('pillars')} className="hover:text-white transition">Pilares</button>
        <button onClick={() => scrollTo('framework')} className="hover:text-white transition">Soluciones</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contacto</button>
      </nav>
      <button onClick={() => router.push('/cart')} className="relative p-2 hover:bg-slate-card transition transition-all">
        <ShoppingCart className="text-white" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-cyan-accent text-deep-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </header>
  );
}
