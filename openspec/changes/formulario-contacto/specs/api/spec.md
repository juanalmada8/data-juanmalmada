## ADDED Requirements

### Requirement: Recepción de mensajes de contacto
La API SHALL aceptar `POST /contacto` con nombre, forma de contacto, qué necesita y mensaje, validar los datos y enviar el contenido por mail a la casilla configurada.

#### Scenario: Pedido válido
- **WHEN** llega un pedido con todos los campos válidos
- **THEN** responde 200 y el mensaje llega a la casilla configurada

#### Scenario: Datos inválidos
- **WHEN** falta un campo obligatorio o excede el largo máximo
- **THEN** responde 422 con un JSON que indica qué campo falló, sin trazas internas

### Requirement: Protección contra spam
La API SHALL descartar los envíos que completen el campo trampa, SHALL limitar la cantidad de envíos por IP y SHALL verificar el desafío antispam antes de enviar el mail.

#### Scenario: Campo trampa completo
- **WHEN** el campo oculto viene con contenido
- **THEN** responde 200 sin enviar el mail, para no darle pistas al bot

#### Scenario: Demasiados envíos
- **WHEN** una IP supera el límite de envíos
- **THEN** responde 429 con un mensaje entendible

#### Scenario: Desafío inválido
- **WHEN** la verificación antispam falla
- **THEN** responde 422 y no envía el mail

### Requirement: Datos personales mínimos
La API MUST NOT guardar los mensajes ni registrar su contenido en los logs; el único registro es el mail enviado.

#### Scenario: Revisión de logs
- **WHEN** se revisan los logs tras un envío
- **THEN** no aparecen el nombre, el contacto ni el mensaje

### Requirement: Redirección para el envío sin JavaScript
Cuando el pedido llega como formulario HTML normal, la API SHALL responder con una redirección a la página «gracias» (o de vuelta al formulario con el error).

#### Scenario: Envío de formulario HTML
- **WHEN** llega un `POST` con contenido de formulario
- **THEN** responde con una redirección a `/gracias`
