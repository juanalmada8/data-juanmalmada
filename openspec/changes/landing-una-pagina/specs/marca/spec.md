## ADDED Requirements

### Requirement: Paleta del manual y uso de la lima
La página SHALL usar solo Pino #133A2E, Musgo #3F7A5C, Salvia #A8C5AE, Crema #F3EFE3 y Lima #D4E85C (más blanco para tarjetas), y SHALL reservar la lima para acentos y CTA, sin usarla como texto sobre crema.

#### Scenario: Color fuera de los tokens
- **WHEN** un estilo necesita un color
- **THEN** usa una variable de `tokens.css`, nunca un hex suelto

#### Scenario: Botón lima sobre crema
- **WHEN** hay un botón lima sobre fondo crema
- **THEN** tiene borde pino de 2 px y texto pino

### Requirement: Contraste AA
Todos los textos SHALL cumplir contraste AA; Musgo sobre Crema SHALL usarse solo en texto grande.

#### Scenario: Texto chico sobre crema
- **WHEN** un texto de menos de 24 px va sobre crema
- **THEN** va en pino

### Requirement: Tipografías del manual
Los títulos SHALL usar DM Serif Display con itálica en la palabra destacada, el texto SHALL usar Manrope y las etiquetas chicas SHALL usar JetBrains Mono en mayúsculas con tracking, todas servidas desde el propio sitio.

#### Scenario: Carga de fuentes
- **WHEN** se carga la página
- **THEN** las tres fuentes salen del propio dominio, en formato woff2, y no se usa Martian Mono ni Atkinson

### Requirement: Logo, ícono y firma sin cambios
La página SHALL usar el logo `<jm>`, el ícono `</j>` y la firma desde `web/public/brand/`, sin cambiar sus colores ni redibujarlos, y SHALL usar el ícono cuando el logo mediría menos de 100 px.

#### Scenario: Asset faltante
- **WHEN** falta un archivo de marca
- **THEN** el componente muestra `[[FALTA: nombre-del-archivo]]`

### Requirement: Patrón de la m como recurso sutil
El patrón de la `m` SHALL usarse solo como adorno decorativo en bandas o separadores, oculto a lectores de pantalla, y MUST NOT ir de fondo completo detrás de texto.

#### Scenario: Sección con texto
- **WHEN** una sección tiene texto de lectura
- **THEN** el patrón no queda detrás del texto

### Requirement: Ritmo y aire
Las secciones SHALL alternar fondos crema y pino, con espacio generoso y bordes redondeados.

#### Scenario: Secciones consecutivas
- **WHEN** hay dos secciones seguidas
- **THEN** tienen fondos distintos
