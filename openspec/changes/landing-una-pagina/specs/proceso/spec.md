## ADDED Requirements

### Requirement: Cuatro pasos en orden
La sección «Cómo trabajo» SHALL mostrar los pasos Charla, Propuesta, Desarrollo y Soporte, numerados del 1 al 4, cada uno con una línea.

#### Scenario: Escritorio
- **WHEN** el ancho es de 768 px o más
- **THEN** los cuatro pasos están en una sola fila

#### Scenario: Celular
- **WHEN** el ancho es menor a 768 px
- **THEN** los pasos se reacomodan sin perder el orden ni generar scroll horizontal

### Requirement: Sin plazos ni precios
La sección MUST NOT prometer plazos de entrega, precios ni niveles de soporte.

#### Scenario: Paso «Soporte»
- **WHEN** se lee el paso Soporte
- **THEN** dice que Juanma acompaña después de la entrega, sin horarios ni tiempos de respuesta de soporte
