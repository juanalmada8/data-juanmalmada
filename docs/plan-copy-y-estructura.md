# Plan: textos y estructura según cómo venden hoy las webs de servicios (para ejecutar con Sonnet)

> Fecha: 2026-11-15. Plan armado por Opus; lo ejecuta Sonnet. Base: lo que Juanma dijo en el chat y una investigación de cómo
> se arman hoy las páginas que venden (fuentes al final).
>
> **Lo que Juanma quiere transmitir:** trae soluciones modernas e inteligentes, a medida, para cualquier negocio de Argentina (comercio,
> pyme, empresa, persona). Le piden: «un sistema para esto», «un bot con IA», «entender mis datos y sacarles provecho». Lo que gana el
> cliente: **ahorra tiempo, trabaja más cómodo y tiene su negocio bajo control**. La inversión se recupera, pero **la plata no se menciona
> en la web** (ni «gratis», ni precios, ni plazos de respuesta). El hero ya está resuelto y aprobado: **no tocarlo** salvo lo indicado en 2.

## Lo que dice la industria (resumen para entender las decisiones)
1. **Orden que vende:** promesa → prueba → qué ofrecés → cómo trabajás → dudas resueltas → llamado final. La prueba (casos) va **temprano**.
2. **Una sola acción**, repetida: escribir por WhatsApp. En Argentina, WhatsApp convierte más que un formulario; botón visible siempre en el celular.
3. **Prueba real, no adjetivos:** capturas, casos con antes/después, testimonios con nombre y rubro (cuando los haya).
4. **Responder objeciones** antes de que pregunten (cuánto sale, si hace falta saber de tecnología, qué pasa después): sección de preguntas.
5. **Copy:** con las palabras del cliente, concreto, sin frases de agencia («soluciones innovadoras», «excelencia») ni remates ingeniosos.
6. **Señales de confianza** cerca del inicio: persona real, años de oficio, cómo contactarlo.

## Reglas para quien ejecute
- Leer `AGENTS.md` y `CLAUDE.md`. Rama `feat/landing-una-pagina` (PR #9, borrador). Commits convencionales en español, chicos.
- **Usar exactamente los textos de este plan.** No reescribir ni «mejorar» frases. Si falta un texto, `[[FALTA: …]]` + `docs/pendientes-juanma.md`.
- No inventar datos (testimonios, cifras, clientes, provincias). No cambiar colores, tipografías ni logo. Solo tokens de `tokens.css`.
- Mantener lo que ya funciona: barra, hero (salvo 2), casos con capturas, footer y el arreglo de «pie entero al ir a Contacto».

## Nueva estructura de la página (orden en `web/src/pages/index.astro`)
1. Hero (`Hero.astro`)
2. **Casos** (`Casos.astro`) — sube al segundo lugar: la prueba va temprano.
3. **Qué resuelvo** (`QueHago.astro`) — absorbe «¿Te suena?»: se borra `TeSuena.astro` y su import.
4. Cómo trabajo (`ComoTrabajo.astro`)
5. **Preguntas** (nuevo `Preguntas.astro`)
6. Contacto (`Contacto.astro`) + pie.

Menú de la barra (`Header.astro`, `capitulos`): `01 Casos` (#casos) · `02 Qué resuelvo` (#que-hago) · `03 Cómo trabajo` (#como-trabajo) · `04 Contacto` (#contacto).
Quitar el capítulo que abarcaba `te-suena` (el campo `hasta` y su lógica pueden quedar, pero sin uso; mejor borrarlos si no se usan).

## Tareas

### 1. Casos al segundo lugar
- Mover `<Casos />` justo después de `<Hero />` en `index.astro`. No cambiar su diseño (Juanma dijo que le gusta).
- Título y bajada quedan: «Cosas que armé.» / «Casos reales, de un negocio chico a una plataforma para empresas. Lo tuyo puede ser otra cosa.»

### 2. Hero: la firma sale y la prueba entra
- **No tocar** titular, bajada ni botón.
- Reemplazar los tres marcos de la derecha (`.marcos`: «Soy Juanma…» con firma, «Más de 7 años», «Trabajo en forma remota…» + `hola_mundo()`) por **un collage con dos capturas reales**: `web/src/assets/casos/oral-escritorio.png` en marco ventana y `staffy-celu.png` en marco celu superpuesto abajo a la izquierda (reusar `Captura.astro`, como en `Casos.astro`). Debajo del collage, sin caja: «Oral Odontología Familiar y Staffy, dos de los sistemas que armé.» con enlace a `#casos` en el texto «dos de los sistemas que armé».
- Debajo de «O escribime directo: …», una línea de confianza en texto chico (sin caja): **«Más de 7 años armando sistemas · Trabajo en forma remota en todo el país»** (usar `sitio.experiencia` para «más de 7 años»).
- La firma deja de aparecer en el hero (queda solo en Contacto, junto a la presentación). `hola_mundo()` sale del hero.
- El hero tiene que seguir entrando en la primera pantalla de escritorio (1470×790, 1366×640) y no desbordar a 1024 px.

### 3. «Qué resuelvo» (QueHago.astro + data/temas.ts)
- Título del `h2`: **«¿Te suena alguna de estas?»** (con `<em>alguna</em>`). Sin bajada.
- Mantener el diseño de las tarjetas (problema arriba, solución abajo en panel propio). Reemplazar `temas` por estas seis, en este orden y con estos fondos:

| id | fondo | titulo (problema) | nombre | solucion | mensaje WhatsApp |
|---|---|---|---|---|---|
| turnos | pino | Te escriben y te llaman todo el día | Turnos y pedidos online | Tus clientes reservan o piden solos, a cualquier hora, y a vos te llega ordenado. | Hola Juanma, me escriben y me llaman todo el día para turnos o pedidos y quiero ordenarlo. |
| bot | salvia | Respondés las mismas preguntas una y otra vez | Bots con inteligencia artificial | Contestan las consultas de tus clientes por vos, aunque estés ocupado. | Hola Juanma, quiero un bot que conteste las consultas de mis clientes. |
| gestion | papel | Todo vive en planillas, cuadernos y chats | Sistemas de gestión | Clientes, pedidos, stock y equipo en un solo lugar, siempre al día. | Hola Juanma, tengo todo en planillas y chats y quiero un sistema. |
| datos | musgo | Tenés datos y no sabés qué hacer con ellos | Tableros con tus datos | Ves qué funciona, qué no y dónde conviene poner el foco. | Hola Juanma, quiero entender mis datos y sacarles provecho. |
| web | pino | Tu web no te trae clientes | Webs, apps y plataformas | Pensadas para que te encuentren y te escriban, desde el celular o la compu. | Hola Juanma, quiero una web o una plataforma que funcione. |
| otra | salvia | Lo tuyo no está en la lista | Contame la idea | Si se puede armar con tecnología, lo vemos juntos. | Hola Juanma, tengo una idea y quiero ver si se puede armar. |

- Ajustar `web/tests/temas.test.mjs` (ids nuevos en ese orden; la última tarjeta es `otra`; los pares de contraste siguen valiendo).

### 4. Cómo trabajo (ComoTrabajo.astro) — textos en concordancia
- Título: **«Cómo trabajo.»** (sin itálica; reemplaza «De la charla al soporte, sin vueltas.»).
- Pasos (mismo diseño):
  1. **Charla** — «Me contás qué necesitás y cómo trabajás hoy. No hace falta que sepas de tecnología.»
  2. **Propuesta** — «Te paso por escrito qué armaría, en qué orden y cuánto sale.»
  3. **Desarrollo** — «Lo armo por etapas. Lo vas viendo funcionar antes del final.»
  4. **Soporte** — «Te lo dejo andando y te enseño a usarlo. Si querés, sigo con soporte y mejoras todos los meses.»
- «Lo que hago» / «Lo que no hago»: se mantienen igual (Juanma los pidió).

### 5. Preguntas (nuevo `web/src/components/secciones/Preguntas.astro`)
- Sección `seccion-ancha tema-crema`, `id="preguntas"`, título **«Preguntas que me hacen siempre.»**
- Acordeón accesible con `<details>`/`<summary>` (uno abierto a la vez no hace falta; todos cerrados al inicio), en una columna de lectura (`--ancho-lectura`), sin cajas con borde: separar con aire y una tipografía de pregunta en serif `--fs-h3`. Funciona sin JavaScript.
- Preguntas y respuestas (textos exactos):
  1. **«¿Cuánto sale?»** — «Depende de lo que haga falta. Después de la primera charla te paso una propuesta por escrito, por etapas, para que decidas tranquilo.»
  2. **«¿Tengo que saber de tecnología?»** — «No. Vos me contás cómo trabajás y yo me ocupo de la parte técnica. Después te enseño a usar lo que armamos.»
  3. **«Ya uso planillas o un sistema. ¿Hay que tirar todo?»** — «No. Partimos de lo que ya tenés: si sirve, lo conectamos; si no, pasamos los datos al sistema nuevo.»
  4. **«¿Qué pasa cuando está terminado?»** — «Queda andando y te enseño a usarlo. Si querés, seguimos con soporte y mejoras todos los meses.»
  5. **«¿Trabajás con gente de cualquier parte del país?»** — «Sí. Trabajo en forma remota, así que no importa dónde estés.»
- Con movimiento reducido, sin animación al abrir. Foco visible en el `summary`. Marcador propio (+ / −) con `::marker` o pseudo-elemento, en pino.

### 6. Contacto (Contacto.astro)
- Título: **«Contame qué necesitás.»** (con `<em>necesitás</em>`). Bajada: **«Escribime y lo charlamos. Con un mensaje alcanza.»**
- Tarjetas: «Contame por WhatsApp» / «Es lo más rápido.» (queda) · «Prefiero mail» / **«Si preferís escribir con calma.»**
- Borrar la línea que rota («Armemos el sistema de tu …») y su CSS/animación.
- Texto «yo» (queda la firma al lado): **«Soy Juanma, ingeniero de datos y desarrollador full stack. Hace {sitio.experiencia} que armo sistemas para empresas de distintos rubros, y también para negocios y proyectos que necesitan el suyo. Trabajo en forma remota y hablás siempre conmigo.»** (respetar `{" "}` alrededor de expresiones).
- Mantener el arreglo del pie (Contacto + pie = una pantalla en escritorio) y re-verificarlo.

### 7. Botón flotante de WhatsApp (solo celular y tablet, < 64rem)
- Componente nuevo `web/src/components/WhatsAppFlotante.astro`, incluido en `Base.astro` antes del `<Footer />`.
- Pastilla fija abajo a la derecha (respetar `env(safe-area-inset-bottom)`), fondo lima, texto pino, «WhatsApp» con flecha, `min-height: var(--tap-min)`, enlace a `contacto.whatsapp` con `target="_blank" rel="noopener noreferrer"` y aviso `sr-only` de nueva pestaña.
- Aparece recién después de pasar el hero y se oculta cuando la sección Contacto está a la vista (IntersectionObserver; sin JS queda siempre visible). Con movimiento reducido, sin transición. No debe tapar el botón de Contacto ni el pie.

### 8. Meta y docs
- `web/src/layouts/Base.astro`: descripción por defecto **«Sistemas a medida, bots con inteligencia artificial, webs y tableros con tus datos. Para que tu negocio sea más simple y esté bajo control.»** (verificar ≤ 155 caracteres con el test).
- `docs/specs/02-contenido.md`: reescribir la tabla de la home con este orden y textos; registrar que «¿Te suena?» se fusionó en «Qué resuelvo».
- `docs/specs/03-arquitectura.md`: fila nueva en el registro (fecha, decisión: «orden promesa → prueba → oferta → proceso → dudas → acción; casos arriba; preguntas; botón flotante de WhatsApp», por qué: investigación de la industria y pedido de Juanma).
- Specs de OpenSpec (`openspec/changes/landing-una-pagina/specs/`): `landing` (orden y menú; borrar el requisito de «¿Te suena?» o marcarlo reemplazado), `servicios` (tarjetas nuevas), `proceso` (textos), `contacto` (textos, sin línea que rota, botón flotante), y un spec nuevo `preguntas/spec.md` con su requisito y escenarios. `tasks.md`: grupo 22. Correr `openspec validate landing-una-pagina`.
- `docs/pendientes-juanma.md`: sumar «¿Facturás (monotributo o responsable inscripto)? Mostrarlo da confianza en Argentina» y «Testimonios: con nombre, rubro y ciudad del cliente funcionan mejor».

## Verificación (antes de commitear)
- `cd web && npm run check && npm test && npm run build` sin errores.
- Preview (`npm run preview -- --port 4322`, o el que ya corre tras el build). Playwright (entorno en
  `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`) a 360, 390, 768, 1024, 1366×640, 1470×790 y 1920:
  sin scroll horizontal; el hero entra en la primera pantalla de escritorio; h1 en 2 renglones desde 768; el menú lleva a cada sección y la deja bajo la barra;
  al ir a Contacto el pie queda entero (1470×790, 1366×640, 1280×720, 1024×768); el botón flotante aparece/desaparece como se pide y no tapa nada.
- axe-core sin violaciones a 360, 768 y 1440 (con y sin movimiento reducido). Lighthouse móvil ≥ 99 si está disponible (`npx -y lighthouse@12`).
- Correr el subagente `revisor-de-marca` y aplicar lo que marque que no contradiga este plan (los textos de este plan no se cambian: si el revisor objeta uno, anotarlo en el informe final).
- Commits y `git push origin feat/landing-una-pagina`. No mergear. Informe final: qué se cambió, capturas miradas, resultados de las pruebas, hashes y lo que no se pudo hacer.

## Fuentes de la investigación
- Anatomía de una landing que convierte (orden promesa, prueba, beneficios, objeciones, llamado): https://www.centricdxb.com/insights/anatomy-high-converting-landing-page
- Landing pages para servicios (prueba social, una sola acción): https://clicksgeek.com/landing-page-design-for-service-businesses/
- Casos que venden (problema → solución → resultado, capturas, escaneable): https://rankai.ai/blog/client-case-study-guide-examples
- Errores de copy genérico / que suena a IA: https://huemor.rocks/blog/ai-website-copywriting/ · https://deliberatedirections.com/write-better-website-copy/
- Landings en Argentina (WhatsApp, confianza, voseo, testimonios locales): https://www.developargentina.com/blog/landing-page-que-convierte-argentina-guia-2026
