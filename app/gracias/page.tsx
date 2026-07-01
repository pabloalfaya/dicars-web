import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compra completada",
  description:
    "Gracias por comprar la guía para importar coches desde Alemania.",
  robots: { index: false, follow: false },
};

type GraciasPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function GraciasPage({ searchParams }: GraciasPageProps) {
  const { session_id: sessionId } = await searchParams;

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Pago completado
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground">
        ¡Gracias por tu compra!
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Hemos recibido tu pago correctamente. En unos minutos recibirás un email
        con el enlace para descargar la guía en PDF.
      </p>

      {sessionId && (
        <p className="mt-6 text-sm text-muted-foreground">
          Referencia de compra:{" "}
          <span className="font-mono text-foreground">{sessionId}</span>
        </p>
      )}

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/downloads/guia-importar-coches.pdf"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-hover"
        >
          Descargar la guía
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:text-primary"
        >
          Volver al inicio
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Si no ves el email en tu bandeja de entrada, revisa la carpeta de spam
        o escríbenos desde la página de contacto.
      </p>
    </section>
  );
}
