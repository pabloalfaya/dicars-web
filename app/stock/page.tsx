import type { Metadata } from "next";
import { coches } from "@/lib/cars";
import { CarCard } from "@/components/car-card";

export const metadata: Metadata = {
  title: "Stock",
  description:
    "Coches disponibles importados desde Alemania. Consulta nuestro stock actualizado.",
};

export default function StockPage() {
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
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            {disponibles} coches disponibles de {coches.length} en catálogo
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coches.map((coche) => (
            <CarCard key={coche.slug} coche={coche} />
          ))}
        </div>
      </section>
    </>
  );
}
