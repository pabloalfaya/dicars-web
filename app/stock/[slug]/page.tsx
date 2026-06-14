import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCochePorSlug,
  getSlugsCoches,
  formatearKilometros,
  formatearPrecio,
} from "@/lib/cars";
import { CarGallery } from "@/components/car-gallery";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getSlugsCoches();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stock/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const coche = await getCochePorSlug(slug);
  if (!coche) return { title: "Coche no encontrado" };

  const titulo = `${coche.marca} ${coche.modelo} importado de Alemania`;
  const descripcion =
    coche.descripcion ??
    `${coche.marca} ${coche.modelo} de ${coche.anio} importado desde Alemania: ${formatearKilometros(
      coche.kilometros,
    )}, ${coche.combustible}, ${coche.transmision}. Disponible en Dicars.`;

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: `/stock/${coche.slug}` },
    openGraph: {
      title: titulo,
      description: descripcion,
    },
  };
}

export default async function FichaCochePage({
  params,
}: PageProps<"/stock/[slug]">) {
  const { slug } = await params;
  const coche = await getCochePorSlug(slug);

  if (!coche) notFound();

  const fotos = coche.fotos ?? [];

  const ficha = [
    { etiqueta: "Año", valor: String(coche.anio) },
    { etiqueta: "Kilómetros", valor: formatearKilometros(coche.kilometros) },
    { etiqueta: "Combustible", valor: coche.combustible },
    { etiqueta: "Transmisión", valor: coche.transmision },
    { etiqueta: "Estado", valor: coche.estado },
    {
      etiqueta: "Extras",
      valor:
        coche.extras && coche.extras.length > 0
          ? coche.extras.join(", ")
          : "—",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href="/stock"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
      >
        <span aria-hidden>←</span>
        Volver al stock
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <CarGallery fotos={fotos} marca={coche.marca} modelo={coche.modelo} />

        <div className="order-2 lg:col-start-2 lg:row-start-1">
          <p className="text-sm font-medium text-muted-foreground">
            {coche.marca}
          </p>
          <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight text-foreground">
            {coche.modelo}
          </h1>
          <p className="mt-4 font-serif text-3xl font-bold text-primary">
            {formatearPrecio(coche.precio)}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {ficha.map((dato) => (
              <div key={dato.etiqueta} className="bg-background p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {dato.etiqueta}
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  {dato.valor}
                </dd>
              </div>
            ))}
          </dl>

          {coche.descripcion && (
            <p className="mt-8 leading-relaxed text-muted-foreground">
              {coche.descripcion}
            </p>
          )}

          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Me interesa este coche
          </Link>
        </div>
      </div>
    </section>
  );
}
