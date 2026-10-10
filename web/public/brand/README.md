# Assets de marca

Salen de los **vectores reales del PDF exportado del manual en Figma** con `scripts/brand/extraer.py`.
No hay nada redibujado: para las variantes de color solo se cambiaron los rellenos, y siempre dentro de la paleta.
**No se editan a mano.** Si cambia el manual, se vuelve a correr el script.

Todo lo que está en `web/public/` se publica. Las láminas, las plantillas de Instagram y los exports originales
de Figma (PNG y SVG con los nombres de Figma) están en `docs/marca/` como referencia.

| Archivo | Qué es |
|---|---|
| `logo-jm-crema.svg` | `<jm>` principal para fondo oscuro (letras crema, `< >` musgo/salvia, punto lima) |
| `logo-jm-pino.svg` | `<jm>` principal para fondo claro (letras pino) |
| `logo-jm-1tinta-crema.svg` / `logo-jm-1tinta-pino.svg` | `<jm>` una tinta, sin lima |
| `logo-jm-cursor.svg` | `<jm▌>` para fondo oscuro, con el cursor en `<g id="cursor">` para animarlo |
| `icono-j.svg` | `</j>` sobre círculo pino |
| `icono-j-sin-fondo.svg` | `</j>` sin círculo, para fondo oscuro (j crema) |
| `icono-j-pino.svg` | `</j>` sin círculo, para fondo claro (j pino, chevrones musgo, punto lima) |
| `icono-j-1tinta-crema.svg` | `</j>` una tinta crema |
| `favicon.svg` | Igual a `icono-j.svg`. Va también a `web/public/favicon.svg` (tarea 1.4) |
| `apple-touch-icon.png` | 180×180, `</j>` sobre pino |
| `firma-crema.svg` / `firma-pino.svg` / `firma-lima.svg` | La firma en cada color |
| `m.svg` | La `m` sola, en `currentColor` |
| `patron-m.svg` | Tile de 140×236 con el espaciado de la portada (m musgo al 45 %). Las `m` lima se ponen aparte |
| `og-default.png` | 1200×630, la portada del manual recortada |

Notas:
- El cursor de `logo-jm-cursor.svg` es un agregado: no está en el Figma. Va entre la `m` y el `>`.
- `patron-m.svg` muestra una costura finita entre repeticiones cuando se usa como `background-image`.
  Revisarlo al armar `PatronM` (tarea 1.5).
- Si un archivo falta, el componente muestra `[[FALTA: nombre-del-archivo]]` en vez de inventar.

Para regenerar (requiere el PDF del manual, que no está en el repo):

```bash
uv run --with pymupdf scripts/brand/extraer.py <manual.pdf> web/public/brand
```
