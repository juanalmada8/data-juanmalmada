# Plan: mostrar el trabajo (para ejecutar con Sonnet)

> Fecha: 2026-11-15. Pedido de Juanma: «que la web sea algo que diga: mirá qué bueno es esto». Diagnóstico acordado: quien entra
> a la web viene a **confirmar** (lo recomendaron o lo vio en redes). Mira, en orden: ¿hizo algo parecido? → ¿quién es? → ¿otros
> quedaron conformes? → ¿cómo le hablo? Hoy falla lo primero: donde tendría que estar el trabajo hay `[[FALTA: captura]]`.
> Este plan pone el trabajo real a la vista, deja listo el lugar para testimonios y video, y **recorta** texto (no lo reescribe).
> Juanma dio el OK para sacar capturas de los dos sitios públicos.

## Reglas para quien ejecute (leer antes de tocar nada)

- Leer `AGENTS.md` y `CLAUDE.md`. Trabajar en la rama `feat/landing-una-pagina` (PR #9, en borrador). Commits en español, convencionales, chicos.
- **No escribir copy nuevo.** El problema de la web es que el texto «suena a IA». Solo se permite **borrar o acortar** texto que ya existe,
  y usar las frases exactas que figuran en este plan. Si algo necesita texto nuevo, dejar `[[FALTA: …]]` y anotarlo en `docs/pendientes-juanma.md`.
- **No inventar** testimonios, métricas, clientes ni funciones (regla firme 1 de `AGENTS.md`).
- **No cambiar** colores, tipografías, logo ni la estructura de secciones. No tocar el hero, la barra ni «¿Te suena?» salvo lo indicado.
- Capturas: solo páginas públicas, **sin datos de personas** (ni pacientes, ni candidatos, ni nombres de profesionales si aparecen: recortar o elegir otra pantalla).

## Tareas

### 1. Sacar las capturas reales (Playwright + Chrome del sistema)
Hay un entorno listo en `/private/tmp/claude-501/-Users-juanmartin-data-juanmalmada/bef219e2-b281-4f43-b62c-9e3f2701eac6/scratchpad/pw`
(`playwright-core`, Chrome en `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`).

| Archivo de salida (`web/src/assets/casos/`) | Página | Viewport | Notas |
|---|---|---|---|
| `oral-escritorio.png` | https://oral.com.ar | 1440×900, solo la primera pantalla | Portada «Reservá tu turno». |
| `oral-celu.png` | https://oral.com.ar/reservar | 390×844 | El paso de elegir horario. Si aparecen nombres de profesionales o pacientes, usar en cambio la portada a 390×844. |
| `staffy-escritorio.png` | https://jobs.wearestaffy.com | 1440×900, solo la primera pantalla | Portada con «Búsquedas abiertas». |
| `staffy-celu.png` | https://jobs.wearestaffy.com/vacantes | 390×844 | Listado de vacantes. |

- Esperar a que cargue (`waitUntil: "load"` + 3 s). Formato PNG; Astro las optimiza.
- Mirar cada captura antes de usarla (abrirla) y confirmar que no hay datos de personas.

### 2. Cargar las capturas en los casos
En `web/src/content/casos/oral.md` y `staffy.md`, completar `capturas` (el esquema ya existe en `web/src/content.config.ts`):
```yaml
capturas:
  - src: "../../assets/casos/oral-escritorio.png"
    alt: "Portada de oral.com.ar con el botón para reservar un turno"
    marco: "ventana"
  - src: "../../assets/casos/oral-celu.png"
    alt: "Reserva de turnos de oral.com.ar en el celular"
    marco: "celu"
```
(Staffy igual: `alt` «Portada del portal de empleo de Staffy con las búsquedas abiertas» y «Listado de vacantes de Staffy en el celular».)
Con eso desaparecen los `[[FALTA: captura]]` (los dibuja `web/src/components/Captura.astro` solo si `capturas` está vacío).

### 3. Que el trabajo sea lo primero que se ve en «Cosas que armé»
Archivo: `web/src/components/secciones/Casos.astro` (hoy: tres tarjetas en una fila; la captura es chica, `max-width: 9rem`).
- En cada tarjeta de caso, la **captura de escritorio va arriba y grande** (ancho completo de la tarjeta), con la de celu superpuesta abajo a la derecha si entra; debajo, el nombre con el link y las partes de texto.
- Mantener las tres tarjetas en una fila en escritorio y apiladas en celular. La sección puede pasar de una pantalla: ahora manda la imagen.
- Imágenes con `loading="lazy"`, `sizes` acorde al ancho real y `alt` del contenido (ya lo resuelve `Captura.astro`).
- Recortar el texto de cada caso a **una sola parte visible: la última («Hoy»)**; las partes «Antes» / «Qué es» / «Qué armé» pasan a un `<details>` con `<summary>Ver más</summary>`. No cambiar las palabras.

### 4. Dejar lugar para testimonio y video (sin contenido inventado)
- En `web/src/content.config.ts`, sumar al esquema de `casos` dos campos **opcionales**:
  `testimonio: { texto: string, autor: string, rol: string }` y `video: { src: string (ruta en public/), poster: image() }`.
- En `Casos.astro`, mostrarlos **solo si existen** (testimonio como cita con `<blockquote>` + `<cite>`; video con `<video controls preload="none" poster>` y `muted` no automático). Hoy no se muestran porque no hay datos.
- Sumar a `docs/pendientes-juanma.md`, sección Contenido:
  - «**Dos frases de clientes** (una de Oral y una de Staffy), con nombre, rol y permiso para publicarlas. Van en `testimonio` de cada caso.»
  - «**Un video de pantalla de 30 s** de Oral: alguien saca un turno y aparece en el panel (sirve grabado con el celular). Va en `video`.»

### 5. Recortar texto en el resto de la página (solo borrar)
- `web/src/components/secciones/ComoTrabajo.astro`: borrar el párrafo `.intro` («Trabajo de a pasos y sin apuro…»).
- `web/src/components/secciones/Contacto.astro`: en el párrafo de `.yo`, dejar solo:
  «Soy Juanma, ingeniero de datos y desarrollador full stack: {sitio.experiencia} armando sistemas. Trabajo en forma remota y hablás siempre conmigo.»
  (es un recorte del texto actual; respetar los `{" "}` alrededor de las expresiones para no perder espacios).
- No tocar el hero, «¿Te suena?» ni las tarjetas de «¿Qué te está consumiendo el tiempo?».

### 6. Docs (mismo commit que corresponda)
- `docs/specs/02-contenido.md`: en la fila «Cosas que armé», decir que las capturas reales van arriba y grandes, el texto visible es «Hoy» y el resto va en «Ver más»; testimonio y video opcionales. En «Cómo trabajo», sin intro. En «Contacto», el texto «yo» recortado.
- `openspec/changes/landing-una-pagina/specs/casos/spec.md`: actualizar «Capturas reales…» (ya no hay placeholder: están cargadas) y sumar el requisito de testimonio/video opcionales.
- `openspec/changes/landing-una-pagina/tasks.md`: tildar 5.4 (capturas) y sumar un grupo 21 con estas tareas.
- `docs/specs/03-arquitectura.md`: una fila en el registro de decisiones (fecha, «mostrar el trabajo antes que el texto», por qué).
- Correr `openspec validate landing-una-pagina`.

## Verificación (antes de commitear)
- `cd web && npm run check && npm test && npm run build` sin errores (los tests de copy vigilan frases prohibidas y «24 h»/«Belgrano»/«consultorios»).
- Playwright contra `npm run preview -- --port 4322`: capturas de «Cosas que armé» a 1440×900 y 390×844, mirarlas; sin scroll horizontal; las imágenes cargan (no hay `[[FALTA` en el HTML: `curl -s localhost:4322 | grep -c FALTA` debe dar 0).
- axe-core (en `scratchpad/pw/node_modules/axe-core`) sin violaciones a 360, 768 y 1440 px.
- Al terminar: commit(s) y `git push origin feat/landing-una-pagina`. No mergear. Informar qué capturas se usaron y si alguna pantalla se descartó por datos de personas.
