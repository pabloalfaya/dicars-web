import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Quiénes somos en Dicars: nuestra historia y propuesta de valor en la importación de coches desde Alemania.",
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
