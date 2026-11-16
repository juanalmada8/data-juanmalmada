## ADDED Requirements

### Requirement: Una sola página de seis secciones
El sitio SHALL ser una única página con, en este orden, hero, «¿Te suena?», «¿Qué te está consumiendo el tiempo?», casos reales, cómo trabajo y contacto, cada una con su ancla, y MUST NOT tener páginas internas, modales ni formularios.

#### Scenario: Ruta interna
- **WHEN** alguien abre `/proyectos/oral` o cualquier ruta que no sea la home
- **THEN** ve la página 404 del sitio

#### Scenario: Orden de las secciones
- **WHEN** se recorre la página de arriba hacia abajo
- **THEN** las secciones aparecen en el orden indicado y no hay una séptima

### Requirement: El mensaje se entiende en 5 segundos
El hero SHALL mostrar el titular «Tu negocio, más simple y bajo control.», la bajada y el botón «Charlemos» en la primera pantalla del celular; «Un solo proveedor, todo el sistema.» queda como lema del pie.

#### Scenario: Celular de 390×844
- **WHEN** se abre la página en un viewport de 390×844 sin scrollear
- **THEN** se ven la barra, el titular, la bajada y el CTA

#### Scenario: Celular chico de 360×640
- **WHEN** se abre la página en un viewport de 360×640 sin scrollear
- **THEN** se ven el titular y el CTA, y los enlaces directos y los marcos de color pueden continuar debajo

### Requirement: Nada limita el tipo de proyecto
Ningún texto SHALL afirmar ni sugerir que Juanma hace un solo tipo de proyecto; los servicios y los casos SHALL presentarse como ejemplos.

#### Scenario: Revisión del copy
- **WHEN** se lee todo el texto visible de la página
- **THEN** no hay frases como «solo hago…», «me especializo en turnos» ni una lista cerrada de servicios

### Requirement: Barra fija con índice numerado
La página SHALL tener una barra fija, de ancho completo y color pino (el mismo fondo del hero, sin corte entre ambos), con el logo, un índice numerado de sus cuatro secciones (01 Qué resuelvo, 02 Casos, 03 Cómo trabajo, 04 Contacto; el 01 cubre «¿Te suena?» y las tarjetas) y el botón «Charlemos», siempre visible al scrollear. Cada capítulo del índice SHALL tener un tramo de progreso que se llena a medida que se lee esa sección, y el de la sección actual SHALL estar marcado.

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
- **THEN** el botón de la barra dice «Charlemos» (la puerta de entrada, siempre a mano) y es lima sobre pino, en una sola línea a 360 px

#### Scenario: Progreso por capítulo
- **WHEN** la persona va por la mitad de «Casos»
- **THEN** el tramo 01 está lleno, el 02 a la mitad y el 03 y el 04 vacíos

#### Scenario: Ir a una sección
- **WHEN** la persona toca un capítulo o «Charlemos»
- **THEN** la página baja hasta esa sección sin que la barra tape su título

### Requirement: Aire alrededor del logo
El logo `<jm>` de la barra SHALL tener espacio libre arriba y abajo y MUST NOT tocar el borde de la barra ni su línea inferior.

#### Scenario: Escritorio de 1440 px
- **WHEN** se ve la barra a 1440 px
- **THEN** hay al menos 12 px entre el logo y la línea inferior de la barra, y el logo mide al menos 100 px de ancho

### Requirement: Hero pino con marcos de color de hechos reales
El hero SHALL tener fondo pino continuo con la barra, el titular grande en crema (con «bajo control» en itálica salvia) y, junto a la acción, tres marcos de color con una esquina cortada que llevan datos reales de `sitio.ts` en lugar de fotos: la presentación con la firma de Juanma, los años de oficio y «Trabajo en forma remota desde Argentina.» con la pastilla `hola_mundo()`. Los marcos MUST NOT llevar plazos de respuesta, la ciudad, cifras, testimonios ni logos que no estén confirmados.

#### Scenario: Escritorio
- **WHEN** el ancho es de 1024 px o más
- **THEN** el titular ocupa dos renglones y los marcos quedan a la derecha de la acción

#### Scenario: Celular
- **WHEN** el ancho es menor a 768 px
- **THEN** los marcos se apilan debajo de los enlaces directos y no hay scroll horizontal

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** los marcos no se mueven al pasar el mouse

### Requirement: El hero llena la primera pantalla
En escritorio el hero SHALL ocupar exactamente la primera pantalla debajo de la barra (alto de la ventana menos la barra), con todo su contenido adentro, de modo que la franja siguiente no asome cortada. Cada enlace del índice SHALL dejar la sección justo bajo la barra. Toda sección más baja que la pantalla (salvo la última, «Contacto») SHALL llenarla, con su contenido al medio, de modo que al ir a ella la siguiente no asome cortada abajo. La página MUST NOT mover el scroll por su cuenta (sin imanes de scroll): al llegar al final, se queda en el final.

#### Scenario: Ventanas de 1470×780, 1440×800, 1366×640 y 1920×950
- **WHEN** se abre la página a cualquiera de esos tamaños sin scrollear
- **THEN** el borde superior de la franja coincide con el borde inferior de la ventana

#### Scenario: Ir a una sección desde el índice
- **WHEN** la persona toca un capítulo del índice
- **THEN** el título de esa sección queda visible justo bajo la barra, sin quedar cortado arriba

### Requirement: «¿Te suena?» entre el hero y las tarjetas
Entre el hero y «¿Qué te está consumiendo el tiempo?» SHALL haber una sección salvia «¿Te suena?» con cuatro escenas en segunda persona que quien entra reconoce (no son clientes ni testimonios, son situaciones: turnos que se confirman cuando se puede mientras el cliente se cansa de esperar y busca otra opción, el stock en la cabeza de una persona, el reporte del lunes armado el domingo, las mismas preguntas por WhatsApp) y el cierre «Nada de esto se arregla con más horas tuyas. Se arregla con un sistema.». Reemplaza a la franja de servicios que corría.

#### Scenario: Lectura
- **WHEN** se llega a la sección
- **THEN** se ven las cuatro escenas como mensajes crema alternados a izquierda y derecha y el cierre, con una aparición sobria (ninguna con movimiento reducido)

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

### Requirement: Titulares de pocos renglones
Todo `h1` y `h2` SHALL ocupar dos renglones o menos desde 768 px (a 768, 1024, 1440 y 1920 px) y tres o menos en el celular; el h1 del hero puede llegar a tres renglones por debajo de 768 px.

#### Scenario: Cierre de contacto
- **WHEN** se ve el título del contacto
- **THEN** es «Contame cómo trabajás hoy.» (dos renglones o menos) y la bajada dice que responde ni bien ve el mensaje

### Requirement: Sin adornos que no dicen nada
Las secciones MUST NOT llevar etiquetas sobre el título («01 — Qué hago»), líneas finas ni cajas definidas solo por un borde de 1 px; el orden lo da el índice de la barra y las superficies se definen por su relleno. Ningún texto pensado para leerse SHALL medir menos de 13 px.

#### Scenario: Inspector
- **WHEN** se corre el inspector de la skill taste sobre el build
- **THEN** no marca etiquetas sobre títulos, líneas finas, cajas con borde ni texto menor a 13 px

### Requirement: La lima como acento escaso
La lima SHALL aparecer solo en los botones principales (el de la barra, el del hero, la tarjeta de WhatsApp y el «Contame» de «El próximo»), la pastilla `hola_mundo()` y a lo sumo una `m` del patrón, y MUST NOT usarse como fondo de las tarjetas de «Qué necesitás» ni de los casos, ni en títulos. Medido el 2026-10-30 sobre capturas: primera pantalla 1.7 % en escritorio (1440×900) y 4.6 % en celular (390×844) (antes de la reducción: 2.9 % y 7.8 %); página completa 1.4 % y 2.9 %. Esos valores SHALL ser el tope.

#### Scenario: Medición
- **WHEN** se miden los píxeles lima en capturas de la primera pantalla y de la página completa
- **THEN** están por debajo de esos topes

### Requirement: Contacto y pie entran juntos en una pantalla
En escritorio (1024 px o más), «Contacto» SHALL medir el alto de la ventana menos la barra y el pie, con su contenido al medio, de modo que al ir a «Contacto» desde el índice el pie quede entero. En ventanas bajas SHALL ocultar la franja del patrón (hasta 800 px de alto) y la línea que cambia (hasta 700 px) y compactar las tarjetas. Al llegar al final de la página en cualquier tamaño, el pie SHALL verse completo.

#### Scenario: Ir a Contacto
- **WHEN** se va a «Contacto» desde el índice a 1470×790, 1366×640, 1280×720 o 1024×768
- **THEN** el borde inferior del pie coincide con el de la ventana

#### Scenario: Final de la página
- **WHEN** se baja hasta el final en celular o escritorio
- **THEN** el pie se ve entero, sin cortarse
