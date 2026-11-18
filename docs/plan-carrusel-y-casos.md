# Plan: hero con carrusel de soluciones y casos con el mismo formato (para ejecutar con Sonnet)

> Fecha: 2026-11-17. Pedido de Juanma sobre la versión `f78e238`:
> 1. Volver al **texto de antes** en la bajada del hero; **dejar** los íconos de redes y los tildes de beneficios.
> 2. A la derecha del hero, en lugar del panel «Hoy en tu negocio» (que pone una sola solución como principal), un **carrusel que se mueve
>    solo** con distintas cosas que se pueden armar.
> 3. Casos: Oral y Staffy tienen que tener **el mismo formato**; le gusta el de Oral, más simple.

## Reglas para quien ejecute
- Leer `AGENTS.md`, `CLAUDE.md`. Rama `feat/landing-una-pagina` (PR #9). Commits convencionales en español.
- **Textos exactos de este plan.** Fuera de lo que se nombra acá no se cambia nada (barra, «Todo conectado», «Qué resuelvo», nota, cómo trabajo, preguntas, contacto, pie y redes quedan).
- Ilustraciones en HTML/CSS con tokens de marca, decorativas; **sin números** (ni cantidades ni cifras), sin nombres de personas.
- Movimiento automático accesible (WCAG 2.2.2): se puede pausar, se pausa solo con el mouse encima o con foco adentro, y **no se mueve** con `prefers-reduced-motion`. Sin JavaScript tiene que verse y poder recorrerse.

## 1. Hero: texto de antes, con tildes y redes
Archivo `web/src/components/secciones/Hero.astro`.
- La bajada vuelve a ser **un solo párrafo** con el texto anterior, exacto:
  «Armo soluciones a medida: sistemas de gestión, bots con inteligencia artificial, webs y tableros con tus datos. Para que ahorres tiempo, trabajes más cómodo y sepas en todo momento qué pasa en tu negocio.»
- Se **borran** las cuatro etiquetas (pastillas «Sistemas de gestión · Bots…»).
- Quedan, en este orden: párrafo → botones «Charlemos» / «Ver lo que armé» → tildes («Ahorrás tiempo · Trabajás más cómodo · Sabés qué pasa en tu negocio») → «O escribime directo» + `<Redes variante="pastillas" />` → línea de confianza.

## 2. Hero: carrusel «Lo que puedo armar»
- Componente nuevo `web/src/components/secciones/CarruselHero.astro`, que reemplaza al panel «Hoy en tu negocio» y a sus dos chips flotantes (borrar ese markup y su CSS).
- Estructura: `<section aria-roledescription="carrusel" aria-label="Lo que puedo armar">`, una pista horizontal con `overflow-x: auto` y `scroll-snap-type: x mandatory` (así funciona sin JS, deslizando), cada diapositiva con `role="group" aria-roledescription="diapositiva" aria-label="N de 6"`.
- Cada diapositiva: una tarjeta crema (`--radius-tarjeta`) con una **ilustración de interfaz** arriba y, abajo, el nombre en serif `--fs-tarjeta` y una línea en `--fs-small`. Textos y dibujos (distintos de los de «Todo conectado» para no repetir):

| # | Nombre | Línea | Ilustración (HTML/CSS) |
|---|---|---|---|
| 1 | Turnos online | Tus clientes eligen el horario solos. | Lista «Agenda de hoy» con tres filas de horario (`09:00`, `10:30`, `16:00`), la segunda con una pastilla lima «Confirmado». |
| 2 | Bots con inteligencia artificial | Contestan las consultas por vos. | Chat: «¿Te queda en talle 40?» (cliente, crema) / «¡Sí! ¿Te lo reservo?» (bot, pino con texto crema). |
| 3 | Sistemas de gestión | Clientes, pedidos y stock en un solo lugar. | Tabla con tres filas de producto genérico («Remera», «Buzo», «Campera») y una etiqueta de estado («Hay stock» salvia, «Quedan pocos» lima, «Sin stock» musgo). |
| 4 | Tableros con tus datos | Ves qué funciona y qué no. | Gráfico de líneas en SVG (una línea musgo ascendente con un punto lima al final) sobre una grilla tenue, título «Ventas del mes», sin números en los ejes. |
| 5 | Webs y tiendas online | Pensadas para que te escriban y te compren. | Mini página: barra con tres puntos, un bloque de título, dos «productos» (rectángulos salvia) y un botón lima «Comprar». |
| 6 | Portales y plataformas | Cada usuario entra con su cuenta. | Panel de usuario: avatar circular salvia (sin cara), «Mi cuenta» y tres pestañas («Inicio», «Mis datos», «Mensajes»), la primera activa. |

- Controles debajo de la tarjeta: 6 puntos (botones `aria-label="Ir a la diapositiva N"`, el actual con `aria-current="true"`) y un botón **«Pausar» / «Reanudar»** (`aria-pressed`). Tamaños táctiles de 44 px (el punto puede ser chico con área táctil grande).
- Comportamiento con JS: avanza solo cada 5 s, en bucle; se pausa con el mouse encima, con foco adentro y con el botón; los puntos llevan a la diapositiva. Transición suave por `scrollTo({ behavior: "smooth" })`. Con `prefers-reduced-motion`: arranca en pausa y sin animación (el botón dice «Reanudar»).
- Sin JS: se ven las diapositivas en la pista deslizable y los controles se ocultan (`html:not(.js)`).
- Tamaño: el carrusel ocupa la columna derecha (`--ancho-marcos`); el hero tiene que seguir entrando en la primera pantalla de escritorio (1470×790, 1366×640, 1024×768) y no desbordar a 360. En celular va debajo del texto, a ancho completo.

## 3. Casos: el mismo formato para Oral y Staffy
- Los dos casos usan **las mismas dos partes, con los mismos rótulos**: «Qué es» (oculto en «Ver más») y «Qué armé» (el panel visible). Largo parecido (tres renglones en escritorio).
- `web/src/content/casos/oral.md`, `partes`:
  - «Qué es» — «Un consultorio odontológico que coordinaba los turnos por mensaje de texto y con una agenda en papel.»
  - «Qué armé» — «Una web donde los pacientes reservan solos, con confirmación y recordatorio por mail, y un panel para el consultorio.»
- `web/src/content/casos/staffy.md`, `partes`:
  - «Qué es» — «Un portal de empleo para profesionales IT que conecta personas con empresas de Latinoamérica y Estados Unidos.»
  - «Qué armé» — «El portal completo: lo que ven los candidatos, el panel de cada empresa, un filtro de candidatos con inteligencia artificial y avisos por mail.»
- El título (`resultado`), la pastilla, «Visitar el sitio ↗», las capturas y la tarjeta «El próximo» quedan como están.

## 4. Docs
- `docs/specs/02-contenido.md`: hero (bajada de vuelta en párrafo, sin etiquetas; carrusel con sus 6 diapositivas); casos con «Qué es» / «Qué armé» en ambos.
- `docs/specs/03-arquitectura.md`: fila en el registro (fecha; «carrusel en el hero en lugar del panel; casos con el mismo formato»; por qué: pedido de Juanma del 2026-11-17).
- OpenSpec: `landing/spec.md` y `selector-hero/spec.md` (hero con carrusel; requisito de movimiento pausable y reduced-motion), `casos/spec.md` (mismas partes en todos los casos). `tasks.md`: grupo 26. `openspec validate landing-una-pagina`.

## Verificación
- `cd web && npm run check && npm test && npm run build`.
- Playwright (entorno en `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`, Chrome del sistema) a 360, 390, 768, 1024, 1366×640, 1470×790 y 1920: sin scroll horizontal de la página (el del carrusel es interno), hero en la primera pantalla de escritorio, pie entero al ir a Contacto.
- Probar el carrusel: avanza solo; se pausa con hover, con foco y con el botón; los puntos funcionan; con `reducedMotion: "reduce"` no avanza; sin JS se puede deslizar. **Mirar** capturas de cada una de las 6 diapositivas a 1470 y 390, y de los casos a 1470.
- axe sin violaciones a 360, 768 y 1440 (con y sin movimiento reducido). Lighthouse móvil.
- `revisor-de-marca`; aplicar lo que no contradiga el plan.
- Al terminar, `http://localhost:4321` (dev) responde 200 sin `FailedToLoadModuleSSR` (reiniciar si hace falta).
- Commits y `git push origin feat/landing-una-pagina`. Informe final: archivos, decisiones, resultados, hashes y pendientes.
