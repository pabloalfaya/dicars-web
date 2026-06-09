"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Envuelve el contenido con navbar y footer, salvo en /studio,
// donde el Studio de Sanity ocupa toda la pantalla.
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
