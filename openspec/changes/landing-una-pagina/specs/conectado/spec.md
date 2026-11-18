## ADDED Requirements

### Requirement: Sección «Todo conectado» con cuatro tarjetas bento
Entre «Cosas que armé» y «Qué resuelvo» SHALL haber una sección `#conectado` (`seccion-ancha tema-crema`) titulada en dos renglones «Lo que necesitás,» / «todo conectado en *un solo lugar*.» (`h2`, con «un solo lugar» en itálica). SHALL mostrar cuatro tarjetas de color, en este orden: «Turnos online» (pino; «Tus clientes eligen día y horario solos.»), «Bots con inteligencia artificial» (salvia; «Contestan las consultas aunque estés ocupado.»), «Sistemas de gestión» (papel; «Clientes, pedidos y stock en un solo lugar.») y «Tableros con tus datos» (musgo hondo; «Ves qué funciona y qué no, al día.»). Cada tarjeta SHALL llevar arriba una ilustración de interfaz hecha en HTML y CSS con los tokens de la marca y, abajo a la izquierda, el título (serif) y la línea. Debajo de la grilla, alineado a la izquierda, SHALL ir el enlace «¿Lo tuyo es otra cosa? Contámelo» a `#contacto`. Las ilustraciones MUST NOT usar imágenes de stock, nombres de personas ni cifras de facturación o resultados.

#### Scenario: Escritorio
- **WHEN** el ancho es de 64 rem o más
- **THEN** las tarjetas forman una grilla 2×2 de alto ≈ 20 rem con anchos alternados (7fr + 5fr en la primera fila, 5fr + 7fr en la segunda), sin borde y con `--radius-tarjeta`

#### Scenario: Tablet y celular
- **WHEN** el ancho está entre 40 y 64 rem, o es menor a 40 rem
- **THEN** en el primer caso hay dos columnas iguales y en el segundo una sola columna, con alto automático y sin scroll horizontal

#### Scenario: Cada tarjeta muestra su producto
- **WHEN** se mira cada tarjeta
- **THEN** «Turnos online» muestra un calendario de cinco días (lun–vie) con uno marcado en lima, tres horarios (09:00, 10:30 marcado, 16:00) y la notificación «✓ Turno confirmado»; «Bots con inteligencia artificial», dos globos de chat («¿Hacen envíos al interior?» y «¡Sí, a todo el país! ¿Querés que te pase precios y medios de pago?», sin hablar de turnos); «Sistemas de gestión», una tabla de tres pedidos (#128 Entregado, #129 En camino, #130 Nuevo) con etiqueta de estado; y «Tableros con tus datos», seis barras (la última en lima) y la notificación «Actualizado hoy»

### Requirement: Las ilustraciones son decorativas y el texto es el accesible
El dibujo de cada tarjeta SHALL llevar `aria-hidden="true"`; el título y la línea SHALL ser el texto accesible, y la sección MUST funcionar sin JavaScript.

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla recorre la sección
- **THEN** lee el título, cuatro tarjetas con su título y su línea, y el enlace final, sin leer el contenido de los dibujos

#### Scenario: Contraste
- **WHEN** se evalúa cada par de texto y fondo (crema sobre pino y musgo hondo; pino sobre salvia, papel, lima, crema y blanco)
- **THEN** todos pasan 4.5:1 (lo vigila `web/tests/temas.test.mjs`) y axe no marca violaciones

### Requirement: Solo las notificaciones se mueven
Con JavaScript y sin movimiento reducido, las notificaciones flotantes («✓ Turno confirmado» y «Actualizado hoy») SHALL entrar una sola vez con un leve desplazamiento y fundido al aparecer la tarjeta (clase `.visible` de `[data-aparece]`). Nada más en la sección SHALL moverse.

#### Scenario: Movimiento reducido
- **WHEN** la persona tiene `prefers-reduced-motion: reduce`
- **THEN** las notificaciones se ven desde el principio, sin animación

#### Scenario: Sin JavaScript
- **WHEN** el JavaScript no corre
- **THEN** la sección y sus notificaciones se ven completas
