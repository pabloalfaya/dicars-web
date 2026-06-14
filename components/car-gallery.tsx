"use client";

import { useState } from "react";
import type { CocheFoto } from "@/lib/cars";
import { CarImage } from "@/components/car-image";
import { CarThumb } from "@/components/car-thumb";

function Flecha({
  direccion,
  onClick,
  etiqueta,
}: {
  direccion: "izquierda" | "derecha";
  onClick: () => void;
  etiqueta: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={etiqueta}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-lg backdrop-blur-sm transition hover:border-primary hover:bg-background hover:text-primary ${
        direccion === "izquierda" ? "left-3" : "right-3"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        {direccion === "izquierda" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export function CarGallery({
  fotos,
  marca,
  modelo,
}: {
  fotos: CocheFoto[];
  marca: string;
  modelo: string;
}) {
  const [indice, setIndice] = useState(0);
  const titulo = `${marca} ${modelo}`;
  const tieneFotos = fotos.length > 0;
  const varias = fotos.length > 1;

  const anterior = () =>
    setIndice((i) => (i === 0 ? fotos.length - 1 : i - 1));
  const siguiente = () =>
    setIndice((i) => (i === fotos.length - 1 ? 0 : i + 1));

  return (
    <div className="contents">
      <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-muted lg:col-start-1 lg:row-start-1">
        {tieneFotos ? (
          <>
            <CarImage
              foto={fotos[indice]}
              alt={`${titulo} — foto ${indice + 1}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={indice === 0}
            />
            {varias && (
              <>
                <Flecha
                  direccion="izquierda"
                  onClick={anterior}
                  etiqueta="Foto anterior"
                />
                <Flecha
                  direccion="derecha"
                  onClick={siguiente}
                  etiqueta="Foto siguiente"
                />
                <span className="absolute bottom-3 right-3 z-10 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {indice + 1} / {fotos.length}
                </span>
              </>
            )}
          </>
        ) : (
          <CarThumb marca={marca} modelo={modelo} className="absolute inset-0 h-full w-full" />
        )}
      </div>

      {varias && (
        <div className="order-3 col-span-full mt-2 grid w-full grid-cols-4 gap-3 sm:mt-4 sm:gap-4 lg:order-none lg:col-span-2 lg:row-start-2">
          {fotos.map((foto, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ver foto ${i + 1} de ${fotos.length}`}
              aria-current={i === indice ? "true" : undefined}
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted transition hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i === indice
                  ? "border-primary ring-2 ring-primary/40"
                  : "border-border"
              }`}
            >
              <CarImage
                foto={foto}
                alt={`${titulo} — miniatura ${i + 1}`}
                sizes="(max-width: 1024px) 25vw, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
