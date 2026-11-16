## ADDED Requirements

### Requirement: Cierre con contacto directo
La sección de contacto SHALL titularse «Contame qué necesitás.» (con «necesitás» en itálica), con la bajada «Escribime y lo charlamos. Con un mensaje alcanza.» (sin plazos de respuesta ni «gratis»), y ofrecer dos tarjetas grandes («Contame por WhatsApp» / «Es lo más rápido.» y «Prefiero mail» / «Si preferís escribir con calma.») e Instagram como enlace aparte, con WhatsApp como principal.

#### Scenario: Canales visibles
- **WHEN** se llega a la sección
- **THEN** las dos tarjetas y el enlace a Instagram se ven sin scroll adicional en escritorio

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
Los enlaces de WhatsApp, Instagram, mail y LinkedIn SHALL definirse en un único archivo de datos, y los externos SHALL abrir con `rel="noopener noreferrer"`.

#### Scenario: Cambio del mail
- **WHEN** se cambia el mail en el archivo de datos
- **THEN** se actualiza en toda la página

### Requirement: Presentación breve
La sección SHALL incluir una presentación que diga «Soy Juanma, ingeniero de datos y desarrollador full stack. Hace más de 7 años que armo sistemas para empresas de distintos rubros, y también para negocios y proyectos que necesitan el suyo. Trabajo en forma remota y hablás siempre conmigo.», junto con su firma (la firma vive solo acá). MUST NOT nombrar la ciudad ni limitarse a un tipo de cliente («consultorios»).

#### Scenario: Años de experiencia
- **WHEN** la línea menciona los años de experiencia
- **THEN** dice «más de 7 años», el valor que Juanma confirmó, y no otro

### Requirement: LinkedIn en el pie
El pie SHALL conservar el link a LinkedIn y el lema, sin ocupar un botón del contacto principal.

#### Scenario: Pie de página
- **WHEN** se llega al final
- **THEN** se ven el lema del manual «Un solo proveedor, todo el sistema.», el link a LinkedIn, «Argentina · 100% remoto» y el año

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
