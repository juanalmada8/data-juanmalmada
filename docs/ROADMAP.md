# Roadmap

Orden tentativo para arrancar. Se reordena, se recorta o se agregan tareas cuando Juanma quiera.
Una tarea por rama y por PR; tildá `[x]` al mergear.

## Fase 0 — Preparación (Juanma)

- [x] Responder las preguntas bloqueantes de `docs/pendientes-juanma.md` (stack, hosting/dominio, años, empresas, mail).
- [x] Exportar desde Figma los assets de marca a `web/public/brand/`.
- [x] Exportar los SVG que faltaban.

## Fase 1 — Base técnica

- [x] **1.1 Monorepo.** Crear `web/` (Astro estático) y `api/` (FastAPI + uv) vacíos y andando. `index.html` y `styles.css` **no se mueven**: siguen en la raíz, publicados como hoy.
      *Acepta:* `npm run build` en `web/` y `uv run pytest` en `api/` pasan; `GET /health` responde; `.env.example` y `.gitignore` listos.
- [x] **1.2 CI.** GitHub Actions: lint + tests de `api/`, `check` + build de `web/`, en cada PR.
- [x] **1.3 Tokens y base.** `tokens.css` y `base.css` según `01-marca.md`; fuentes self-hosted.
      *Acepta:* página `/_tokens` (solo dev) con paleta, escala tipográfica y espaciados, coincidiendo con el manual.
- [x] **1.4 Layout, header y footer.** `Base.astro` con meta, OG por defecto, favicon `</j>`; menú mobile accesible.
      *Acepta:* teclado y lector de pantalla OK; header compacto con `</j>` en < 480 px.
- [x] **1.5 Componentes de marca.** `Logo`, `Firma`, `Etiqueta`, `Chip`, `Boton`, `Sticker`, `PatronM`, `Pipeline`.
      *Acepta:* usan los SVG reales o marcadores `[[FALTA]]`; ninguno dibuja el logo a mano.
- [ ] **1.6 Deploy de preview:** `web/` en Cloudflare Pages, `api/` en Cloud Run.
- [ ] **1.7 Correo con dominio:** Email Routing `hola@juanmalmada.com` → Gmail, dominio verificado en Resend, «Enviar como» en Gmail.

## Fase 2 — Home (migrando el contenido actual)

Seguir el mapeo de `02-contenido.md`: todo lo del sitio viejo tiene que tener su lugar o una razón anotada para no estar.

- [x] **2.1 Hero.** *Acepta:* en 360 px se ve título, bajada y CTA sin scrollear; cursor titila y se detiene con reduced-motion.
- [x] **2.2 Qué hago.** *Acepta:* 4 servicios con problema → qué armo → qué te ahorra; reportería, integración y alertas del sitio viejo absorbidos en «Dashboards y análisis»; cierre «¿Lo tuyo no está en la lista?».
- [x] **2.3 Para quién.** *Acepta:* un ejemplo concreto por perfil (consultorios, comercios, empresas, gobierno); sin clientes inventados.
- [x] **2.4 Cómo se arma el sistema** (pipeline). *Acepta:* legible en 360 px (se reacomoda en vertical).
- [x] **2.5 Proyectos destacados.** *Acepta:* lee de la colección; con 1 solo caso se ve bien; `publicado: false` no sale.
- [x] **2.6 Cómo trabajo** (los 4 pasos del método viejo, en criollo, con la inversión y el ahorro explícitos).
- [x] **2.7 Hola, soy Juanma** (sobre mí; sin nombrar empresas). Sin foto: la presencia la dan la firma, el `</j>` y los stickers.
- [x] **2.8 Contacto con links** (WhatsApp, mail, LinkedIn) + footer. El formulario llega en la Fase 3.
- [x] **2.9 Chequeo de migración.** *Acepta:* tabla de mapeo de `02-contenido.md` cumplida punto por punto.
- [ ] **2.10 Corte a producción.** Apuntar el hosting al build de `web/` y, recién cuando el sitio nuevo responde en el dominio,
      mover `index.html`/`styles.css` a `legacy/`.
      **Bloqueada hasta la 4.2** (primer caso real) o hasta sacar el «en preparación» de Proyectos: no se publica con `[[FALTA]]` a la vista.
      *Acepta:* en ningún momento la web publicada queda caída; `legacy/` se borra en un PR aparte cuando Juanma lo confirme.

## Fase 3 — Contacto con backend

- [ ] **3.1 `POST /contacto`** en `api/`: validación, honeypot, rate limit, envío de mail por el proveedor elegido.
      *Acepta:* tests de caso feliz, 422 y 429; sin secretos en el repo.
- [ ] **3.2 Antispam** (Turnstile o el que se elija) en API y front.
- [ ] **3.3 `FormContacto`** en `web/`: funciona sin JS (redirige a `/gracias`) y con JS (fetch + estados en voz de marca).
- [ ] **3.4 Prueba punta a punta** en el entorno de preview: un mensaje real llega al mail de Juanma.

## Fase 4 — Proyectos

- [ ] **4.1 Colección y plantilla de caso** según `02-contenido.md`.
- [ ] **4.2 Primer caso real: turnos online consultorio**, con datos y capturas de Juanma.
- [ ] **4.3 OG image por caso.**

## Fase 5 — Pulido y lanzamiento

- [ ] **5.1 404** con `<jm▌>` y un toque de humor.
- [ ] **5.2 SEO:** sitemap, `robots.txt`, canonical, datos estructurados `Person` + `ProfessionalService`.
- [ ] **5.3 Auditoría a11y y performance** completa contra `04-calidad.md` (informe en el PR).
- [ ] **5.4 Dominio propio** para web y API, con HTTPS y CORS cerrado al dominio.
- [ ] **5.5 Revisión final de copy** por Juanma, en voz alta.

## Después

- Apps web y herramientas en Python (demos vivas de servicios: turnos, dashboards, etc.).
- Idea: una «calculadora de ahorro» donde el visitante carga cuántas horas por semana le lleva una tarea y ve cuánto le cuesta por año. Usa solo los números que pone el visitante.
- Sección de tips (pilar «tips útiles» del manual).
- Analítica sin cookies.
- Versión en inglés para el público secundario.
