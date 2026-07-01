import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";

// El webhook debe ejecutarse en Node.js (no Edge) para compatibilidad con Stripe SDK.
export const runtime = "nodejs";

const GUIA_DOWNLOAD_PATH = "/downloads/guia-importar-coches.pdf";

function buildDownloadUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_URL no está configurada");
  }

  return `${baseUrl.replace(/\/$/, "")}${GUIA_DOWNLOAD_PATH}`;
}

async function sendGuideEmail(to: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY no está configurada");
  }

  if (!fromEmail) {
    throw new Error("RESEND_FROM_EMAIL no está configurada");
  }

  const resend = new Resend(resendApiKey);
  const downloadUrl = buildDownloadUrl();

  await resend.emails.send({
    from: fromEmail,
    to,
    subject: "Tu guía para importar coches desde Alemania",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h1 style="font-size: 22px; margin-bottom: 16px;">¡Gracias por tu compra!</h1>
        <p>Tu pago se ha completado correctamente. Ya puedes descargar la guía en PDF.</p>
        <p style="margin: 24px 0;">
          <a
            href="${downloadUrl}"
            style="display: inline-block; background: #c9a227; color: #111; text-decoration: none; font-weight: bold; padding: 12px 20px; border-radius: 999px;"
          >
            Descargar la guía
          </a>
        </p>
        <p style="font-size: 14px; color: #555;">
          Si el botón no funciona, copia y pega este enlace en tu navegador:<br />
          <a href="${downloadUrl}">${downloadUrl}</a>
        </p>
        <p style="font-size: 14px; color: #555; margin-top: 24px;">
          ¿Necesitas ayuda? Escríbenos a info@dicars.es
        </p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET no está configurada");
    return NextResponse.json(
      { error: "Webhook no configurado" },
      { status: 500 },
    );
  }

  // Paso crítico: leer el body como texto crudo.
  // Si usáramos request.json(), la firma de Stripe fallaría porque el payload
  // ya no coincidiría byte a byte con el que firmó Stripe.
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Falta la cabecera stripe-signature" },
      { status: 400 },
    );
  }

  const rawBody = await request.text();

  let event: Stripe.Event;

  try {
    // Verificación de firma: confirma que el evento viene realmente de Stripe
    // y que no ha sido alterado en tránsito.
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("[webhook] Firma inválida:", error);
    return NextResponse.json({ error: "Firma inválida" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    if (!email) {
      console.error(
        "[webhook] checkout.session.completed sin email:",
        session.id,
      );
      return NextResponse.json(
        { error: "Email del comprador no disponible" },
        { status: 400 },
      );
    }

    try {
      await sendGuideEmail(email);
      console.log("[webhook] Guía enviada a:", email);
    } catch (error) {
      console.error("[webhook] Error al enviar el email:", error);
      // Devolvemos 500 para que Stripe reintente el webhook automáticamente.
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
