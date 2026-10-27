# Proposal

## Why

La home actual tiene 8 secciones y cuenta de más: en 5 segundos no queda claro que Juanma arma **cualquier sistema a
medida**, y los textos empujan hacia turnos y datos, como si fuera lo único que hace. Ahora hay dos casos reales muy
distintos (un consultorio local y una plataforma para empresas) que lo demuestran, y la gente llega sobre todo desde
Instagram en el celular. Hace falta una sola página, corta e interactiva, donde ver lo que hace y escribirle esté a 2 o 3
clics desde cualquier punto.

## What Changes

- La home pasa a **una sola página de 5 secciones**: hero con selector «¿Qué necesitás?», qué hago, casos reales, cómo
  trabajo y contacto. Titular: «Todo el sistema, un solo proveedor.»
- **Selector interactivo** en el hero: 6 chips (Una web o app, Una plataforma, Turnos, Gestión, Datos, Otra idea) que
  cambian una vista previa animada. Lo que el visitante elige **precarga el mensaje de WhatsApp**.
- **Qué hago** como ejemplos («algunas cosas que puedo armar»), nunca como un límite, con el cierre «¿Lo tuyo no está
  acá? Contámelo, seguro se puede armar.»
- **Dos casos reales** en pestañas (Oral Odontología Familiar y Staffy), con la estructura lista para sumar más.
- **Barra fija mínima** (logo + «Contame tu idea») y contacto directo por WhatsApp, Instagram y mail.
- Se **vuelve a las tipografías del manual** (DM Serif Display, Manrope, JetBrains Mono). **BREAKING** respecto del
  cambio del 2026-10-10, que las había reemplazado por Martian Mono y Atkinson Hyperlegible Next.
- Se unifica la experiencia en **«más de 7 años»** (hoy las specs dicen «8 años»).
- Se **eliminan** las páginas internas (`/proyectos/<slug>`) y las secciones Todo conectado, Para quién y Sobre mí.
- Se reemplaza la colección `proyectos` por una de casos con el formato de este cambio.

**Fuera de alcance:** blog, precios, login, multilenguaje, formularios, cambiar logos o paleta, la API (`api/` no se
toca), el correo con dominio, publicar en producción (otro cambio: Pages sigue sirviendo la raíz de `main`), analítica.

## Capabilities

### New Capabilities
- `landing`: estructura de una página y 5 secciones, barra fija, mobile first, movimiento, rendimiento, accesibilidad, SEO.
- `selector-hero`: selector «¿Qué necesitás?» con vista previa y tema elegido.
- `servicios`: ejemplos de lo que puede armar, presentados como ejemplos y no como límite.
- `casos`: casos reales en pestañas, con captura, link y alta de casos nuevos sin tocar componentes.
- `proceso`: los 4 pasos de cómo trabaja.
- `contacto`: canales directos, mensaje de WhatsApp precargado y tope de clics.
- `marca`: paleta, tipografías, logo, patrón y ritmo visual del manual aplicados a la página.

### Modified Capabilities
<!-- Ninguna: openspec/specs/ está vacío (OpenSpec recién inicializado), todo es nuevo. -->

## Impact

- `web/src/`: se reescriben `pages/index.astro`, `components/secciones/*`, `Header`, `Footer`; se agregan `data/temas.ts`
  y la colección de casos; se borra `pages/proyectos/[slug].astro` y `content/proyectos/`.
- `web/public/fonts/`: se recuperan los woff2 del manual (están en la rama `feat/base`) y se sacan los de Martian
  Mono y Atkinson. `web/public/brand/` ya tiene todo lo demás (logos, ícono, firma, patrón, `og-default.png`).
- `PatronM` se recupera de `feat/home` (se había borrado con el editor de código).
- Docs a actualizar: `01-marca` (tipografías), `02-contenido` (home y casos), `03-arquitectura` (decisiones), `ROADMAP`,
  `pendientes-juanma`.
- Sin dependencias nuevas: JavaScript propio y chico, sin librerías de UI.

## Migración del contenido de la home actual

| Hoy | Va a |
|---|---|
| Hero «Un solo proveedor, todo el sistema.» | Hero con el titular nuevo; el lema original queda en el footer |
| Qué hago (4 servicios con problema → armo → ahorra) | Qué hago (5 ejemplos, problema → solución en una línea) |
| Todo conectado (pipeline) | Se quita la sección; el patrón pipeline se reutiliza en la vista previa de «Gestión» y «Datos» |
| Para quién | Se quita; el título del contacto nombra «un negocio, un consultorio, una empresa o una idea» |
| Cómo trabajo (4 pasos) | Cómo trabajo (Charla → Propuesta → Desarrollo → Soporte) |
| Proyectos («en preparación») | Casos reales: Oral y Staffy |
| Sobre mí (texto, rasgos, fuera del código) | Una línea de presentación en Contacto con la firma; **rasgos y «fuera del código» quedan afuera** por el tope de 5 secciones |
| Contacto: WhatsApp, mail, LinkedIn | Contacto: WhatsApp, Instagram, mail; LinkedIn pasa al footer |

## Decisiones tomadas con Juanma

- Dominio principal: `juanmalmada.com` (`almadaortiz.dev` es el usuario de Instagram).
- Experiencia: «más de 7 años». Titular nuevo en el hero y lema del manual en el pie.
- Capturas de Oral y Staffy: placeholders visibles hasta que Juanma las pase.

## Lo que tiene que aportar Juanma

- **Capturas** de Oral (oral.com.ar) y de Staffy (jobs.wearestaffy.com), cuando las tenga. No hay ninguna en el repo.
- Confirmar la URL de Instagram (se asume `instagram.com/almadaortiz.dev`).
