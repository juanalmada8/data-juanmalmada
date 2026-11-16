# Plan: sumar lo mejor de Tiendanube (para ejecutar con Sonnet)

> Fecha: 2026-11-15. A Juanma le gusta la versión actual («ahora va queriendo») y pidió sumar cosas de la web de Tiendanube.
> Se miró tiendanube.com pantalla por pantalla. Lo que más vende ahí y sirve para esta web:
> 1. **«Todo conectado, en un solo lugar»**: una grilla tipo *bento* de tarjetas grandes con un visual que **muestra** el producto
>    (no una foto de stock) y el título encima. Es la mejor forma de mostrar de un vistazo que Juanma hace muchas cosas distintas.
> 2. **Pantallas con «notificaciones» flotantes** encima (su chat de WhatsApp con un pedido, su tarjeta de «ventas asistidas»): un
>    pedacito de interfaz que hace que la imagen se sienta viva.
> 3. Títulos de sección en dos renglones: el beneficio y, abajo, la aclaración («Vendé donde está tu cliente / Todo conectado, en un solo lugar»).
> No se copia: precios, «gratis», cifras, fotos de modelos, logos de clientes.

## Reglas para quien ejecute
- Leer `AGENTS.md`, `CLAUDE.md`. Rama `feat/landing-una-pagina` (PR #9). Commits convencionales en español.
- **Textos exactos de este plan.** No tocar el resto de la web (hero salvo el punto 2, casos, «Qué resuelvo», nota, cómo trabajo, preguntas, contacto, pie).
- Los visuales son **ilustraciones hechas con HTML y CSS** con los tokens de la marca (`tokens.css`): nada de imágenes de stock, nada de
  nombres de personas, nada de cifras de facturación o resultados. Son decorativos: `aria-hidden="true"` en el dibujo; el título y la
  línea de cada tarjeta son el texto accesible.
- Respetar `prefers-reduced-motion` (sin animaciones) y que todo funcione sin JavaScript.

## 1. Sección nueva «Todo conectado» (bento)
- Componente `web/src/components/secciones/Conectado.astro`, en `index.astro` **entre «Cosas que armé» y «Qué resuelvo»**. `id="conectado"`, `seccion-ancha tema-crema`.
- Título en dos renglones (`h2`, con `<span class="r">` en bloque como el hero):
  **«Lo que necesitás,»** / **«todo conectado en <em>un solo lugar</em>.»**
- Grilla bento en escritorio (≥ 64rem): 4 tarjetas, 2×2 con anchos alternados (fila 1: 7fr + 5fr; fila 2: 5fr + 7fr), alto ≈ 20rem,
  `--radius-tarjeta`, sin borde. Tablet: 2 columnas iguales. Celular: una columna, alto automático.
- Cada tarjeta: fondo de color de la paleta, el **visual arriba** ocupando la mayor parte, y abajo a la izquierda el **título** (serif, `--fs-tarjeta`) y una línea (`--fs-small`).

| Orden | Fondo | Título | Línea | Visual (HTML/CSS, decorativo) |
|---|---|---|---|---|
| 1 | pino | Turnos online | Tus clientes eligen día y horario solos. | Mini calendario: una fila de 5 días (lun–vie) con uno marcado en lima, y debajo 3 «pastillas» de horario (`09:00`, `10:30` marcada, `16:00`); una notificación flotante crema: «✓ Turno confirmado». |
| 2 | salvia | Bots con inteligencia artificial | Contestan las consultas aunque estés ocupado. | Chat: dos globos alternados («¿Tienen turno para el jueves?» del cliente, en crema; «¡Sí! Te quedan 10:30 y 16:00. ¿Cuál te reservo?» del bot, en pino con texto crema). |
| 3 | papel | Sistemas de gestión | Clientes, pedidos y stock en un solo lugar. | Tabla de 3 filas: `Pedido #128 · Entregado`, `Pedido #129 · En camino`, `Pedido #130 · Nuevo` con una etiqueta de estado (pastilla salvia / musgo / lima). |
| 4 | musgo (`--musgo-hondo`) | Tableros con tus datos | Ves qué funciona y qué no, al día. | Gráfico de barras: 6 barras de alturas distintas en salvia, la última en lima; una notificación flotante crema: «Actualizado hoy». |

- Debajo de la grilla, alineado a la izquierda, un enlace de texto: **«¿Lo tuyo es otra cosa? Contámelo»** a `#contacto`.
- Animación (solo sin movimiento reducido y con JS, vía la clase `.visible` de `[data-aparece]` que ya existe): las notificaciones flotantes
  entran con un leve desplazamiento y fundido una vez. Nada más se mueve.
- Contraste: textos sobre cada fondo con los pares ya probados (crema sobre pino y musgo hondo; pino sobre salvia y papel). Agregar al
  test de contraste de `web/tests/temas.test.mjs` los pares nuevos si hay alguno distinto (p. ej. pino sobre lima en las pastillas).

## 2. Notificaciones flotantes en el collage del hero
Archivo: `web/src/components/secciones/Hero.astro` (no tocar textos ni botones).
- Sobre el collage de capturas, dos «chips» de interfaz crema con sombra suave (usar `box-shadow` solo con colores de la paleta mezclados por `color-mix`):
  - Arriba a la izquierda, saliendo un poco del borde: **«✓ Turno confirmado»**.
  - Abajo a la izquierda (lejos del celu, que está a la derecha): **«Nuevo pedido por WhatsApp»**, con un punto lima delante.
- Decorativos (`aria-hidden="true"`). Entran con fundido una vez (sin movimiento reducido). Ocultos debajo de 48rem si tapan la captura.
- El hero tiene que seguir entrando en la primera pantalla de escritorio (1470×790, 1366×640, 1024×768) y no desbordar a 360.

## 3. Menú
`Header.astro`: el capítulo «01 Casos» cubre también «Todo conectado» (`hasta: "conectado"`), para que el progreso no tenga hueco.

## 4. Docs
- `docs/specs/02-contenido.md`: nueva sección «Todo conectado» (textos de la tabla) entre «Cosas que armé» y «Qué resuelvo»; chips del hero.
- `docs/specs/01-marca.md`: las ilustraciones de interfaz en HTML/CSS (sin stock, sin nombres, sin cifras) como recurso permitido.
- `docs/specs/03-arquitectura.md`: fila en el registro (fecha, «bento “Todo conectado” y chips flotantes, tomados de Tiendanube», por qué).
- `docs/investigacion-webs-que-venden.md`: un apartado corto «Tiendanube, de cerca» con los tres patrones de arriba.
- OpenSpec: `landing/spec.md` (orden de secciones con «Todo conectado»), spec nuevo `conectado/spec.md` con requisito y escenarios
  (4 tarjetas, decorativas con texto accesible, sin movimiento con reduced-motion). `tasks.md`: grupo 24. `openspec validate landing-una-pagina`.

## Verificación
- `cd web && npm run check && npm test && npm run build`.
- Playwright (entorno en `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`, Chrome del sistema) a 360, 390, 768, 1024, 1366×640, 1470×790 y 1920: sin scroll horizontal, hero en la primera pantalla de escritorio, pie entero al ir a Contacto (1470×790, 1366×640, 1280×720, 1024×768). **Mirar** las capturas de hero y «Todo conectado» en 360 y 1470 antes de dar algo por bueno: que los visuales se lean, que nada se superponga mal.
- axe sin violaciones a 360, 768 y 1440, con y sin movimiento reducido. Lighthouse móvil si está disponible (`npx -y lighthouse@12`).
- `revisor-de-marca`; aplicar lo que no contradiga el plan.
- Si el dev server de `localhost:4321` muestra `FailedToLoadModuleSSR` por el archivo nuevo, reiniciarlo (`npx astro dev stop` y `npm run dev -- --port 4321` en segundo plano desde `web/`) y comprobar que responde 200.
- Commits y `git push origin feat/landing-una-pagina`. Informe final: archivos, decisiones, resultados, hashes, pendientes.
