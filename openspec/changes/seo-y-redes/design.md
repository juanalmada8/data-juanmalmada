# Design

## Context

`Base.astro` ya genera `title`, `description`, canónica, Open Graph y una imagen por defecto. No hay sitemap, `robots`,
JSON-LD ni 404 propia. Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Metadatos correctos y verificables sin esfuerzo manual por página.
- Datos estructurados mínimos y verdaderos.

**Non-Goals:**
- Estrategia de contenido ni palabras clave.

## Decisions

- **Sitemap con la integración oficial de Astro** (`@astrojs/sitemap`). *Alternativa:* generarlo a mano. Se descarta: se
  desactualiza con cada caso nuevo. Es una dependencia chica y oficial; se justifica en el commit.
- **JSON-LD armado en el layout** a partir de `data/sitio.ts` (una sola fuente de verdad para nombre, base y contacto).
- **Chequeo de largos en el build** con un script chico que lee el HTML generado. *Alternativa:* herramienta externa de SEO.
  Se descarta: el chequeo es simple y no suma dependencias.
- **Imagen por caso estática**, exportada junto con las capturas. *Alternativa:* generarla en el build con una librería de
  imágenes. Se difiere: con 1–3 casos no se justifica la dependencia.
- **404 con la marca** (`<jm▌>` y un toque de humor), sin redirecciones automáticas.

## Risks / Trade-offs

- [Datos estructurados con información de más] → se limitan a nombre, localidad, remoto y servicios; se revisan con el
  validador en la tarea de cierre.
- [Descripciones que parezcan escritas por IA] → las redacta Juanma o se aprueban en la revisión de la propuesta.

## Open Questions

- ¿Se indexa la demo de turnos? Depende de si Juanma la quiere como puerta de entrada o solo como prueba; no cambia el diseño.
