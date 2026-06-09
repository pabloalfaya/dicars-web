import Link from "next/link";
import {
  type Coche,
  type EstadoCoche,
  formatearKilometros,
  formatearPrecio,
} from "@/lib/cars";
import { CarThumb } from "@/components/car-thumb";

const ESTILO_ESTADO: Record<EstadoCoche, string> = {
  Disponible: "bg-emerald-100 text-emerald-800",
  Reservado: "bg-amber-100 text-amber-800",
  Vendido: "bg-slate-200 text-slate-600",
};

export function CarCard({ coche }: { coche: Coche }) {
  return (
    <Link
      href={`/stock/${coche.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-muted transition hover:-translate-y-0.5 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative">
        <CarThumb
          marca={coche.marca}
          modelo={coche.modelo}
          className="aspect-[4/3] w-full"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${ESTILO_ESTADO[coche.estado]}`}
        >
          {coche.estado}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {coche.marca}
            </p>
            <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">
              {coche.modelo}
            </h3>
          </div>
          <p className="shrink-0 text-lg font-bold text-primary">
            {formatearPrecio(coche.precio)}
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <li>{coche.anio}</li>
          <li aria-hidden>·</li>
          <li>{formatearKilometros(coche.kilometros)}</li>
          <li aria-hidden>·</li>
          <li>{coche.combustible}</li>
          <li aria-hidden>·</li>
          <li>{coche.transmision}</li>
        </ul>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
          Ver ficha
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
