'use client';
import type {Metadata} from 'next';
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from "@/lib/utils";
import { CartProvider } from '@/lib/cart-context';
import { Header } from '@/components/header';
import { LoadingScreen } from '@/components/LoadingScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans antialiased", inter.variable, jetbrainsMono.variable)}>
      <body suppressHydrationWarning className="bg-deep-black text-white">
        <LoadingScreen />
        <CartProvider>
            <Header />
            {children}
        </CartProvider>
      </body>
    </html>
  );
}
