import type { StructureResolver } from "sanity/structure";

// Menú lateral del Studio.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([S.documentTypeListItem("coche").title("Coches")]);
