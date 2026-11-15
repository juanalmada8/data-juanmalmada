## ADDED Requirements

### Requirement: Cuatro pasos en orden
La sección «Cómo trabajo» SHALL abrir con una introducción que explique el enfoque («Trabajo de a pasos y sin apuro: primero te escucho, después te propongo qué armar y recién ahí lo construimos. Lo que invertís hoy te ahorra tiempo y plata mañana.») y mostrar los pasos Charla, Propuesta, Desarrollo y Soporte como una línea de tiempo numerada del 1 al 4, cada uno con una o dos líneas. La Charla SHALL decir que no tiene costo y el Soporte SHALL ofrecer un plan mensual de soporte y mejoras (modelo de negocio elegido por Juanma el 2026-11-14), sin precio.

#### Scenario: Escritorio
- **WHEN** el ancho es de 768 px o más
- **THEN** los cuatro pasos están en una sola fila

#### Scenario: Celular
- **WHEN** el ancho es menor a 768 px
- **THEN** los pasos se reacomodan sin perder el orden ni generar scroll horizontal

### Requirement: Sin plazos ni precios
La sección MUST NOT prometer plazos de entrega, precios ni niveles de soporte (el plan mensual se menciona sin precio ni horarios).

#### Scenario: Paso «Soporte»
- **WHEN** se lee el paso Soporte
- **THEN** dice que Juanma acompaña después de la entrega, sin horarios ni tiempos de respuesta de soporte

### Requirement: Lo que hago y lo que no hago
Debajo de los cuatro pasos, «Cómo trabajo» SHALL mostrar dos columnas de texto, sin cajas: «Lo que hago» (charlar antes de presupuestar, explicar en criollo, avisar cuando algo no se puede o no conviene, dejar todo andando y acompañar después) y «Lo que no hago» (prometer lo que no se puede cumplir, vender lo que no se necesita, hablar en difícil para impresionar, dejar a medias o desaparecer después de entregar). Los textos SHALL ser compromisos de oficio en primera persona, sin plazos, precios ni cifras.

#### Scenario: Lectura de las tarjetas
- **WHEN** se llega al final de «Cómo trabajo»
- **THEN** se ven las dos columnas lado a lado en escritorio y apiladas en el celular, cada ítem con su signo («+» o «×», ambos en pino) y sin depender del color para distinguirse

