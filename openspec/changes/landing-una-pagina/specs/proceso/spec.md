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

### Requirement: Lo que hago y lo que no hago
Debajo de los cuatro pasos, «Cómo trabajo» SHALL mostrar dos tarjetas: «Lo que hago» (charlar antes de presupuestar, explicar en criollo, avisar cuando algo no se puede o no conviene, dejar todo andando y acompañar después) y «Lo que no hago» (prometer lo que no se puede cumplir, vender lo que no se necesita, hablar en difícil para impresionar, dejar a medias o desaparecer después de entregar). Los textos SHALL ser compromisos de oficio en primera persona, sin plazos, precios ni cifras.

#### Scenario: Lectura de las tarjetas
- **WHEN** se llega al final de «Cómo trabajo»
- **THEN** se ven las dos tarjetas lado a lado en escritorio y apiladas en el celular, cada ítem con su signo («+» o «×»; el «+» en salvia, nunca lima) y sin depender del color para distinguirse

