# Proposal

## Why

La web nueva está armada pero no se ve: Cloudflare Pages sigue publicando la **raíz de `main`**, o sea el `index.html`
viejo, y con él se exponen hoy `docs/`, `AGENTS.md`, `api/` y `web/` en `juanmalmada.com/...`. No hay nada secreto (el repo
es público), pero queda desprolijo y confunde. Hay que cortar a la web nueva sin dejar el sitio caído en ningún momento.

## What Changes

- Pages pasa a publicar el build de `web/` (`web/dist`) en lugar de la raíz del repo.
- El sitio viejo (`index.html`, `styles.css`) se mueve a `legacy/` recién cuando la web nueva ya responde en el dominio.
- Cada pull request genera una URL de vista previa de la web nueva.
- Se verifican las cabeceras de seguridad, HTTPS y la redirección de `www` al dominio principal.
- Se acuerdan las condiciones para publicar: sin marcadores `[[FALTA]]` a la vista y revisión de marca sin pendientes.

**Fuera de alcance:** cambiar de proveedor de hosting o de registrador, el correo con dominio, la API en producción (la
cubre `formulario-contacto`), analítica.

## Capabilities

### New Capabilities
- `publicacion`: qué se publica en el dominio, con qué cabeceras y bajo qué condiciones.

### Modified Capabilities
<!-- Ninguna. -->

## Impact

- Configuración del proyecto `data-juanmalmada` en el panel de Cloudflare Pages (directorio raíz, comando de build, salida,
  versión de Node). No es código del repo.
- `legacy/` (movimiento de dos archivos), `web/public/_headers`, `docs/ROADMAP.md` (2.10) y el registro de decisiones.
- Sin dependencias nuevas.

## Lo que tiene que aportar Juanma

- Acceso al panel de Cloudflare para cambiar la configuración de Pages (o hacerlo juntos).
- Decisión final de publicar: que el caso del consultorio esté listo, o aceptar publicar con «en preparación» (que hoy
  deja un `[[FALTA]]` visible y por eso la propuesta lo bloquea).
