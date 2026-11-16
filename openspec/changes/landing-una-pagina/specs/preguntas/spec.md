## ADDED Requirements

### Requirement: Preguntas que me hacen siempre
La página SHALL tener, entre «Cómo trabajo» y «Contacto», una sección crema `#preguntas` titulada «Preguntas que me hacen siempre.» con un acordeón de `<details>`/`<summary>`, todo cerrado al inicio, en una columna de lectura, sin cajas con borde (las preguntas se separan con aire y van en serif), con estas cinco: «¿Cuánto sale?» («Depende de lo que haga falta. Después de la primera charla te paso una propuesta por escrito, por etapas, para que decidas tranquilo.»), «¿Tengo que saber de tecnología?» («No. Vos me contás cómo trabajás y yo me ocupo de la parte técnica. Después te enseño a usar lo que armamos.»), «Ya uso planillas o un sistema. ¿Hay que tirar todo?» («No. Partimos de lo que ya tenés: si sirve, lo conectamos; si no, pasamos los datos al sistema nuevo.»), «¿Qué pasa cuando está terminado?» («Queda andando y te enseño a usarlo. Si querés, seguimos con soporte y mejoras todos los meses.») y «¿Trabajás con gente de cualquier parte del país?» («Sí. Trabajo en forma remota, así que no importa dónde estés.»). Las respuestas MUST NOT traer cifras, precios ni plazos.

#### Scenario: Estado inicial
- **WHEN** se abre la página
- **THEN** las cinco preguntas se ven y todas las respuestas están cerradas

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado y la persona toca o activa con el teclado una pregunta
- **THEN** su respuesta se abre y el marcador pasa de «+» a «−»

#### Scenario: Teclado y foco
- **WHEN** la persona navega con Tab
- **THEN** cada pregunta recibe el foco con un anillo visible y mide al menos 44 px de alto

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** las respuestas abren sin animación (el acordeón no anima en ningún caso)
