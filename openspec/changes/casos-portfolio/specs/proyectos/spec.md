## MODIFIED Requirements

### Requirement: Colección de casos tipada
Los casos SHALL vivir en `web/src/content/proyectos/` como Markdown con la plantilla de 02-contenido (titulo, cliente, rubro, tamanio, anio, servicios, stack, resultado, ahorro, nombre_publico, portada, publicado). El esquema SHALL rechazar el build si falta un campo obligatorio.

#### Scenario: Caso no publicado
- **WHEN** un caso tiene `publicado: false`
- **THEN** no genera página ni aparece en la home

#### Scenario: Caso publicado
- **WHEN** un caso tiene `publicado: true`
- **THEN** se genera `/proyectos/<slug>` y aparece en la lista de la home

#### Scenario: Campo obligatorio faltante
- **WHEN** un caso publicado no tiene `resultado` o `stack`
- **THEN** el build falla con un mensaje que indica el archivo y el campo

## ADDED Requirements

### Requirement: Estructura fija de la página de un caso
La página de un caso SHALL presentar, en este orden: antes, qué se armó, cómo quedó, qué ahorran hoy y, si hay, lo técnico.

#### Scenario: Sección sin dato confirmado
- **WHEN** el cliente no confirmó un ahorro
- **THEN** la sección «qué ahorran hoy» no se muestra y no se reemplaza por una estimación

#### Scenario: Lectura para no técnicos
- **WHEN** una persona sin conocimientos técnicos lee el caso
- **THEN** entiende qué cambió sin necesitar la sección «lo técnico»

### Requirement: Cliente anónimo por defecto
El caso SHALL mostrar el rubro y el tamaño del cliente, y SHALL mostrar su nombre solo si `nombre_publico` es verdadero.

#### Scenario: Cliente que no autorizó su nombre
- **WHEN** `nombre_publico` es falso
- **THEN** la página muestra «Consultorio odontológico» (rubro y tipo), nunca el nombre ni el logo

### Requirement: Capturas reales y accesibles
Las capturas de un caso SHALL ser del sistema real, con texto alternativo que describa lo que muestran, con ancho y alto declarados y cargadas con lazy loading debajo del primer pantallazo.

#### Scenario: Captura con datos de personas
- **WHEN** una captura muestra datos de pacientes o clientes
- **THEN** esos datos están anonimizados antes de publicarse

### Requirement: Recorrido entre casos
Cada caso SHALL enlazar al caso siguiente (si existe) y al contacto.

#### Scenario: Último caso
- **WHEN** el caso es el último de la lista
- **THEN** solo muestra el enlace al contacto
