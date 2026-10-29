# 03 — Arquitectura

> **Borrador inicial.** Es la idea de arranque para no empezar de cero, no una decisión cerrada.
> Se ajusta a medida que se itera; cuando cambie algo, se actualiza este archivo y se anota en el registro de abajo.

El sitio crece de landing a **plataforma propia**: front de contenido + backend en Python para el contacto
y para las apps/demos que vengan. Se arma como **monorepo** con dos piezas desacopladas.

```
navegador ──► web/ (Astro, estático)  ──fetch──►  api/ (Python, FastAPI)  ──► mail / base / servicios
```

## Stack

### `web/` — front
| Pieza | Elección | Por qué |
|---|---|---|
| Framework | **Astro**, salida estática | Cero JS por defecto, componentes, *content collections* para los casos en Markdown tipado. |
| Estilos | **CSS propio** con custom properties (`web/src/styles/tokens.css`) | La marca tiene tokens claros; un framework utilitario empuja a la estética genérica. |
| JS | Vanilla en islas puntuales (cursor, reveal, menú, formulario). Si una app web necesita más, se evalúa una isla con un framework liviano y se registra la decisión. | |
| Fuentes | Self-hosted woff2 | Performance y privacidad. |
| Imágenes | `astro:assets` → AVIF/WebP con `width`/`height` | CLS ≈ 0. |

**Presupuesto de JS:** < 15 kB gzip en la home. Las apps web tienen su propio presupuesto, definido en su spec.

### `api/` — backend
| Pieza | Elección | Por qué |
|---|---|---|
| Lenguaje | **Python 3.12+** | Es la casa de Juanma. |
| Framework | **FastAPI** + Pydantic | Validación tipada, OpenAPI gratis, async. |
| Paquetes | **uv** (`pyproject.toml` + `uv.lock`) | Rápido y reproducible. |
| Calidad | **ruff** (lint + format), **mypy** o **pyright**, **pytest** | |
| Config | Variables de entorno vía `pydantic-settings`; `.env.example` versionado, `.env` nunca | |
| Persistencia | Ninguna en v1. Si hace falta: **SQLite** primero, Postgres gestionado cuando duela. | No sumar infraestructura antes de necesitarla. |
| Mail | **Resend** por API, enviando desde `juanmalmada.com` | Plan gratis (3000 mails/mes, 100/día) sobra para un formulario. Dominio verificado con SPF/DKIM en Cloudflare. |
| Contenedor | `Dockerfile` chico (python-slim, usuario no root) | Portable entre hosts. |

### Hosting y dominio
- **Dominio:** `juanmalmada.com`, registrado en DonWeb, con DNS en **Cloudflare** (verificado: NS de Cloudflare, sin MX todavía).
- **`web/`: Cloudflare Pages.** Ya existe el proyecto `data-juanmalmada` conectado a este repo: hoy publica **la raíz de `main`** tal cual
  (por eso el sitio viejo es `index.html` + `styles.css`) y arma un preview por PR. Efecto colateral: hoy también se sirven
  `docs/`, `AGENTS.md`, etc. (nada secreto; el repo es público). El corte (2.10) es cambiar en Pages: directorio raíz `web`,
  build `npm run build`, salida `dist`.
- **`api/`: Google Cloud Run** en `api.juanmalmada.com`, contenedor que escala a cero. El tier gratis cubre de sobra el tráfico de un formulario.
  Trade-off: primer request en frío de ~1–3&nbsp;s, aceptable para un envío de formulario. Alternativa si molesta: `min-instances=1` (con costo).
- CORS de la API cerrado a `https://juanmalmada.com`.

### Correo con dominio
- **Recibir:** Cloudflare Email Routing (gratis) reenvía `hola@juanmalmada.com` a la casilla personal de Juanma.
- **Enviar como `hola@`:** Gmail «Enviar como» usando el SMTP de Resend. Costo cero, todo desde el Gmail de siempre.
  Alternativa paga si algún día hace falta casilla aparte: Google Workspace (~US$&nbsp;7/mes).
- La casilla destino del formulario va en una variable de entorno (`CONTACTO_DESTINO`), no en el repo (que es público).

## Formulario de contacto (primer endpoint)

`POST /contacto` — campos: `nombre`, `contacto` (mail o WhatsApp), `mensaje`, `que_necesitas` (opcional, de una lista).

- Validación en el server (Pydantic) **y** en el cliente (HTML nativo, sin librerías).
- Antispam: honeypot + **Cloudflare Turnstile** (o similar sin fricción); rate limit por IP.
- Envía un mail a Juanma con el contenido y responde 200/422/429 con mensajes en la voz de la marca.
- No guarda datos personales en v1 (solo el mail enviado). Si más adelante se guardan, se documenta y se pone un aviso de privacidad.
- El front funciona sin JS: el `<form>` hace POST normal y la API redirige a `/gracias`; con JS se mejora a fetch con estados.
- WhatsApp, mail y LinkedIn siguen como alternativas directas al lado del formulario.

## Apps y demos (después)

Para cada app nueva conviene una spec corta en `docs/specs/apps/<nombre>.md` (qué resuelve, para quién, datos,
endpoints). Puede ser de cinco líneas y crecer con la app. Viven como rutas del front (`web/src/pages/apps/<nombre>`)
y routers propios en la API (`api/app/routers/<nombre>.py`). Ninguna comparte estado con otra sin decisión registrada.

## Estructura (inicial)

```
web/
  astro.config.mjs  package.json
  public/  brand/ fonts/ img/ favicon.svg robots.txt
  src/
    styles/      tokens.css  base.css
    layouts/     Base.astro
    components/  Header Footer Logo Icono Firma Falta Captura Pipeline PatronM PatronDatos
      secciones/ Hero QueHago Casos ComoTrabajo Contacto
    content.config.ts  content/casos/   (un caso = un archivo)
    data/        sitio.ts (contacto y datos fijos)  temas.ts (chips del selector)
    lib/         whatsapp.ts  casos.ts  marca.ts
    pages/       index.astro  404.astro
  tests/         temas.test.mjs  copy.test.mjs   (node --test, sin dependencias)
api/
  pyproject.toml  uv.lock  Dockerfile  .env.example
  app/
    main.py          # FastAPI, CORS, health
    config.py        # settings
    routers/         contacto.py, ...
    services/        mail.py, antispam.py
  tests/
docs/
.github/workflows/   ci.yml (lint + tests + build de ambos)
```

Convenciones:
- Componentes en PascalCase; en castellano si el concepto es de la marca (`Firma`), en inglés si es UI genérica (`Header`).
- Python: módulos y funciones en snake_case; nombres de dominio en castellano (`enviar_contacto`), utilidades técnicas en inglés si es lo natural.
- Nada de valores mágicos en CSS: todo sale de `tokens.css`.
- **Secretos nunca en el repo.** Todo por variables de entorno; `.env.example` con nombres y sin valores.

## Migración desde lo actual

Se migra **casi todo** el contenido del sitio actual, reescrito en la voz y la marca nuevas (mapeo en `02-contenido.md`).

1. `index.html` + `styles.css` se quedan en la raíz, publicados, mientras se arma `web/`. Pasan a `legacy/` recién en el
   corte a producción (tarea 2.10), cuando el hosting ya sirve el sitio nuevo. Así la web nunca queda caída.
2. Se rescata: contenido de las secciones, links de contacto (mail, WhatsApp con texto precargado, LinkedIn),
   la lógica de reveal con `IntersectionObserver` (reescrita y respetando `prefers-reduced-motion`).
3. Se descarta: IBM Plex Sans, `page-glow`, `hero-noise`, el tono corporativo.

## Registro de decisiones

Una línea por decisión no trivial (más reciente arriba).

| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-10-29 | **Giro de diseño** (feedback: «las letras parecen muy AI, la nav es insulsa»): hero pino con `<jm▌>` grande; el selector cambia el tono del fondo (color-mix de pino y musgo, 0–40 %) y la bajada; índice numerado 01–04 con tramos de progreso por capítulo; ritmo pino · crema · salvia · crema · pino; tipografía del manual con más carácter (títulos apretados, números grandes en serif). Microinteracciones: flecha en CTA, firma que se revela, respuesta al presionar chips. | Juanma eligió estas opciones entre varias. Se mantienen las tipografías del manual (la alternativa de cambiarlas se descartó). Sin cursor propio: `04-calidad` lo prohíbe. |
| 2026-10-29 | Barra fija con navegación por secciones (sección actual marcada, nombre de la sección en el celular, línea de progreso); hero a pantalla completa en escritorio; tipografía ajustada a la lámina del manual. Un script de ~0,6 kB marca la sección y el progreso. | Feedback de Juanma: la línea pisaba el logo, el verde oscuro asomaba cortado y quería algo que acompañe el recorrido; respetar el manual y la tipografía. |
| 2026-10-27 | **Web de una sola página de 5 secciones** (hero con selector, qué hago, casos, cómo trabajo, contacto), cambio OpenSpec `landing-una-pagina`. Casos en la colección `casos` (un archivo por caso); se borran `proyectos/[slug]`, Todo conectado, Para quién y Sobre mí. | Pedido de Juanma: simple, interactiva, 2–3 clics hasta el contacto; los servicios y casos son ejemplos, no un límite. |
| 2026-10-27 | Todos los «Contame tu idea» llevan a `#contacto`; el tema elegido en el hero precarga el WhatsApp (`data-wa-tema`). 2 clics desde la barra, 3 desde el hero con un tema elegido. | Un solo comportamiento por botón; Instagram y mail quedan a la misma distancia que WhatsApp. |
| 2026-10-27 | `404.astro` propia. Cloudflare Pages sin `404.html` trata el sitio como SPA y serviría la home con 200 en rutas inexistentes. | La spec pide 404 real para rutas internas. |
| 2026-10-27 | Tests con `node:test` sin dependencias (`npm test`, en CI): temas/WhatsApp y copy (frases prohibidas, cifras, límites de tipo de proyecto). Datos y helpers sin imports para poder correrlos con type stripping de Node. | Verificar el comportamiento y la voz sin sumar un runner. |
| 2026-10-27 | Experiencia: «más de 7 años». | Decisión de Juanma. |
| 2026-10-24 | **Vuelven las tipografías del manual** (DM Serif Display, Manrope, JetBrains Mono); se sacan Martian Mono y Atkinson Hyperlegible Next. | Juanma pidió respetar el manual en la web de una sola página (cambio OpenSpec `landing-una-pagina`). |
| 2026-10-10 | Se descarta el editor de código: home editorial simple con el manual como guía de color (crema domina) y un guiño de terminal en el hero. Se mantienen Martian Mono + Atkinson. | Juanma: el editor era «complicado para el usuario» y «todo verde»; pidió hacerle caso al manual. |
| 2026-10-10 | **Rediseño: la home es un editor de código** (explorador, pestañas, terminal). Tipografías nuevas: Martian Mono + Atkinson Hyperlegible Next. Se mantienen colores, logo y firma. | Juanma: «todo muy AI, dale un giro 180°»; eligió la dirección «Terminal / IDE». |
| 2026-10-10 | Navegación por `#hash` con mejora progresiva (`components/ide/editor.ts`, ~2,4 KB gzip); sin JS se lee todo apilado. Trade-off: con JS los archivos cerrados están en `display: none`, así que Ctrl+F y el lector de pantalla solo ven el archivo abierto. | SEO, accesibilidad y que funcione sin JS. |
| 2026-10-10 | Corrección: el sitio lo sirve Cloudflare Pages desde la raíz de `main`, no DonWeb. | Verificado con el check de Pages en los PRs y `curl` a archivos del repo. |
| 2026-10-10 | Sin casos publicados, «Proyectos» muestra el caso del consultorio como «en preparación» con `[[FALTA]]`; la página `/proyectos/<slug>` solo se genera con `publicado: true`. | No se inventa un caso y la sección no queda vacía. |
| 2026-10-10 | Fuentes copiadas como woff2 a `web/public/fonts/` (subset latin) en vez de depender de paquetes `@fontsource`. | Cero dependencias en runtime, `preload` directo y control del subset. |
| 2026-10-10 | Los componentes de marca leen los SVG de `public/brand/` en build (`src/lib/marca.ts`); el `<jm▌>` va inline para animar el cursor. | Una sola fuente de verdad para el logo y nada dibujado a mano. |
| 2026-10-10 | `PatronM` arma la grilla de `m` en SVG en vez de repetir `patron-m.svg` como fondo. | El tile repetido dejaba costuras visibles. |
| 2026-10-10 | Tests de la API con `httpx2` (no `httpx`). | Starlette marca `httpx` como deprecado para `TestClient`. |
| 2026-10-10 | Stack confirmado. Web en Cloudflare Pages, API en Cloud Run, mail con Resend + Email Routing de Cloudflare. | Mejor calidad/precio: todo en planes gratis, y el DNS ya está en Cloudflare. Juanma delegó la elección. |
| 2026-10-10 | No se nombran empresas donde trabajó Juanma; todo a presupuesto; WhatsApp como canal principal. | Respuestas de Juanma a pendientes. |
| 2026-10-10 | Sin foto de Juanma en el sitio. Láminas del manual y plantillas de IG a `docs/marca/`, fuera de `web/public/`. | Decisión de Juanma; lo de `public/` se publica y eso era solo referencia. |
| 2026-10-10 | El sitio viejo sigue en la raíz hasta el corte a producción (2.10); recién ahí va a `legacy/`. | Moverlo en la 1.1 rompía la web publicada. |
| 2026-10-10 | Monorepo `web/` (Astro) + `api/` (Python/FastAPI). | Vienen formulario de contacto, apps web y Python. |
| 2026-10-10 | Se migra casi todo el contenido del sitio actual, reescrito en la voz nueva. | Pedido de Juanma. |
