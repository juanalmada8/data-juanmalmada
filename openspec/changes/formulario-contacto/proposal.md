# Proposal

## Why

Hoy el contacto es solo WhatsApp, mail y LinkedIn. Para un visitante que no quiere abrir WhatsApp (o que entra desde la
compu de la oficina) no hay un camino más. Además la API quedó con un único endpoint de salud: el formulario es el primer
uso real del backend y valida todo el recorrido (web → API → mail) antes de sumar demos o apps.

## What Changes

- Un formulario corto en la sección de contacto: nombre, cómo contactarte, qué necesitás (lista de los 4 servicios +
  «otra cosa») y mensaje.
- Un endpoint `POST /contacto` en la API que valida, frena el spam y manda el mensaje por mail a Juanma.
- El formulario funciona **sin JavaScript** (envío normal y página «gracias») y mejora con JavaScript (envío sin recargar,
  estados en la voz de marca).
- Protección contra spam: campo trampa (honeypot), límite de envíos por IP y verificación sin fricción.
- Se mantienen WhatsApp, mail y LinkedIn al lado del formulario.

**Fuera de alcance:** guardar los mensajes en una base de datos, panel para leerlos, respuestas automáticas al visitante,
chat en vivo, adjuntar archivos. El correo propio `hola@juanmalmada.com` es otra tarea (1.7 del roadmap).

## Capabilities

### New Capabilities
<!-- Ninguna: se amplían contacto y api. -->

### Modified Capabilities
- `contacto`: se suma el formulario como canal, con su comportamiento con y sin JavaScript.
- `api`: se suma `POST /contacto` con validación, límite de uso y envío de mail.

## Impact

- `web/`: nuevo componente de formulario, página `/gracias`, ajustes en `Contacto.astro`.
- `api/`: router `contacto`, servicio de mail, servicio antispam, tests, nuevas variables de entorno.
- Dependencias nuevas (a justificar en el commit): cliente HTTP para Resend (ya incluido en el stack de la API), y la
  verificación antispam elegida.
- `docs/specs/03-arquitectura.md` (formulario), `api/.env.example`, `docs/pendientes-juanma.md`.

## Lo que tiene que aportar Juanma

- Cuenta de **Resend** y verificación del dominio `juanmalmada.com` (registros en Cloudflare).
- Cuenta de **Google Cloud** con facturación activada para Cloud Run (tier gratis, pide tarjeta).
- Casilla destino de los mensajes (hoy `juanalmada1395@gmail.com`; va por variable de entorno, no en el repo).
- Decidir el antispam (propuesta: Cloudflare Turnstile, gratis).
