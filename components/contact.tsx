'use client';
import { MessageCircle } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-24 px-6 md:px-12 bg-deep-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <p className="font-mono text-cyan-accent text-sm mb-2">/ INICIA_EL_PROTOCOLO</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-p uppercase tracking-tighter">Hablemos de tu Proyecto</h2>
          <p className="text-text-s mt-6 max-w-2xl mx-auto font-sans text-lg">
            Agenda una llamada técnica de 30 minutos o escríbenos por WhatsApp para evaluar la viabilidad y arquitectura de tu solución sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Opciones directas */}
          <div className="border border-surgical-border bg-slate-card p-8 flex flex-col justify-center space-y-6 text-center">
            <h3 className="font-mono text-xl text-text-p">Respuesta Inmediata</h3>
            <p className="text-text-s text-sm">Nuestro equipo de ingenieros está disponible en WhatsApp para consultas rápidas.</p>
            <a 
              href="https://wa.me/5216623357058?text=Hola%20equipo%20SolidBit,%20me%20gustar%C3%ADa%20evaluar%20un%20proyecto." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-deep-black font-mono font-bold p-4 hover:opacity-90 transition-all"
            >
              <MessageCircle size={20} />
              [ CHAT_EN_WHATSAPP ]
            </a>
            <p className="font-mono text-sm text-text-s mt-4">
              O correo: <a href="mailto:contacto@solidbit.mx" className="text-cyan-accent hover:underline">contacto@solidbit.mx</a>
            </p>
          </div>

          {/* Formulario Estructurado */}
          <div className="border border-surgical-border bg-slate-card p-8">
            <form className="space-y-4">
              <h3 className="font-mono text-xl text-text-p mb-6">Mensaje Detallado</h3>
              <input type="text" placeholder="TU_NOMBRE_O_EMPRESA" className="w-full bg-deep-black border border-surgical-border p-3 text-text-p font-mono focus:border-cyan-accent outline-none" />
              <input type="email" placeholder="CORREO_ELECTRONICO" className="w-full bg-deep-black border border-surgical-border p-3 text-text-p font-mono focus:border-cyan-accent outline-none" />
              <textarea placeholder="DESCRIBE_BREVEMENTE_EL_SISTEMA_QUE_NECESITAS" className="w-full bg-deep-black border border-surgical-border p-3 text-text-p font-mono focus:border-cyan-accent outline-none" rows={4} />
              <button 
                type="button" 
                onClick={() => alert("Función en desarrollo. Por favor usa WhatsApp o el botón de correo por el momento.")}
                className="w-full bg-transparent border border-cyan-accent text-cyan-accent font-mono font-bold p-3 hover:bg-cyan-accent hover:text-deep-black transition-all"
              >
                [ ENVIAR_TRANSMISIÓN ]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
