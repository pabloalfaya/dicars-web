// Datos de ejemplo (placeholders) para la Fase 1.
// En la Fase 2 estos datos vendrán de Sanity con el mismo esquema.

export type Combustible = "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";
export type Transmision = "Manual" | "Automático";
export type EstadoCoche = "Disponible" | "Reservado" | "Vendido";

export type Coche = {
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
  descripcion: string;
};

export const coches: Coche[] = [
  {
    slug: "volkswagen-golf-2021",
    marca: "Volkswagen",
    modelo: "Golf 2.0 TDI",
    anio: 2021,
    kilometros: 68000,
    precio: 19900,
    combustible: "Diésel",
    transmision: "Manual",
    estado: "Disponible",
    destacado: true,
    descripcion:
      "Compacto fiable y eficiente, importado y revisado. Un clásico alemán con bajo consumo y mantenimiento sencillo.",
  },
  {
    slug: "bmw-serie-3-2020",
    marca: "BMW",
    modelo: "Serie 3 320d",
    anio: 2020,
    kilometros: 82000,
    precio: 26500,
    combustible: "Diésel",
    transmision: "Automático",
    estado: "Disponible",
    destacado: true,
    descripcion:
      "Berlina dinámica con cambio automático y equipamiento alto. Ideal para quien busca confort y prestaciones.",
  },
  {
    slug: "audi-a4-avant-2019",
    marca: "Audi",
    modelo: "A4 Avant 2.0 TFSI",
    anio: 2019,
    kilometros: 95000,
    precio: 23900,
    combustible: "Gasolina",
    transmision: "Automático",
    estado: "Reservado",
    destacado: true,
    descripcion:
      "Familiar espacioso y elegante, perfecto para el día a día y viajes largos. Mantenimiento al día.",
  },
  {
    slug: "mercedes-clase-a-2022",
    marca: "Mercedes-Benz",
    modelo: "Clase A 180",
    anio: 2022,
    kilometros: 41000,
    precio: 28900,
    combustible: "Gasolina",
    transmision: "Automático",
    estado: "Disponible",
    destacado: true,
    descripcion:
      "Compacto premium casi nuevo, con tecnología MBUX y bajo kilometraje. Una oportunidad difícil de igualar.",
  },
  {
    slug: "skoda-octavia-2021",
    marca: "Škoda",
    modelo: "Octavia Combi 1.5 TSI",
    anio: 2021,
    kilometros: 73000,
    precio: 18500,
    combustible: "Gasolina",
    transmision: "Manual",
    estado: "Disponible",
    destacado: false,
    descripcion:
      "El familiar práctico por excelencia: maletero enorme, bajo consumo y un precio muy competitivo.",
  },
  {
    slug: "tesla-model-3-2021",
    marca: "Tesla",
    modelo: "Model 3 Long Range",
    anio: 2021,
    kilometros: 58000,
    precio: 31900,
    combustible: "Eléctrico",
    transmision: "Automático",
    estado: "Disponible",
    destacado: false,
    descripcion:
      "Eléctrico con gran autonomía y red de carga propia. Importado desde Alemania con todas las garantías.",
  },
  {
    slug: "toyota-corolla-2020",
    marca: "Toyota",
    modelo: "Corolla 1.8 Hybrid",
    anio: 2020,
    kilometros: 79000,
    precio: 19500,
    combustible: "Híbrido",
    transmision: "Automático",
    estado: "Vendido",
    destacado: false,
    descripcion:
      "Híbrido fiable y económico de mantener, con etiqueta ECO. Perfecto para ciudad y trayectos mixtos.",
  },
  {
    slug: "seat-leon-2021",
    marca: "SEAT",
    modelo: "León 1.5 TSI",
    anio: 2021,
    kilometros: 64000,
    precio: 17900,
    combustible: "Gasolina",
    transmision: "Manual",
    estado: "Disponible",
    destacado: false,
    descripcion:
      "Compacto ágil y bien equipado, una alternativa accesible con el carácter de la plataforma del Grupo VW.",
  },
];

export function getCochesDestacados(): Coche[] {
  return coches.filter((coche) => coche.destacado);
}

export function getCochePorSlug(slug: string): Coche | undefined {
  return coches.find((coche) => coche.slug === slug);
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
