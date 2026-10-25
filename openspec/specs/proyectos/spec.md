# proyectos Specification

## Purpose
Mostrar trabajos reales como casos con antes, qué se armó y qué cambió. Es la prueba de que Juanma hace lo que dice.

## Requirements

### Requirement: Colección de casos tipada
Los casos SHALL vivir en `web/src/content/proyectos/` como Markdown con la plantilla de 02-contenido (titulo, cliente, rubro, tamanio, anio, servicios, resultado, ahorro, portada, publicado).

#### Scenario: Caso no publicado
- **WHEN** un caso tiene `publicado: false`
- **THEN** no genera página ni aparece en la home

#### Scenario: Caso publicado
- **WHEN** un caso tiene `publicado: true`
- **THEN** se genera `/proyectos/<slug>` y aparece en la lista de la home

### Requirement: Solo datos confirmados
Los casos MUST NOT incluir métricas, ahorros, nombres de clientes ni capturas que Juanma no haya confirmado.

#### Scenario: Falta un dato del caso
- **WHEN** falta un dato o una captura
- **THEN** queda un marcador `[[FALTA: …]]` y el pendiente en docs/pendientes-juanma.md

### Requirement: Home sin casos publicados
Mientras no haya casos publicados, la home SHALL mostrar el caso del consultorio como «en preparación», sin afirmar que está terminado.

#### Scenario: Cero casos publicados
- **WHEN** la colección no tiene casos publicados
- **THEN** la sección dice «Lo que estoy armando» y muestra el caso en preparación
