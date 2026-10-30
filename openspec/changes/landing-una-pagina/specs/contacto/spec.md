## ADDED Requirements

### Requirement: Cierre con contacto directo
La sección de contacto SHALL cerrar con la pregunta «¿Cómo se ve el éxito para tu negocio?» como título, con la bajada «Sea un negocio, un consultorio, una empresa o una idea, contámelo y armemos el sistema.» (una afirmación, sin segunda pregunta), y ofrecer dos tarjetas grandes («Contame tu idea», por WhatsApp, y «Tengo una pregunta», por mail) e Instagram como enlace aparte, con WhatsApp como principal.

#### Scenario: Canales visibles
- **WHEN** se llega a la sección
- **THEN** las dos tarjetas y el enlace a Instagram se ven sin scroll adicional en escritorio

### Requirement: Dos clics hasta WhatsApp o Instagram
Desde cualquier punto de la página, abrir WhatsApp o Instagram SHALL requerir como máximo dos clics; desde una tarjeta de «¿Qué necesitás?» o desde el enlace directo del hero, un clic.

#### Scenario: Desde la barra fija
- **WHEN** la persona toca «Contame tu idea» en la barra y luego un botón de contacto
- **THEN** llegó a WhatsApp o Instagram en dos clics

#### Scenario: Desde una tarjeta
- **WHEN** la persona toca «Contame esto» en una tarjeta de «¿Qué necesitás?»
- **THEN** llegó a WhatsApp con el mensaje de esa tarjeta en un clic

### Requirement: Mensaje de WhatsApp precargado con el tema
El enlace de WhatsApp de cada tarjeta de «¿Qué necesitás?» SHALL abrir el chat con un mensaje que nombre su tema: «Hola Juanma, quiero armar una web o app», «…una plataforma», «…un sistema de turnos», «…un sistema de gestión», «…algo con mis datos» u «Hola Juanma, tengo una idea para armar» en la tarjeta «Otra idea». Los enlaces fuera de las tarjetas usan el mensaje genérico.

#### Scenario: Enlace fuera de las tarjetas
- **WHEN** se abre WhatsApp desde el hero o el contacto
- **THEN** el mensaje es «Hola Juanma, te escribo desde la web.»

### Requirement: Datos de contacto en un solo lugar
Los enlaces de WhatsApp, Instagram, mail y LinkedIn SHALL definirse en un único archivo de datos, y los externos SHALL abrir con `rel="noopener noreferrer"`.

#### Scenario: Cambio del mail
- **WHEN** se cambia el mail en el archivo de datos
- **THEN** se actualiza en toda la página

### Requirement: Presentación breve
La sección SHALL incluir una línea que diga que Juanma es ingeniero de datos y desarrollador full stack con más de 7 años de experiencia en equipos y empresas de distintos rubros, que trabaja desde General Belgrano de forma remota para todo el país, junto con su firma.

#### Scenario: Años de experiencia
- **WHEN** la línea menciona los años de experiencia
- **THEN** dice «más de 7 años», el valor que Juanma confirmó, y no otro

### Requirement: LinkedIn en el pie
El pie SHALL conservar el link a LinkedIn y el lema, sin ocupar un botón del contacto principal.

#### Scenario: Pie de página
- **WHEN** se llega al final
- **THEN** se ven el lema del manual «Un solo proveedor, todo el sistema.», el link a LinkedIn, la base («General Belgrano · 100% remoto») y el año
