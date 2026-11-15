## ADDED Requirements

### Requirement: Seis tarjetas bicolor, el problema arriba y la solución abajo
La sección «¿Qué te está consumiendo el tiempo?» SHALL presentar seis tarjetas de dos partes: arriba, en un tono oscuro, el problema en una línea breve y reconocible («Te escriben y te llaman todo el día», «Tu web no te trae nada», «Todo vive en planillas y chats», «Los números los sabés a fin de mes», «Necesitás que tus clientes entren con su usuario», «No sabés bien qué necesitás»); abajo, en un tono claro distinto, lo que se arma (nombre y una línea) y «Esto me pasa →», que abre WhatsApp con el problema ya escrito. La sección MUST NOT llevar manifiesto, nota de cobro ni línea para empresas: el título es el disparador y las tarjetas siguen sin nada en medio.

#### Scenario: Problema y solución separados
- **WHEN** se mira una tarjeta
- **THEN** el problema y la solución se distinguen por tono y por lugar, sin párrafos largos

#### Scenario: Entran en una pantalla
- **WHEN** la ventana mide 1470×790 en escritorio
- **THEN** la sección completa (título y las dos filas de tarjetas) entra sin scroll

#### Scenario: Colores
- **WHEN** se ven las tarjetas
- **THEN** usan solo tonos de la paleta (pino y musgo profundo arriba; crema oscurecida y salvia abajo), ninguna es lima y cada par texto/fondo pasa 4.5:1

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

### Requirement: El mensaje de ahorro vive en «Cómo trabajo»
La frase «Lo que invertís hoy te ahorra tiempo y plata mañana.» SHALL decirse en la introducción de «Cómo trabajo», sin cifras. La forma de cobrar (por etapas y por escrito, plan mensual opcional) SHALL decirse en los pasos Propuesta y Soporte, no en una nota aparte.

#### Scenario: Texto de la sección
- **WHEN** se lee «Cómo trabajo»
- **THEN** la introducción trae la frase de ahorro y no hay porcentajes ni montos
