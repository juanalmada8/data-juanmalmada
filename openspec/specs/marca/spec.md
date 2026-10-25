# marca Specification

## Purpose
Que todo lo visible del sitio respete el manual de marca 2026 (docs/specs/01-marca.md y docs/marca/):
paleta, proporción de color, tipografías, logo, firma y contraste.

## Requirements

### Requirement: Paleta y proporción del manual
El sitio SHALL usar solo los colores de `web/src/styles/tokens.css` (pino, musgo, salvia, crema, lima, blanco) y SHALL mantener crema como color dominante, con pino, musgo y salvia en bandas y tarjetas y lima solo como acento.

#### Scenario: Color fuera de los tokens
- **WHEN** un componente necesita un color
- **THEN** usa una variable de `tokens.css`, nunca un hex suelto

#### Scenario: Lima como acento
- **WHEN** se usa lima
- **THEN** es una palabra, un dato, un botón o una placa chica, y nunca el fondo de una sección entera

### Requirement: Contraste legible
Los textos SHALL cumplir la tabla de contraste de 01-marca: musgo sobre crema solo en texto grande, salvia y lima nunca como texto sobre crema.

#### Scenario: Texto chico sobre crema
- **WHEN** un texto de menos de 24 px va sobre crema
- **THEN** va en pino

### Requirement: Logo y firma reales
El logo `<jm>`, el ícono `</j>` y la firma SHALL salir de los archivos de `web/public/brand/` y MUST NOT redibujarse en código.

#### Scenario: Asset faltante
- **WHEN** falta un archivo de marca
- **THEN** el componente muestra `[[FALTA: nombre-del-archivo]]`

#### Scenario: Logo chico
- **WHEN** el logo mediría menos de 100 px de ancho
- **THEN** se usa el ícono `</j>`

### Requirement: Tipografías
Los títulos y rótulos SHALL usar Martian Mono y los textos de lectura SHALL usar Atkinson Hyperlegible Next, ambas self-hosted desde `web/public/fonts/`.

#### Scenario: Carga de fuentes
- **WHEN** se carga cualquier página
- **THEN** las fuentes salen del propio dominio, sin servicios de terceros en runtime
