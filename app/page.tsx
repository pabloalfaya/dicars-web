import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo1.png";
import { CarThumb } from "@/components/car-thumb";
import {
  miniaturaYoutube,
  urlYoutube,
  type VideoYoutube,
} from "@/lib/youtube";

const VENTAJAS = [
  "Asesoramiento cercano y un solo interlocutor.",
  "Coches revisados e importación bajo demanda.",
  "Gestión completa de transporte y matriculación.",
];

const DESTACADOS = [
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
];

const VIDEOS: VideoYoutube[] = [
  {
    id: "Cl_rUOkkpe4",
    titulo: "🇩🇪 IMPORTAMOS un PORSCHE +35K€ de Alemania | ¿Merece la pena?",
    url: urlYoutube("Cl_rUOkkpe4"),
  },
  {
    id: "YVf-6yAWUvE",
    titulo:
      "IMPORTANDO este AUDI S3 // ASÍ TRABAJA un IMPORTADOR AUTÓNOMO en ESPAÑA",
    url: urlYoutube("YVf-6yAWUvE"),
  },
  {
    id: "khz_KJNt9NI",
    titulo:
      "El MEJOR GTI que puedes COMPRAR en ALEMANIA // IMPORTANDO coches de ALEMANIA",
    url: urlYoutube("khz_KJNt9NI"),
  },
];

export const revalidate = 60;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(224,180,58,0.12),transparent_55%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:100%_3rem]" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <Image
            src={logo}
            alt="Dicars"
            priority
            className="h-32 w-auto drop-shadow-2xl sm:h-44"
          />
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-zinc-200 sm:text-xl">
            Importamos tu coche desde Alemania. Tú eliges, nosotros hacemos el
            resto.
          </p>
          <Link
            href="/stock"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-hover"
          >
            Ver stock
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-bounce"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* BIENVENIDO A DICARS */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Bienvenido a Dicars
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dicars nació con una idea clara: que cualquier persona en España
                pueda acceder al mejor mercado de coches de Europa sin tener que
                convertirse en experto en logística. Llevamos años importando
                desde Alemania y conocemos cada paso del camino — desde la
                búsqueda en portales locales hasta la matriculación definitiva
                en tu nombre.
              </p>
              <p>
                Te ayudamos a{" "}
                <strong className="font-semibold text-foreground">
                  comprar mejor
                </strong>
                : más oferta que en el mercado nacional, mejores precios y un
                proceso transparente de principio a fin. Ya sea un compacto para
                el día a día o el deportivo que llevas tiempo buscando,
                trabajamos contigo para encontrar la unidad que encaje con tu
                presupuesto y tus expectativas.
              </p>
              <p>
                Nos encargamos de la búsqueda, la inspección, el transporte y
                todo el papeleo, para que recibas tu coche listo para circular y
                sin sorpresas: ni impuestos ocultos, ni problemas de
                documentación, ni trámites que no entiendas.
              </p>
              <p>
                Si prefieres elegir entre unidades ya revisadas, tenemos stock
                disponible. Y si buscas algo concreto que no está en el
                catálogo, gestionamos una importación a la carta con plazos y
                costes desglosados por escrito antes de que avances. Un solo
                interlocutor, de la primera llamada a la entrega de las llaves.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {VENTAJAS.map((ventaja) => (
                <li
                  key={ventaja}
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
                  <span>{ventaja}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src="/bienvenidos.JPEG"
              alt="Equipo Dicars"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Destacados
            </h2>
            <p className="mt-3 text-muted-foreground">
              Una muestra de nuestras últimas importaciones. Consulta el stock
              completo para ver todas las unidades disponibles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DESTACADOS.map((item) => (
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
              href="/stock"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:text-primary"
            >
              Ver todo el stock
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Descubre cómo trabajamos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Te enseñamos el proceso real de importación en nuestro canal.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-muted transition hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <Image
                  src={miniaturaYoutube(video.id)}
                  alt={video.titulo}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-xs font-bold text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.5V8.5L15.8 12l-6.1 3.5Z" />
                  </svg>
                  YouTube
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition group-hover:scale-110">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold leading-snug text-foreground line-clamp-3">
                  {video.titulo}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://youtube.com/@dicarsimports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:text-primary"
          >
            Ver canal completo
          </a>
        </div>
      </section>

      {/* CTA GUÍA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/30 bg-gradient-to-br from-zinc-800 to-zinc-950 px-8 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                ¿Prefieres importar tú mismo?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Nuestra guía 2026 te explica paso a paso cómo importar un
                vehículo de Alemania evitando los errores más caros.
              </p>
            </div>
            <Link
              href="/guia"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-hover"
            >
              Ver la guía
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
