import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Cliente de solo lectura. useCdn:true aprovecha la CDN de Sanity
// (más rápido y barato, ideal para el plan Free con dataset público).
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
