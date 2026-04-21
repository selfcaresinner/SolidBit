'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [coupon, setCoupon] = useState<{code: string, pct: number} | null>(null);
  const [contactInfo, setContactInfo] = useState({name: '', email: ''});

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
    console.log(`[SYSTEM_NOTICE] COUPON: SOLIDBIT15 - 15% discount available.`);
  };

  const applyCoupon = (code: string) => {
    if (code === 'SOLIDBIT15') {
        setCoupon({code, pct: 0.15});
        return true;
    }
    return false;
  };

  const updateContact = (info: {name: string, email: string}) => setContactInfo(info);

  return (
    <CartContext.Provider value={{ cart, addToCart, applyCoupon, coupon, contactInfo, updateContact }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
