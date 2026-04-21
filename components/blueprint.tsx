'use client';
import { useRouter } from 'next/navigation';

export function Framework() {
  const router = useRouter();
  const products = [
    { id: "module_01", title: "Análisis Estratégico", desc: "Elevamos la visión operativa mediante diagnósticos de alta precisión.", priceId: "price_product_01" },
    { id: "module_02", title: "Arquitectura Sofisticada", desc: "Construimos bases lógicas robustas que soportan el crecimiento a escala.", priceId: "price_product_02" },
    { id: "module_03", title: "Entrega de Software", desc: "Implementación ágil de componentes funcionales listos para producción.", priceId: "price_product_03" },
    { id: "module_04", title: "Solución de Software General", desc: "Desarrollamos soluciones cohesionadas para optimizar flujos operativos complejos.", priceId: "price_product_04" },
    { id: "module_05", title: "Creación de Página Web", desc: "Forjamos identidades digitales con alto rendimiento y experiencia de usuario optimizada.", priceId: "price_product_05" },
    { id: "module_06", title: "Diseño de Software", desc: "Modelamos la estructura lógica para garantizar coherencia y navegación intuitiva.", priceId: "price_product_06" }
  ];

  return (
    <section className="py-20 px-8 bg-deep-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl font-bold text-text-p mt-4">Nuestras Soluciones</h2>
          <p className="text-text-s mt-4 text-lg">Módulos diseñados para impulsar tu empresa con tecnología madura y segura.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="border border-surgical-border p-8 bg-slate-card rounded-lg hover:border-cyan-accent transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-text-p mb-4">{p.title}</h3>
                <p className="text-text-s mb-6 text-sm">{p.desc}</p>
              </div>
              <button 
                onClick={() => router.push(`/products/${p.id}`)}
                className="w-full border border-surgical-border py-3 text-sm font-sans hover:bg-cyan-accent hover:text-deep-black transition-all duration-300"
              >
                VER MÁS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
