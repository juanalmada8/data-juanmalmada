# Tasks

## 1. Diseño del flujo

- [ ] 1.1 Definir con Juanma el flujo (días, horarios, datos pedidos) y escribirlo en `design.md`; verificar con su aprobación en la revisión de la propuesta.
- [ ] 1.2 Redactar los textos «en criollo» de cada paso sin cifras; verificar contra la lista de palabras prohibidas de 02-contenido.

## 2. Construcción

- [ ] 2.1 Página `/demo/turnos` con aviso de ejemplo y estructura accesible; verificar que el aviso se ve antes de cualquier control.
- [ ] 2.2 Lógica del turnero con datos de muestra en el cliente; verificar los escenarios de reserva exitosa y horario ocupado con tests del módulo.
- [ ] 2.3 Vista de ejemplo del recordatorio; verificar que está rotulada como ejemplo.
- [ ] 2.4 Teclado, foco visible y anuncios para lectores de pantalla; verificar recorriendo la demo solo con teclado y con VoiceOver.
- [ ] 2.5 Comprobar que no hay pedidos de red al confirmar; verificar en las herramientas del navegador (pestaña Red).
- [ ] 2.6 Capturas a 360, 768 y 1440 px y con `prefers-reduced-motion`; verificar sin scroll horizontal y con áreas táctiles de 44 px.

## 3. Acceso y cierre

- [ ] 3.1 Enlace desde «Turnos y sistemas de gestión» y desde la home; verificar que el JS de la home no crece (medir gzip antes y después).
- [ ] 3.2 Pasar `revisor-de-marca`; verificar que no deja observaciones abiertas.
- [ ] 3.3 Actualizar ROADMAP, `03-arquitectura.md` y `02-contenido.md` (mapa del sitio); verificar que describen lo que hay.
