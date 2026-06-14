import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PaymentMethods } from "@/components/payment-methods";

export const metadata: Metadata = {
  title: "Guía para importar coches de Alemania 2026",
  description:
    "Guía digital para importar coches de Alemania paso a paso en 2026: trámites, documentación, impuestos y cómo evitar costes ocultos al importar tu coche.",
  alternates: { canonical: "/guia" },
  openGraph: {
    title: "Guía para importar coches de Alemania 2026",
    description:
      "Guía digital para importar coches de Alemania paso a paso en 2026: trámites, documentación, impuestos y cómo evitar costes ocultos al importar tu coche.",
  },
};

const PRECIO = "64,99 €";
const RESENAS = 45;
const IMAGEN_PORTADA = "/guiaimportacion.jpg";

const INCLUYE = [
  "El trámite completo, paso a paso, explicado de forma sencilla.",
  "Qué documentación necesitas (Ficha Técnica, DNI, impresos de matriculación).",
  "Cómo calcular los impuestos y evitar costes ocultos.",
  "Cómo detectar manipulación de kilómetros y de precios.",
  "Enlaces oficiales (DGT, Jefatura de Tráfico) y plantillas listas para usar.",
  "Contenido actualizado a 2026.",
];

const DOLORES = [
  {
    titulo: "Impuestos ocultos",
    texto:
      "Muchos compradores descubren tarde costes que no tenían previstos. La guía te enseña a calcularlos antes de comprar.",
  },
  {
    titulo: "Errores de documentación",
    texto:
      "Un papel mal presentado puede bloquear la matriculación durante semanas. Te explicamos qué necesitas y cómo presentarlo.",
  },
  {
    titulo: "Manipulación de precios",
    texto:
      "Kilometrajes alterados o precios inflados son habituales. Aprende a identificar las señales y a negociar con datos.",
  },
];

const FAQ = [
  {
    pregunta: "¿En qué formato recibo la guía?",
    respuesta:
      "Es un documento digital en PDF que podrás descargar y consultar desde cualquier dispositivo.",
  },
  {
    pregunta: "¿Sirve para cualquier coche?",
    respuesta:
      "Sí. El proceso explicado es aplicable a la importación de cualquier turismo desde Alemania a España.",
  },
  {
    pregunta: "¿Está actualizada?",
    respuesta:
      "Sí, el contenido está revisado y actualizado a 2026, incluyendo los trámites y enlaces oficiales vigentes.",
  },
  {
    pregunta: "¿Necesito conocimientos previos?",
    respuesta:
      "No. Está pensada para que cualquier persona pueda seguirla, aunque no haya importado un coche nunca.",
  },
  {
    pregunta: "¿Y si me atasco en algún paso?",
    respuesta:
      "Puedes escribirnos a través de la página de contacto y te orientamos. También ofrecemos el servicio de importación completo si prefieres delegarlo.",
  },
];

export default function GuiaPage() {
  return (
    <>
      {/* PRODUCTO */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Imagen del producto */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={IMAGEN_PORTADA}
              alt="Guía: ¿Cómo importar un vehículo de Alemania? 2026"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Buy box */}
          <div className="lg:pt-2">
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              ¿Cómo importar un vehículo de Alemania? Guía 2026
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-primary" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (+{RESENAS} reseñas)
              </span>
            </div>

            <p className="mt-6 font-serif text-4xl font-bold text-foreground">
              {PRECIO}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              La guía definitiva, trámite a trámite, para importar tu coche
              desde Alemania sin errores, sin sustos y ahorrando dinero.
            </p>

            <div className="mt-8 space-y-3">
              {/* Placeholder de compra — se conectará a Stripe en una fase posterior */}
              <button
                type="button"
                className="w-full cursor-not-allowed rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground opacity-90"
                aria-disabled="true"
                title="El pago online estará disponible próximamente"
              >
                Comprar ahora
              </button>
              <PaymentMethods />
              <p className="text-center text-xs text-muted-foreground">
                El pago online estará activo muy pronto. Mientras tanto,{" "}
                <Link href="/contacto" className="text-primary hover:underline">
                  escríbenos
                </Link>{" "}
                y te la facilitamos.
              </p>
            </div>

            <ul className="mt-8 space-y-3 border-t border-border pt-8">
              {INCLUYE.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Importar sin saber cómo puede salirte caro
            </h2>
            <p className="mt-3 text-muted-foreground">
              Estos son los tres errores que más dinero cuestan, y que la guía
              te ayuda a evitar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DOLORES.map((dolor) => (
              <div
                key={dolor.titulo}
                className="rounded-2xl border border-border bg-muted p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {dolor.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dolor.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Qué incluye la guía
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {INCLUYE.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-muted p-4 text-muted-foreground"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>

          <div className="mt-10 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.pregunta}
                className="group rounded-xl border border-border bg-muted p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  {item.pregunta}
                  <span className="text-primary transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/30 bg-gradient-to-br from-zinc-800 to-zinc-950 px-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Empieza a importar con seguridad
            </h2>
            <p className="mt-2 text-muted-foreground">
              Llévate la guía 2026 y haz el proceso tú mismo, con cada paso
              explicado y sin sorpresas.
            </p>
          </div>
          <p className="shrink-0 font-serif text-3xl font-bold text-primary">
            {PRECIO}
          </p>
        </div>
      </section>
    </>
  );
}
