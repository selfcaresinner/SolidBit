import { NextResponse } from 'next/server';
import Stripe from 'stripe';

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

    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          description: item.desc,
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects cents
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.APP_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/cart`,
      customer_email: contactInfo.email,
      metadata: {
        customerName: contactInfo.name,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
