import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Un caso real = un archivo en src/content/casos/ (+ sus capturas). Spec: openspec/changes/landing-una-pagina/specs/casos.
const casos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/casos" }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string().min(1),
      url: z.url(), // sitio real del caso
      // La historia en dos o tres partes cortas, en lenguaje claro: el problema o qué es, qué se armó y qué sigue hoy.
      // La última parte (la solución) se destaca. Sin jerga ni métricas.
      partes: z
        .array(z.object({ titulo: z.string().min(1), texto: z.string().min(1) }))
        .min(2)
        .max(3),
      // Capturas reales. `alt` es obligatorio; `marco` decide el marco decorativo. Vacío = placeholder visible.
      capturas: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            marco: z.enum(["celu", "ventana"]),
          }),
        )
        .default([]),
      orden: z.number().int(),
      publicado: z.boolean().default(false),
    }),
});

export const collections = { casos };
