import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Plantilla de caso: docs/specs/02-contenido.md («Plantilla de caso»).
const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      cliente: z.string(),
      rubro: z.string(),
      tamanio: z.enum(["chico", "mediano", "grande", "sector público"]),
      anio: z.number().int(),
      servicios: z.array(z.enum(["web", "turnos", "datos", "nube"])),
      resultado: z.string(), // una línea, verificable
      ahorro: z.string().default(""), // solo si el cliente lo confirma
      portada: image().optional(),
      publicado: z.boolean().default(false),
    }),
});

export const collections = { proyectos };
