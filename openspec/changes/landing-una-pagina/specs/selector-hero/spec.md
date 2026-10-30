## ADDED Requirements

### Requirement: Titular desde el problema del visitante
El h1 del hero SHALL ser «Lo que hoy hacés a mano, que lo haga el sistema.» (con «el sistema» en itálica de acento), seguido de una bajada que nombra lo concreto («Armo webs, apps, turnos, sistemas de gestión y reportes que se actualizan solos: lo que tu negocio necesite.») y el CTA «Contame tu idea». El hero SHALL incluir también una presentación en primera persona («Soy Juanma, ingeniero de datos y desarrollador full stack.») con la firma de Juanma.

#### Scenario: Primera pantalla
- **WHEN** se abre la página
- **THEN** el titular habla de lo que el visitante hace hoy, no de Juanma, y el CTA se ve sin scrollear

### Requirement: Datos de confianza y contacto directo en el hero
El hero SHALL mostrar enlaces directos a WhatsApp, Instagram y mail (en ese orden) y stickers con los hechos de `sitio.ts`: más de 7 años de oficio, respuesta en menos de 24 h hábiles y la base. No SHALL mostrar testimonios, logos ni cifras que no estén confirmadas.

#### Scenario: Hero en 360 px
- **WHEN** se ve el hero en un celular de 360 px
- **THEN** los tres enlaces miden al menos 44 px de alto táctil y los stickers se apilan sin desbordar

### Requirement: Sin selector interactivo ni panel fijo
La página MUST NOT tener un selector de chips que cambie el hero ni un panel fijo con vista previa: la elección de «qué necesitás» ocurre en las tarjetas, donde cada una lleva directo a WhatsApp.

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** se ve y funciona todo igual (las tarjetas son enlaces)
