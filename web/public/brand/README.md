# Assets de marca

Exportados desde el manual de marca en Figma. **No se editan a mano ni se redibujan en código.**
Todo lo que está en `web/public/` se publica: acá van solo los archivos que usa el sitio.
Las láminas del manual y las plantillas de Instagram están en `docs/marca/` (referencia, no se publican).

Al exportar: SVG con «Outline text», sin fondo, `viewBox` ajustado al dibujo. Se mantiene la estructura de carpetas actual.

| Pieza | Archivo | Estado |
|---|---|---|
| `<jm>` color, fondo oscuro (letras crema) | `1_Logos/logo_color.svg` | ✅ |
| `<jm>` color, fondo claro (letras pino) | — | ❌ falta SVG |
| `<jm>` una tinta crema | `1_Logos/logo_una_tinta_crema_transparente.png` | ⚠️ falta SVG |
| `<jm>` una tinta verde | `1_Logos/logo_una_tinta_verde_transparente.png` | ⚠️ falta SVG |
| `<jm>` en placa (redes, OG) | `1_Logos/logo_color_fondo_verde_{1080,horizontal}.png`, `logo_una_tinta_verde_fondo_crema_1080.png` | ✅ |
| `<jm▌>` con cursor en `<g id="cursor">` | — | ❌ falta SVG |
| `</j>` color, sin círculo (fondo oscuro) | `2_Icono/icono_color.svg` | ✅ |
| `</j>` para fondo claro | `2_Icono/icono_una_tinta_verde_transparente.png` | ⚠️ falta SVG |
| `</j>` una tinta crema | `2_Icono/icono_una_tinta_crema_transparente.png` | ⚠️ falta SVG |
| Favicon / apple-touch-icon | `2_Icono/icono_favicon_512.png` (se escala a 180 y 32) | ⚠️ falta `favicon.svg` |
| Avatar Instagram | `2_Icono/icono_perfil_instagram_1080.png` | ✅ |
| Firma pino | `3_Firma/firma_verde.svg` | ✅ |
| Firma crema / lima | `3_Firma/firma_{crema,lima}_transparente.png` | ⚠️ falta SVG |
| Patrón de `m` (tile) | — | ❌ falta |
| OG por defecto 1200×630 | Se recorta de `logo_color_fondo_verde_horizontal.png` (sin redibujar) | ⚠️ por generar |

Si un archivo falta, el componente muestra `[[FALTA: nombre]]` en vez de inventar.
