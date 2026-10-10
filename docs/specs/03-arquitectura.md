# 03 — Arquitectura

> **Borrador inicial.** Es la idea de arranque para no empezar de cero, no una decisión cerrada.
> Se ajusta a medida que se itera; cuando cambie algo, se actualiza este archivo y se anota en el registro de abajo.

El sitio crece de landing a **plataforma propia**: front de contenido + backend en Python para el contacto
y para las apps/demos que vengan. Se arma como **monorepo** con dos piezas desacopladas.

```
navegador ──► web/ (Astro, estático)  ──fetch──►  api/ (Python, FastAPI)  ──► mail / base / servicios
```

## Stack (propuesta de arranque)

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
| Mail | Proveedor transaccional por API (Resend, Postmark, SES… a definir) | No SMTP de Gmail. |
| Contenedor | `Dockerfile` chico (python-slim, usuario no root) | Portable entre hosts. |

### Hosting
**A definir** (ver pendientes). Opciones razonables:
- `web/`: Cloudflare Pages, Netlify, Vercel o GitHub Pages.
- `api/`: Google Cloud Run, Fly.io, Render o Railway (contenedor, escala a cero).
- Mismo dominio: `juanma.xxx` para la web y `api.juanma.xxx` para la API, CORS limitado a ese origen.

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
    components/  Header Footer Logo Firma Etiqueta Chip Boton Sticker PatronM Pipeline TarjetaProyecto FormContacto
      secciones/ Hero QueHago ...
    content/     config.ts  proyectos/
    pages/       index.astro  proyectos/[slug].astro  gracias.astro  404.astro  apps/
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
| 2026-10-10 | Sin foto de Juanma en el sitio. Láminas del manual y plantillas de IG a `docs/marca/`, fuera de `web/public/`. | Decisión de Juanma; lo de `public/` se publica y eso era solo referencia. |
| 2026-10-10 | El sitio viejo sigue en la raíz hasta el corte a producción (2.10); recién ahí va a `legacy/`. | Moverlo en la 1.1 rompía la web publicada. |
| 2026-10-10 | Monorepo `web/` (Astro) + `api/` (Python/FastAPI). Pendiente de confirmar hosting. | Vienen formulario de contacto, apps web y Python. |
| 2026-10-10 | Se migra casi todo el contenido del sitio actual, reescrito en la voz nueva. | Pedido de Juanma. |
