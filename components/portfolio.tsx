import { Shield, Smartphone, Globe } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "01",
      icon: <Globe size={32} className="text-cyan-accent mb-4" />,
      client: "AgroTrade B2B",
      title: "Plataforma E-commerce de Exportación",
      desc: "Sistema B2B para comercializadora agrícola. Digitalización completa del flujo de compra internacional, integración con ERP y facturación automatizada en múltiples divisas.",
      tech: "Next.js / Node.js / Supabase / Stripe"
    },
    {
      id: "02",
      icon: <Shield size={32} className="text-cyan-accent mb-4" />,
      client: "AduanaTech",
      title: "ERP Logístico y Aduanal",
      desc: "Software de gestión interna de alta disponibilidad. Automatización de expedientes aduanales, control de rutas en tiempo real y generación de reportes tributarios.",
      tech: "React / Python / PostgreSQL / AWS"
    },
    {
      id: "03",
      icon: <Smartphone size={32} className="text-cyan-accent mb-4" />,
      client: "HealthSync",
      title: "App Móvil de Telemedicina",
      desc: "Aplicación iOS y Android para agendamiento de citas, videoconsultas encriptadas y gestión de expedientes clínicos electrónicos (EMR) para red de clínicas privadas.",
      tech: "React Native / Firebase / WebRTC"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-deep-black border-b border-surgical-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-cyan-accent text-sm mb-2">/ EVIDENCIA_OPERATIVA</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-p uppercase tracking-tighter">Proyectos Ejecutados</h2>
          <p className="text-text-s mt-6 max-w-2xl font-sans text-lg">
            No solo teorizamos, desplegamos. Nuestro portafolio representa problemas complejos de negocio resueltos con ingeniería de software elegante y funcional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group border border-surgical-border bg-slate-card p-8 hover:border-cyan-accent transition-colors duration-300">
              <div className="flex justify-between items-start">
                {project.icon}
                <span className="font-mono text-text-s text-xs opacity-50">[{project.id}]</span>
              </div>
              <p className="font-mono text-xs text-text-s mb-2 mt-4 uppercase">{project.client}</p>
              <h3 className="font-sans font-bold text-xl text-text-p mb-4 leading-tight">{project.title}</h3>
              <p className="text-text-s text-sm mb-8 leading-relaxed">
                {project.desc}
              </p>
              <div className="pt-4 border-t border-surgical-border/50">
                <p className="font-mono text-[10px] text-cyan-accent">STACK: {project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
