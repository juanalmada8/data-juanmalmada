## ADDED Requirements

### Requirement: Seis tarjetas por problema
La sección «¿Qué te está comiendo el tiempo?» SHALL presentar seis tarjetas grandes de color, una por problema y con el problema como título, en palabras de quien lo vive: «Te escriben y te llaman todo el día» (turnos, reservas y pedidos online), «Tu web no te trae nada» (webs y apps a medida), «Todo vive en planillas y chats» (sistemas de gestión), «Los números los sabés a fin de mes» (tableros y reportes que se arman solos), «Necesitás que clientes o empresas entren con su usuario» (portales y plataformas, con todo lo que las sostiene) y «No sabés bien qué necesitás» (charla). Cada una SHALL mostrar el nombre de lo que se arma, qué cambia y un enlace «Esto me pasa» que abre WhatsApp con el problema ya escrito. Debajo, una línea SHALL dirigirse a empresas y organismos (integraciones, procesos de datos, plataformas con backend).

#### Scenario: Tarjeta de ejemplo
- **WHEN** se lee una tarjeta
- **THEN** el título es un problema reconocible, sin tecnicismos, y toda la tarjeta es un solo destino

#### Scenario: Colores
- **WHEN** se ven las seis tarjetas
- **THEN** usan tonos de la paleta del manual (pino, salvia, crema oscurecida, musgo profundo), ninguna es lima y cada par texto/fondo pasa 4.5:1

### Requirement: La última tarjeta invita aunque no sepa qué necesita
La tarjeta «No sabés bien qué necesitás» SHALL invitar a contar cómo trabaja hoy y decir que la primera charla no tiene costo.

#### Scenario: Tocar la tarjeta
- **WHEN** la persona toca la tarjeta
- **THEN** se abre WhatsApp con «Hola Juanma, no sé bien qué necesito, pero quiero mejorar cómo trabajo.»

### Requirement: Sin promesas inventadas
Las tarjetas MUST NOT incluir cifras, porcentajes, plazos ni precios, y SHALL cumplir la voz de la marca (voseo, sin la lista de frases prohibidas de 02-contenido).

#### Scenario: Frase prohibida
- **WHEN** el texto contiene «soluciones innovadoras» o «llevamos tu negocio al siguiente nivel»
- **THEN** la revisión de marca lo marca como observación

### Requirement: El mensaje de ahorro en el cuerpo
La sección «¿Qué te está comiendo el tiempo?» SHALL decir, sin cifras, que lo que el cliente invierte hoy le ahorra tiempo y plata mañana (dentro del manifiesto).

#### Scenario: Texto de la sección
- **WHEN** se lee la sección
- **THEN** debajo del título el manifiesto dice «Lo que invertís hoy te ahorra tiempo y plata mañana.» y no aparecen porcentajes ni montos

### Requirement: Manifiesto con palabras resaltadas
«¿Qué te está comiendo el tiempo?» SHALL abrir con una frase grande en serif («Armo sistemas que se usan de verdad. Lo que invertís hoy te ahorra *tiempo y plata* mañana.») con las palabras clave en itálica de acento.

#### Scenario: Contraste del resaltado
- **WHEN** se ve la frase sobre crema
- **THEN** el itálico va en musgo hondo (musgo mezclado con pino), que pasa 4.5:1 en cualquier ancho

