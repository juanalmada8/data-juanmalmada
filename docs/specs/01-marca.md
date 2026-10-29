# 01 — Marca

Fuente de verdad: Manual de marca 2026 (Figma; láminas exportadas en `docs/marca/`). Esta spec lo traduce a reglas para código.
Si algo del manual no está acá, preguntá antes de interpretarlo.

## Logo

| Pieza | Uso | Archivos (en `web/public/brand/`, detalle en su README) |
|---|---|---|
| `<jm>` principal | Header grande, hero, footer, tarjeta | `logo-jm-crema.svg` (sobre pino), `logo-jm-pino.svg` (sobre crema) |
| `<jm>` una tinta | Sobre imágenes, sellos; todo crema o todo verde, **sin lima** | `logo-jm-1tinta-crema.svg`, `logo-jm-1tinta-pino.svg` |
| `</j>` ícono | Favicon, avatar, header compacto en mobile, todo lo que mida < 100 px | `icono-j.svg` (círculo pino), `icono-j-sin-fondo.svg` (oscuro), `icono-j-pino.svg` (claro), `favicon.svg`, `apple-touch-icon.png` |
| `<jm▌>` con cursor | Momentos con onda (hero, 404). El cursor puede titilar | `logo-jm-cursor.svg`, cursor en `<g id="cursor">` |
| Firma | Cierre de secciones largas, «Hola, soy Juanma», footer | `firma-crema.svg`, `firma-pino.svg`, `firma-lima.svg` |

**En la barra fija de la web** el `<jm>` mide 104 px (mínimo de marca: 100 px) y tiene 12 px de aire arriba y abajo. Es
menos que el «alto de la m» que pide el manual: una barra con ese aire (≈ 36 px por lado) sería desproporcionada. El aire
completo se respeta donde el logo es protagonista; en el celular la barra usa el ícono `</j>`.

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

**Proporción de uso** del manual (redes y piezas): crema 40 · pino 30 · musgo 15 · salvia 11 · lima 4. En la web manda pino (ver «Espaciado, forma y superficies»).

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

Las del manual de marca (vuelven el 2026-10-24: ver el registro de decisiones de `03-arquitectura.md`).

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Títulos | **DM Serif Display** | 400 + itálica | Títulos y frases. La itálica (`<em>`) destaca **una** palabra por título. |
| Textos | **Manrope** | variable 200–800 | Párrafos, UI, botones, descripciones. |
| Detalles | **JetBrains Mono** | 400 / 500 | Etiquetas chicas en mayúsculas con tracking (`.12em`), numeraciones (`01 — QUÉ HAGO`), guiños de código. Dosis chicas. |

Self-hosted en `web/public/fonts/` (woff2 latin, OFL, `font-display: swap`). Nada de Google Fonts en runtime.
Tamaños en `tokens.css`: `--fs-micro` (11 px, nunca menos), `--fs-label`, `--fs-small`, `--fs-body`, `--fs-lead`,
`--fs-h3`, `--fs-h2`, `--fs-h1`.

Detalles tipográficos que **sí** importan:
- Títulos en *sentence case*. El acento de un título (`<em>`, itálica) va en musgo sobre crema (solo en títulos grandes) y en lima sobre pino; una idea por título.
- `text-wrap: balance` en títulos, `text-wrap: pretty` en párrafos.
- Comillas latinas «así». Signos de apertura ¿¡ siempre. Puntos suspensivos con `…`.
- `&nbsp;` entre número y unidad (`7&nbsp;años`, `24&nbsp;h`).
- Rótulos del manual: `01 — QUÉ HAGO` (mono, mayúscula, `.12em`). Los guiños de código como `hola_mundo()` van en mono **en minúsculas** (y el mono se usa solo para código: chips, números del índice y datos van en Manrope).
- Escala de la lámina de tipografía **con más carácter** (decisión de Juanma, 2026-10-29): H1 serif 56–72 px (40 px en el celular) con interlineado .95 y espaciado apretado; H2 hasta 60 px; **números grandes en serif** (56–88 px) en «Cómo trabajo»; cuerpo Manrope 16–18 px con interlineado 1.5; etiquetas mono 12–14 px con espaciado. Manrope Bold en subtítulos y botones, Medium en destacados (la bajada), Regular en párrafos.

## Espaciado y forma

Valores en `web/src/styles/tokens.css` (fuente de verdad): espacios `--space-1` a `--space-24`; radios `--radius-card`
20 px, `--radius-box` 10 px, `--radius-pill`; `--borde-suave` 1 px salvia; tamaños `--fs-micro` (11 px, nunca menos)
a `--fs-h1`; `--tap-min` 44 px.

- **Fondos en la web:** papel crema para la lectura; escenario fijo en pino (hero y Qué hago) y salvia (Casos); «Cómo trabajo» sobre salvia y «Contacto» y el pie sobre pino.
- **Lima como acento escaso** (2026-10-29): solo el CTA principal, el logo, la pastilla `hola_mundo()` y una `m` del patrón; no en chips, índice, títulos ni marcadores.
- **Proporción del manual, también en la web:** crema 40 · pino 30 · musgo 15 · salvia 11 · lima 4. Crema es el fondo
  que más se ve; pino en bandas y tarjetas; salvia en una banda y placas; lima solo en acentos, el botón de WhatsApp
  sobre pino y una placa chica.
- Plano: bloques sólidos, tarjetas blancas con borde salvia sobre crema, sin sombras.
- Botón principal: pino sobre crema (lima sobre pino), pill, Manrope 700.

## Recursos gráficos

- **Patrón de `m`**: repetición de la `m` en tono sobre tono (pino sobre pino más claro, o salvia sobre crema) con
  2–3 `m` sueltas en lima. Para fondos de bandas y separadores. Tile en `web/public/brand/patron-m.svg`.
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

El ritmo de la página copia el feed del manual: **alternar claro · oscuro · color**, con crema como base.
