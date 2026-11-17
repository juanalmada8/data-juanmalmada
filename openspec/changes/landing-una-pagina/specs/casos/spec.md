## ADDED Requirements

### Requirement: Dos casos reales contados en lenguaje claro
Los dos casos SHALL tener el mismo formato: dos partes con los mismos rótulos, «Qué es» (dentro de «Ver más») y «Qué armé» (el panel visible), de largo parecido (tres renglones en escritorio). Oral Odontología Familiar (oral.com.ar), cuyo eje es la autogestión de los pacientes: «Qué es» — «Un consultorio odontológico que coordinaba los turnos por mensaje de texto y con una agenda en papel.»; «Qué armé» — «Una web donde los pacientes reservan solos, con confirmación y recordatorio por mail, y un panel para el consultorio.» Staffy (jobs.wearestaffy.com): «Qué es» — «Un portal de empleo para profesionales IT que conecta personas con empresas de Latinoamérica y Estados Unidos.»; «Qué armé» — «El portal completo: lo que ven los candidatos, el panel de cada empresa, un filtro de candidatos con inteligencia artificial y avisos por mail.» Todo caso nuevo SHALL usar las mismas dos partes. MUST NOT copiar notas técnicas ni inventar métricas, resultados o funciones.

#### Scenario: Contenido de un caso
- **WHEN** se ve un caso
- **THEN** muestra el nombre, las partes «Qué es» y «Qué armé» (la última en un panel propio), el link al sitio y la captura o su marcador

### Requirement: Cada caso se titula por el resultado
El esquema de casos SHALL exigir un campo `resultado` (texto no vacío) que es el título (`h3`) de la tarjeta: «Los pacientes reservan solos.» (Oral) y «Candidatos filtrados con IA.» (Staffy). El nombre del cliente SHALL ir en una pastilla (`<p translate="no">`, `--fs-small`, peso 800, fondo del color del texto al 12 %) y, a la derecha en el mismo renglón, un botón chico «Visitar el sitio ↗» (`.boton.sec`, `min-height: var(--tap-min)`) con `aria-label` «Visitar el sitio de {nombre} (se abre en otra pestaña)». El orden de la tarjeta SHALL ser: captura, pastilla y botón, resultado, la última parte y «Ver más». Las tarjetas SHALL tener la misma altura, con «Ver más» al pie. La tarjeta «El próximo puede ser el tuyo» no cambia.

#### Scenario: Título de un caso
- **WHEN** se ve la tarjeta de Oral
- **THEN** el título es «Los pacientes reservan solos.» y «Oral Odontología Familiar» es la etiqueta de arriba

#### Scenario: Caso sin resultado
- **WHEN** a un caso publicado le falta `resultado`
- **THEN** el build falla indicando el archivo y el campo

#### Scenario: Contraste entre casos
- **WHEN** se ven los dos casos
- **THEN** uno es un consultorio local y el otro una plataforma para empresas
### Requirement: Los casos se ven a la vez, en una fila
Los casos SHALL presentarse como tarjetas sin pestañas, en una sola fila en escritorio (Oral, Staffy y una tarjeta que invita a sumar el próximo, con enlace a WhatsApp) y apiladas en el celular. Las capturas y el resultado de cada caso SHALL verse sin hacer clic; la sección puede pasar de una pantalla porque manda la imagen.

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

### Requirement: Capturas reales, arriba y grandes
Cada caso SHALL mostrar sus capturas reales (cargadas: Oral y Staffy, de páginas públicas y sin datos de personas) como lo primero de la tarjeta: la de escritorio en un marco de ventana a todo el ancho de la tarjeta y la de celu superpuesta abajo a la derecha, con texto alternativo y carga diferida. El texto visible SHALL ser solo la última parte (su título: «Hoy» en Oral, «Qué armé» en Staffy); las demás partes SHALL ir en un `<details>` con «Ver más». Si un caso futuro no tiene capturas, SHALL mostrar el marcador `[[FALTA: captura de <caso>]]`.

#### Scenario: Caso con capturas
- **WHEN** se ve un caso
- **THEN** la captura de escritorio está arriba y grande, y el texto visible es solo la última parte, con «Ver más» para el resto

#### Scenario: Captura faltante
- **WHEN** un caso futuro no tiene capturas
- **THEN** la página muestra el placeholder visible y el build informa cuáles faltan

### Requirement: Testimonio y video opcionales
El esquema de casos SHALL admitir `testimonio` (`texto`, `autor`, `rol`) y `video` (`src` dentro de `public/` y `poster`) como campos opcionales. Cada uno SHALL mostrarse solo si el caso lo trae: el testimonio como `<blockquote>` con `<cite>` y el video con `<video controls preload="none" poster>`, sin reproducción automática. MUST NOT inventarse ni mostrarse contenido de relleno.

#### Scenario: Caso sin testimonio ni video
- **WHEN** un caso no trae esos campos
- **THEN** no se dibuja nada para ellos

#### Scenario: Caso con testimonio
- **WHEN** un caso trae `testimonio`
- **THEN** aparece la cita con su autor y rol

### Requirement: Alta de casos sin tocar componentes
Agregar un caso SHALL requerir solo un archivo nuevo de contenido y sus imágenes, y SHALL validarse el esquema en el build.

#### Scenario: Caso nuevo
- **WHEN** se agrega un archivo de caso válido con `publicado: true`
- **THEN** aparece una pestaña nueva sin cambios de código

#### Scenario: Caso incompleto
- **WHEN** a un caso publicado le falta el nombre, el link, el resultado o sus partes
- **THEN** el build falla indicando el archivo y el campo

### Requirement: Link al sitio del caso
Cada caso SHALL enlazar al sitio real, abriéndolo en otra pestaña con `rel="noopener noreferrer"`.

#### Scenario: Ver el sitio
- **WHEN** la persona toca el link
- **THEN** se abre el sitio del cliente en una pestaña nueva
