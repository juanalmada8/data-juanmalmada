# Assets de marca

Exportados desde el manual de marca en Figma. **No se editan a mano ni se redibujan en código.**

Exportar como SVG, con «Outline text» activado, sin fondo, con `viewBox` ajustado al dibujo (sin márgenes de más),
y nombres en minúscula con guiones, tal cual esta lista:

| Archivo | Qué es |
|---|---|
| `logo-jm-crema.svg` | `<jm>` principal para fondos oscuros (letras crema, `< >` musgo/salvia, punto lima) |
| `logo-jm-pino.svg` | `<jm>` principal para fondos claros (letras pino) |
| `logo-jm-1tinta-crema.svg` | `<jm>` todo crema |
| `logo-jm-1tinta-pino.svg` | `<jm>` todo pino |
| `logo-jm-cursor.svg` | `<jm▌>` con el cursor en un grupo aparte (`<g id="cursor">`) para animarlo |
| `icono-j.svg` | `</j>` sobre círculo pino |
| `icono-j-sin-fondo.svg` | `</j>` sin círculo |
| `favicon.svg` | `</j>` simplificado para 16–32 px (va también a `public/favicon.svg`) |
| `apple-touch-icon.png` | 180×180, `</j>` sobre pino |
| `firma-crema.svg` / `firma-pino.svg` / `firma-lima.svg` | La firma en cada color |
| `patron-m.svg` | Tile repetible de la `m` (tono sobre tono) |
| `og-default.png` | 1200×630, portada para compartir (como la portada del manual) |

Si un archivo falta, el componente muestra `[[FALTA: nombre-del-archivo]]` en vez de inventar.
