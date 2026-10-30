## ADDED Requirements

### Requirement: Seis tarjetas por necesidad
La sección «¿Qué necesitás?» SHALL presentar seis tarjetas grandes de color, una por situación: webs y apps a medida; portales y plataformas (usuarios, publicaciones, postulaciones, paneles); turnos y reservas online; sistemas de gestión; automatización y datos; y «Otra idea». Cada una SHALL mostrar el problema como lo diría el cliente, la solución en una línea y un enlace «Contame esto» que abre WhatsApp con el mensaje de su tema.

#### Scenario: Tarjeta de ejemplo
- **WHEN** se lee una tarjeta
- **THEN** expresa el problema y la solución en una línea, sin tecnicismos, y toda la tarjeta es un solo destino

#### Scenario: Colores
- **WHEN** se ven las seis tarjetas
- **THEN** usan tonos de la paleta del manual (pino, salvia, crema oscurecida, musgo profundo), ninguna es lima y cada par texto/fondo pasa 4.5:1

### Requirement: «Otra idea» invita a contar
La tarjeta «Otra idea» SHALL decir que lo que no está en la lista es justo para lo que Juanma está, e invitar a contar la idea por WhatsApp.

#### Scenario: Tocar «Otra idea»
- **WHEN** la persona toca la tarjeta
- **THEN** se abre WhatsApp con «Hola Juanma, tengo una idea para armar»

### Requirement: Sin promesas inventadas
Las tarjetas MUST NOT incluir cifras, porcentajes, plazos ni precios, y SHALL cumplir la voz de la marca (voseo, sin la lista de frases prohibidas de 02-contenido).

#### Scenario: Frase prohibida
- **WHEN** el texto contiene «soluciones innovadoras» o «llevamos tu negocio al siguiente nivel»
- **THEN** la revisión de marca lo marca como observación

### Requirement: El mensaje de ahorro en el cuerpo
La sección «Qué hago» SHALL decir, en una línea y sin cifras, que lo que el cliente invierte hoy le ahorra tiempo y plata mañana.

#### Scenario: Texto de la sección
- **WHEN** se lee la sección
- **THEN** debajo del título dice «Lo que invertís hoy te ahorra tiempo y plata mañana.» y no aparecen porcentajes ni montos
