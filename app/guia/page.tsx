import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Guía 2026",
  description:
    "Guía digital: Cómo importar un vehículo de Alemania - Guía 2026. Próximamente disponible.",
};

export default function GuiaPage() {
  return (
    <PagePlaceholder
      titulo="Guía: Cómo importar un vehículo de Alemania (2026)"
      descripcion="La landing de venta de la guía digital (pain points, qué incluye, FAQ y compra) se construirá más adelante, junto con el pago mediante Stripe."
      nota="Esta sección corresponde a una fase posterior del proyecto."
    />
  );
}
