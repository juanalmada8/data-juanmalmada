# AGENTS.md

Instrucciones para cualquier agente de código (Claude Code, Codex, Cursor, etc.) que trabaje en este repo.

**Las specs son un punto de partida, no un contrato.** Juanma itera: si en el chat pide algo distinto a lo que dicen
los docs, gana el chat, y vos actualizás el doc correspondiente para que no quede desfasado.
Si vos ves una mejor opción que la que dice una spec, proponela en una línea con el trade-off; no la apliques sin el ok.

## Qué es esto

La web personal de **Juan Martín Almada Ortiz (Juanma)**: portfolio + vidriera de servicios, y base de una
plataforma propia. Vende un combo, no un título: webs y apps a medida, turnos y sistemas de gestión,
dashboards y datos, nube e infraestructura (y lo que haga falta). Lema: **«Un solo proveedor, todo el sistema.»**

El mensaje de fondo: **lo que el cliente invierte hoy le ahorra tiempo y plata mañana.**
El público va de un consultorio o un comercio hasta empresas grandes y organismos públicos; todos tienen que
entender en 10 segundos qué hace Juanma, ver un proyecto real y escribirle. Y que se note hecho a mano,
por alguien detallista. **No tiene que parecer hecho por IA.**

## Leé antes de tocar nada

| Archivo | Cuándo |
|---|---|
| `docs/specs/00-vision.md` | Siempre. Público, objetivo, qué es éxito. |
| `docs/specs/01-marca.md` | Cualquier cambio visual. Tokens, tipografía, logo, contraste. |
| `docs/specs/02-contenido.md` | Cualquier texto. Voz, mapa del sitio, copy por sección. |
| `docs/specs/03-arquitectura.md` | Cualquier cambio de estructura, dependencias o deploy. |
| `docs/specs/04-calidad.md` | Antes de dar algo por terminado. Checklist anti-IA y definición de hecho. |
| `docs/ROADMAP.md` | Para saber qué tarea sigue. |
| `docs/pendientes-juanma.md` | Dudas abiertas y assets que faltan. **No las resuelvas inventando.** |

## Reglas firmes (estas sí, siempre)

1. **No inventes datos.** Ni testimonios, ni métricas o ahorros («+40% de eficiencia», «ahorrá $X»), ni logos de clientes, ni proyectos,
   ni años de experiencia distintos a los de la spec. Si falta un dato, dejá un marcador visible
   `[[FALTA: descripción]]` y anotalo en `docs/pendientes-juanma.md`.
2. **No recrees el logo ni la firma a mano** (ni en SVG dibujado por vos, ni en CSS, ni con una fuente parecida).
   Son trazos dibujados. Usá los SVG de `web/public/brand/`. Si no están, marcador + pendiente.
3. **Solo colores, fuentes y espaciados de los tokens** (`docs/specs/01-marca.md`). Nada de hex sueltos.
4. **Español rioplatense con voseo** en todo el contenido visible. `lang="es-AR"`.
5. **Dependencias nuevas, con una línea de justificación** en el commit (qué resuelve).
6. **Se migra, no se tira.** El contenido del sitio actual se lleva al nuevo (reescrito en la voz de marca, ver mapeo
   en `02-contenido.md`). No borres nada con datos reales (contacto, LinkedIn, mail, WhatsApp) sin moverlo antes.
7. **Secretos nunca en el repo.** Variables de entorno, `.env.example` sin valores, `.env` en `.gitignore`.

## Cómo trabajar

- **Una tarea del roadmap por vez.** Antes de escribir código, decí en 3–6 líneas qué vas a tocar y cómo vas a verificarlo.
- **Rama por tarea:** `feat/<tema>`, `fix/<tema>`, `chore/<tema>`, `docs/<tema>`. Nunca directo a `main`.
- **Commits convencionales en español**, chicos y descriptivos: `feat(home): sección de proyectos destacados`.
  Nada de «cambio response».
- **Verificá mirando**, no solo compilando: build sin errores + capturas en 360, 768 y 1440 px de ancho
  (y en modo `prefers-reduced-motion`). Revisá las capturas vos antes de decir que está listo.
- **Al terminar:** tildá la tarea en `docs/ROADMAP.md`; si tomaste una decisión no trivial, agregala al
  registro de decisiones de `03-arquitectura.md` (fecha, decisión, por qué).
- Si cambia el rumbo (stack, estructura, secciones, prioridades), **actualizá la spec en el mismo PR** y anotalo en el
  registro de decisiones. Los docs tienen que describir lo que hay, no lo que se pensó al principio.
- La marca (colores, tipografías, logo, voz) sí se respeta: no la «mejores» por tu cuenta.

## Comandos

> Orientativos: cuando cambien, actualizá esta sección. Válidos desde la Fase 1. Antes de eso el sitio es `index.html` + `styles.css` y se abre directo en el navegador.

```bash
# web/
cd web
npm install
npm run dev       # servidor local
npm run build     # build de producción a dist/
npm run check     # astro check (tipos + contenido)

# api/
cd api
uv sync
uv run fastapi dev app/main.py   # servidor local con recarga
uv run pytest
uv run ruff check . && uv run ruff format --check .
```

## Estructura (inicial)

Monorepo: `web/` (Astro), `api/` (Python/FastAPI), `docs/`. Detalle en `docs/specs/03-arquitectura.md`.
