import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

// Lazy initialization pattern
let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY environment variable is required');
    }
    stripeClient = new Stripe(key, { apiVersion: '2026-03-25.dahlia' });
  }
  return stripeClient;
}

export async function POST(req: Request) {
  try {
    const { cart, contactInfo, total } = await req.json();

    const stripe = getStripe();

    // 1. Persistencia: UPSERT Customer
    const { data: customer, error: custError } = await supabase
      .from('customers')
      .upsert({ 
        email: contactInfo.email, 
        name: contactInfo.name,
        phone: contactInfo.phone,
        company: contactInfo.company,
        address: contactInfo.address
      }, { onConflict: 'email' })
      .select('id')
      .single();

    if (custError) throw custError;

    // 2. Definición línea de artículos (para Stripe)
    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.title, description: item.desc },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    // 3. Crear sesión en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/cart`,
      customer_email: contactInfo.email,
    });

    // 4. Persistencia: Insertar Orden (con el ID de Stripe)
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_id: customer.id,
        stripe_session_id: session.id, // ID único de Stripe
        total: total,
        status: 'pending'
      })
      .select('id')
      .single();

    if (orderError) throw orderError;

    // 5. Persistencia: Insertar Items de la Orden
    const orderItems = cart.map((item: any) => ({
      order_id: order.id,
      product_name: item.title,
      price: item.price,
      quantity: 1
    }));

    const { error: itemsError } = await supabase.from('order_items').insert(orderItems);
    if (itemsError) throw itemsError;

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
