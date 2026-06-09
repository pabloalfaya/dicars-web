import Link from "next/link";

// Placeholder para secciones que se desarrollarán en fases posteriores.
export function PagePlaceholder({
  titulo,
  descripcion,
  nota,
}: {
  titulo: string;
  descripcion: string;
  nota?: string;
}) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
        En preparación
      </span>
      <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground">
        {titulo}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {descripcion}
      </p>
      {nota && <p className="mt-3 text-sm text-muted-foreground">{nota}</p>}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:gap-2"
      >
        <span aria-hidden>←</span>
        Volver al inicio
      </Link>
    </section>
  );
}
