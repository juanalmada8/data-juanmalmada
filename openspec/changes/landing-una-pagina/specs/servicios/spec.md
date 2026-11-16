## ADDED Requirements

### Requirement: Tarjetas con el problema arriba y la solución abajo
La sección «Qué resuelvo» SHALL titularse «¿Te suena alguna de estas?» (con «alguna» en itálica, sin bajada) y presentar seis tarjetas de color, cada una en dos partes: arriba el problema en una línea breve y reconocible y abajo, en un panel propio, lo que se arma (nombre y una línea) con «Esto me pasa →», que abre WhatsApp con el problema ya escrito. Las seis, en este orden y con estos fondos: «Te escriben y te llaman todo el día» (pino; Turnos y pedidos online), «Respondés las mismas preguntas una y otra vez» (salvia; Bots con inteligencia artificial), «Todo vive en planillas, cuadernos y chats» (papel; Sistemas de gestión), «Tenés datos y no sabés qué hacer con ellos» (musgo; Tableros con tus datos), «Tu web no te trae clientes» (pino; Webs, apps y plataformas) y «Lo tuyo no está en la lista» (salvia; Contame la idea). La fuente es `web/src/data/temas.ts`. La sección MUST NOT llevar manifiesto, nota de cobro ni línea para empresas: el título es el disparador y las tarjetas siguen sin nada en medio.

#### Scenario: Problema y solución separados
- **WHEN** se mira una tarjeta
- **THEN** el problema y la solución se distinguen por lugar y por tono, sin párrafos largos

#### Scenario: Entran en una pantalla
- **WHEN** la ventana mide 1470×790 en escritorio
- **THEN** la sección completa (título y las dos filas) entra sin scroll

#### Scenario: Colores
- **WHEN** se ven las tarjetas
- **THEN** usan tonos de la paleta (pino, salvia, crema oscurecida, musgo profundo), ninguna es lima y cada par texto/fondo pasa 4.5:1
### Requirement: La última tarjeta invita aunque lo suyo no esté en la lista
La tarjeta «Lo tuyo no está en la lista» («Contame la idea»: «Si se puede armar con tecnología, lo vemos juntos.») SHALL invitar a contar la idea, sin hablar de costos.

#### Scenario: Tocar la tarjeta
- **WHEN** la persona toca la tarjeta
- **THEN** se abre WhatsApp con «Hola Juanma, tengo una idea y quiero ver si se puede armar.»

### Requirement: Sin promesas inventadas
Las tarjetas MUST NOT incluir cifras, porcentajes, plazos ni precios, y SHALL cumplir la voz de la marca (voseo, sin la lista de frases prohibidas de 02-contenido).

#### Scenario: Frase prohibida
- **WHEN** el texto contiene «soluciones innovadoras» o «llevamos tu negocio al siguiente nivel»
- **THEN** la revisión de marca lo marca como observación
