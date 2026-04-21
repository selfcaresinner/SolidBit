export function Footer() {
  return (
    <footer className="py-12 px-6 bg-deep-black border-t border-surgical-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <div>
            <h3 className="font-mono text-cyan-accent text-lg font-bold">SOLIDBIT ENRISE</h3>
            <p className="font-sans text-text-s text-sm">Casa de Ingeniería Mexicana</p>
          </div>
          
          <div className="flex justify-center">
            <div className="border border-surgical-border p-4 font-sans text-sm flex gap-4">
              <span className="text-cyan-accent">◆</span>
              <span className="text-text-p">Ingenieria Soberana</span>
              <span className="text-surgical-border">|</span>
              <span className="text-text-s">Diseñado y Desarrollado en Sonora, MX</span>
            </div>
          </div>

          <div className="text-right">
            <p className="font-mono text-text-s text-xs uppercase mb-1">Contacto</p>
            <a href="mailto:soporte@solidbit.mx" className="font-mono text-cyan-accent text-sm hover:underline">soporte@solidbit.mx</a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-surgical-border">
          <p className="font-mono text-[10px] text-text-s opacity-60">
            © 2026 SOLIDBIT ENRISE • INGENIERÍA DE ALTA FIDELIDAD • MX
          </p>
        </div>
      </div>
    </footer>
  );
}
