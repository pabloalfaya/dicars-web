"use client";

import { useCallback, useEffect, useState } from "react";
import type { CocheFoto } from "@/lib/cars";
import { CarImage } from "@/components/car-image";
import { CarThumb } from "@/components/car-thumb";

function Flecha({
  direccion,
  onClick,
  etiqueta,
  className = "",
}: {
  direccion: "izquierda" | "derecha";
  onClick: () => void;
  etiqueta: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={etiqueta}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-lg backdrop-blur-sm transition hover:border-primary hover:bg-background hover:text-primary ${className}`}
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

function Lightbox({
  fotos,
  indice,
  titulo,
  onCerrar,
  onAnterior,
  onSiguiente,
}: {
  fotos: CocheFoto[];
  indice: number;
  titulo: string;
  onCerrar: () => void;
  onAnterior: () => void;
  onSiguiente: () => void;
}) {
  const varias = fotos.length > 1;

  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "ArrowLeft") onAnterior();
      if (e.key === "ArrowRight") onSiguiente();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", manejarTecla);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", manejarTecla);
    };
  }, [onCerrar, onAnterior, onSiguiente]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada — ${titulo}`}
      onClick={onCerrar}
    >
      <button
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-primary hover:text-primary"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-6 w-6"
          aria-hidden
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {varias && (
        <>
          <Flecha
            direccion="izquierda"
            onClick={onAnterior}
            etiqueta="Foto anterior"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2"
          />
          <Flecha
            direccion="derecha"
            onClick={onSiguiente}
            etiqueta="Foto siguiente"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2"
          />
        </>
      )}

      <div
        className="relative h-full w-full max-h-[85vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CarImage
          foto={fotos[indice]}
          alt={`${titulo} — foto ${indice + 1}`}
          sizes="100vw"
          className="object-contain"
          ancho={1920}
          priority
        />
      </div>

      {varias && (
        <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm font-semibold text-white">
          {indice + 1} / {fotos.length}
        </span>
      )}
    </div>
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
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const titulo = `${marca} ${modelo}`;
  const tieneFotos = fotos.length > 0;
  const varias = fotos.length > 1;

  const anterior = useCallback(
    () => setIndice((i) => (i === 0 ? fotos.length - 1 : i - 1)),
    [fotos.length],
  );
  const siguiente = useCallback(
    () => setIndice((i) => (i === fotos.length - 1 ? 0 : i + 1)),
    [fotos.length],
  );

  const abrirLightbox = (i: number) => {
    setIndice(i);
    setLightboxAbierto(true);
  };

  return (
    <div className="contents">
      <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-muted lg:col-start-1 lg:row-start-1">
        {tieneFotos ? (
          <>
            <button
              type="button"
              onClick={() => abrirLightbox(indice)}
              aria-label={`Ampliar foto ${indice + 1} de ${fotos.length}`}
              className="absolute inset-0 z-0 cursor-zoom-in"
            />
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
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2"
                />
                <Flecha
                  direccion="derecha"
                  onClick={siguiente}
                  etiqueta="Foto siguiente"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2"
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
              onClick={() => abrirLightbox(i)}
              aria-label={`Ampliar foto ${i + 1} de ${fotos.length}`}
              aria-current={i === indice ? "true" : undefined}
              className={`relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border bg-muted transition hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
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

      {lightboxAbierto && tieneFotos && (
        <Lightbox
          fotos={fotos}
          indice={indice}
          titulo={titulo}
          onCerrar={() => setLightboxAbierto(false)}
          onAnterior={anterior}
          onSiguiente={siguiente}
        />
      )}
    </div>
  );
}
