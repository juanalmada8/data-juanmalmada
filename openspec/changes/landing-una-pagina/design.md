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
- **Barra fija arriba** con `</j>` en celular y `<jm>` desde 480 px; el CTA nunca se oculta. Desde el feedback de Juanma
  (2026-10-29): altura de 5 rem desde 480 px para que el logo respire y no pise la línea, que pasa a ser el borde suave
  salvia del manual; navegación por secciones con la actual marcada (IntersectionObserver), nombre de la sección en el
  celular y una línea de progreso. *Alternativa:* rail de puntos lateral. Se descarta: tapa contenido en el celular.
- **Hero a pantalla completa** en escritorio (`min-height: 100svh` menos la barra), con la banda del patrón al pie, para que
  el verde oscuro no asome cortado en la primera pantalla.
- **Cómo trabajo:** fila de 4 desde 768 px; en celular, lista vertical compacta (4 textos en una fila de 360 px no se leen).
- **Imágenes** con `astro:assets` (AVIF/WebP, ancho y alto, lazy debajo del primer pantallazo).

## Giro del 2026-10-29 (feedback de Juanma: «las letras parecen muy AI, la nav es insulsa»)

Elegido por Juanma entre varias opciones:

- **Tipografía del manual, con más carácter.** Mismas familias; cambia el uso: H1 más grande (hasta 80 px) y apretado,
  interlineado bajo 1.0, palabras en itálica protagonistas, números grandes en serif en «Cómo trabajo», mono solo para
  detalles. *Alternativas descartadas:* cambiar solo los títulos o todo el sistema tipográfico (salían del manual).
- **Índice numerado** (01–04) con un tramo de progreso por capítulo; en el celular, el capítulo actual y una barra
  segmentada. Reemplaza al subrayado y a la línea de progreso únicos. *Alternativas:* píldora flotante, menú a pantalla completa.
- **Hero oscuro (pino) con `<jm▌>` grande** en escritorio, como la portada del manual. Ritmo: pino · crema · salvia ·
  crema · pino, y pie pino.
- **El selector cambia el hero:** el fondo se mezcla de pino hacia musgo (0 a 40 %, siempre ≥ 7:1 con crema) y la
  bajada se reescribe por tema. **El titular no cambia** (es el mensaje de marca y el `h1`). *Alternativa descartada:*
  reescribir el titular por tema (perdía «un solo proveedor»).
- **Barra:** el índice completo entra desde 1024 px (a 768 se partía en renglones); por debajo, el capítulo actual más
  la barra segmentada, y el índice se despliega con el foco para teclado y lector de pantalla. El botón de la barra es
  pino (la lima queda para el hero). *Alternativa:* menú «hamburguesa» (agrega un clic y no estaba en el pedido).
- **Hero:** la bajada es la única región viva (`aria-live`); la vista previa dice el ejemplo y el ahorro concreto, no repite
  la bajada. El logo grande se muestra desde 640 px; en el celular no entra sin sacar el CTA de la primera pantalla.
- **Cierre de «Qué hago»:** tarjeta pino con CTA lima (la lima queda como acento, no como banda de ancho completo).
- **Microinteracciones:** flecha que se desplaza en los CTA, firma que se revela al aparecer, respuesta al presionar un
  chip. Todo apagado con `prefers-reduced-motion`. No hay cursor propio (`04-calidad` lo prohíbe).

## Nuevo frente con la skill taste (2026-10-29)

Juanma dijo que seguía viéndolo «muy AI», que había demasiada lima y pidió revisar el espaciado usando las skills
`design-taste-frontend` y `web-design-guidelines`. Se usa la skill como **método y medidor**; la marca la manda el manual.

- **Dirección dealt: `split-stage`** (con `--keep palette,type`). *Idea:* el logo `<jm▌>` (trazo suelto + letra con peso
  abrazados por código) es el escenario fijo. *Prueba del competidor:* ningún otro dev tiene este logo. *Cosa viva:* el
  selector, que cambia el tono del escenario. Alternativas dealt: `page-is-the-object` (necesita un artefacto, p. ej. un
  presupuesto) y `contact-sheet` (necesita muchas imágenes que no hay).
- **Fotos:** la dirección pide una fotografía vertical y la skill sugiere archivos abiertos. **No se usan**: las reglas del
  repo prohíben el stock; el objeto del escenario es el logo y, en «Casos», la captura real (hoy placeholder).
- **Qué se recorta del manual y por qué:** etiquetas sobre títulos, numeración en las secciones (la da el índice de la
  barra), líneas finas, cajas con borde y mono en chips/etiquetas. Es lo que el inspector marca como tics de plantilla.
  **Se mantiene del manual:** paleta, las tres tipografías (mono solo para `hola_mundo()` y el índice), la palabra en
  itálica de los títulos, crema como papel, el patrón de la `m`, el índice numerado que eligió Juanma. Excepciones que el
  inspector va a seguir marcando como WARN: 3 tipografías, itálica en títulos, crema.
- **Lima −30 %:** solo CTA principal, logo y una `m`. El chip elegido, la pastilla del índice y la itálica del titular pasan
  a pino/salvia/musgo.
- **Estructura:** un `escenario` fijo (`position: sticky`) con tres estados que se cruzan por opacidad según la sección;
  vistas y capturas existen dos veces (una en la lectura para el celular, una en el escenario para escritorio), y en cada
  ancho una de las dos copias está `display: none`, así que nunca hay contenido duplicado para el lector de pantalla.

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

## Decisiones confirmadas por Juanma (2026-10-27)

- **Dominio canónico: `juanmalmada.com`.** `almadaortiz.dev` es solo el usuario de Instagram (`instagram.com/almadaortiz.dev`).
  No cambia `sitio.url` ni canonical/Open Graph.
- **Años de experiencia: «más de 7 años».** Reemplaza al «8 años» de las specs actuales; es una actualización de
  `02-contenido` (datos fijos) y `pendientes`, dentro de las tareas de este cambio.
- **Titular «Todo el sistema, un solo proveedor.»** en el hero; el lema del manual («Un solo proveedor, todo el sistema.»)
  queda en el pie.
- **Capturas: placeholders visibles** de Oral y Staffy hasta que Juanma las pase. No se sacan capturas de los sitios.

## Open Questions

Se pueden decidir más adelante sin cambiar la estructura: la URL exacta de Instagram (se asume
`instagram.com/almadaortiz.dev`) y si «Fuera del código» (hockey, cocina, rock, viajes) vuelve en otra versión.
