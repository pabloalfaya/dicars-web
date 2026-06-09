import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal e información identificativa de Dicars.",
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      titulo="Aviso legal"
      actualizado="junio de 2026"
      intro="En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se ponen a disposición de los usuarios los siguientes datos identificativos del titular de este sitio web."
      secciones={[
        {
          titulo: "1. Datos identificativos",
          parrafos: [
            "Titular: [Nombre o razón social de Dicars].",
            "NIF/CIF: [NIF/CIF].",
            "Domicilio: [Dirección completa].",
            "Correo electrónico: [correo@dicars.es].",
            "Teléfono: [Teléfono de contacto].",
          ],
        },
        {
          titulo: "2. Objeto",
          parrafos: [
            "El presente aviso legal regula el uso del sitio web titularidad de Dicars, que tiene por finalidad ofrecer información sobre sus servicios de importación de vehículos desde Alemania, mostrar su catálogo de coches y comercializar contenidos digitales.",
            "La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las disposiciones incluidas en este aviso legal.",
          ],
        },
        {
          titulo: "3. Condiciones de uso",
          parrafos: [
            "El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de sus contenidos, conforme a la legislación aplicable, la buena fe y el orden público.",
            "Queda prohibido el uso del sitio con fines ilícitos o lesivos contra Dicars o terceros, o que de cualquier forma puedan dañar, inutilizar o sobrecargar el sitio web.",
          ],
        },
        {
          titulo: "4. Propiedad intelectual e industrial",
          parrafos: [
            "Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código y demás elementos) son titularidad de Dicars o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.",
            "Queda prohibida la reproducción, distribución o transformación total o parcial de los contenidos sin autorización expresa del titular.",
          ],
        },
        {
          titulo: "5. Responsabilidad",
          parrafos: [
            "Dicars no se hace responsable de los daños derivados del uso incorrecto del sitio web ni de las interrupciones, errores u omisiones que pudieran existir en sus contenidos.",
            "La información sobre vehículos tiene carácter orientativo y no constituye una oferta vinculante; los datos definitivos se confirmarán en cada operación.",
          ],
        },
        {
          titulo: "6. Enlaces a terceros",
          parrafos: [
            "El sitio puede contener enlaces a páginas de terceros. Dicars no asume responsabilidad alguna sobre el contenido, las políticas o las prácticas de dichos sitios externos.",
          ],
        },
        {
          titulo: "7. Legislación aplicable",
          parrafos: [
            "El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa de consumidores disponga otro fuero.",
          ],
        },
      ]}
    />
  );
}
