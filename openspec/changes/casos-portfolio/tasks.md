# Tasks

## 1. Esquema y plantilla

- [ ] 1.1 Agregar `stack` y `nombre_publico` al esquema de `content.config.ts`; verificar que `npm run check` falla si falta `stack` en un caso publicado.
- [ ] 1.2 Actualizar `web/src/content/proyectos/turnos-consultorio.md` con los campos nuevos (todo `[[FALTA]]` si no hay dato); verificar que `npm run build` pasa con `publicado: false`.
- [ ] 1.3 Actualizar la plantilla de caso en `docs/specs/02-contenido.md`; verificar que lista los mismos campos que el esquema.

## 2. Página del caso

- [ ] 2.1 Maquetar las secciones fijas (antes, qué armé, cómo quedó, qué ahorran, lo técnico) en `[slug].astro`; verificar con un caso de prueba `publicado: true` en 360, 768 y 1440 px.
- [ ] 2.2 Fallar el build si un caso publicado no tiene `## Antes` o `## Cómo quedó`; verificar con un caso de prueba incompleto.
- [ ] 2.3 Mostrar rubro y tamaño en lugar del nombre cuando `nombre_publico` es falso; verificar que el HTML generado no contiene el nombre del cliente.
- [ ] 2.4 Enlaces al caso siguiente y al contacto; verificar con dos casos de prueba.

## 3. Capturas

- [ ] 3.1 Componente de captura con `astro:assets`, `alt` obligatorio, ancho/alto y lazy loading; verificar que el build falla sin `alt`.

## 4. Primer caso real

- [ ] 4.1 Recibir de Juanma los datos y capturas del consultorio y anonimizar las capturas; verificar que ninguna muestra nombres ni teléfonos.
- [ ] 4.2 Escribir el caso en la voz de marca, sin cifras sin confirmar, y pasar el subagente `revisor-de-marca`; verificar que no deja observaciones abiertas.
- [ ] 4.3 Publicar el caso (`publicado: true`) y sacar el «en preparación» de la home; verificar la home y `/proyectos/<slug>` en 360, 768 y 1440 px y con `prefers-reduced-motion`.

## 5. Cierre

- [ ] 5.1 Actualizar `docs/pendientes-juanma.md`, el ROADMAP (4.1 y 4.2) y el registro de decisiones; verificar que no quedan `[[FALTA]]` del caso publicado.
