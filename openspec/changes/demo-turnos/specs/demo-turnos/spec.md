## ADDED Requirements

### Requirement: Demo de turnos de ejemplo
El sitio SHALL ofrecer en `/demo/turnos` un turnero interactivo donde el visitante elige un día y un horario libres, completa un nombre y confirma la reserva.

#### Scenario: Reserva exitosa
- **WHEN** el visitante elige un horario libre, completa su nombre y confirma
- **THEN** ve el turno reservado con día y hora, y una vista de ejemplo del recordatorio que recibiría

#### Scenario: Horario ocupado
- **WHEN** el visitante intenta elegir un horario ya ocupado en la demo
- **THEN** el horario no se puede seleccionar y se indica que está ocupado

### Requirement: Contenido ficticio y señalado
Todo lo que muestra la demo SHALL ser de ejemplo y SHALL estar identificado como tal de forma visible; la demo MUST NOT presentarse como un cliente ni como un caso real.

#### Scenario: Identificación de la demo
- **WHEN** se abre la demo
- **THEN** se ve un aviso «Demo de ejemplo: los datos son de mentira» antes de cualquier interacción

### Requirement: Sin datos reales
La demo MUST NOT enviar a ningún servidor ni guardar de forma persistente lo que el visitante escribe.

#### Scenario: Recarga de la página
- **WHEN** el visitante recarga la demo
- **THEN** vuelve al estado inicial y no queda nada guardado

#### Scenario: Pedidos de red
- **WHEN** el visitante completa y confirma una reserva
- **THEN** no se realiza ningún pedido de red con sus datos

### Requirement: Explicación en criollo
Cada paso de la demo SHALL explicar en lenguaje llano qué hace el sistema y qué le ahorra al consultorio, sin cifras inventadas.

#### Scenario: Paso de confirmación
- **WHEN** se confirma una reserva
- **THEN** un texto explica que el recordatorio llega solo y evita ausencias, sin porcentajes ni números de ahorro

### Requirement: Usable con teclado y lector de pantalla
La demo SHALL poder completarse solo con teclado, con foco visible, y SHALL anunciar los resultados (turno reservado, errores) a los lectores de pantalla.

#### Scenario: Reserva solo con teclado
- **WHEN** alguien usa solo el teclado
- **THEN** puede elegir día, horario, completar el nombre y confirmar

#### Scenario: Movimiento reducido
- **WHEN** el sistema pide `prefers-reduced-motion: reduce`
- **THEN** la demo no usa animaciones

### Requirement: Funciona en el celular
La demo SHALL usarse sin scroll horizontal en pantallas desde 360 px, con áreas táctiles de al menos 44 px.

#### Scenario: Pantalla de 360 px
- **WHEN** se abre la demo en un celular de 360 px
- **THEN** todos los horarios y botones se pueden tocar sin zoom
