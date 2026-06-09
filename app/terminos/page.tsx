import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de Dicars.",
};

export default function TerminosPage() {
  return (
    <LegalPage
      titulo="Términos y condiciones"
      actualizado="junio de 2026"
      intro="Los presentes términos y condiciones regulan el acceso y uso del sitio web de Dicars, así como la contratación de sus servicios y productos digitales."
      secciones={[
        {
          titulo: "1. Aceptación",
          parrafos: [
            "El acceso y uso del sitio web implica la aceptación de estos términos. Si no estás de acuerdo con ellos, te rogamos que no utilices el sitio.",
          ],
        },
        {
          titulo: "2. Información sobre vehículos",
          parrafos: [
            "El catálogo de coches mostrado tiene carácter informativo y no constituye una oferta vinculante. La disponibilidad, el precio y las características se confirmarán de forma individualizada en cada operación.",
          ],
        },
        {
          titulo: "3. Servicios de importación",
          parrafos: [
            "Los servicios de importación se prestan conforme a las condiciones particulares acordadas con cada cliente, que se detallarán por escrito antes de iniciar el proceso (alcance, plazos y costes desglosados).",
          ],
        },
        {
          titulo: "4. Productos digitales",
          parrafos: [
            "La guía digital y otros contenidos descargables se rigen por las condiciones indicadas en su página de venta. Por tratarse de contenido digital de descarga inmediata, el derecho de desistimiento puede no ser aplicable una vez iniciada la descarga, conforme a la normativa de consumidores.",
          ],
        },
        {
          titulo: "5. Precios y pagos",
          parrafos: [
            "Los precios mostrados incluyen los impuestos aplicables salvo que se indique lo contrario. Los métodos de pago disponibles se especificarán en el proceso de compra correspondiente.",
          ],
        },
        {
          titulo: "6. Propiedad intelectual",
          parrafos: [
            "Todos los contenidos del sitio están protegidos por derechos de propiedad intelectual e industrial y no pueden ser utilizados sin autorización del titular.",
          ],
        },
        {
          titulo: "7. Responsabilidad",
          parrafos: [
            "Dicars no será responsable de los daños derivados del uso indebido del sitio ni de las interrupciones técnicas ajenas a su control.",
          ],
        },
        {
          titulo: "8. Modificaciones",
          parrafos: [
            "Dicars se reserva el derecho a modificar estos términos en cualquier momento. La versión vigente será la publicada en el sitio web en el momento del acceso.",
          ],
        },
        {
          titulo: "9. Ley aplicable y jurisdicción",
          parrafos: [
            "Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan según la normativa aplicable.",
          ],
        },
      ]}
    />
  );
}
