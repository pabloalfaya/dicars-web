import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Dicars para pedir presupuesto o resolver tus dudas sobre la importación de tu coche.",
};

export default function ContactoPage() {
  return (
    <PagePlaceholder
      titulo="Contacto"
      descripcion="Aquí irá el formulario de contacto y los datos de Dicars para que puedas pedir presupuesto o resolver cualquier duda."
      nota="Esta sección se desarrollará en una fase posterior."
    />
  );
}
