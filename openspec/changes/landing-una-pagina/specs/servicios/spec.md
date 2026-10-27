## ADDED Requirements

### Requirement: Ejemplos de lo que puede armar
La sección «Qué hago» SHALL presentar cinco ejemplos como «algunas cosas que puedo armar»: webs y apps a medida; portales y plataformas con su backend (usuarios, publicaciones, postulaciones, paneles); turnos y reservas online; sistemas de gestión interna; automatización y datos (integraciones, reportes y tableros que se actualizan solos).

#### Scenario: Tarjeta de ejemplo
- **WHEN** se lee una tarjeta
- **THEN** expresa el problema y la solución en una línea, sin tecnicismos

### Requirement: Cierre que abre la puerta
La sección SHALL terminar con «¿Lo tuyo no está acá? Contámelo, seguro se puede armar.» y un enlace al contacto.

#### Scenario: Tocar el enlace del cierre
- **WHEN** la persona toca el enlace
- **THEN** baja a la sección de contacto

### Requirement: Sin promesas inventadas
Las tarjetas MUST NOT incluir cifras, porcentajes, plazos ni precios, y SHALL cumplir la voz de la marca (voseo, sin la lista de frases prohibidas de 02-contenido).

#### Scenario: Frase prohibida
- **WHEN** el texto contiene «soluciones innovadoras» o «llevamos tu negocio al siguiente nivel»
- **THEN** la revisión de marca lo marca como observación
