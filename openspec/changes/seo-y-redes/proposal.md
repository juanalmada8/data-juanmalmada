# Proposal

## Why

La web va a competir por ser encontrada («desarrollador web en General Belgrano», «turnos online para consultorio») y por
verse bien cuando alguien comparte el link por WhatsApp o LinkedIn. Hoy tiene título, descripción y una imagen para
compartir por defecto, pero no hay mapa del sitio, ni datos estructurados, ni imagen propia por página. Es el momento de
resolverlo, antes de publicar.

## What Changes

- Mapa del sitio y `robots.txt`.
- Datos estructurados (`Person` y `ProfessionalService`) con los datos confirmados: nombre, base, remoto, servicios.
- Título y descripción propios por página, dentro de los largos recomendados.
- Imagen para compartir (1200×630) por defecto y, cuando existan, una por caso, con la marca.
- Página 404 con la marca y un toque de humor.
- Chequeo automático de metadatos en el build.

**Fuera de alcance:** analítica (decisión aparte, sin cookies), publicidad paga, posicionamiento por palabras clave en
otras ciudades, versión en inglés, blog.

## Capabilities

### New Capabilities
- `seo`: metadatos, datos estructurados, mapa del sitio, imágenes para compartir y página de error del sitio.

### Modified Capabilities
<!-- Ninguna. -->

## Impact

- `web/src/layouts/Base.astro` (metadatos), nueva generación de `sitemap` y `robots`, `web/src/pages/404.astro`.
- Imagen de compartir: parte de `web/public/brand/og-default.png` (ya existe); las por caso dependen de los casos.
- Dependencia a evaluar: integración de sitemap de Astro (resuelve el mapa del sitio).
- `docs/specs/02-contenido.md` (SEO y metadatos).

## Lo que tiene que aportar Juanma

- Aprobar el título y la descripción de la home (hoy: «Juan Martín Almada Ortiz · Webs, apps y datos»).
- Confirmar qué zonas/ciudades quiere nombrar (hoy: General Belgrano, Buenos Aires, 100% remoto).
- Usuario de Instagram y otras redes para enlazar (`sameAs`), cuando existan.
