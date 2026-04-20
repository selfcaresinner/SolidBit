import type {Metadata} from 'next';
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'SolidBit | Ingeniería de Alta Fidelidad',
  description: 'Ingeniería de Alta Fidelidad para la Complejidad Real',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans antialiased", inter.variable, jetbrainsMono.variable)}>
      <body suppressHydrationWarning className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
