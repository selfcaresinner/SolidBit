export function ContactForm() {
  return (
    <section className="py-24 px-6 bg-deep-black">
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="font-sans text-3xl text-text-p">Ejecución de Comando</h2>
        <p className="font-mono text-sm text-text-s mb-6">
          CONTACTO: <a href="mailto:contacto@solidbit.mx" className="text-cyan-accent hover:underline">contacto@solidbit.mx</a>
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="ID_USUARIO" className="w-full bg-slate-card border border-surgical-border p-3 text-text-p font-mono" />
          <textarea placeholder="PROPOSITO" className="w-full bg-slate-card border border-surgical-border p-3 text-text-p font-mono" rows={4} />
          <button type="submit" className="w-full bg-transparent border border-cyan-accent text-cyan-accent font-mono font-bold p-3 hover:bg-cyan-accent hover:text-deep-black transition-all">
            [ EJECUTAR_CONTACTO ]
          </button>
        </form>
      </div>
    </section>
  );
}
