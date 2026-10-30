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
      resumen: z.string().min(1), // una línea de qué es
      bullets: z.array(z.string().min(1)).length(3), // tres, cortos: qué se armó
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
