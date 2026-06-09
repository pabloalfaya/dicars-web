import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo1.png";

const REDES = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/dicars.group",
    icono: (
      <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.42 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.42-2.2.22-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.32-.52.63-.7 1.06-.12.3-.28.8-.32 1.7C3.25 9 3.24 9.4 3.24 12s0 3 .07 4.18c.04.9.2 1.4.32 1.7.18.43.38.74.7 1.06.32.32.63.52 1.06.7.3.12.8.28 1.7.32C8.5 20 8.9 20 12 20s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.18.74-.38 1.06-.7.32-.32.52-.63.7-1.06.12-.3.28-.8.32-1.7.07-1.18.07-1.58.07-4.18s0-3-.07-4.18c-.04-.9-.2-1.4-.32-1.7a2.9 2.9 0 0 0-.7-1.06 2.9 2.9 0 0 0-1.06-.7c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-1.4a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    ),
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/@dicars.group",
    icono: (
      <path d="M16.6 5.6c-.9-1-1.4-2.3-1.4-3.6h-3v13.1a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12v-3.06a5.66 5.66 0 0 0-.78-.06 5.66 5.66 0 1 0 5.66 5.66V9.3a6.5 6.5 0 0 0 3.86 1.26V7.5a3.65 3.65 0 0 1-2.52-1.9Z" />
    ),
  },
  {
    nombre: "YouTube",
    href: "https://youtube.com/@dicarsimports",
    icono: (
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C19.36 5.1 12 5.1 12 5.1s-7.36 0-8.84.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77C4.64 18.9 12 18.9 12 18.9s7.36 0 8.84-.43a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.1V8.9l5.2 3.1-5.2 3.1Z" />
    ),
  },
];

const LEGAL = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        {/* Copyright */}
        <p className="order-3 text-center text-xs text-muted-foreground md:order-1 md:text-left">
          © {new Date().getFullYear()} Dicars. Todos los derechos reservados.
        </p>

        {/* Logo central */}
        <Link
          href="/"
          className="order-1 flex items-center md:order-2"
          aria-label="Dicars — Inicio"
        >
          <Image src={logo} alt="Dicars" className="h-16 w-auto" />
        </Link>

        {/* Redes */}
        <div className="order-2 flex items-center gap-3 md:order-3">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Síguenos
          </span>
          {REDES.map((red) => (
            <a
              key={red.nombre}
              href={red.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={red.nombre}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                {red.icono}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Barra legal */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-5 text-xs text-muted-foreground sm:px-6">
          {LEGAL.map((enlace) => (
            <Link
              key={enlace.label}
              href={enlace.href}
              className="transition hover:text-primary"
            >
              {enlace.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
