# Plan: vuelta de rosca al diseño (hero, casos, bot y contacto) — para ejecutar con Sonnet

> Fecha: 2026-11-17. Pedido de Juanma, con capturas: le gusta cómo va, quiere **mejorar el diseño** (no tanto el texto) en cinco puntos.
> Versión de partida: commit `157c8c1`. Si algo no le gusta, se revierte.

## Reglas para quien ejecute
- Leer `AGENTS.md`, `CLAUDE.md`. Rama `feat/landing-una-pagina` (PR #9). Commits convencionales en español, chicos.
- **Textos exactos de este plan**; fuera de lo que se nombra acá no se cambia ninguna palabra. No inventar datos. Solo tokens de `tokens.css`.
- Ilustraciones: HTML/CSS con tokens, decorativas (`aria-hidden="true"`), sin nombres de personas; los números que aparezcan son de ejemplo de interfaz, no resultados.
- Íconos de redes: SVG en línea con los trazos de **Simple Icons** (licencia CC0) para WhatsApp, Instagram y LinkedIn, y un sobre simple para mail; monocromos (`currentColor`), 1.25em, `aria-hidden="true"` (el nombre de la red va como texto). No agregar dependencias.
- Respetar `prefers-reduced-motion` y que todo funcione sin JavaScript.

## 1. Un solo lugar para las redes (pedido: «siempre lo mismo, todo junto»)
- En `web/src/data/sitio.ts`, agregar y exportar `redes` (una sola fuente), en este orden:
  | id | nombre | url | detalle (solo para Contacto) |
  |---|---|---|---|
  | whatsapp | WhatsApp | `contacto.whatsapp` | Es lo más rápido. |
  | instagram | Instagram | `contacto.instagram` | Lo que voy armando. |
  | linkedin | LinkedIn | `contacto.linkedin` | Mi recorrido. |
  | mail | Mail | `mailto:` + `contacto.mail` | Si preferís escribir con calma. |
- Componente nuevo `web/src/components/Redes.astro` con dos variantes:
  - `variante="pastillas"`: fila de pastillas (ícono + nombre), `min-height: var(--tap-min)`, borde fino del color del texto al 30 %, radio pill, hover con fondo suave. Externas con `target="_blank" rel="noopener noreferrer"` y aviso `sr-only` «(se abre en otra pestaña)».
  - `variante="tarjetas"`: grilla de 4 tarjetas iguales (2×2 en celu, 4 en una fila desde 64rem): ícono grande arriba, nombre en serif `--fs-tarjeta`, `detalle` abajo en `--fs-small`, flecha →. WhatsApp en lima (texto pino); las otras en salvia (texto pino). Toda la tarjeta es el enlace; foco visible.
- Usarlo en **tres lugares**, siempre los cuatro canales:
  - Hero: reemplaza «O escribime directo: WhatsApp · Instagram · Mail» por `<Redes variante="pastillas" />`, con la etiqueta chica «O escribime directo» encima.
  - Contacto: ver punto 5.
  - Pie (`Footer.astro`): el link suelto «LinkedIn ↗» se reemplaza por `<Redes variante="pastillas" />` (en pino, colores invertidos).

## 2. Hero: menos «hoja de texto», más diseño (sin cambiar titular ni botones)
Archivo `web/src/components/secciones/Hero.astro`.
- La bajada actual se parte en tres piezas con las **mismas palabras**:
  1. Bajada corta: **«Armo soluciones a medida para tu negocio:»**
  2. Debajo, una fila de 4 **etiquetas** (pastillas chicas, fondo crema al 12 %, texto crema, sin enlace): **Sistemas de gestión · Bots con inteligencia artificial · Webs · Tableros con tus datos**.
  3. Debajo de los botones (no antes), tres **beneficios** en fila con un tilde lima: **«Ahorrás tiempo» · «Trabajás más cómodo» · «Sabés qué pasa en tu negocio»**.
- Orden final de la columna: bajada corta → etiquetas → botones «Charlemos» / «Ver lo que armé» → beneficios → «O escribime directo» + `<Redes variante="pastillas" />` → línea de confianza (queda igual).
- **Lado derecho: sale el collage de Oral y Staffy** (las capturas ya están en «Cosas que armé»). En su lugar, una **ilustración de un panel de control** («tu negocio bajo control»), HTML/CSS, decorativa:
  - Tarjeta crema con radio `--radius-tarjeta`, título chico **«Hoy en tu negocio»** y una fecha genérica **«Martes»**.
  - Tres filas con ícono simple, nombre y valor: **«Turnos confirmados — 12»**, **«Pedidos nuevos — 5»**, **«Consultas respondidas por el bot — 18»**, cada una con una barrita de progreso (salvia, la primera en lima).
  - Un mini gráfico de 7 barras (salvia; la última musgo) bajo el título «Esta semana».
  - Encima, flotando como hoy: **«✓ Turno confirmado»** (arriba a la izquierda) y **«Nueva consulta respondida»** con punto lima (abajo a la derecha). Entran con fundido una vez (sin movimiento reducido).
  - El pie del collage («Oral Odontología Familiar y Staffy, dos de los sistemas que armé.») se borra.
- El hero tiene que seguir entrando en la primera pantalla de escritorio (1470×790, 1366×640, 1024×768) sin desbordar en 360. En celular el panel va debajo y puede achicarse.
- Actualizar `web/tests/copy.test.mjs` si el test del hero busca `contacto.whatsapp` etc. en `Hero.astro`: ahora el orden de canales lo define `redes` en `sitio.ts` (ajustar el test para leer ese orden).

## 3. Casos: Staffy describe lo que se hizo y mejores enlaces
- `web/src/content/casos/staffy.md`: dejar **dos partes** (borrar «Hoy»):
  - «Qué es» — «Un portal de empleo para profesionales IT que conecta personas con empresas de Latinoamérica y Estados Unidos.»
  - «Qué armé» — «Diseñé y armé el portal completo: la parte pública donde los candidatos ven las vacantes y se postulan, el panel donde cada empresa gestiona sus búsquedas, un primer filtro de candidatos con inteligencia artificial y los avisos automáticos por mail.»
- `Casos.astro`, diseño de la cabecera de cada tarjeta:
  - El nombre del cliente pasa a una **pastilla** (rótulo, `--fs-small`, peso 800, fondo del color de texto al 12 %).
  - El enlace «Ver oral.com.ar ↗» se reemplaza por un **botón chico** a la derecha de la pastilla: **«Visitar el sitio ↗»** (variante `.boton.sec` chica, `min-height: var(--tap-min)`), con `aria-label` «Visitar el sitio de {nombre} (se abre en otra pestaña)».
  - El título (`resultado`) y el panel de la última parte quedan. El panel muestra el título de la última parte («Hoy» en Oral, «Qué armé» en Staffy).
- Igualar la altura visual de las tarjetas (grid con `align-items: stretch` y «Ver más» al pie de la tarjeta).

## 4. Bot: que el chat no hable de turnos
`web/src/components/secciones/Conectado.astro`, tarjeta «Bots con inteligencia artificial»:
- Globo del cliente: **«¿Hacen envíos al interior?»**
- Globo del bot: **«¡Sí, a todo el país! ¿Querés que te pase precios y medios de pago?»**
- El resto de la tarjeta queda igual.

## 5. Contacto: todas las redes juntas
`web/src/components/secciones/Contacto.astro`:
- Título y bajada quedan («Contame qué necesitás.» / «Escribime y lo charlamos. Con un mensaje alcanza.»).
- Las dos tarjetas actuales (WhatsApp / Mail) y la línea «También estoy en Instagram.» se reemplazan por `<Redes variante="tarjetas" />` (los cuatro canales juntos, WhatsApp destacado).
- La franja del patrón de la m queda. Re-verificar que Contacto + pie entran en una pantalla de escritorio (pie entero al ir a Contacto a 1470×790, 1366×640, 1280×720 y 1024×768); si no entra, achicar el alto de las tarjetas en ventanas bajas.

## 6. Docs
- `docs/specs/02-contenido.md`: hero (bajada en piezas, etiquetas, beneficios, panel ilustrado), redes en un solo componente en hero, contacto y pie; Staffy sin «Hoy»; chat del bot; enlace «Visitar el sitio».
- `docs/specs/01-marca.md`: íconos de redes (Simple Icons, CC0, monocromos) como recurso permitido.
- `docs/specs/03-arquitectura.md`: fila en el registro (fecha, decisiones, por qué: pedido de Juanma del 2026-11-17).
- OpenSpec: `landing/spec.md` (hero sin collage, con panel ilustrado; redes), `contacto/spec.md` (cuatro canales juntos, mismo orden en hero, contacto y pie), `casos/spec.md` (Staffy en dos partes, botón «Visitar el sitio»), `conectado/spec.md` (chat). `tasks.md`: grupo 25. `openspec validate landing-una-pagina`.

## Verificación
- `cd web && npm run check && npm test && npm run build`.
- Playwright (entorno en `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`, Chrome del sistema) a 360, 390, 768, 1024, 1366×640, 1470×790 y 1920: sin scroll horizontal; hero en la primera pantalla de escritorio; pie entero al ir a Contacto. **Mirar** las capturas de hero, casos, la tarjeta del bot, contacto y pie a 390 y 1470 antes de dar algo por bueno.
- axe sin violaciones a 360, 768 y 1440 (con y sin movimiento reducido). Lighthouse móvil (`npx -y lighthouse@12`).
- `revisor-de-marca`; aplicar lo que no contradiga el plan.
- Al terminar, `http://localhost:4321` (dev) tiene que responder 200 sin `FailedToLoadModuleSSR` (reiniciar el dev server si hace falta).
- Commits y `git push origin feat/landing-una-pagina`. Informe final: archivos, decisiones, resultados, hashes y pendientes.
