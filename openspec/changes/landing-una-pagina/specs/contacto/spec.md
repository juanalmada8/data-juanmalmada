## ADDED Requirements

### Requirement: Cierre con contacto directo
La sección de contacto SHALL titularse «Contame cómo trabajás hoy.», con la bajada «Un mensaje alcanza. Respondo ni bien lo veo y vemos juntos qué conviene armar primero.» y ofrecer dos botones («Contame por WhatsApp», principal en lima, y «Prefiero mail», secundario) e Instagram como enlace aparte, sin tarjetas. MUST NOT prometer un plazo de respuesta.

#### Scenario: Canales visibles
- **WHEN** se llega a la sección
- **THEN** los botones y el enlace a Instagram se ven sin scroll adicional en escritorio

### Requirement: Dos clics hasta WhatsApp o Instagram
Desde cualquier punto de la página, abrir WhatsApp o Instagram SHALL requerir como máximo dos clics; desde una tarjeta de «¿Qué te está comiendo el tiempo?» o desde el enlace directo del hero, un clic.

#### Scenario: Desde la barra fija
- **WHEN** la persona toca «Charla sin costo» en la barra y luego un botón de contacto
- **THEN** llegó a WhatsApp o Instagram en dos clics

#### Scenario: Desde una tarjeta
- **WHEN** la persona toca «Esto me pasa» en una tarjeta de «¿Qué te está comiendo el tiempo?»
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
La sección SHALL incluir una presentación que diga que Juanma es ingeniero de datos y desarrollador full stack con más de 7 años armando sistemas en empresas de distintos rubros, y también para negocios y proyectos que necesitan el suyo; que trabaja en forma remota y que se habla siempre con él, junto con su firma. MUST NOT nombrar la ciudad ni limitarse a un tipo de cliente («consultorios»).

#### Scenario: Años de experiencia
- **WHEN** la línea menciona los años de experiencia
- **THEN** dice «más de 7 años», el valor que Juanma confirmó, y no otro

### Requirement: LinkedIn en el pie
El pie SHALL conservar el link a LinkedIn y el lema, sin ocupar un botón del contacto principal.

#### Scenario: Pie de página
- **WHEN** se llega al final
- **THEN** se ven el lema del manual «Un solo proveedor, todo el sistema.», el link a LinkedIn, «Argentina · 100% remoto» y el año

### Requirement: Palabras que rotan en el cierre
El cierre SHALL incluir la línea «Armemos el sistema de tu equipo / empresa / idea / negocio.» con la última palabra cambiando en una sola pasada de menos de 5 s al llegar a la sección y terminando en «negocio», solo con CSS. Sin JavaScript o con movimiento reducido se ve directamente «negocio», y el lector de pantalla lee la frase completa una sola vez.

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** se ve «Armemos el sistema de tu negocio.» sin animación
