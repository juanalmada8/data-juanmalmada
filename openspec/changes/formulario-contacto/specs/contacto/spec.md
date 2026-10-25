## ADDED Requirements

### Requirement: Formulario corto de contacto
La sección de contacto SHALL ofrecer un formulario con nombre, forma de contacto (mail o teléfono), qué necesita (los cuatro servicios u «otra cosa») y mensaje, junto a los canales directos.

#### Scenario: Envío exitoso con JavaScript
- **WHEN** la persona completa los campos y envía
- **THEN** ve un mensaje de confirmación en la misma página, sin recargar, y el formulario se vacía

#### Scenario: Envío exitoso sin JavaScript
- **WHEN** la persona envía el formulario con JavaScript desactivado
- **THEN** llega a una página «gracias» con el mismo mensaje de confirmación y un enlace para volver al inicio

### Requirement: Errores claros y en la voz de marca
El formulario SHALL indicar qué campo falló y por qué, con texto en español rioplatense, asociado al campo para lectores de pantalla.

#### Scenario: Campo vacío
- **WHEN** falta el nombre o el mensaje
- **THEN** el error aparece junto al campo y el foco va al primer campo con error

#### Scenario: Falla del servidor
- **WHEN** el envío falla por un error del servidor
- **THEN** se muestra un mensaje que ofrece escribir por WhatsApp o mail, y lo ya escrito no se pierde

### Requirement: Accesibilidad del formulario
Cada campo SHALL tener una etiqueta visible y el atributo `autocomplete` correcto, y el formulario SHALL poder completarse solo con teclado.

#### Scenario: Navegación con teclado
- **WHEN** alguien recorre el formulario con Tab
- **THEN** pasa por todos los campos y el botón en orden, con el foco siempre visible

## MODIFIED Requirements

### Requirement: Canales en orden de preferencia
El sitio SHALL ofrecer WhatsApp como canal principal, después el formulario, mail y LinkedIn (Instagram cuando exista la cuenta).

#### Scenario: Botón principal
- **WHEN** alguien toca «Escribime»
- **THEN** se abre WhatsApp con un mensaje precargado

#### Scenario: Canales siempre disponibles
- **WHEN** el formulario no está disponible
- **THEN** WhatsApp, mail y LinkedIn siguen visibles y funcionando
