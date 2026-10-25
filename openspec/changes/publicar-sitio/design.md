# Design

## Context

Pages está conectado al repo y publica la raíz de `main` (verificado: `juanmalmada.com/AGENTS.md` responde 200). El DNS está
en Cloudflare y el dominio en DonWeb. La web nueva es Astro estático y compila a `web/dist`. Ver proposal.md - Why y
`docs/specs/03-arquitectura.md`.

## Goals / Non-Goals

**Goals:**
- Un corte reversible en minutos.
- Que lo publicado sea exactamente lo que se revisó en la vista previa.

**Non-Goals:**
- Un pipeline de despliegue propio: Pages ya hace el build.

## Decisions

- **Cambiar la configuración de Pages, no mover archivos primero.** El orden: (1) probar el build en una vista previa;
  (2) cambiar directorio raíz a `web`, build `npm run build`, salida `dist`, Node 22; (3) verificar el dominio;
  (4) recién ahí mover el sitio viejo a `legacy/` en un PR. *Alternativa:* mover primero. Se descarta: rompe el sitio
  publicado, que es justo lo que se quiere evitar.
- **Variables de build iguales en vista previa y producción** para que lo revisado sea lo publicado.
- **Cabeceras en `web/public/_headers`** (formato de Pages). *Alternativa:* reglas en el panel. Se prefiere el archivo:
  queda versionado y revisable.
- **Condición de «sin `[[FALTA`»** como chequeo de build sobre `web/dist` (un `grep`), no solo como acuerdo.
- **Rollback desde el panel de Pages** (volver al despliegue anterior), sin reverts de código.

## Risks / Trade-offs

- [Cambiar la configuración afecta al instante a producción] → se hace con la vista previa ya probada y en un horario de
  poco tráfico; el rollback es de un clic.
- [Caché de Cloudflare muestra el sitio viejo un rato] → purgar la caché del dominio tras el corte y verificar con
  `curl` el `title` de la home.
- [El sitio nuevo sale con un caso «en preparación»] → condición bloqueante explícita en la spec.

## Migration Plan

1. Vista previa del PR con el build de `web/` verificada (capturas, `check`, build, sin `[[FALTA`).
2. Cambiar la configuración de Pages. 3. Purgar caché y verificar título, enlaces y 404 de `/docs/...`.
4. PR aparte: mover `index.html` y `styles.css` a `legacy/`. 5. Tiempo de gracia y borrado de `legacy/` en otro PR.
Rollback: volver al despliegue anterior desde el panel.

## Open Questions

- ¿Se publica con el caso en preparación si el caso real demora? Es una decisión de Juanma; no cambia el diseño técnico.
