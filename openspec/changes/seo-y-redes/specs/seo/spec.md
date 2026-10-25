## ADDED Requirements

### Requirement: Metadatos por página
Cada página SHALL tener un `title` propio de hasta 60 caracteres y una `description` propia de hasta 155 caracteres, un enlace canónico y `lang="es-AR"`.

#### Scenario: Título demasiado largo
- **WHEN** una página tiene un título de más de 60 caracteres
- **THEN** el build avisa con el nombre de la página

#### Scenario: Página sin descripción
- **WHEN** una página no define descripción
- **THEN** usa la descripción por defecto del sitio, y el build lo informa

### Requirement: Imagen para compartir
Cada página SHALL declarar una imagen de 1200×630 para redes, con la marca; las páginas de caso SHALL tener la suya cuando exista.

#### Scenario: Link compartido por WhatsApp
- **WHEN** se comparte la home
- **THEN** la vista previa muestra la imagen con la marca, el título y la descripción

### Requirement: Mapa del sitio y robots
El sitio SHALL publicar `sitemap.xml` con todas las páginas indexables y `robots.txt` que lo referencia, y MUST NOT incluir páginas de uso interno ni la demo si se decide no indexarla.

#### Scenario: Caso no publicado
- **WHEN** un caso tiene `publicado: false`
- **THEN** no aparece en el mapa del sitio

### Requirement: Datos estructurados verdaderos
Los datos estructurados SHALL describir a la persona y el servicio con datos confirmados (nombre, localidad, trabajo remoto, servicios) y MUST NOT incluir calificaciones, reseñas, precios ni cifras inventadas.

#### Scenario: Validación
- **WHEN** se valida el JSON-LD de la home
- **THEN** no tiene errores y no incluye `aggregateRating`, `review` ni `priceRange`

### Requirement: Página de error con la marca
El sitio SHALL tener una página 404 con la marca, un mensaje en voz de Juanma y enlaces para volver al inicio y contactar.

#### Scenario: Dirección inexistente
- **WHEN** alguien abre una URL que no existe
- **THEN** ve la página 404 con enlaces a la home y al contacto, y la respuesta tiene estado 404

### Requirement: Rendimiento y accesibilidad como criterio
La home SHALL alcanzar al menos 95 en Rendimiento, Accesibilidad, Buenas prácticas y SEO en Lighthouse móvil.

#### Scenario: Medición
- **WHEN** se corre Lighthouse móvil sobre el build
- **THEN** las cuatro categorías son 95 o más, o el informe explica la excepción
