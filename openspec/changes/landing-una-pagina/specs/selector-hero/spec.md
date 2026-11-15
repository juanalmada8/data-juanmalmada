## ADDED Requirements

### Requirement: Titular desde el problema del visitante
El h1 del hero SHALL ser «Todo anda. Pero el sistema sos vos.» (con «sos vos» en itálica de acento y «Todo anda.» solo en su renglón), seguido de la bajada «Turnos por WhatsApp que coordinás a mano, pedidos anotados en un cuaderno y números repartidos en una planilla que solo vos entendés. Diseño e implemento un sistema para que el negocio funcione con menos tareas manuales, y te enseño a usarlo.» (deja claro que hoy es manual pero simple, sin dar a entender que ya hay automatización) y el CTA «Contame cómo trabajás hoy». No SHALL hablar solo de «negocios»: Juanma aplica a todo lo que se pueda mejorar. El hero SHALL incluir una presentación en primera persona con su firma.

#### Scenario: Primera pantalla
- **WHEN** se abre la página
- **THEN** el titular habla de lo que le pasa a quien entra (todo depende de él), no de Juanma, y el CTA se ve sin scrollear

### Requirement: Datos de confianza y contacto directo en el hero
El hero SHALL mostrar enlaces directos a WhatsApp, Instagram y mail (en ese orden) y una presentación con los hechos de `sitio.ts`: más de 7 años de oficio y «Trabajo en forma remota y respondo ni bien veo tu mensaje». No SHALL mostrar plazos de respuesta, la ciudad, testimonios, logos ni cifras que no estén confirmadas.

#### Scenario: Hero en 360 px
- **WHEN** se ve el hero en un celular de 360 px
- **THEN** los tres enlaces miden al menos 44 px de alto táctil y el cuaderno se apila sin desbordar

### Requirement: Sin selector interactivo ni panel fijo
La página MUST NOT tener un selector de chips que cambie el hero ni un panel fijo con vista previa: la elección de «qué necesitás» ocurre en las tarjetas, donde cada una lleva directo a WhatsApp.

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript está desactivado
- **THEN** se ve y funciona todo igual (las tarjetas son enlaces)
