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
      title: "Auditoría y Análisis Estratégico", 
      price: 50, 
      desc: "Elevamos la visión operativa mediante diagnósticos de alta precisión.",
      details: "Revisamos a fondo el código fuente, la infraestructura cloud y las bases de datos de tu plataforma actual para detectar cuellos de botella, vulnerabilidades de seguridad y deuda técnica. Entregamos un reporte accionable con prioridades.",
      forWho: "Empresas con software legacy o plataformas que están fallando bajo alta demanda.",
      timeframe: "2 a 4 semanas.",
      deliverables: "Reporte de auditoría, diagrama de arquitectura actual vs propuesta, plan de remediación."
    },
    'module_02': { 
      title: "Arquitectura Cloud y Bases de Datos", 
      price: 50, 
      desc: "Construimos bases lógicas robustas que soportan el crecimiento a escala.",
      details: "Diseñamos bases de datos relacionales y no relacionales optimizadas, configuramos contenedores (Docker/Kubernetes) y diseñamos APIs REST o GraphQL preparadas para ser consumidas por múltiples clientes de forma concurrente sin caídas.",
      forWho: "Startups escalando o plataformas que necesitan reestructurar su backend para soporte masivo.",
      timeframe: "4 a 8 semanas dependiendo de la complejidad.",
      deliverables: "Esquemas de base de datos, APIs documentadas en Swagger, Infraestructura como Código (Terraform/AWS)."
    },
    'module_03': { 
      title: "Desarrollo de Apps Móviles", 
      price: 50, 
      desc: "Aplicaciones nativas e híbridas de alto rendimiento listas para producción.",
      details: "Desarrollamos aplicaciones móviles en React Native o Swift/Kotlin. Desde la experiencia de usuario (UI/UX) hasta la conexión con el hardware del dispositivo (GPS, Cámara, Bluetooth) y notificaciones push, garantizando una calificación de 5 estrellas en las tiendas.",
      forWho: "Negocios B2C que requieren estar en el bolsillo del usuario, o herramientas B2B para trabajo en campo.",
      timeframe: "12 a 16 semanas.",
      deliverables: "App iOS y Android publicadas en App Store/Play Store, código fuente, manual de operación."
    },
    'module_04': { 
      title: "Sistemas ERP y CRM a la Medida", 
      price: 50, 
      desc: "Sistemas de gestión interna para automatizar y gobernar flujos operativos complejos.",
      details: "No adaptamos tu negocio a un software genérico; creamos el software para que encaje perfecto en tus procesos. Incluye módulos de inventario, facturación, recursos humanos, logística y paneles de control en tiempo real.",
      forWho: "Empresas medianas/grandes cuyos procesos en Excel o softwares genéricos (como SAP/Odoo) ya no dan abasto.",
      timeframe: "4 a 6 meses.",
      deliverables: "Plataforma web unificada, roles y permisos de usuarios, dashboard financiero y logístico."
    },
    'module_05': { 
      title: "E-Commerce de Alto Volumen", 
      price: 50, 
      desc: "Tiendas en línea preparadas para Black Friday y transacciones seguras.",
      details: "Creamos experiencias de comercio electrónico B2B y B2C ultra-rápidas usando Next.js y pasarelas como Stripe/MercadoPago. Nos enfocamos en la velocidad de carga (SEO) y en un checkout sin fricciones para maximizar la conversión.",
      forWho: "Marcas con alto tráfico o mayoristas (B2B) que requieren integraciones complejas de inventario en tiempo real.",
      timeframe: "8 a 12 semanas.",
      deliverables: "Tienda online, panel de control de órdenes, integración bancaria y migración de catálogo."
    },
    'module_06': { 
      title: "SaaS & Web Apps Complejas", 
      price: 50, 
      desc: "Software como Servicio y plataformas web interactivas.",
      details: "Si tienes una idea para un software que quieres cobrar por suscripción (SaaS), o necesitas una herramienta web de uso diario para tus clientes (como un portal de facturas o una red social nicho), lo construimos desde cero con tecnologías modernas.",
      forWho: "Fundadores. Empresas lanzando productos digitales o digitalizando el servicio al cliente.",
      timeframe: "12 a 20 semanas.",
      deliverables: "Web application responsiva, sistema de suscripciones y pagos recurrentes, backoffice administrativo."
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
            <p className="text-text-s mb-6 text-lg border-b border-surgical-border pb-6">{product.desc}</p>
            
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="font-mono text-cyan-accent text-sm mb-2 uppercase">/ El Problema que Resolvemos</h3>
                <p className="text-text-p font-sans leading-relaxed">{product.details}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-surgical-border/30">
                <div>
                  <h3 className="font-mono text-cyan-accent text-sm mb-2 uppercase">/ Para Quién Es</h3>
                  <p className="text-text-s font-sans text-sm">{product.forWho}</p>
                </div>
                <div>
                  <h3 className="font-mono text-cyan-accent text-sm mb-2 uppercase">/ Tiempo Estimado</h3>
                  <p className="text-text-s font-sans text-sm">{product.timeframe}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-surgical-border/30">
                <h3 className="font-mono text-cyan-accent text-sm mb-2 uppercase">/ Entregables</h3>
                <p className="text-text-p font-sans text-sm bg-deep-black p-4 border border-surgical-border">{product.deliverables}</p>
              </div>
            </div>

            <div className="text-2xl font-bold mb-8">$ {product.price} MXN <span className="text-sm font-normal text-text-s font-mono">/ PAGO INICIAL</span></div>
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
