# Proposal

## Why

Hoy el portfolio no tiene ningún caso publicado: la home muestra el del consultorio como «en preparación» con un
`[[FALTA]]` a la vista. Sin casos reales la web no cumple su criterio de éxito («al menos un proyecto real contado con
antes/después») y no le da prueba de nada al visitante. La estructura de la colección existe, pero la página de un caso
es mínima y no tiene un formato pensado para que lo entienda alguien que no es técnico.

## What Changes

- La página de cada caso pasa a tener una estructura fija: **antes**, **qué armé**, **cómo quedó** (capturas), **qué
  ahorran hoy** y **lo técnico** (opcional, para equipos técnicos).
- La plantilla de caso suma el campo `stack` (tecnologías usadas) y un campo para indicar si el cliente aceptó aparecer
  con nombre.
- Las capturas son reales, con texto alternativo útil y tamaños declarados.
- Cada caso enlaza al siguiente y al contacto, y la home lista los casos publicados.
- Se publica el **primer caso real** (turnos online para un consultorio odontológico) apenas Juanma aporte los datos.
- Los casos de clínicas y de empresas de RRHH quedan planificados como segundo y tercer caso, sin nombres.

**Fuera de alcance:** testimonios de clientes, métricas o ahorros que el cliente no haya confirmado, logos de clientes,
filtros o buscador de casos (con menos de 4 casos no hacen falta), un blog.

## Capabilities

### New Capabilities
<!-- Ninguna: se amplía la capability existente. -->

### Modified Capabilities
- `proyectos`: la plantilla gana el stack y el permiso de nombre; la página del caso tiene estructura fija;
  se agregan requisitos de capturas y de navegación entre casos.

## Impact

- `web/src/content.config.ts` (esquema de la colección) y `web/src/content/proyectos/*.md`.
- `web/src/pages/proyectos/[slug].astro` y `web/src/components/secciones/Proyectos.astro`.
- `docs/specs/02-contenido.md` (plantilla de caso) y `docs/pendientes-juanma.md`.
- Sin dependencias nuevas.

## Lo que tiene que aportar Juanma

Por cada caso (no se asume nada):
- Rubro y tamaño del cliente, y si acepta aparecer con nombre.
- Cómo trabajaban antes y qué les costaba.
- Qué se armó y con qué tecnologías.
- Capturas reales (o permiso para anonimizarlas).
- Qué cambió, **solo lo que el cliente confirme** (tiempo, plata, errores).
- Año real del proyecto.
