import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import {
  cochePorSlugQuery,
  cochesDestacadosQuery,
  cochesQuery,
  slugsCochesQuery,
} from "@/sanity/lib/queries";

export type Combustible = "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";
export type Transmision = "Manual" | "Automático";
export type EstadoCoche = "Disponible" | "Reservado" | "Vendido";

export type CocheFoto = SanityImageSource;

export type Coche = {
  _id: string;
  slug: string;
  marca: string;
  modelo: string;
  anio: number;
  kilometros: number;
  precio: number;
  combustible: Combustible;
  transmision: Transmision;
  estado: EstadoCoche;
  destacado: boolean;
  descripcion?: string;
  fotos?: CocheFoto[];
};

// Revalidación (ISR): los cambios del cliente en Sanity aparecen
// en la web automáticamente pasado este intervalo.
const opcionesCache = { next: { revalidate: 60 } } as const;

export async function getCoches(): Promise<Coche[]> {
  return client.fetch<Coche[]>(cochesQuery, {}, opcionesCache);
}

export async function getCochesDestacados(): Promise<Coche[]> {
  return client.fetch<Coche[]>(cochesDestacadosQuery, {}, opcionesCache);
}

export async function getCochePorSlug(slug: string): Promise<Coche | null> {
  return client.fetch<Coche | null>(cochePorSlugQuery, { slug }, opcionesCache);
}

export async function getSlugsCoches(): Promise<string[]> {
  const res = await client.fetch<{ slug: string }[]>(
    slugsCochesQuery,
    {},
    opcionesCache,
  );
  return res.map((r) => r.slug).filter(Boolean);
}

const formateadorPrecio = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatearPrecio(precio: number): string {
  return formateadorPrecio.format(precio);
}

const formateadorNumero = new Intl.NumberFormat("es-ES");

export function formatearKilometros(km: number): string {
  return `${formateadorNumero.format(km)} km`;
}
