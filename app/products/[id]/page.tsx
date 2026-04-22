'use client';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { use } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  
  const products: any = {
    'module_01': { 
      title: "Análisis Estratégico", 
      price: 1, 
      desc: "Elevamos la visión operativa mediante diagnósticos de alta precisión.",
      details: "Revisamos a fondo cómo está funcionando tu plataforma para detectar oportunidades de mejora y puntos que podrían frenar tu crecimiento. Te entregamos un informe claro para que sepas dónde enfocar tus esfuerzos y qué ajustar primero."
    },
    'module_02': { 
      title: "Arquitectura Sofisticada", 
      price: 1, 
      desc: "Construimos bases lógicas robustas que soportan el crecimiento a escala.",
      details: "Diseñamos la estructura digital de tu negocio para que sea flexible y resistente. Nos aseguramos de que tu plataforma esté preparada para crecer contigo sin importar cuánto aumente la demanda, manteniendo siempre la estabilidad necesaria."
    },
    'module_03': { 
      title: "Entrega de Software", 
      price: 1, 
      desc: "Implementación ágil de componentes funcionales listos para producción.",
      details: "Nos encargamos de materializar tus necesidades digitales, entregando soluciones listas para usar en tu día a día. Nos aseguramos de que cada funcionalidad nueva se integre perfectamente con lo que ya tienes sin complicaciones."
    }
  };

  const product = products[id];

  if (!product) return <div className="text-white p-12">Producto no encontrado</div>;

  return (
    <div className="min-h-screen bg-deep-black p-12 text-text-p pt-24">
        <div className="relative z-20">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-cyan-accent font-mono mb-8 hover:underline">
              <ArrowLeft size={16} /> ATRÁS
          </button>
        </div>
        <div className="max-w-2xl border border-surgical-border p-12 bg-slate-card">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-text-s mb-6">{product.desc}</p>
            <div className="text-text-p font-sans mb-10 leading-relaxed">{product.details}</div>
            <div className="text-2xl font-bold mb-8">$ {product.price} USD</div>
            <button 
                onClick={() => addToCart(product)}
                className="border border-cyan-accent text-cyan-accent px-6 py-3 font-mono hover:bg-cyan-accent hover:text-deep-black transition-all"
            >
                [ AGREGAR_AL_CARRITO ]
            </button>
        </div>
    </div>
  );
}
