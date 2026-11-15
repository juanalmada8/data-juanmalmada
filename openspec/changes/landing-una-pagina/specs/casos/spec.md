## ADDED Requirements

### Requirement: Dos casos reales de mundos distintos
La sección SHALL mostrar el caso de Oral Odontología Familiar (oral.com.ar: web, reserva de turnos online con confirmación y recordatorio por mail, lista de espera y panel de gestión) y el de Staffy (jobs.wearestaffy.com: portal de empleo IT que conecta profesionales con empresas de Latinoamérica y Estados Unidos; frontend del portal con vacantes, detalle y postulación en pocos pasos, y su backend).

#### Scenario: Contenido de un caso
- **WHEN** se abre un caso
- **THEN** muestra el nombre, una línea de qué es, tres bullets cortos de qué se armó, capturas y un link al sitio

#### Scenario: Contraste entre casos
- **WHEN** se ven los dos casos
- **THEN** uno es un consultorio local y el otro una plataforma para empresas

### Requirement: Los casos se ven a la vez, como tarjetas grandes
Los casos SHALL presentarse como tarjetas grandes de color, sin pestañas: el primero como caso destacado a ancho completo (texto a la izquierda y captura a la derecha en escritorio) y los demás lado a lado, seguidas de una tarjeta que invita a sumar el próximo (enlace a WhatsApp).

#### Scenario: Ver los dos casos
- **WHEN** la persona llega a «Cosas que armé»
- **THEN** ve nombre, una línea, los bullets, el link y la captura (o su marcador) de cada caso sin hacer clic

### Requirement: Otras cosas que armé, de una línea cada una
Debajo de los casos, «Y otras cosas que armé» SHALL listar proyectos de una línea cada uno, de rubros distintos, desde `web/src/data/proyectos.ts`. Mientras esa lista esté vacía la grilla MUST NOT mostrarse, y cada línea SHALL contener solo lo que Juanma contó, sin nombres de empresas ni cifras no confirmadas.

#### Scenario: Lista vacía
- **WHEN** `proyectos.ts` no tiene entradas
- **THEN** no se ve el título ni la grilla

#### Scenario: Línea nueva
- **WHEN** se agrega una entrada con su fragmento destacado
- **THEN** aparece como tarjeta con ese fragmento en negrita, sin tocar componentes

### Requirement: Solo lo que Juanma describió
Los casos MUST NOT incluir métricas, ahorros, testimonios ni funciones que Juanma no haya descrito.

#### Scenario: Bullet nuevo
- **WHEN** se agrega un bullet a un caso
- **THEN** sale de lo que Juanma contó, no de una suposición

### Requirement: Capturas reales, con placeholder visible si faltan
Cada caso SHALL mostrar capturas reales dentro de un marco de celular o de ventana, con texto alternativo, ancho y alto, y SHALL mostrar un marcador `[[FALTA: captura de <caso>]]` si no hay captura.

#### Scenario: Captura faltante
- **WHEN** un caso no tiene capturas
- **THEN** la página muestra el placeholder visible y el build informa cuáles faltan

### Requirement: Alta de casos sin tocar componentes
Agregar un caso SHALL requerir solo un archivo nuevo de contenido y sus imágenes, y SHALL validarse el esquema en el build.

#### Scenario: Caso nuevo
- **WHEN** se agrega un archivo de caso válido con `publicado: true`
- **THEN** aparece una pestaña nueva sin cambios de código

#### Scenario: Caso incompleto
- **WHEN** a un caso publicado le falta el nombre, el link o los bullets
- **THEN** el build falla indicando el archivo y el campo

### Requirement: Link al sitio del caso
Cada caso SHALL enlazar al sitio real, abriéndolo en otra pestaña con `rel="noopener noreferrer"`.

#### Scenario: Ver el sitio
- **WHEN** la persona toca el link
- **THEN** se abre el sitio del cliente en una pestaña nueva
