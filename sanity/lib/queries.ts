// Consultas GROQ para los coches del stock.

const cocheFields = `
  _id,
  "slug": slug.current,
  marca,
  modelo,
  anio,
  kilometros,
  precio,
  combustible,
  transmision,
  estado,
  destacado,
  descripcion,
  extras,
  fotos
`;

// Orden: primero disponibles, luego por fecha de creación (más nuevos antes).
export const cochesQuery = `*[_type == "coche"] | order(estado asc, _createdAt desc) {
  ${cocheFields}
}`;

export const cochesDestacadosQuery = `*[_type == "coche" && destacado == true && estado != "Vendido"] | order(_createdAt desc) {
  ${cocheFields}
}`;

export const cochePorSlugQuery = `*[_type == "coche" && slug.current == $slug][0] {
  ${cocheFields}
}`;

export const slugsCochesQuery = `*[_type == "coche" && defined(slug.current)] {
  "slug": slug.current
}`;
