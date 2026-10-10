# 01 — Marca

Fuente de verdad: Manual de marca 2026 (Figma; láminas exportadas en `docs/marca/`). Esta spec lo traduce a reglas para código.
Si algo del manual no está acá, preguntá antes de interpretarlo.

## Logo

| Pieza | Uso | Archivos (en `web/public/brand/`; estado en su README) |
|---|---|---|
| `<jm>` principal | Header grande, hero, footer, tarjeta | `1_Logos/logo_color.svg` (sobre pino). Para fondo claro: falta |
| `<jm>` una tinta | Sobre imágenes, sellos; todo crema o todo verde, **sin lima** | `1_Logos/logo_una_tinta_{crema,verde}_transparente.png` (falta SVG) |
| `</j>` ícono | Favicon, avatar, header compacto en mobile, todo lo que mida < 100 px | `2_Icono/icono_color.svg` (sobre pino), `2_Icono/icono_favicon_512.png` |
| `<jm▌>` con cursor | Momentos con onda (hero, 404). El cursor puede titilar | Falta: SVG con el cursor en un `<g id="cursor">` aparte |
| Firma | Cierre de secciones largas, «Hola, soy Juanma», footer | `3_Firma/firma_verde.svg`, `3_Firma/firma_{crema,lima}_transparente.png` |

Anatomía: la `j` es un trazo suelto con el punto en lima; la `m` es una letra con peso; los `< >` son cintas
en dos tonos (musgo + salvia).

**Reglas**
- Aire mínimo alrededor: el alto de la `m`.
- Ancho mínimo del `<jm>`: 100 px. Por debajo, usá `</j>`.
- No deformar, no rotar, no recolorear fuera de la paleta, no agregar sombras ni efectos.
- **No se dibuja a mano en código.** Si falta el SVG, marcador `[[FALTA: logo …]]`.

## Color

```css
:root {
  --pino:   #133A2E; /* fondos oscuros y textos */
  --musgo:  #3F7A5C; /* secundario */
  --salvia: #A8C5AE; /* detalles y placas */
  --crema:  #F3EFE3; /* fondos claros */
  --lima:   #D4E85C; /* SOLO acento */
  --blanco: #FFFFFF; /* tarjetas sobre crema (borde 1px salvia) */
}
```

**Proporción de uso** (a ojo, en la página entera): crema 40 · pino 30 · musgo 15 · salvia 11 · lima 4.

**Lima es un acento:** una palabra en itálica, un dato, un botón, el punto de la `j`, un sticker.
Nunca fondo de una sección entera de texto largo. Excepción del manual: una placa/tarjeta chica en lima con
texto pino («detrás de escena») está permitida, como mucho una por pantalla.

### Contraste (WCAG, calculado)

| Texto / Fondo | Ratio | Uso permitido |
|---|---|---|
| crema / pino | 10.9 | Todo. **Combinación principal.** |
| pino / crema | 10.9 | Todo. |
| pino / lima | 9.3 | Todo (botones lima, placas lima). |
| pino / salvia | 6.7 | Todo. Placas secundarias. |
| salvia / pino | 6.7 | Todo. Textos secundarios sobre oscuro. |
| musgo / blanco | 5.1 | Todo. |
| musgo / crema | 4.4 | **Solo texto grande** (≥ 24 px, o ≥ 19 px bold). Títulos en itálica sí; párrafos no. |
| crema / musgo | 4.4 | **Solo texto grande.** Las cajas musgo del manual llevan párrafo chico: subirlo a ≥ 19 px bold o usar blanco (5.1) para el cuerpo. |
| lima / musgo | 3.7 | Solo texto grande / elementos gráficos. |
| lima / crema | 1.2 | **Prohibido** para texto. |
| salvia / crema | 1.6 | **Prohibido** para texto. Solo bordes y decoración. |

## Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Títulos | **DM Serif Display** | 400 + itálica | Títulos, frases, destacados. La itálica subraya **una** idea por título. |
| Textos | **Manrope** | 300 / 400 / 500 / 700 | Párrafos, UI, botones, descripciones. |
| Detalles | **JetBrains Mono** | 400 / 500 | Etiquetas, numeraciones (`01 — LOGOTIPO`), datos, guiños de código. **Dosis chicas.** |

Self-hosted en `web/public/fonts/` (woff2, `font-display: swap`, subset latin). Nada de Google Fonts en runtime.

```css
:root {
  --font-serif: "DM Serif Display", Georgia, serif;
  --font-sans:  "Manrope", system-ui, sans-serif;
  --font-mono:  "JetBrains Mono", ui-monospace, monospace;

  --fs-h1:    clamp(2.75rem, 1.6rem + 5vw, 4.5rem);   /* 44 → 72 px, lh 1.0 */
  --fs-h2:    clamp(2rem, 1.4rem + 2.6vw, 3.25rem);   /* lh 1.05 */
  --fs-h3:    clamp(1.375rem, 1.2rem + .8vw, 1.75rem);/* serif, lh 1.15 */
  --fs-body:  clamp(1rem, .95rem + .25vw, 1.125rem);  /* 16 → 18 px, lh 1.5 */
  --fs-small: .875rem;
  --fs-label: .8125rem;  /* mono, uppercase, letter-spacing .12em */
}
```

Detalles tipográficos que **sí** importan:
- Títulos en *sentence case* (en castellano no se capitaliza cada palabra).
- `text-wrap: balance` en títulos, `text-wrap: pretty` en párrafos.
- Comillas latinas «así». Signos de apertura ¿¡ siempre. Puntos suspensivos con `…`.
- `&nbsp;` entre número y unidad (`8&nbsp;años`, `24/7`), y para no dejar viudas en títulos cortos.
- Números en datos con `font-variant-numeric: tabular-nums`.
- Las etiquetas mono siguen el patrón del manual: `01 — PROYECTOS`, `// tip de la semana`, `hola_mundo()`.

## Espaciado, forma y profundidad

```css
:root {
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem; --space-4: 1rem;
  --space-6: 1.5rem; --space-8: 2rem; --space-12: 3rem; --space-16: 4rem; --space-24: 6rem;

  --radius-card: 20px;   /* placas y tarjetas */
  --radius-pill: 999px;  /* chips y botones */
  --border-soft: 1px solid var(--salvia);

  --max-w: 72rem;        /* contenido */
  --gutter: clamp(1rem, 4vw, 3rem);
}
```

- **Plano.** Bloques de color sólidos, bordes de 1 px salvia sobre crema/blanco. Sombras: casi nunca; si hace falta
  separar, que sea una sombra dura y corta, no difusa.
- Chips/etiquetas: pill con borde de 1 px, texto mono (como los de la portada del manual).
- Botón principal: fondo lima, texto pino, Manrope 700, pill. Secundario: borde crema o pino, sin relleno.

## Recursos gráficos

- **Patrón de `m`**: repetición de la `m` en tono sobre tono (pino sobre pino más claro, o salvia sobre crema) con
  2–3 `m` sueltas en lima. Para fondos de bandas y separadores. Tile pendiente de exportar (ver pendientes).
- **Patrón pipeline**: cajitas mono unidas por líneas (`extraer → limpiar → modelar → dashboard/web → tu negocio`).
  Este sí se puede construir en HTML/SVG porque es diagramático, siguiendo el del manual.
- **Patrón de datos**: grilla de puntos pino/musgo/salvia con algunos en lima.
- **Stickers**: círculos con `</j>`, «todo el sistema», la firma. Pueden ir levemente rotados (−4° a 4°).
- **Íconos**: de línea, trazo ~2 px, esquinas redondeadas, en pino o crema. Pocos, y solo donde ayudan a escanear.

## Personalidad → decisiones visuales

| Rasgo | Se nota en |
|---|---|
| **Detallista** | Alineaciones exactas, números reales, nada librado al azar. |
| **Hiperactivo** | El cursor que titila, stickers torcidos, ritmo entre bloques oscuro/claro/color. |
| **Extrovertido** | Su firma, la voz en primera persona, lo técnico explicado en criollo. |

El ritmo de la página copia el feed de Instagram del manual: **alternar oscuro · claro · color**.
