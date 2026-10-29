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

### Requirement: Barra fija con índice numerado
La página SHALL tener una barra fija con el logo, un índice numerado de sus cuatro secciones (01 Qué hago, 02 Casos, 03 Cómo trabajo, 04 Contacto) y el botón «Contame tu idea», siempre visible al scrollear. Cada capítulo del índice SHALL tener un tramo de progreso que se llena a medida que se lee esa sección, y el de la sección actual SHALL estar marcado.

#### Scenario: Escritorio
- **WHEN** el ancho es de 1024 px o más
- **THEN** la barra muestra los cuatro capítulos, cada uno en un solo renglón, con su número y nombre, cada uno con su tramo de progreso, y el actual marcado (número destacado y `aria-current`)

#### Scenario: Celular
- **WHEN** el ancho es menor a 1024 px
- **THEN** la barra muestra el ícono `</j>` (o el logo `<jm>` desde 480 px), el número y nombre de la sección actual (por ejemplo «02 Casos») y el botón completo sin cortarse a 360 px, con los cuatro tramos como una barra segmentada bajo la barra

#### Scenario: Índice por teclado en pantallas angostas
- **WHEN** el ancho es menor a 1024 px y la persona navega con Tab
- **THEN** el índice completo se despliega bajo la barra al recibir el foco, con los capítulos en un solo renglón cada uno, y se puede ir a cualquier sección

#### Scenario: Un solo botón fuerte en la barra
- **WHEN** se ve la barra sobre el hero
- **THEN** «Contame tu idea» es pino sobre crema y la lima queda para el CTA del hero y el capítulo actual

#### Scenario: Progreso por capítulo
- **WHEN** la persona va por la mitad de «Casos»
- **THEN** el tramo 01 está lleno, el 02 a la mitad y el 03 y el 04 vacíos

#### Scenario: Ir a una sección
- **WHEN** la persona toca un capítulo o «Contame tu idea»
- **THEN** la página baja hasta esa sección sin que la barra tape su título

### Requirement: Aire alrededor del logo
El logo `<jm>` de la barra SHALL tener espacio libre arriba y abajo y MUST NOT tocar el borde de la barra ni su línea inferior.

#### Scenario: Escritorio de 1440 px
- **WHEN** se ve la barra a 1440 px
- **THEN** hay al menos 12 px entre el logo y la línea inferior de la barra, y el logo mide al menos 100 px de ancho

### Requirement: Hero oscuro con el logo grande
En pantallas de 640 px o más el hero SHALL tener fondo pino y mostrar el logo `<jm▌>` grande con el cursor titilando, como la portada del manual. En el celular (menos de 640 px) el logo grande no se muestra, para que entren el titular, los chips y el CTA.

#### Scenario: Escritorio
- **WHEN** el ancho es de 640 px o más
- **THEN** el hero es oscuro y el logo con cursor se ve junto a la vista previa

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** el cursor del logo queda fijo

### Requirement: El hero llena la primera pantalla
En pantallas de escritorio el hero SHALL ocupar la primera pantalla completa debajo de la barra, de modo que la sección siguiente no asome cortada.

#### Scenario: Ventana de 1466×820
- **WHEN** se abre la página a ese tamaño sin scrollear
- **THEN** el borde superior de «Qué hago» queda en el borde inferior de la ventana o más abajo

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
La página SHALL declarar `lang="es-AR"`, título de hasta 60 caracteres, descripción de hasta 155, enlace canónico a `https://juanmalmada.com` y una imagen Open Graph de 1200×630 con la marca.

#### Scenario: Link compartido por WhatsApp o Instagram
- **WHEN** se comparte el link
- **THEN** la vista previa muestra la imagen de marca, el título y la descripción

### Requirement: Escenario fijo en escritorio
En pantallas de 1024 px o más, la mitad izquierda de hero, «Qué hago» y «Casos» SHALL ser un escenario fijo a pantalla completa debajo de la barra, y la derecha una columna de lectura de una sola medida. El escenario SHALL mostrar el logo `<jm▌>` con la vista previa del tema elegido en el hero, el diagrama «todo conectado» en «Qué hago» y la captura del caso elegido en «Casos». «Cómo trabajo» y «Contacto» SHALL ocupar todo el ancho.

#### Scenario: Escritorio de 1466×820
- **WHEN** se scrollea del hero a «Casos»
- **THEN** el escenario no se mueve, cambia de tono y de contenido al llegar cada sección, y la columna de lectura sigue su curso

#### Scenario: Celular
- **WHEN** el ancho es menor a 1024 px
- **THEN** no hay escenario; las secciones se apilan y la vista previa y la captura aparecen dentro de la lectura

### Requirement: Titulares de hasta dos renglones
Todo `h1` y `h2` SHALL ocupar dos renglones o menos a 360, 390, 768, 1024, 1440 y 1920 px.

#### Scenario: Cierre de contacto
- **WHEN** se ve el título del contacto
- **THEN** es una frase corta («Armemos el sistema.») y la pregunta («¿Tenés un negocio, un consultorio, una empresa o una idea?») va como bajada

### Requirement: Sin adornos que no dicen nada
Las secciones MUST NOT llevar etiquetas sobre el título («01 — Qué hago»), líneas finas ni cajas definidas solo por un borde de 1 px; el orden lo da el índice de la barra y las superficies se definen por su relleno. Ningún texto pensado para leerse SHALL medir menos de 13 px.

#### Scenario: Inspector
- **WHEN** se corre el inspector de la skill taste sobre el build
- **THEN** no marca etiquetas sobre títulos, líneas finas, cajas con borde ni texto menor a 13 px

### Requirement: La lima como acento escaso
La lima SHALL ocupar como máximo 0.7 veces los píxeles que ocupaba antes del 2026-10-29 (escritorio: 2.9 % en la primera pantalla y 1.0 % en la página; celular: 7.8 % y 2.7 %), y SHALL aparecer solo en el CTA principal y el de WhatsApp, el logo, la pastilla `hola_mundo()`, el itálico del titular sobre el hero oscuro del celular y a lo sumo una `m` del patrón. Medido el 2026-10-29: escritorio 1.1 % y 0.4 %; celular 3.5 % y 1.7 %.

#### Scenario: Medición
- **WHEN** se miden los píxeles lima en capturas de la primera pantalla y de la página completa
- **THEN** están por debajo de esos topes
