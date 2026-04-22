'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, FileText, Package } from 'lucide-react';

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      const fetchOrder = async () => {
        const { data, error } = await supabase
          .from('orders')
          .select('*, order_items(*)')
          .eq('stripe_session_id', sessionId)
          .single();

        if (data) setOrder(data);
        else console.error('Error:', error);
        setLoading(false);
      };
      fetchOrder();
    }
  }, [sessionId]);

  if (loading) return <div className="p-10 text-center text-cyan-accent font-mono">Verificando transacción en red...</div>;
  if (!order) return <div className="p-10 text-center text-red-500 font-mono">Orden no encontrada en registros.</div>;

  return (
    <div className="min-h-screen bg-deep-black text-text-p p-6 md:p-12 pt-24 font-mono">
      <div className="max-w-xl mx-auto border border-surgical-border bg-slate-card p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
            <CheckCircle2 className="text-cyan-accent" size={48} />
            <h1 className="text-3xl font-bold text-white tracking-tighter">TRANSACCIÓN EXITOSA</h1>
        </div>
        
        <p className="text-text-s mb-8 leading-relaxed">
            Pago autenticado y procesado en sistema. Tu orden ha sido registrada.
        </p>
        
        <div className="space-y-4 border-t border-surgical-border pt-6 mb-8">
            <div className="flex justify-between">
                <span className="text-text-s">ID ORDEN:</span>
                <span className="text-white font-bold tracking-widest">{order.id.slice(0, 8).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-text-s">MONTO TOTAL:</span>
                <span className="text-cyan-accent font-bold">${order.total} MXN</span>
            </div>
            <div className="flex justify-between">
                <span className="text-text-s">ESTADO:</span>
                <span className="text-emerald-400 font-bold uppercase">{order.status}</span>
            </div>
        </div>
        
        <div>
            <h3 className="text-sm text-text-s mb-4 flex items-center gap-2">
                <Package size={16}/> ITEMS ADQUIRIDOS:
            </h3>
            <div className="space-y-3">
                {order.order_items.map((item: any) => (
                <div key={item.id} className="flex justify-between text-sm py-2 border-b border-surgical-border border-opacity-50">
                    <span className="text-white">{item.product_name}</span>
                    <span className="text-gray-400">x{item.quantity}</span>
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
