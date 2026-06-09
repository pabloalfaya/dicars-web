import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { getCochesDestacados } from "@/lib/cars";
import { CarCard } from "@/components/car-card";

const VENTAJAS = [
  "Asesoramiento cercano y un solo interlocutor.",
  "Coches revisados e importación bajo demanda.",
  "Gestión completa de transporte y matriculación.",
];

const VIDEOS = [
  {
    titulo: "Así importo un coche desde Alemania paso a paso",
    etiqueta: "+2.000 km",
  },
  {
    titulo: "Cuánto cuesta de verdad importar un coche",
    etiqueta: "Sin sorpresas",
  },
  {
    titulo: "Los 5 errores que debes evitar al importar",
    etiqueta: "Ahorra dinero",
  },
];

export default function Home() {
  const destacados = getCochesDestacados();

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
                Llevamos años importando coches desde Alemania a España. Te
                ayudamos a{" "}
                <strong className="font-semibold text-foreground">
                  comprar mejor
                </strong>
                : más oferta, mejores precios y un proceso transparente de
                principio a fin.
              </p>
              <p>
                Nos encargamos de la búsqueda, la inspección, el transporte y
                todo el papeleo, para que recibas tu coche listo para circular y
                sin sorpresas: ni impuestos ocultos, ni problemas de
                documentación.
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

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-zinc-700 to-zinc-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-400">
              <svg
                viewBox="0 0 120 48"
                className="w-2/3 max-w-[220px] text-white/80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 34h104M18 34c0-3.3 2.7-6 6-6s6 2.7 6 6M90 34c0-3.3 2.7-6 6-6s6 2.7 6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 34c-3 0-5-2-5-5v-4c0-2 1-3 3-4l10-3 8-6c2-1.5 4-2 7-2h20c3 0 5 1 7 3l6 7 14 2c4 .6 7 2 9 5 1 1.5 1.5 3 1.5 5 0 1.6-1.3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">
                Imagen de muestra
              </span>
            </div>
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
            {destacados.map((coche) => (
              <CarCard key={coche.slug} coche={coche} />
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
              key={video.titulo}
              href="#"
              className="group overflow-hidden rounded-2xl border border-border bg-muted transition hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
                <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-bold text-primary">
                  {video.etiqueta}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-zinc-900 transition group-hover:scale-110">
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
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                  {video.titulo}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
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
