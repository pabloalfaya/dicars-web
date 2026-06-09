import type { Metadata } from "next";
import Link from "next/link";
import { CarThumb } from "@/components/car-thumb";

export const metadata: Metadata = {
  title: "Importación",
  description:
    "Importamos tu coche desde Alemania a España de forma personalizada: búsqueda, inspección, transporte y documentación con un único interlocutor.",
};

const PUNTOS = [
  "Búsqueda en mercados seleccionados y verificación del estado real.",
  "Logística y trámites de matriculación con seguimiento continuo.",
  "Opción de entrega y puesta a punto según tus preferencias.",
];

const PASOS = [
  {
    titulo: "Búsqueda",
    texto: "Definimos marca, modelo y presupuesto y localizamos el coche que encaja.",
  },
  {
    titulo: "Inspección",
    texto: "Revisamos estado real, historial y documentación antes de cerrar nada.",
  },
  {
    titulo: "Transporte",
    texto: "Coordinamos el traslado hasta España con todas las garantías.",
  },
  {
    titulo: "Documentación",
    texto: "Gestionamos impuestos, ITV y matriculación por ti.",
  },
  {
    titulo: "Entrega",
    texto: "Recibes el coche listo para circular, sin sorpresas.",
  },
];

const RECIENTES = [
  {
    marca: "Volkswagen",
    modelo: "Golf GTI",
    titulo: "Entrega Volkswagen Golf GTI",
    texto:
      "Carlos buscaba un GTI bien cuidado y con historial. Lo localizamos en Múnich y lo tuvo en casa en tres semanas.",
  },
  {
    marca: "Audi",
    modelo: "A4 Avant",
    titulo: "Importación a la carta para Laura",
    texto:
      "Laura necesitaba un familiar diésel automático. Encontramos el A4 Avant perfecto y gestionamos todo el papeleo.",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    titulo: "Entrega BMW Serie 3 320d",
    texto:
      "Berlina con equipamiento alto comprada a un vendedor verificado y entregada matriculada y lista para circular.",
  },
  {
    marca: "Mercedes-Benz",
    modelo: "Clase A",
    titulo: "Mercedes Clase A para Javier",
    texto:
      "Compacto premium casi nuevo y con bajo kilometraje, importado con ahorro frente al precio en España.",
  },
  {
    marca: "Tesla",
    modelo: "Model 3",
    titulo: "Importación Tesla Model 3",
    texto:
      "Eléctrico con gran autonomía localizado en Alemania, transportado e inscrito sin complicaciones.",
  },
  {
    marca: "Škoda",
    modelo: "Octavia Combi",
    titulo: "Entrega Škoda Octavia Combi",
    texto:
      "El familiar práctico por excelencia, revisado y entregado con seguimiento durante todo el proceso.",
  },
];

export default function ImportacionPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-serif text-4xl font-semibold uppercase tracking-tight text-foreground sm:text-5xl">
            Importación a la carta
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Localizamos y gestionamos la llegada de tu próximo coche desde
            Alemania con{" "}
            <strong className="font-semibold text-foreground">
              procesos transparentes
            </strong>{" "}
            y un único interlocutor.
          </p>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cómo trabajamos
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Cada importación es un proyecto personalizado: definimos{" "}
                <strong className="font-semibold text-foreground">
                  marca, modelo y presupuesto
                </strong>
                , y coordinamos inspección, transporte y documentación hasta la
                entrega.
              </p>
              <p>
                Antes de avanzar, recibirás por escrito plazos y costes
                desglosados. Sin compromiso hasta que valides el plan.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {PUNTOS.map((punto) => (
                <li
                  key={punto}
                  className="flex items-start gap-3 text-muted-foreground"
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
                  <span>{punto}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-bold uppercase tracking-[0.15em] text-foreground transition hover:border-primary hover:text-primary"
            >
              ¿Tienes alguna duda? Contáctanos
            </Link>
          </div>

          <CarThumb
            marca="Dicars"
            modelo="Importación"
            className="aspect-[4/3] w-full rounded-3xl border border-border"
          />
        </div>
      </section>

      {/* PROCESO PASO A PASO */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              El proceso, paso a paso
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cinco fases claras, de la búsqueda a la entrega.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PASOS.map((paso, i) => (
              <div
                key={paso.titulo}
                className="rounded-2xl border border-border bg-muted p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-serif text-lg font-bold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {paso.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {paso.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTACIONES RECIENTES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Importaciones recientes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ejemplos de operaciones completadas. Las imágenes son ilustrativas
            de procesos reales gestionados por nuestro equipo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RECIENTES.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <CarThumb
                marca={item.marca}
                modelo={item.modelo}
                className="aspect-[4/3] w-full"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-hover"
          >
            Empieza tu importación
          </Link>
        </div>
      </section>
    </>
  );
}
