# Proposal

## Why

«Contar» que se arman sistemas de turnos convence menos que dejar que el visitante use uno. Una demo que se pueda tocar
es la prueba más directa de «esto lo hice yo» y baja la barrera para un dueño de consultorio que no sabe qué pedir. Es,
además, la primera pieza de la plataforma propia (apps y demos vivas) que la visión del proyecto prevé.

## What Changes

- Una página `/demo/turnos` con un turnero de ejemplo: el visitante elige día y horario, completa nombre y confirma, y
  ve el turno reservado y el recordatorio que le llegaría.
- Todo el contenido de la demo es **ficticio y está marcado como ejemplo**: profesional inventado como tal, sin
  datos reales.
- La demo funciona en el navegador con datos de muestra; no guarda nada en el servidor ni pide datos reales.
- Un acceso desde la sección de servicios («Turnos y sistemas de gestión») y desde la home.
- Cada pantalla de la demo explica en criollo qué está pasando y qué le ahorra al consultorio.

**Fuera de alcance:** una versión que guarde turnos reales, panel de administración, pagos, integración con Google
Calendar o WhatsApp, usuarios y login (la visión dice «sin login en v1»), otras demos (tablero, nube).

## Capabilities

### New Capabilities
- `demo-turnos`: demo interactiva de un sistema de turnos, ficticia, accesible y sin datos reales.

### Modified Capabilities
<!-- Ninguna: el acceso desde la home es un enlace, sin cambio de requisitos de home. -->

## Impact

- `web/src/pages/demo/turnos.astro` y componentes nuevos; JavaScript de la isla de la demo.
- Presupuesto de JS: la demo tiene el suyo (la home mantiene < 15 kB gzip).
- Sin cambios en `api/`. Sin dependencias nuevas previstas (se evalúa en el diseño).

## Lo que tiene que aportar Juanma

- Qué le parece más valioso mostrar del turnero real (qué flujo, qué pantallas) para que la demo se parezca a lo que ya
  hizo, sin copiar nada del cliente.
- Confirmar que no hay problema en mostrar una demo basada en esa experiencia.
