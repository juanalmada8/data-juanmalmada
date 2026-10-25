# Design

## Context

La web es estática (Astro) y casi sin JavaScript (la home pesa ~14 kB gzip con el JS inline). No hay ninguna isla
interactiva todavía. La visión prevé demos vivas como base de la plataforma. Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Una demo convincente que se entienda en un minuto.
- Que su costo de JavaScript no afecte a la home.

**Non-Goals:**
- Backend, persistencia o multiusuario.

## Decisions

- **Isla en JavaScript vanilla (o Astro con una isla mínima), sin framework.** *Alternativa:* React/Preact. Se descarta
  mientras la demo sea un flujo de 3 pasos; si crece, se evalúa y se registra la decisión (así lo pide 03-arquitectura).
- **Datos de muestra generados en el cliente** (días de la semana próxima, horarios fijos, algunos ocupados por una
  regla determinista). Sin llamadas a la API ni almacenamiento.
- **Ruta propia `/demo/turnos`**, cargada solo en esa página: el JS de la demo no entra en la home.
- **El «recordatorio» es una maqueta visual honesta:** se muestra como mensaje de ejemplo, no se envía nada. Se rotula así.
- **Profesional y horarios inventados como tales** («Consultorio de ejemplo»), nunca el consultorio real.

## Risks / Trade-offs

- [Que la demo se confunda con un caso real] → aviso fijo de «demo de ejemplo» y sin logos ni nombres de clientes.
- [Costo de mantenimiento] → mantenerla chica (3 pasos); no sumar funciones sin una propuesta nueva.
- [Accesibilidad de un selector de fecha/hora propio] → usar controles nativos (`radio`, `button`) en lugar de widgets a medida.

## Open Questions

- ¿Qué pantallas del turnero real conviene reflejar? Depende de Juanma y no cambia la estructura técnica.
