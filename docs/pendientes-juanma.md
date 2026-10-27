# Pendientes de Juanma

Cosas que **solo Juanma puede decidir o proveer**. Los agentes no las resuelven inventando: dejan un marcador
`[[FALTA: …]]` en el sitio y suman la pregunta acá. Al responder, mové la respuesta a la spec que corresponda
y sacala de esta lista.

## Decisiones abiertas

1. **Dirección de correo.** Propuesta: `hola@juanmalmada.com`. Lo vemos más adelante (tarea 1.7).
2. **Cuentas para el deploy.** Cloudflare Pages ya está conectado al repo: para el corte (2.10) alcanza con cambiar la config
   en el dashboard. Para la API (Cloud Run) hace falta una cuenta de Google Cloud con facturación activada (tier gratis, pero pide tarjeta).

## Para más adelante (no bloquean)

- **Tiempos de entrega** («una web simple: 2–3 semanas»). Mientras no estén, «Cómo trabajo» no muestra tiempos.
- **Demos vivas** (un turnero o un tablero de ejemplo que se pueda probar en la web). Ideas sueltas, sin apuro.

## Contenido

- [ ] **Capturas de Oral (oral.com.ar) y de Staffy (jobs.wearestaffy.com)**, en celu y/o en ventana, sin datos de
  personas. Hasta entonces la web muestra `[[FALTA: captura de …]]` (el build las lista) y **no se publica así**.
  Se cargan en `web/src/assets/` y se referencian en `web/src/content/casos/<caso>.md` (campo `capturas`, con `alt`).
  Tarea 5.4 de `openspec/changes/landing-una-pagina`.
- [ ] Confirmar la URL de Instagram (se asume `instagram.com/almadaortiz.dev`).
- [ ] Más casos reales: clínicas y empresas de RRHH (hay experiencia, falta elegir qué contar).
- [ ] Si «Fuera del código» (hockey, cocina, rock nacional, viajes) vuelve en otra versión: hoy quedó afuera por el tope de 5 secciones.

## Resuelto (2026-10-10)

Stack, hosting y mail (ver `03-arquitectura.md`) · el sitio actual lo sirve Cloudflare Pages desde la raíz de `main` · «más de 7 años» (2026-10-27) · dominio principal juanmalmada.com · titular «Todo el sistema, un solo proveedor.» · no se nombran empresas · perfiles con experiencia:
clínicas y RRHH · todo a presupuesto · canales: WhatsApp, Instagram, mail · respuesta en menos de 24 h hábiles ·
sin foto · assets de marca completos · Instagram `almadaortiz.dev`.
