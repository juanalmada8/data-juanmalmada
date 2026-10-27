## ADDED Requirements

### Requirement: Selector «¿Qué necesitás?»
El hero SHALL ofrecer seis chips (Una web o app, Una plataforma, Turnos, Gestión, Datos, Otra idea) y mostrar la vista previa del que esté elegido.

#### Scenario: Estado inicial
- **WHEN** se carga la página
- **THEN** «Una web o app» está seleccionado y su vista previa visible, de modo que la vista previa nunca está vacía

#### Scenario: Elegir otro chip
- **WHEN** la persona toca un chip
- **THEN** en ese único clic la vista previa cambia a un ejemplo y una frase de qué se resuelve

### Requirement: Vista previa con ejemplos verdaderos
Cada vista previa SHALL mostrar un ejemplo real (captura de un caso) o un diagrama de los patrones del manual, y MUST NOT mostrar interfaces inventadas que simulen un producto.

#### Scenario: Chip sin captura real
- **WHEN** un chip no tiene captura real que lo ilustre
- **THEN** su vista previa usa el patrón pipeline o el patrón de datos del manual

### Requirement: «Otra idea» invita a contar
El chip «Otra idea» SHALL mostrar «Contame qué tenés en mente y lo armamos» y un botón que lleva al contacto.

#### Scenario: Elegir «Otra idea»
- **WHEN** la persona elige «Otra idea»
- **THEN** ve el texto y el botón de contacto en lugar de un ejemplo

### Requirement: El tema elegido viaja al contacto
La página SHALL recordar el chip que la persona eligió, y no el preseleccionado, para precargar el mensaje de WhatsApp.

#### Scenario: Sin elección
- **WHEN** la persona no tocó ningún chip
- **THEN** el mensaje de WhatsApp es el genérico

#### Scenario: Con elección
- **WHEN** la persona eligió «Una plataforma» y baja a contacto
- **THEN** el botón de WhatsApp abre el chat con «Hola Juanma, quiero armar una plataforma»

### Requirement: Selector accesible
Los chips SHALL poder elegirse con teclado y con flechas, indicar cuál está seleccionado y anunciar el cambio de la vista previa a los lectores de pantalla.

#### Scenario: Teclado
- **WHEN** alguien usa Tab y las flechas
- **THEN** recorre y elige los chips y el foco se ve en todo momento

### Requirement: Sin JavaScript
Sin JavaScript, el selector SHALL mostrarse como la lista de los seis temas con su frase y un enlace a contacto.

#### Scenario: JavaScript desactivado
- **WHEN** se abre sin JavaScript
- **THEN** se leen los seis temas con su frase y el CTA lleva al contacto
