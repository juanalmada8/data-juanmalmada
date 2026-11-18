## ADDED Requirements

### Requirement: Cuatro pasos en orden
La sección «Cómo trabajo» SHALL titularse «Cómo trabajo.» (sin itálica y sin introducción) y mostrar los pasos numerados del 1 al 4, cada uno con una o dos líneas: **Charla** («Me contás qué necesitás y cómo trabajás hoy. No hace falta que sepas de tecnología.»), **Propuesta** («Te paso por escrito qué armaría, en qué orden y cuánto sale.»), **Desarrollo** («Lo armo por etapas. Lo vas viendo funcionar antes del final.») y **Soporte** («Te lo dejo andando y te enseño a usarlo. Si querés, sigo con soporte y mejoras todos los meses.»), sin precio.

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
- **THEN** dice que Juanma lo deja andando, enseña a usarlo y, si la persona quiere, sigue con soporte y mejoras todos los meses, sin horarios ni tiempos de respuesta de soporte

### Requirement: Lo que hago y lo que no hago
Debajo de los cuatro pasos, «Cómo trabajo» SHALL mostrar dos tarjetas: «Lo que hago» (charlar antes de presupuestar, explicar en criollo, avisar cuando algo no se puede o no conviene, dejar todo andando y acompañar después) y «Lo que no hago» (prometer lo que no se puede cumplir, vender lo que no se necesita, hablar en difícil para impresionar, dejar a medias o desaparecer después de entregar). Los textos SHALL ser compromisos de oficio en primera persona, sin plazos, precios ni cifras.

#### Scenario: Lectura de las tarjetas
- **WHEN** se llega al final de «Cómo trabajo»
- **THEN** se ven las dos tarjetas lado a lado en escritorio y apiladas en el celular, cada ítem con su signo («+» o «×»; el «+» en salvia, nunca lima) y sin depender del color para distinguirse

