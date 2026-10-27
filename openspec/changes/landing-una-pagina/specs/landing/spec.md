## ADDED Requirements

### Requirement: Una sola página de cinco secciones
El sitio SHALL ser una única página con, en este orden, hero, qué hago, casos reales, cómo trabajo y contacto, cada una con su ancla, y MUST NOT tener páginas internas, modales ni formularios.

#### Scenario: Ruta interna
- **WHEN** alguien abre `/proyectos/oral` o cualquier ruta que no sea la home
- **THEN** ve la página 404 del sitio

#### Scenario: Orden de las secciones
- **WHEN** se recorre la página de arriba hacia abajo
- **THEN** las secciones aparecen en el orden indicado y no hay una sexta

### Requirement: El mensaje se entiende en 5 segundos
El hero SHALL mostrar el titular «Todo el sistema, un solo proveedor.», una línea de bajada, el selector «¿Qué necesitás?» y el CTA «Contame tu idea» en la primera pantalla del celular.

#### Scenario: Celular de 390×844
- **WHEN** se abre la página en un viewport de 390×844 sin scrollear
- **THEN** se ven la barra, el titular, la bajada, los 6 chips del selector y el CTA

#### Scenario: Celular chico de 360×640
- **WHEN** se abre la página en un viewport de 360×640 sin scrollear
- **THEN** se ven el titular, los chips y el CTA, y la vista previa puede continuar debajo

### Requirement: Nada limita el tipo de proyecto
Ningún texto SHALL afirmar ni sugerir que Juanma hace un solo tipo de proyecto; los servicios y los casos SHALL presentarse como ejemplos.

#### Scenario: Revisión del copy
- **WHEN** se lee todo el texto visible de la página
- **THEN** no hay frases como «solo hago…», «me especializo en turnos» ni una lista cerrada de servicios

### Requirement: Barra fija mínima
La página SHALL tener una barra fija con el logo y el botón «Contame tu idea», visible en todo momento al scrollear, que lleva a la sección de contacto.

#### Scenario: Scroll hasta el final
- **WHEN** la persona está en cualquier sección
- **THEN** la barra sigue visible y «Contame tu idea» baja hasta el contacto sin tapar el título de la sección

#### Scenario: Celular de 360 px
- **WHEN** el ancho es de 360 px
- **THEN** la barra muestra el ícono `</j>` y el botón completo, sin cortar el texto

### Requirement: Mobile first
La página SHALL usarse sin scroll horizontal desde 360 px de ancho, con áreas táctiles de al menos 44 px.

#### Scenario: Botones al alcance del pulgar
- **WHEN** se usa el celular con una mano
- **THEN** el CTA del hero y los botones de contacto miden al menos 44 px de alto y están a la vista sin zoom

### Requirement: Movimiento sobrio
La página SHALL limitar las animaciones a la aparición suave al scrollear, la transición del selector del hero y el hover de las tarjetas, y SHALL apagarlas con `prefers-reduced-motion: reduce`.

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** no hay animaciones y todo el contenido es visible desde el principio

### Requirement: Funciona sin JavaScript
Todo el contenido SHALL leerse sin JavaScript, y los contactos SHALL funcionar; el JavaScript solo agrega el selector interactivo, las pestañas de casos y la aparición al scrollear.

#### Scenario: JavaScript desactivado
- **WHEN** se abre la página sin JavaScript
- **THEN** se ven las 5 secciones completas, los casos uno debajo del otro y los botones de contacto funcionan

### Requirement: Rendimiento y accesibilidad
La página SHALL alcanzar al menos 90 en Rendimiento, Accesibilidad y SEO en Lighthouse móvil, cumplir contraste AA y no sumar librerías de UI.

#### Scenario: Medición
- **WHEN** se corre Lighthouse móvil sobre el build
- **THEN** las tres categorías son 90 o más, o el informe explica la excepción

#### Scenario: Peso del JavaScript
- **WHEN** se mide el JavaScript de la página comprimido
- **THEN** es menor a 15 kB

### Requirement: Metadatos y vista previa al compartir
La página SHALL declarar `lang="es-AR"`, título de hasta 60 caracteres, descripción de hasta 155, enlace canónico y una imagen Open Graph de 1200×630 con la marca.

#### Scenario: Link compartido por WhatsApp o Instagram
- **WHEN** se comparte el link
- **THEN** la vista previa muestra la imagen de marca, el título y la descripción
