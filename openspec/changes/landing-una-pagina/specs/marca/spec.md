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

### Requirement: Escala tipográfica del manual
La página SHALL seguir la lámina de tipografía con más carácter: títulos H1 de 56 a 80 px (el manual da 56–72; en pantallas anchas se estira hasta 80) con interlineado menor a 1.0 y espaciado apretado (en el celular bajan para que entren), cuerpo de Manrope de 16 a 18 px con interlineado 1.5, y etiquetas de JetBrains Mono de 12 a 14 px con espaciado de letras. Manrope SHALL usarse en Bold para subtítulos y botones, Medium para destacados como la bajada, y Regular para párrafos.

#### Scenario: Bajada del hero
- **WHEN** se lee la bajada del hero
- **THEN** está en Manrope Medium

#### Scenario: Código y etiquetas
- **WHEN** hay un guiño de código como `hola_mundo()`
- **THEN** va en JetBrains Mono en minúsculas, como en el manual, y las etiquetas numeradas (`01 — QUÉ HAGO`) van en mayúsculas

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
En escritorio, el escenario SHALL tomar los tonos pino, pino y salvia (hero, qué hago y casos) frente al papel crema de la lectura; «Cómo trabajo» SHALL ir sobre salvia y «Contacto» sobre pino, con espacio generoso (120 px o más entre secciones) y bordes redondeados.

#### Scenario: Secciones consecutivas
- **WHEN** hay dos secciones seguidas
- **THEN** tienen fondos distintos

### Requirement: Números grandes en serif
Los pasos de «Cómo trabajo» SHALL mostrar su número (1 a 4) en DM Serif Display de gran tamaño, y las palabras destacadas de los títulos SHALL ir en la itálica de la serif.

#### Scenario: Cómo trabajo
- **WHEN** se ve la sección «Cómo trabajo»
- **THEN** cada paso tiene su número grande en serif, de al menos 48 px, y el nombre del paso debajo

### Requirement: Mono solo para código y números del índice
JetBrains Mono SHALL usarse solo para guiños de código (`hola_mundo()`) y los números del índice; los stickers, rótulos y datos van en Manrope.

#### Scenario: Stickers de hechos
- **WHEN** se ven los stickers del hero
- **THEN** los de hechos están en Manrope Bold; solo `hola_mundo()` va en mono
