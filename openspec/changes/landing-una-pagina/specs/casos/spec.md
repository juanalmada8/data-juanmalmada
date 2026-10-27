## ADDED Requirements

### Requirement: Dos casos reales de mundos distintos
La sección SHALL mostrar el caso de Oral Odontología Familiar (oral.com.ar: web, reserva de turnos online con confirmación y recordatorio por mail, lista de espera y panel de gestión) y el de Staffy (jobs.wearestaffy.com: portal de empleo IT que conecta profesionales con empresas de Latinoamérica y Estados Unidos; frontend del portal con vacantes, detalle y postulación en pocos pasos, y su backend).

#### Scenario: Contenido de un caso
- **WHEN** se abre un caso
- **THEN** muestra el nombre, una línea de qué es, tres bullets cortos de qué se armó, capturas y un link al sitio

#### Scenario: Contraste entre casos
- **WHEN** se ven los dos casos
- **THEN** uno es un consultorio local y el otro una plataforma para empresas

### Requirement: Cambiar de caso con un clic
Los casos SHALL presentarse en pestañas, de modo que cambiar de caso lleve un solo clic, con navegación por teclado y roles de pestaña.

#### Scenario: Cambiar de caso
- **WHEN** la persona toca la pestaña del otro caso
- **THEN** ve ese caso sin recargar ni scrollear a otra parte

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
