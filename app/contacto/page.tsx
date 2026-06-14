import type { Metadata } from "next";
import Link from "next/link";
import { CONTACTO } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contacto — Importa tu coche de Alemania",
  description:
    "Contacta con Dicars para importar tu coche desde Alemania a España: pide presupuesto o resuelve tus dudas sobre la importación de coches.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Importa tu coche de Alemania",
    description:
      "Contacta con Dicars para importar tu coche desde Alemania a España: pide presupuesto o resuelve tus dudas sobre la importación de coches.",
  },
};

const CANALES = [
  {
    titulo: "Email",
    valor: CONTACTO.email,
    href: `mailto:${CONTACTO.email}`,
    descripcion: "Escríbenos y te respondemos lo antes posible.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    titulo: "Teléfono",
    valor: CONTACTO.telefono,
    href: `tel:${CONTACTO.telefonoEnlace}`,
    descripcion: "Llámanos de lunes a viernes en horario comercial.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    titulo: "WhatsApp",
    valor: CONTACTO.telefono,
    href: CONTACTO.whatsappEnlace,
    descripcion: "La forma más rápida de hablar con nosotros.",
    externo: true,
    icono: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    ),
    relleno: true,
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes dudas sobre una importación o quieres un presupuesto? Estamos
            aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {CANALES.map((canal) => (
            <a
              key={canal.titulo}
              href={canal.href}
              {...(canal.externo
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col rounded-2xl border border-border bg-muted p-6 transition hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  canal.titulo === "WhatsApp"
                    ? "bg-[#25D366]/15 text-[#25D366]"
                    : "bg-primary/15 text-primary"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={canal.relleno ? "currentColor" : "none"}
                  stroke={canal.relleno ? "none" : "currentColor"}
                  aria-hidden="true"
                >
                  {canal.icono}
                </svg>
              </span>
              <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {canal.titulo}
              </h2>
              <p className="mt-1 font-semibold text-primary transition group-hover:text-primary-hover">
                {canal.valor}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {canal.descripcion}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            ¿Prefieres que te llamemos?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Escríbenos por WhatsApp o email y te respondemos con la mayor
            brevedad.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CONTACTO.whatsappEnlace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#20bd5a]"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACTO.email}`}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-foreground transition hover:border-primary hover:text-primary"
            >
              Enviar email
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          También puedes consultar nuestra{" "}
          <Link href="/importacion" className="text-primary hover:underline">
            página de importación
          </Link>{" "}
          para ver cómo trabajamos.
        </p>
      </section>
    </>
  );
}
