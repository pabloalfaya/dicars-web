import Stripe from "stripe";

let stripeClient: Stripe | null = null;

// Inicialización diferida: evita fallos en build si las variables aún no existen.
export function getStripe(): Stripe {
  if (!stripeClient) {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY no está configurada");
    }

    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}
