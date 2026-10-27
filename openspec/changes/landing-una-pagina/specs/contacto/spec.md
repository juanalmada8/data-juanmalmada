## ADDED Requirements

### Requirement: Cierre con contacto directo
La sección de contacto SHALL titularse «¿Tenés un negocio, un consultorio, una empresa o una idea? Armemos el sistema.» y ofrecer botones directos a WhatsApp, Instagram y mail, con WhatsApp como principal.

#### Scenario: Botones visibles
- **WHEN** se llega a la sección
- **THEN** los tres botones se ven a la vez, sin scroll adicional en el celular

### Requirement: Dos clics hasta WhatsApp o Instagram
Desde cualquier punto de la página, abrir WhatsApp o Instagram SHALL requerir como máximo dos clics, y el chip, el CTA y el botón de contacto SHALL sumar como máximo tres desde el hero.

#### Scenario: Desde la barra fija
- **WHEN** la persona toca «Contame tu idea» en la barra y luego un botón de contacto
- **THEN** llegó a WhatsApp o Instagram en dos clics

#### Scenario: Desde el hero con un tema elegido
- **WHEN** la persona elige un chip, toca el CTA del hero y luego WhatsApp
- **THEN** llegó en tres clics

### Requirement: Mensaje de WhatsApp precargado con el tema
El botón de WhatsApp SHALL abrir el chat con un mensaje que nombre el tema elegido: «Hola Juanma, quiero armar una web o app», «…una plataforma», «…un sistema de turnos», «…un sistema de gestión», «…algo con mis datos» u «Hola Juanma, tengo una idea para armar» si eligió «Otra idea».

#### Scenario: Sin tema elegido
- **WHEN** no se eligió ningún chip
- **THEN** el mensaje es «Hola Juanma, te escribo desde la web.»

### Requirement: Datos de contacto en un solo lugar
Los enlaces de WhatsApp, Instagram, mail y LinkedIn SHALL definirse en un único archivo de datos, y los externos SHALL abrir con `rel="noopener noreferrer"`.

#### Scenario: Cambio del mail
- **WHEN** se cambia el mail en el archivo de datos
- **THEN** se actualiza en toda la página

### Requirement: Presentación breve
La sección SHALL incluir una línea que diga que Juanma es ingeniero de datos y desarrollador full stack con experiencia en equipos y empresas de distintos rubros, que trabaja desde General Belgrano de forma remota para todo el país, junto con su firma.

#### Scenario: Años de experiencia
- **WHEN** la línea menciona los años de experiencia
- **THEN** usa el valor que Juanma confirme (ver pregunta abierta de `design.md`)

### Requirement: LinkedIn en el pie
El pie SHALL conservar el link a LinkedIn y el lema, sin ocupar un botón del contacto principal.

#### Scenario: Pie de página
- **WHEN** se llega al final
- **THEN** se ven el link a LinkedIn, la base («General Belgrano · 100% remoto») y el año
