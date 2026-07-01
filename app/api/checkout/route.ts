import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (!priceId) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_STRIPE_PRICE_ID no está configurada" },
        { status: 500 },
      );
    }

    if (!baseUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_URL no está configurada" },
        { status: 500 },
      );
    }

    // Sesión de pago único: Stripe Checkout redirige al usuario y luego
    // notifica el resultado vía webhook (checkout.session.completed).
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/guia`,
      // Recogemos el email en Checkout para enviar la guía tras el pago.
      customer_creation: "always",
      billing_address_collection: "auto",
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No se pudo crear la sesión de pago" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Error al crear la sesión:", error);
    return NextResponse.json(
      { error: "Error al iniciar el pago. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
