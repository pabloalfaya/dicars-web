import Link from "next/link";

export type SeccionLegal = {
  titulo: string;
  parrafos: string[];
};

// Plantilla común para las páginas legales (aviso legal, privacidad, términos).
export function LegalPage({
  titulo,
  actualizado,
  intro,
  secciones,
}: {
  titulo: string;
  actualizado: string;
  intro?: string;
  secciones: SeccionLegal[];
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
      >
        <span aria-hidden>←</span>
        Volver al inicio
      </Link>

      <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground">
        {titulo}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Última actualización: {actualizado}
      </p>

      {intro && (
        <p className="mt-6 leading-relaxed text-muted-foreground">{intro}</p>
      )}

      <div className="mt-10 space-y-10">
        {secciones.map((seccion) => (
          <div key={seccion.titulo}>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {seccion.titulo}
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              {seccion.parrafos.map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
        Este documento es una plantilla genérica orientativa. Sustituye los
        datos entre corchetes por los reales de Dicars y revísalo con un
        profesional antes de publicarlo.
      </p>
    </section>
  );
}
