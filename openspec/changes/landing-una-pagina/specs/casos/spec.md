## ADDED Requirements

### Requirement: Dos casos reales contados en lenguaje claro
La sección SHALL mostrar el caso de Oral Odontología Familiar (oral.com.ar), cuyo eje es la autogestión de los pacientes («Antes»: los turnos se coordinaban por mensaje de texto y con una agenda en papel; «Hoy»: los pacientes reservan por su cuenta, reciben la confirmación y el recordatorio por mail, y el consultorio ve todo en un panel), y el de Staffy (jobs.wearestaffy.com) en tres partes («Qué es», «Qué armé», «Hoy»): un portal de empleo para profesionales IT que conecta personas con empresas de Latinoamérica y Estados Unidos; el portal con lo que ven los candidatos y el panel de cada empresa, un primer filtro de candidatos con inteligencia artificial y avisos automáticos por mail; y la mejora de su plataforma de recursos humanos. MUST NOT copiar notas técnicas ni inventar métricas, resultados o funciones.

#### Scenario: Contenido de un caso
- **WHEN** se ve un caso
- **THEN** muestra el nombre, dos o tres partes cortas con la última (la solución o lo que sigue hoy) en un panel propio, el link al sitio y la captura o su marcador

#### Scenario: Contraste entre casos
- **WHEN** se ven los dos casos
- **THEN** uno es un consultorio local y el otro una plataforma para empresas
### Requirement: Los casos se ven a la vez, en una fila
Los casos SHALL presentarse como tarjetas sin pestañas, en una sola fila en escritorio (Oral, Staffy y una tarjeta que invita a sumar el próximo, con enlace a WhatsApp) y apiladas en el celular. La sección completa SHALL entrar en una pantalla de 1470×790.

#### Scenario: Ver los casos
- **WHEN** la persona llega a «Cosas que armé»
- **THEN** ve los casos a la vez, sin hacer clic ni scrollear dentro de la sección
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
- **WHEN** a un caso publicado le falta el nombre, el link o sus partes
- **THEN** el build falla indicando el archivo y el campo

### Requirement: Link al sitio del caso
Cada caso SHALL enlazar al sitio real, abriéndolo en otra pestaña con `rel="noopener noreferrer"`.

#### Scenario: Ver el sitio
- **WHEN** la persona toca el link
- **THEN** se abre el sitio del cliente en una pestaña nueva
