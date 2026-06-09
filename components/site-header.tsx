"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo1.png";

const ENLACES = [
  { href: "/", label: "Inicio" },
  { href: "/importacion", label: "Importación" },
  { href: "/guia", label: "Guía de importación" },
  { href: "/stock", label: "Stock" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function esActivo(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Dicars — Inicio"
          onClick={() => setAbierto(false)}
        >
          <Image src={logo} alt="Dicars" priority className="h-12 w-auto" />
        </Link>

        {/* Navegación de escritorio (centrada) */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {ENLACES.map((enlace) => {
            const activo = esActivo(pathname, enlace.href);
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={`whitespace-nowrap border-b-2 pb-0.5 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                  activo
                    ? "border-primary text-primary"
                    : "border-transparent text-white hover:text-white/80"
                }`}
              >
                {enlace.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA escritorio */}
        <Link
          href="/contacto"
          className="hidden shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary-hover lg:inline-block"
        >
          Presupuesto
        </Link>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => setAbierto((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {abierto && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-2 sm:px-6">
            {ENLACES.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={() => setAbierto(false)}
                className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-muted ${
                  esActivo(pathname, enlace.href)
                    ? "text-primary"
                    : "text-white"
                }`}
              >
                {enlace.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setAbierto(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-primary-hover"
            >
              Pide presupuesto
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
