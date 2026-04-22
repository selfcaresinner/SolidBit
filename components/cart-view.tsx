'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/lib/cart-context';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Replace with your actual public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export function CartView() {
  const { cart, coupon, applyCoupon, contactInfo, updateContact } = useCart();
  const [couponInput, setCouponInput] = useState('');
  const router = useRouter();

  const subtotal = cart.reduce((acc: number, p: any) => acc + p.price, 0);
  const total = coupon ? subtotal * (1 - coupon.pct) : subtotal;

  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        cart, 
        contactInfo,
        total
      }),
    });
    const { url } = await res.json();
    if (url) {
      window.location.href = url;
    } else {
      console.error("No se recibió la URL de sesión");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-deep-black text-white pt-20 px-12">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-cyan-accent font-mono mb-8 hover:underline">
        <ArrowLeft size={16} /> ATRÁS
      </button>
      <h2 className="text-5xl font-sans font-bold mb-12">Su Solución (Carrito)</h2>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
            {cart.map((p: any, i: number) => <div key={i} className="border-b border-gray-800 pb-4 flex justify-between">{p.title} <span>${p.price}</span></div>)}
        </div>
        
        <div className="bg-slate-card p-12 border border-surgical-border space-y-6">
            <input placeholder="Nombre Completo" value={contactInfo.name} onChange={e => updateContact({...contactInfo, name: e.target.value})} className="w-full bg-deep-black p-4 border border-gray-700"/>
            <input placeholder="Email" value={contactInfo.email} onChange={e => updateContact({...contactInfo, email: e.target.value})} className="w-full bg-deep-black p-4 border border-gray-700"/>
            <input placeholder="Teléfono" value={contactInfo.phone} onChange={e => updateContact({...contactInfo, phone: e.target.value})} className="w-full bg-deep-black p-4 border border-gray-700"/>
            <input placeholder="Empresa" value={contactInfo.company} onChange={e => updateContact({...contactInfo, company: e.target.value})} className="w-full bg-deep-black p-4 border border-gray-700"/>
            <textarea placeholder="Dirección / Domicilio Fiscal" value={contactInfo.address} onChange={e => updateContact({...contactInfo, address: e.target.value})} className="w-full bg-deep-black p-4 border border-gray-700 h-24"/>
            
            <div className="flex gap-2">
                <input placeholder="Cupón (SOLIDBIT15)" value={couponInput} onChange={e => setCouponInput(e.target.value)} className="w-full bg-deep-black p-4 border border-gray-700"/>
                <button onClick={() => applyCoupon(couponInput)} className="bg-cyan-accent text-deep-black px-6 font-bold hover:opacity-90">APLICAR</button>
            </div>
            
            <div className="text-3xl font-bold py-6">Total: ${total.toFixed(2)}</div>
            <button 
                onClick={handleCheckout} 
                disabled={!contactInfo.name || !contactInfo.email || !contactInfo.phone || !contactInfo.company || !contactInfo.address || cart.length === 0} 
                className="w-full bg-cyan-accent text-deep-black p-4 font-bold disabled:opacity-50 hover:opacity-90 transition-all font-mono"
            >
                PROCEDER A PAGO SEGURO
            </button>
        </div>
      </div>
    </motion.div>
  );
}
