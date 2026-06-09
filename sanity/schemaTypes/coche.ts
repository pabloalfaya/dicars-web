import { defineField, defineType } from "sanity";

export const coche = defineType({
  name: "coche",
  title: "Coche",
  type: "document",
  fields: [
    defineField({
      name: "marca",
      title: "Marca",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "modelo",
      title: "Modelo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "anio",
      title: "Año",
      type: "number",
      validation: (rule) => rule.required().min(1950).max(2100),
    }),
    defineField({
      name: "kilometros",
      title: "Kilómetros",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "precio",
      title: "Precio (€)",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "combustible",
      title: "Combustible",
      type: "string",
      options: {
        list: ["Gasolina", "Diésel", "Híbrido", "Eléctrico"],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "transmision",
      title: "Transmisión",
      type: "string",
      options: {
        list: ["Manual", "Automático"],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "estado",
      title: "Estado",
      type: "string",
      options: {
        list: ["Disponible", "Reservado", "Vendido"],
        layout: "radio",
      },
      initialValue: "Disponible",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "destacado",
      title: "Destacado en la home",
      description: "Si está activo, el coche aparece en la sección Destacados.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "fotos",
      title: "Fotos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      description: "Se genera automáticamente a partir de marca y modelo.",
      type: "slug",
      options: {
        source: (doc) =>
          `${doc.marca ?? ""} ${doc.modelo ?? ""}`.trim(),
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      marca: "marca",
      modelo: "modelo",
      precio: "precio",
      estado: "estado",
      media: "fotos.0",
    },
    prepare({ marca, modelo, precio, estado, media }) {
      return {
        title: `${marca ?? ""} ${modelo ?? ""}`.trim() || "Coche sin nombre",
        subtitle: [estado, precio ? `${precio} €` : null]
          .filter(Boolean)
          .join(" · "),
        media,
      };
    },
  },
});
