## ADDED Requirements

### Requirement: Cierre con contacto directo
La sección de contacto SHALL titularse «Contame qué necesitás.» (con «necesitás» en itálica), con la bajada «Escribime y lo charlamos. Con un mensaje alcanza.» (sin plazos de respuesta ni «gratis»), y ofrecer los **cuatro canales juntos** como tarjetas iguales, en este orden: WhatsApp («Es lo más rápido.», en lima y destacado), Instagram («Lo que voy armando.»), LinkedIn («Mi recorrido.») y Mail («Si preferís escribir con calma.»), las tres últimas en salvia; 2×2 en celular y una fila desde 64 rem. Cada tarjeta lleva el ícono de la red (SVG en línea, monocromo, decorativo), el nombre en serif, el detalle y una flecha, y toda ella es el enlace.

#### Scenario: Canales visibles
- **WHEN** se llega a la sección
- **THEN** las cuatro tarjetas se ven sin scroll adicional en escritorio

### Requirement: Dos clics hasta WhatsApp o Instagram
Desde cualquier punto de la página, abrir WhatsApp o Instagram SHALL requerir como máximo dos clics; desde una tarjeta de «¿Te suena alguna de estas?» o desde el enlace directo del hero, un clic.

#### Scenario: Desde la barra fija
- **WHEN** la persona toca «Charlemos» en la barra y luego una tarjeta de contacto
- **THEN** llegó a WhatsApp o Instagram en dos clics

#### Scenario: Desde una tarjeta
- **WHEN** la persona toca «Esto me pasa» en una tarjeta de «¿Te suena alguna de estas?»
- **THEN** llegó a WhatsApp con el mensaje de esa tarjeta en un clic

### Requirement: Mensaje de WhatsApp precargado con el tema
El enlace de WhatsApp de cada tarjeta SHALL abrir el chat con el problema de esa tarjeta ya escrito en primera persona (p. ej. «Hola Juanma, me escriben y me llaman todo el día para turnos o pedidos y quiero ordenarlo.»; la fuente es `web/src/data/temas.ts`). Los enlaces fuera de las tarjetas usan el mensaje base, que termina abierto.

#### Scenario: Enlace fuera de las tarjetas
- **WHEN** se abre WhatsApp desde el hero o el contacto
- **THEN** el mensaje es «Hola Juanma, vi tu web. Hoy hago esto a mano: » (abierto, para que la persona siga con su caso)

### Requirement: Datos de contacto en un solo lugar
Los enlaces de WhatsApp, Instagram, LinkedIn y mail SHALL definirse en un único archivo de datos (`redes` en `sitio.ts`, con nombre, url y detalle) y renderizarse con un único componente (`Redes.astro`, variantes «pastillas» y «tarjetas»). Hero, Contacto y pie SHALL mostrar siempre los cuatro canales y en el mismo orden (WhatsApp, Instagram, LinkedIn, mail); los externos SHALL abrir con `target="_blank"` y `rel="noopener noreferrer"` y avisarlo con un texto `sr-only`. Los íconos SHALL ser SVG en línea (trazos de Simple Icons, CC0, y un sobre simple para el mail), monocromos y `aria-hidden`.

#### Scenario: Cambio del mail
- **WHEN** se cambia el mail en el archivo de datos
- **THEN** se actualiza en toda la página (hero, contacto y pie)

### Requirement: Sin presentación en el contacto
La sección de contacto MUST NOT incluir el texto de presentación («Soy Juanma…») ni la firma: pasaron a la sección «Una nota de Juanma» (ver `landing`). Contacto SHALL quedar con título, bajada y las cuatro tarjetas de canales, en una sola columna.

#### Scenario: Revisión del cierre
- **WHEN** se mira la sección de contacto
- **THEN** no hay presentación ni firma, y Contacto más el pie entran en una pantalla de escritorio

### Requirement: Los cuatro canales en el pie
El pie SHALL mostrar el lema y los cuatro canales en pastillas (el mismo componente que el hero), en lugar del link suelto a LinkedIn.

#### Scenario: Pie de página
- **WHEN** se llega al final
- **THEN** se ven el lema del manual «Un solo proveedor, todo el sistema.», las cuatro pastillas (WhatsApp, Instagram, LinkedIn, Mail), «Argentina · 100% remoto» y el año

### Requirement: Sin línea que rota
El cierre MUST NOT incluir la línea que cambiaba de palabra («Armemos el sistema de tu …») ni su animación.

#### Scenario: Revisión del cierre
- **WHEN** se mira la sección de contacto
- **THEN** no hay texto que cambie solo y el CSS no tiene la animación de las palabras

### Requirement: Botón flotante de WhatsApp
En celular y tablet (menos de 64 rem de ancho) SHALL haber una pastilla fija abajo a la derecha (fondo lima, texto pino, «WhatsApp →», respetando `env(safe-area-inset-bottom)`, de al menos 44 px de alto) que abre WhatsApp en otra pestaña (`rel="noopener noreferrer"` y aviso solo para lector de pantalla). SHALL aparecer recién después de pasar el hero y esconderse cuando «Contacto» o el pie están a la vista, así no tapa el botón de contacto ni el pie. Sin JavaScript queda siempre visible, con movimiento reducido no tiene transición y en escritorio no se muestra.

#### Scenario: Pasar el hero
- **WHEN** en un celular la persona baja hasta que el hero sale de la pantalla
- **THEN** aparece la pastilla; sobre el hero no se ve

#### Scenario: Llegar a Contacto
- **WHEN** «Contacto» (o el pie) entra en la pantalla
- **THEN** la pastilla se esconde y deja de poder recibir el foco

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** la pastilla se ve siempre en celular y tablet
