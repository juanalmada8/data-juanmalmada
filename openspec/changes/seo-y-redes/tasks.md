# Tasks

## 1. Metadatos

- [ ] 1.1 Props de `title`, `description` e imagen por página y valores por defecto en `Base.astro`; verificar que el HTML generado de cada página tiene los tres.
- [ ] 1.2 Script de build que avisa si un título supera 60 o una descripción 155 caracteres; verificar con una página de prueba larga.
- [ ] 1.3 Redactar y aprobar con Juanma el título y la descripción de la home; verificar que cumplen los largos y la lista de palabras prohibidas.

## 2. Sitemap, robots y datos estructurados

- [ ] 2.1 Agregar `@astrojs/sitemap` y `robots.txt`; verificar que `sitemap.xml` lista la home y los casos publicados y no los borradores.
- [ ] 2.2 JSON-LD `Person` y `ProfessionalService` desde `data/sitio.ts`; verificar con el validador de datos estructurados y que no hay reseñas ni precios.

## 3. Imágenes y 404

- [ ] 3.1 Revisar `og-default.png` (1200×630) y la convención para imágenes por caso; verificar la vista previa al compartir un link de prueba.
- [ ] 3.2 Página `404.astro` con la marca y un toque de humor; verificar que responde 404 y que los enlaces funcionan.

## 4. Cierre

- [ ] 4.1 Lighthouse móvil sobre el build; verificar 95 o más en las cuatro categorías o documentar la excepción en el PR.
- [ ] 4.2 Pasar `revisor-de-marca` y actualizar `02-contenido.md`, ROADMAP (5.1 y 5.2) y el registro de decisiones; verificar que describen lo que hay.
