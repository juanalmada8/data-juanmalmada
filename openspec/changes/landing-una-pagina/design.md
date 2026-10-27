# Design

## Context

La rama `chore/openspec` trae la home editorial (8 secciones, Martian Mono + Atkinson, colección `proyectos` con un borrador
sin publicar). Los woff2 del manual siguen en la historia (`feat/base`) y `PatronM` en `feat/home`. No hay capturas de ningún
caso en el repo. `web/src/data/sitio.ts` tiene WhatsApp y mail; Instagram figura como `[[FALTA]]`. Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Primera pantalla del celular: titular, selector y CTA. Contacto a 2 clics desde cualquier punto.
- Agregar un caso nuevo = un archivo de contenido.
- JavaScript propio, chico y con degradación sin JS.

**Non-Goals:**
- Backend, formularios, analítica, otras páginas.

## Decisions

- **Todos los «Contame tu idea» llevan a `#contacto`** (barra y hero), donde están los tres botones. Barra → contacto → botón
  son 2 clics; chip → CTA → botón son 3. *Alternativa:* que el CTA del hero abra WhatsApp directo (2 clics con chip). Se
  descarta: dos botones con el mismo texto y comportamiento distinto confunden, y Instagram y mail quedarían lejos.
- **Datos del selector en `data/temas.ts`** (id, chip, frase, vista previa, mensaje de WhatsApp): una sola fuente para el
  hero y el contacto. Estado en memoria; el contacto lee el tema elegido y arma el link `wa.me`. Sin `localStorage`.
- **Selector como `radiogroup`** de botones nativos, con flechas, `aria-live="polite"` en la vista previa y transición de
  opacidad/transform de ~200 ms. Sin JS: lista de los 6 temas con su frase.
- **Vista previa con captura real o patrón del manual.** `04-calidad` prohíbe mockups falsos: «Turnos» usa la captura de
  Oral, «Plataforma» la de Staffy, «Web o app» alterna ambas, «Gestión» el panel de Oral si hay captura (si no, patrón
  pipeline), «Datos» el patrón de datos. Hasta que lleguen las capturas, placeholders visibles.
- **Casos en una colección de contenido** (`casos`): `nombre`, `url`, `resumen`, `bullets` (3), `capturas` (`src`, `alt`,
  `marco: celu|ventana`), `orden`, `publicado`. Reemplaza a `proyectos` (se borra el borrador del consultorio, que pasa a ser
  Oral). Un chequeo de build lista las capturas faltantes.
- **Pestañas con el patrón ARIA de tabs** (flechas, `aria-selected`). *Alternativa:* carrusel con scroll-snap. Se descarta:
  más difícil de hacer accesible y de navegar con teclado, y con 2 casos no aporta.
- **Marco de celu/ventana en CSS** alrededor de la captura real. El marco es decorativo (bordes, radios); no dibuja UI.
- **Fuentes del manual self-hosted** (woff2 latin, OFL), recuperadas con `git show feat/base:…`. Preload solo de DM Serif
  Display y Manrope. Se borran Martian Mono y Atkinson y se actualiza `LICENSE.md`.
- **Ritmo de color:** Hero crema · Qué hago pino · Casos crema · Cómo trabajo pino · Contacto crema, y pie pino. Respeta la
  proporción del manual (crema domina) y evita «todo verde». Botón lima sobre crema con borde pino.
- **Barra fija arriba** con `</j>` en celular y `<jm>` desde 480 px; el CTA nunca se oculta.
- **Cómo trabajo:** fila de 4 desde 768 px; en celular, lista vertical compacta (4 textos en una fila de 360 px no se leen).
- **Imágenes** con `astro:assets` (AVIF/WebP, ancho y alto, lazy debajo del primer pantallazo).

## Risks / Trade-offs

- [La primera pantalla no entra en 360×640 con titular, bajada, chips, vista previa y CTA] → la spec exige titular, chips y
  CTA en 360×640 y todo en 390×844; vista previa compacta en celular. Se mide con capturas.
- [Placeholders de capturas dejan la página «sin terminar»] → es a propósito y bloquea publicar (hay un cambio aparte para
  eso); no se inventan capturas.
- [Volver a las fuentes del manual rehace tokens y CSS recién tocados] → es acotado: tokens, base y tamaños.
- [Esta rama depende de `chore/openspec`/`feat/editorial`, no mergeadas, y hay 3 PRs viejos abiertos (#5, #6, #7)] → ordenar los
  PRs antes de aplicar (ver `Migration Plan`).
- [Los textos de las vistas previas pueden sonar a IA] → los revisa Juanma en esta propuesta y pasa `revisor-de-marca`.

## Migration Plan

1. Mergear (o rebasar sobre) la base: abrir un solo PR de `chore/openspec` a `main` y cerrar #5, #6 y #7.
2. Aplicar este cambio en una rama `feat/landing-una-pagina`. 3. Archivar el cambio al mergear.
`index.html` y `styles.css` de la raíz no se tocan: Pages sigue publicando la raíz hasta el corte (fuera de alcance).
Rollback: revertir el merge; el sitio publicado no cambia.

## Open Questions

Resolver antes de aprobar (cambian lo que se construye):

1. **Dominio.** El pedido habla de «la web de almadaortiz.dev», pero el repo y Cloudflare usan `juanmalmada.com`, y
   `almadaortiz.dev` es también el usuario de Instagram que pasaste. ¿Cuál es el dominio canónico de esta web? Afecta
   canonical, Open Graph y el `url` de `sitio.ts`.
2. **Años de experiencia.** Pediste «más de 7 años»; antes confirmaste «8 años» (y así está en las specs). ¿Cuál va?
   Por la regla de no inventar datos, no escribo ninguno hasta que lo digas.
3. **Titular vs lema.** El titular que pediste es «Todo el sistema, un solo proveedor.»; el lema del manual es «Un solo
   proveedor, todo el sistema.». Propongo titular nuevo en el hero y el lema del manual en el pie. ¿Está bien?
4. **Capturas.** No hay ninguna de Oral ni de Staffy en el repo. ¿Las tenés, o las saco yo de los sitios públicos?
   (No saco nada de Staffy sin que me lo digas.)

Se pueden decidir después sin cambiar la estructura: URL exacta de Instagram (propongo `instagram.com/almadaortiz.dev`) y
si «Fuera del código» (hockey, cocina, rock, viajes) vuelve en otra versión.
