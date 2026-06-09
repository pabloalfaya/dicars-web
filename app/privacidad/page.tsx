import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad y tratamiento de datos de Dicars.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      titulo="Política de privacidad"
      actualizado="junio de 2026"
      intro="En Dicars nos comprometemos a proteger tus datos personales. Esta política explica cómo tratamos la información que nos facilitas, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD)."
      secciones={[
        {
          titulo: "1. Responsable del tratamiento",
          parrafos: [
            "Responsable: [Nombre o razón social de Dicars].",
            "NIF/CIF: [NIF/CIF]. Domicilio: [Dirección completa].",
            "Correo electrónico: [correo@dicars.es].",
          ],
        },
        {
          titulo: "2. Datos que recopilamos",
          parrafos: [
            "Datos identificativos y de contacto que nos facilitas a través de formularios o por otros canales (nombre, correo electrónico, teléfono).",
            "Datos relativos a tu solicitud de importación o consulta (preferencias de vehículo, presupuesto, etc.).",
            "Datos de navegación obtenidos mediante cookies y tecnologías similares, según se detalla en la política de cookies.",
          ],
        },
        {
          titulo: "3. Finalidad del tratamiento",
          parrafos: [
            "Atender tus consultas y solicitudes de presupuesto.",
            "Gestionar los servicios de importación y la relación comercial.",
            "Enviarte comunicaciones sobre nuestros servicios cuando hayas dado tu consentimiento.",
          ],
        },
        {
          titulo: "4. Legitimación",
          parrafos: [
            "La base jurídica del tratamiento es el consentimiento del interesado, la ejecución de un contrato o de medidas precontractuales, y el interés legítimo de Dicars en atender las solicitudes recibidas.",
          ],
        },
        {
          titulo: "5. Conservación de los datos",
          parrafos: [
            "Conservaremos tus datos durante el tiempo necesario para cumplir la finalidad para la que se recabaron y, posteriormente, durante los plazos legalmente exigibles.",
          ],
        },
        {
          titulo: "6. Destinatarios",
          parrafos: [
            "No cederemos tus datos a terceros salvo obligación legal o cuando sea necesario para prestar el servicio (por ejemplo, transportistas o gestorías), que actuarán como encargados del tratamiento.",
          ],
        },
        {
          titulo: "7. Tus derechos",
          parrafos: [
            "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [correo@dicars.es], adjuntando copia de un documento que acredite tu identidad.",
            "Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la normativa.",
          ],
        },
      ]}
    />
  );
}
