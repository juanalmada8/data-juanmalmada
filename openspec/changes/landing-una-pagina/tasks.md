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

- [ ] 4.1 Sección «Qué hago» con 5 tarjetas (problema → solución) y el cierre «¿Lo tuyo no está acá?»; verificar que ningún texto sugiere un solo tipo de proyecto y que no hay cifras ni palabras prohibidas.
- [ ] 4.2 Sección «Cómo trabajo» (4 pasos, fila desde 768 px, vertical en celular); verificar a 360, 768 y 1440 px sin scroll horizontal.
- [ ] 4.3 Hover de tarjetas y aparición al scroll; verificar el comportamiento con y sin `prefers-reduced-motion`.

## 5. Casos reales

- [ ] 5.1 Componente de pestañas ARIA para los casos y sus datos; verificar navegación con flechas y que el cambio es de un clic.
- [ ] 5.2 Marcos de celu/ventana en CSS y componente de captura con `astro:assets`, `alt` obligatorio, ancho/alto y lazy; verificar que el build falla sin `alt`.
- [ ] 5.3 Placeholders de capturas de Oral y Staffy hasta que lleguen; verificar que se ven y que el chequeo de build los lista.
- [ ] 5.4 Con las capturas de Juanma (si ya llegaron), cargarlas y anonimizar datos de personas; verificar que ninguna muestra nombres ni teléfonos.
- [ ] 5.5 Actualizar la plantilla de caso en `02-contenido.md`; verificar que lista los campos del esquema.

## 6. Contacto y barra fija

- [ ] 6.1 Barra fija con `</j>`/`<jm>` y «Contame tu idea»; verificar que no tapa los títulos al navegar por anclas y que el CTA se ve completo en 360 px.
- [ ] 6.2 Sección de contacto con WhatsApp, Instagram, mail, línea de presentación («más de 7 años»), firma y pie con el lema del manual y LinkedIn; verificar que los links abren bien, llevan `rel="noopener noreferrer"` y que el texto dice «más de 7 años».
- [ ] 6.3 Conectar el tema elegido en el selector al mensaje de WhatsApp; verificar eligiendo cada chip y comprobando el texto del link.
- [ ] 6.4 Verificar el tope de clics: barra → contacto → botón, y chip → CTA → botón; contar los clics con Playwright.

## 7. Limpieza

- [ ] 7.1 Borrar `pages/proyectos/[slug].astro`, `Sistema`, `ParaQuien`, `SobreMi`, `PatronDatos` si no se usa y los componentes viejos; verificar que `/proyectos/x` da 404 y que `npm run check` y `build` pasan.
- [ ] 7.2 Revisar la tabla de migración de `proposal.md`; verificar que cada punto del sitio anterior tiene su lugar o su razón anotada.
- [ ] 7.3 Actualizar `docs/ROADMAP.md`, `docs/pendientes-juanma.md` (capturas pendientes), `02-contenido.md` (datos fijos: «más de 7 años») y `03-arquitectura.md`; verificar con `git grep "8 años\|8&nbsp;años"` que no quedan menciones de 8 años en docs ni en el sitio.

## 8. Verificación integrada

- [ ] 8.1 Capturas en 360, 768 y 1440 px y con `prefers-reduced-motion`; verificar sin scroll horizontal y con la primera pantalla correcta en 390×844 y 360×640.
- [ ] 8.2 Lighthouse móvil (Rendimiento, Accesibilidad y SEO ≥ 90) y peso del JavaScript < 15 kB comprimido; verificar con el informe adjunto al PR.
- [ ] 8.3 Contraste AA y navegación completa por teclado y lector de pantalla; verificar con la lista de 04-calidad.
- [ ] 8.4 Pasar `revisor-de-marca` sobre la página final; verificar que no deja observaciones abiertas.
- [ ] 8.5 Compartir el link en una vista previa de WhatsApp/Instagram; verificar la imagen Open Graph de la marca.

## Workflow follow-up

- Archivar el cambio (`/opsx:archive`) al mergear.
- Publicar en producción es un cambio aparte (`publicar-sitio`).
