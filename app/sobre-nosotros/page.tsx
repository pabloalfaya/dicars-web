import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Sobre nosotros — Especialistas en importar coches de Alemania",
  description:
    "Conoce a Dicars, especialistas en importación de coches desde Alemania a España: cercanía, transparencia y gestión completa de principio a fin.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre nosotros — Especialistas en importar coches de Alemania",
    description:
      "Conoce a Dicars, especialistas en importación de coches desde Alemania a España: cercanía, transparencia y gestión completa de principio a fin.",
  },
};

export default function SobreNosotrosPage() {
  return (
    <PagePlaceholder
      titulo="Sobre nosotros"
      descripcion="Aquí contaremos la historia de Dicars y nuestra propuesta de valor como especialistas en importación de coches desde Alemania."
      nota="Esta sección se desarrollará en una fase posterior."
    />
  );
}
