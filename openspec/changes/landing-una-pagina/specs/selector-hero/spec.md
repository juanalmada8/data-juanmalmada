## ADDED Requirements

### Requirement: Titular desde el problema del visitante
El h1 del hero SHALL ser «Tu negocio, más simple y bajo control.» (con «bajo control» en itálica de acento, en dos renglones fijos), seguido de la bajada «Armo soluciones a medida: sistemas de gestión, bots con inteligencia artificial, webs y tableros con tus datos. Para que ahorres tiempo, trabajes más cómodo y sepas en todo momento qué pasa en tu negocio.» y el botón «Charlemos». No SHALL hablar solo de «negocios»: Juanma aplica a todo lo que se pueda mejorar.

#### Scenario: Primera pantalla
- **WHEN** se abre la página
- **THEN** el titular habla de lo que le pasa a quien entra (todo depende de él), no de Juanma, y el CTA se ve sin scrollear

### Requirement: Datos de confianza y contacto directo en el hero
El hero SHALL mostrar, bajo «O escribime directo», los cuatro canales en pastillas (WhatsApp, Instagram, LinkedIn y mail, en ese orden, desde `redes` en `sitio.ts`) y una línea de confianza con los hechos de `sitio.ts` («Más de 7 años armando sistemas · Trabajo en forma remota en todo el país»), más el carrusel «Lo que puedo armar» (ver `landing` y el requisito de abajo). No SHALL mostrar plazos de respuesta, menciones a «gratis», la ciudad, testimonios, logos ni cifras que no estén confirmadas.

#### Scenario: Hero en 360 px
- **WHEN** se ve el hero en un celular de 360 px
- **THEN** los cuatro enlaces miden al menos 44 px de alto táctil y el carrusel se apila debajo sin desbordar

### Requirement: Sin selector interactivo ni panel fijo
La página MUST NOT tener un selector de chips que cambie el hero ni un panel fijo con vista previa: la elección de «qué necesitás» ocurre en las tarjetas, donde cada una lleva directo a WhatsApp.

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** se ve y funciona todo igual (las tarjetas son enlaces)

### Requirement: Carrusel «Lo que puedo armar» pausable y sin movimiento forzado
El hero SHALL llevar un carrusel (`<section aria-roledescription="carrusel" aria-label="Lo que puedo armar">`) con seis diapositivas (`role="group"`, `aria-roledescription="diapositiva"`, `aria-label="N de 6"`): Turnos online, Bots con inteligencia artificial, Sistemas de gestión, Tableros con tus datos, Webs y tiendas online, Portales y plataformas. Cada una SHALL ser una tarjeta crema (`--radius-tarjeta`) con una ilustración de interfaz en HTML/CSS con tokens (decorativa, `aria-hidden`, sin números ni nombres de personas), el nombre en serif `--fs-tarjeta` y una línea en `--fs-small`. Los controles SHALL ser seis puntos (`aria-label="Ir a la diapositiva N"`, el actual con `aria-current="true"`) y un botón «Pausar» / «Reanudar» con `aria-pressed`, todos de 44 px táctiles. Con JavaScript SHALL avanzar solo cada 5 s en bucle con `scrollTo({ behavior: "smooth" })`, y MUST pausarse con el mouse encima, con foco de teclado adentro, al tocar y con el botón (WCAG 2.2.2). Con `prefers-reduced-motion: reduce` MUST arrancar en pausa («Reanudar») y sin animación. Sin JavaScript la pista (`overflow-x: auto`, `scroll-snap-type: x mandatory`) SHALL poder deslizarse y los controles ocultarse.

#### Scenario: Rota sola y se pausa
- **WHEN** nadie interactúa con el carrusel
- **THEN** pasa a la diapositiva siguiente cada 5 s; con el mouse encima, con foco de teclado adentro o tras «Pausar» no avanza, y «Reanudar» lo retoma

#### Scenario: Movimiento reducido
- **WHEN** la persona pidió movimiento reducido
- **THEN** el carrusel no avanza solo, el botón dice «Reanudar» y los puntos cambian de diapositiva sin animación

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** las seis diapositivas se recorren deslizando la pista, los controles no se ven y la página no tiene scroll horizontal
