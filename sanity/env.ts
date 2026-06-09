// Configuración pública de Sanity (plan Free, dataset público).
// projectId y dataset son datos públicos, por eso pueden ir como NEXT_PUBLIC.

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e17ounst";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-01";
