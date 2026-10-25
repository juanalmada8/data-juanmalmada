# Tasks

## 1. Antes del corte

- [ ] 1.1 Verificar que el build de `web/` en una vista previa de PR funciona con la configuración propuesta (raíz `web`, `npm run build`, salida `dist`, Node 22); verificar abriendo la URL de vista previa del PR.
- [ ] 1.2 Agregar `web/public/_headers` con las cabeceras de seguridad; verificar con `curl -I` sobre la vista previa.
- [ ] 1.3 Chequeo de build que falla si `web/dist` contiene `[[FALTA`; verificar con un build de prueba que lo incluye.
- [ ] 1.4 Confirmar con Juanma las condiciones de publicación (caso del consultorio o aceptar «en preparación»); verificar con su respuesta registrada en el PR.
- [ ] 1.5 Pasar `revisor-de-marca` sobre el build final; verificar que no deja observaciones abiertas.
- [ ] 1.6 Confirmar que el contacto del sitio viejo (mail, WhatsApp, LinkedIn) está en el nuevo; verificar abriendo los tres enlaces.

## 2. Corte

- [ ] 2.1 Cambiar la configuración de Pages (con Juanma o con su acceso); verificar que el despliegue termina en verde.
- [ ] 2.2 Purgar la caché y verificar `title` de la home, enlaces principales y que `/docs/...` y `/AGENTS.md` dan 404 (`curl`).
- [ ] 2.3 Probar HTTPS, la redirección de `www` y las cabeceras en el dominio real; verificar con `curl -I`.
- [ ] 2.4 Probar el rollback una vez en una vista previa (volver al despliegue anterior); verificar que funciona y anotar los pasos en el PR.

## 3. Después del corte

- [ ] 3.1 PR aparte que mueve `index.html` y `styles.css` a `legacy/`; verificar que el sitio publicado no cambia.
- [ ] 3.2 Actualizar ROADMAP (2.10), `03-arquitectura.md` y `AGENTS.md` (comandos y estructura); verificar que describen lo que hay.

## Workflow follow-up

- Borrar `legacy/` en un PR aparte, solo cuando Juanma lo confirme.
