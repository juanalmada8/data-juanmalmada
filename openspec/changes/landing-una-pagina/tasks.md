# Tasks

## 1. Marca y base

- [x] 1.1 Recuperar los woff2 de DM Serif Display, Manrope y JetBrains Mono desde `feat/base`, borrar Martian Mono y Atkinson y actualizar `LICENSE.md`; verificar que `web/public/fonts/` solo tiene las del manual y el build pasa.
- [x] 1.2 Reescribir `tokens.css` y `base.css` con las fuentes y escalas del manual (títulos serif con itálica, etiquetas mono en mayúsculas con tracking); verificar con una página de prueba que carga las tres fuentes y que no quedan referencias a las anteriores (`git grep`).
- [x] 1.3 Actualizar `docs/specs/01-marca.md` (tipografías vuelven al manual) y registrar la decisión en `03-arquitectura.md`; verificar que ya no menciona Martian Mono ni Atkinson como vigentes.
- [x] 1.4 Recuperar `PatronM` de `feat/home` y adaptarlo (decorativo, `aria-hidden`); verificar que se ve sin costuras y que no queda detrás de texto.

## 2. Datos y colección de casos

- [x] 2.1 Completar `data/sitio.ts` (Instagram `almadaortiz.dev`, `url` `juanmalmada.com`, años «más de 7») y dejar el lema del manual para el pie; verificar que `npm run check` pasa y que el mail y los links viven solo ahí.
- [x] 2.2 Crear `data/temas.ts` (6 chips, frase, vista previa, mensaje de WhatsApp); verificar con un test del armado del link `wa.me` para cada tema y para «sin tema».
- [x] 2.3 Reemplazar la colección `proyectos` por `casos` con el esquema definido, cargar Oral y Staffy y borrar `content/proyectos/`; verificar que el build falla si falta nombre, link o bullets de un caso publicado.
- [x] 2.4 Chequeo de build que lista las capturas faltantes; verificar que informa Oral y Staffy mientras no estén.

## 3. Hero y selector

- [x] 3.1 Hero con titular, bajada, CTA y fila de chips; verificar en 390×844 y 360×640 que se ven titular, chips y CTA sin scrollear.
- [x] 3.2 Isla del selector (radiogroup, flechas, `aria-live`, transición, «Otra idea»); verificar con teclado y que no hay animación con `prefers-reduced-motion`.
- [x] 3.3 Vistas previas con capturas o patrones del manual y placeholders visibles; verificar que ninguna muestra una UI inventada.
- [x] 3.4 Degradación sin JavaScript (lista de temas); verificar con JavaScript desactivado.
- [x] 3.5 Actualizar el hero en `docs/specs/02-contenido.md`; verificar que coincide con lo construido.

## 4. Qué hago y Cómo trabajo

- [x] 4.1 Sección «Qué hago» con 5 tarjetas (problema → solución) y el cierre «¿Lo tuyo no está acá?»; verificar que ningún texto sugiere un solo tipo de proyecto y que no hay cifras ni palabras prohibidas.
- [x] 4.2 Sección «Cómo trabajo» (4 pasos, fila desde 768 px, vertical en celular); verificar a 360, 768 y 1440 px sin scroll horizontal.
- [x] 4.3 Hover de tarjetas y aparición al scroll; verificar el comportamiento con y sin `prefers-reduced-motion`.

## 5. Casos reales

- [x] 5.1 Componente de pestañas ARIA para los casos y sus datos; verificar navegación con flechas y que el cambio es de un clic.
- [x] 5.2 Marcos de celu/ventana en CSS y componente de captura con `astro:assets`, `alt` obligatorio, ancho/alto y lazy; verificar que el build falla sin `alt`.
- [x] 5.3 Placeholders de capturas de Oral y Staffy hasta que lleguen; verificar que se ven y que el chequeo de build los lista.
- [ ] 5.4 Con las capturas de Juanma (si ya llegaron), cargarlas y anonimizar datos de personas; verificar que ninguna muestra nombres ni teléfonos.
- [x] 5.5 Actualizar la plantilla de caso en `02-contenido.md`; verificar que lista los campos del esquema.

## 6. Contacto y barra fija

- [x] 6.1 Barra fija con `</j>`/`<jm>` y «Contame tu idea»; verificar que no tapa los títulos al navegar por anclas y que el CTA se ve completo en 360 px.
- [x] 6.2 Sección de contacto con WhatsApp, Instagram, mail, línea de presentación («más de 7 años»), firma y pie con el lema del manual y LinkedIn; verificar que los links abren bien, llevan `rel="noopener noreferrer"` y que el texto dice «más de 7 años».
- [x] 6.3 Conectar el tema elegido en el selector al mensaje de WhatsApp; verificar eligiendo cada chip y comprobando el texto del link.
- [x] 6.4 Verificar el tope de clics: barra → contacto → botón, y chip → CTA → botón; contar los clics con Playwright.

## 7. Limpieza

- [x] 7.1 Borrar `pages/proyectos/[slug].astro`, `Sistema`, `ParaQuien`, `SobreMi`, `PatronDatos` si no se usa y los componentes viejos; verificar que `/proyectos/x` da 404 y que `npm run check` y `build` pasan.
- [x] 7.2 Revisar la tabla de migración de `proposal.md`; verificar que cada punto del sitio anterior tiene su lugar o su razón anotada.
- [x] 7.3 Actualizar `docs/ROADMAP.md`, `docs/pendientes-juanma.md` (capturas pendientes), `02-contenido.md` (datos fijos: «más de 7 años») y `03-arquitectura.md`; verificar con `git grep "8 años\|8&nbsp;años"` que no quedan menciones de 8 años en docs ni en el sitio.

## 8. Verificación integrada

- [x] 8.1 Capturas en 360, 768 y 1440 px y con `prefers-reduced-motion`; verificar sin scroll horizontal y con la primera pantalla correcta en 390×844 y 360×640.
- [x] 8.2 Lighthouse móvil (Rendimiento, Accesibilidad y SEO ≥ 90) y peso del JavaScript < 15 kB comprimido; verificar con el informe adjunto al PR.
- [x] 8.3 Contraste AA y navegación completa por teclado y lector de pantalla; verificar con la lista de 04-calidad.
- [x] 8.4 Pasar `revisor-de-marca` sobre la página final; verificar que no deja observaciones abiertas.
- [ ] 8.5 Compartir el link en una vista previa de WhatsApp/Instagram; verificar la imagen Open Graph de la marca.

## 9. Ajustes tras la primera revisión de Juanma (2026-10-29)

- [x] 9.1 Barra más alta con aire alrededor del logo y borde suave en lugar de la línea dura; verificar a 1466 px que hay al menos 12 px entre el logo y la línea y que el logo mide 100 px o más.
- [x] 9.2 Hero a pantalla completa en escritorio con la banda del patrón al pie; verificar a 1466×820 que «Qué hago» no asoma y que en 360×640 y 390×844 siguen entrando titular, chips y CTA.
- [x] 9.3 Navegación por secciones: enlaces con la sección actual marcada (escritorio), nombre de la sección (celular) y línea de progreso; verificar scrolleando a cada sección que cambia la marca, que la barra no tapa los títulos y que no hay animación con `prefers-reduced-motion`.
- [x] 9.4 Tipografía fiel a la lámina del manual (interlineado del cuerpo 1.5, bajada en Manrope Medium, `hola_mundo()` en minúsculas); verificar las tipografías y tamaños calculados en el navegador.
- [x] 9.5 Capturas en 360, 768 y 1466 px, Lighthouse móvil, axe y `revisor-de-marca`; verificar que los puntajes siguen en 95 o más y que el revisor no deja observaciones abiertas.
- [x] 9.6 Actualizar `01-marca`, `02-contenido` y el registro de decisiones; verificar que describen la barra y el hero como quedaron.

## 10. Giro: letras con carácter, índice numerado y hero vivo (2026-10-29)

- [x] 10.1 Tipografía con más carácter (H1 hasta 80 px apretado, interlineado bajo 1.0, números grandes en serif) en `tokens.css`/`base.css`; verificar los tamaños calculados en el navegador a 360 y 1466 px.
- [x] 10.2 Ritmo pino · crema · salvia · crema · pino con sus temas y el pie; verificar con capturas que no hay dos secciones seguidas del mismo fondo y que el contraste sigue en AA (axe).
- [x] 10.3 Hero oscuro con `<jm▌>` grande en escritorio y chips sobre fondo oscuro; verificar a 1466×820 que llena la pantalla y a 360×640 que siguen entrando titular, chips y CTA.
- [x] 10.4 El selector cambia el fondo del hero (mezcla pino→musgo) y reescribe la bajada, con datos en `temas.ts` y tests; verificar los seis temas en el navegador (tono, bajada, titular intacto) y el contraste de cada tono con axe.
- [x] 10.5 Barra con índice numerado y tramos de progreso por capítulo (escritorio y celular); verificar scrolleando que el tramo se llena por capítulo, que el actual queda marcado y que a 360 px nada se corta.
- [x] 10.6 Microinteracciones (flecha en CTA, firma que se revela, respuesta al presionar chips, números grandes de «Cómo trabajo»); verificar con y sin `prefers-reduced-motion`.
- [x] 10.7 Capturas en 360, 768 y 1466 px, Lighthouse móvil, axe, conteo de clics y `revisor-de-marca`; verificar puntajes de 95 o más y sin observaciones abiertas.
- [x] 10.8 Actualizar `01-marca`, `02-contenido` y el registro de decisiones; verificar que describen lo construido.

## 11. Nuevo frente con la skill taste (2026-10-29)

- [x] 11.1 Medir la lima de base (píxeles en primera pantalla y página, escritorio y celular) y fijar los topes; verificar con el script de medición y dejar los números en el PR.
- [x] 11.2 Escenario fijo en escritorio con tres estados (hero, qué hago, casos) y su cambio por sección; verificar a 1466×820 scrolleando que no se mueve, que cambia de tono y de contenido y que en <1024 px no existe.
- [x] 11.3 Hero, «Qué hago» y «Casos» como columna de lectura (sin tarjetas, líneas ni etiquetas sobre los títulos); verificar con el inspector que no marca eyebrow, hairline, outlined-box ni small-text.
- [x] 11.4 «Cómo trabajo» a ancho completo sobre salvia y «Contacto» con título corto y la pregunta como bajada; verificar que todos los h1/h2 miden dos renglones o menos a 390, 768 y 1440 px.
- [x] 11.5 Lima reducida (CTA, logo y una `m`); verificar con el script que la primera pantalla y la página están al menos 30 % por debajo de la base en escritorio y celular.
- [x] 11.6 Espaciado: secciones separadas por 120 px o más, una sola medida de lectura, sin franjas vacías; verificar con el inspector (frame, lopsided, empty-screens) y a ojo en 360, 768 y 1466 px.
- [x] 11.7 Revisar el código con la skill `web-design-guidelines` y corregir lo que marque; verificar re-corriendo la revisión.
- [x] 11.8 Lighthouse móvil, axe, clics, primera pantalla en 360×640 y `revisor-de-marca`; verificar que nada empeora respecto de los valores de la tarea 10.7.
- [x] 11.9 Actualizar `01-marca`, `02-contenido` y el registro de decisiones; verificar que describen lo construido.

## 12. Híbrido clásico (escenario a la derecha)

- [x] 12.1 Escenario a la derecha como panel con aire, lectura alineada con la barra y DOM en orden visual; verificar a 1024, 1440 y 1920 px.
- [x] 12.2 Línea de hechos reales y enlaces directos en el hero; verificar contraste, voseo y que el test de copy pasa.
- [x] 12.3 `revisor-de-marca`, axe, Lighthouse y capturas; commit y PR.

## 13. Tarjetas a ancho completo (referencias de Juanma)

- [x] 13.1 Sacar el panel fijo y el selector; hero con titular desde el problema, stickers y enlaces directos; franja; verificar a 360, 768 y 1440 px.
- [x] 13.2 Seis tarjetas por necesidad (WhatsApp con su tema), casos como tarjetas, contacto en tarjetas, barra en píldora; verificar contraste (test) y axe.
- [x] 13.3 Actualizar specs, `01-marca`, `02-contenido` y el registro de decisiones; `openspec validate`.
- [x] 13.4 `revisor-de-marca`, Lighthouse y capturas para Juanma; commit y PR.

## 14. Lo que enseñaron thoughtbot, Etch y artobaweb

- [x] 14.1 Bajada del hero con lo concreto; presentación «Soy Juanma» con firma en el hero; verificar a 390 y 1440 px.
- [x] 14.2 Grilla «Y otras cosas que armé» alimentada por `proyectos.ts` (oculta si está vacía); probada con datos de ejemplo y revertida.
- [ ] 14.3 Cargar los proyectos reales cuando Juanma los pase.

## 15. Estructura de thoughtbot (barra y hero pino)

- [x] 15.1 Barra pino a ancho completo y hero pino con marcos de color; verificar a 390, 1024 y 1440 px.
- [x] 15.2 Caso destacado, franja salvia y cierre con pregunta; verificar axe, Lighthouse y lima.
- [x] 15.3 `revisor-de-marca`, commit y PR.

## Workflow follow-up

- Archivar el cambio (`/opsx:archive`) al mergear.
- Publicar en producción es un cambio aparte (`publicar-sitio`).
