# Plan: ajustes que salen de la investigación (para ejecutar con Sonnet)

> Fecha: 2026-11-15. Base: `docs/investigacion-webs-que-venden.md`. A Juanma le gustó la versión actual (commit `4d04178`): **se toca
> lo mínimo**. Tres cambios, nada más. Si algo no le gusta, se revierte el commit.

## Reglas para quien ejecute
- Leer `AGENTS.md`, `CLAUDE.md` y la investigación. Rama `feat/landing-una-pagina` (PR #9). Commits convencionales en español.
- **Usar los textos exactos de este plan.** No reescribir nada más de la web. No inventar datos. Solo tokens de `tokens.css`.
- No tocar: titular, bajada y botón principal del hero, tarjetas de «Qué resuelvo», «Cómo trabajo», «Preguntas», botón flotante, pie.

## 1. Segundo botón en el hero (patrón de Tiendanube y Basecamp)
Archivo: `web/src/components/secciones/Hero.astro`.
- Al lado de «Charlemos» (mismo renglón; en celular puede bajar), un botón secundario **«Ver lo que armé»** que lleva a `#casos`.
  Estilo: la variante `.boton.sec` de `base.css` (borde crema sobre pino, sin relleno). Mantener `white-space: nowrap`.
- El hero tiene que seguir entrando en la primera pantalla (1470×790, 1366×640, 1024×768) y no desbordar en 360.

## 2. Casos titulados por el resultado (patrón de thoughtbot)
Archivos: `web/src/content.config.ts`, `web/src/content/casos/{oral,staffy}.md`, `web/src/components/secciones/Casos.astro`.
- Sumar al esquema un campo obligatorio `resultado: z.string().min(1)`.
- Textos (exactos):
  - Oral: `resultado: "Los pacientes reservan solos."`
  - Staffy: `resultado: "Candidatos filtrados con IA."`
- En cada tarjeta, el orden pasa a ser: captura → **nombre del cliente chico** (etiqueta: `--fs-small`, peso 800, como un rótulo, con el link «Ver …↗» en el mismo renglón) → **`resultado` como título** (`h3`, serif, `--fs-tarjeta`) → «Hoy» y «Ver más» como están.
  El `h3` deja de ser el nombre del cliente; el nombre va en un `<p>` con `translate="no"`.
- La tarjeta «El próximo puede ser el tuyo» no cambia.

## 3. Una nota firmada de Juanma (patrón de Basecamp)
- Componente nuevo `web/src/components/secciones/Nota.astro`, ubicado en `index.astro` **entre «Qué resuelvo» y «Cómo trabajo»**.
- Sección `seccion-ancha tema-crema`, `id="nota"`, con `aria-labelledby` a un título visualmente oculto (`sr-only`): «Una nota de Juanma».
- Columna angosta centrada (`--ancho-lectura`), texto en Manrope `--fs-lead`, sin caja ni borde; al final la firma (`<Firma color="pino" ancho="var(--ancho-firma)" decorativa />`) y debajo «Juanma» en `--fs-small`.
- Texto exacto (respetar los párrafos; `{sitio.experiencia}` para «más de 7 años»):

  > Hola, soy Juanma.
  >
  > Me escriben con cosas como «quiero un sistema para los turnos», «quiero un bot que conteste los mensajes» o «tengo un montón de datos y no sé qué hacer con ellos».
  >
  > Mi respuesta casi siempre es la misma: se puede hacer. Hace {sitio.experiencia} que armo sistemas para empresas de distintos rubros, y también para negocios y proyectos que necesitan el suyo.
  >
  > Lo que más me importa es que lo que armemos se use y te simplifique el día. Al principio es una inversión; con el tiempo, te devuelve horas y tranquilidad.
  >
  > Si tenés algo en mente, escribime y lo charlamos.

- **Contacto (`Contacto.astro`):** borrar el bloque `.yo` (texto «Soy Juanma…» y la firma con su animación `firma-rev`): la firma vive ahora en la nota. Contacto queda con título, bajada, las dos tarjetas e Instagram. Reacomodar la grilla a una columna y volver a verificar que Contacto + pie entran en una pantalla de escritorio (el pie entero al ir a Contacto desde el menú: 1470×790, 1366×640, 1280×720, 1024×768).
- **Menú (`Header.astro`):** el capítulo «02 Qué resuelvo» cubre también la nota (`hasta: "nota"`), así el progreso no tiene hueco.
- El test de copy tiene que seguir pasando (la nota no dice «gratis», plazos ni ciudad).

## 4. Docs
- `docs/specs/02-contenido.md`: hero con dos botones; casos con `resultado` como título; sección «Una nota de Juanma» (texto completo) entre «Qué resuelvo» y «Cómo trabajo»; Contacto sin el texto «yo».
- `docs/specs/03-arquitectura.md`: fila en el registro (fecha; «segundo botón, casos por resultado y nota firmada»; por qué: investigación de webs que venden, ver `docs/investigacion-webs-que-venden.md`).
- OpenSpec: `casos/spec.md` (campo `resultado` y orden de la tarjeta), `contacto/spec.md` (sin presentación; la firma pasa a la nota), `landing/spec.md` (orden de secciones con la nota y segundo botón del hero). `tasks.md`: grupo 23. `openspec validate landing-una-pagina`.
- `docs/pendientes-juanma.md`: «La nota firmada la escribí con tus palabras del chat: revisala y cambiá lo que no suene a vos.» e «Integraciones que hacés de verdad (WhatsApp, Mercado Pago, Google Calendar…) para un bloque “funciona con lo que ya usás”.»

## Verificación
- `cd web && npm run check && npm test && npm run build`.
- Playwright (entorno en `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`) a 360, 390, 768, 1024, 1366×640, 1470×790, 1920: sin scroll horizontal; hero en la primera pantalla de escritorio; pie entero al ir a Contacto; mirar las capturas de hero, casos, nota y contacto.
- axe sin violaciones a 360, 768 y 1440. Correr `revisor-de-marca` (los textos del plan no se cambian; si objeta alguno, anotarlo en el informe).
- Commit(s) y `git push origin feat/landing-una-pagina`. Informe final con archivos, resultados, hashes y lo que no se pudo.
