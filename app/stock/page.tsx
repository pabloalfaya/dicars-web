import type { Metadata } from "next";
import { getCoches } from "@/lib/cars";
import { CarCard } from "@/components/car-card";

export const metadata: Metadata = {
  title: "Stock",
  description:
    "Coches disponibles importados desde Alemania. Consulta nuestro stock actualizado.",
};

export const revalidate = 60;

export default async function StockPage() {
  const coches = await getCoches();
  const disponibles = coches.filter((c) => c.estado !== "Vendido").length;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground">
            Nuestro stock
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Coches importados desde Alemania, revisados y listos para
            matricular. Actualizamos el catálogo continuamente.
          </p>
          {coches.length > 0 && (
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {disponibles} coches disponibles de {coches.length} en catálogo
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        {coches.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coches.map((coche) => (
              <CarCard key={coche._id} coche={coche} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-muted p-12 text-center">
            <p className="text-lg font-semibold text-foreground">
              Estamos preparando nuevo stock
            </p>
            <p className="mt-2 text-muted-foreground">
              Vuelve pronto o escríbenos para contarnos qué coche buscas.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
