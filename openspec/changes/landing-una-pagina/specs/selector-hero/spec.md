## ADDED Requirements

### Requirement: Titular desde el problema del visitante
El h1 del hero SHALL ser «Tu negocio, más simple y bajo control.» (con «bajo control» en itálica de acento, en dos renglones fijos), seguido de la bajada «Armo soluciones a medida: sistemas de gestión, bots con inteligencia artificial, webs y tableros con tus datos. Para que ahorres tiempo, trabajes más cómodo y sepas en todo momento qué pasa en tu negocio.» y el botón «Charlemos». No SHALL hablar solo de «negocios»: Juanma aplica a todo lo que se pueda mejorar. El hero SHALL incluir una presentación en primera persona («Soy Juanma. Armo las dos puntas: lo que ven tus clientes y lo que ves vos.») con su firma.

#### Scenario: Primera pantalla
- **WHEN** se abre la página
- **THEN** el titular habla de lo que le pasa a quien entra (todo depende de él), no de Juanma, y el CTA se ve sin scrollear

### Requirement: Datos de confianza y contacto directo en el hero
El hero SHALL mostrar enlaces directos a WhatsApp, Instagram y mail (en ese orden) y marcos de color con los hechos de `sitio.ts`: más de 7 años de oficio, que trabaja en forma remota desde Argentina. No SHALL mostrar plazos de respuesta, menciones a «gratis», la ciudad, testimonios, logos ni cifras que no estén confirmadas.

#### Scenario: Hero en 360 px
- **WHEN** se ve el hero en un celular de 360 px
- **THEN** los tres enlaces miden al menos 44 px de alto táctil y los marcos se apilan sin desbordar

### Requirement: Sin selector interactivo ni panel fijo
La página MUST NOT tener un selector de chips que cambie el hero ni un panel fijo con vista previa: la elección de «qué necesitás» ocurre en las tarjetas, donde cada una lleva directo a WhatsApp.

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** se ve y funciona todo igual (las tarjetas son enlaces)
