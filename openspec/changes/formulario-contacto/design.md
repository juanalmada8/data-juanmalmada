# Design

## Context

La API tiene `GET /health`, CORS por variable de entorno y `pydantic-settings`. La web es estática (Astro) en
`juanmalmada.com`; la API iría en `api.juanmalmada.com`. Ver proposal.md - Why y `docs/specs/03-arquitectura.md`
(sección «Formulario de contacto»).

## Goals / Non-Goals

**Goals:**
- El camino web → API → mail funcionando de punta a punta en un entorno de preview.
- Cero datos personales guardados.

**Non-Goals:**
- Persistencia, bandeja de entrada propia, respuestas automáticas.

## Decisions

- **Resend por API** para el envío. *Alternativas:* SMTP de Gmail (frágil, límites y bloqueos), SES (más configuración).
  Resend tiene plan gratis (3000/mes) y verificación de dominio simple.
- **Cloudflare Turnstile** como antispam. *Alternativa:* reCAPTCHA (más fricción y rastreo). Turnstile es gratis, sin
  desafío visible la mayoría de las veces y el DNS ya está en Cloudflare.
- **Límite de envíos en memoria** (por instancia) en la v1. *Alternativa:* Redis o una base. Se descarta: en Cloud Run con
  una instancia alcanza para un formulario personal y no suma infraestructura (la spec pide no sumarla antes de necesitarla).
- **Mismo pedido, dos formatos:** JSON (con JavaScript) y formulario HTML (sin JavaScript). El router detecta el
  `Content-Type` y responde JSON o redirección.
- **Destino por variable de entorno** (`CONTACTO_DESTINO`): el repo es público y no debe tener la casilla.

## Risks / Trade-offs

- [Arranque en frío de Cloud Run (1–3 s) en el primer envío] → el botón muestra «Enviando…» y la API responde rápido;
  si molesta, se evalúa una instancia mínima (con costo).
- [Límite en memoria se reinicia con la instancia] → aceptable en v1; si hay abuso, se pasa a un almacén externo.
- [Entrega del mail depende de la reputación del dominio] → configurar SPF/DKIM y probar punta a punta con un mensaje real.

## Migration Plan

1. Verificar el dominio en Resend. 2. Deploy de la API en preview con variables de entorno. 3. Probar punta a punta.
4. Activar en producción junto con la publicación del sitio (ver cambio `publicar-sitio`). Rollback: ocultar el
formulario; los canales directos siguen funcionando.

## Open Questions

- ¿`hola@juanmalmada.com` como remitente desde el primer día o recién cuando exista el correo con dominio? No cambia el
  código: es una variable de entorno.
