# Design

## Context

La colección `proyectos` ya existe (`web/src/content.config.ts`) con la plantilla de 02-contenido y una página
`/proyectos/[slug]` mínima. La home la lista. No hay casos publicados. Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Un formato de caso que se lea de corrido en el celular y que no necesite explicación técnica.
- Que agregar un caso nuevo sea escribir un Markdown y subir las capturas, sin tocar componentes.

**Non-Goals:**
- Un CMS o un panel de carga.
- Generar las capturas o los textos de los casos: salen de Juanma.

## Decisions

- **Estructura en el Markdown, no en el esquema.** Las secciones (`## Antes`, `## Qué armé`, …) van como encabezados del
  cuerpo; la página las renderiza tal cual. *Alternativa:* un campo de frontmatter por sección. Se descarta: obliga a
  escribir texto largo en YAML y se lee peor.
- **Validar la estructura en el build.** Un chequeo en `[slug].astro` falla si faltan `## Antes` o `## Cómo quedó` en un
  caso publicado. *Alternativa:* confiar en la revisión manual. Se descarta: un caso a medias publicado es justo lo que
  la regla de «no inventar datos» quiere evitar.
- **`astro:assets` para las capturas.** Ya está en Astro; genera tamaños y formatos modernos sin dependencias nuevas.
- **Sin dependencias nuevas.**

## Risks / Trade-offs

- [El primer caso depende de datos que solo tiene Juanma] → la propuesta se puede aplicar con el caso en `publicado: false`
  y publicarlo cuando lleguen los datos; la home sigue mostrando «en preparación».
- [Capturas con datos de personas] → regla explícita de anonimizar, revisada en la tarea de cierre.

## Open Questions

- ¿El cliente del consultorio acepta aparecer con nombre? No cambia el código: define el valor de `nombre_publico`.
