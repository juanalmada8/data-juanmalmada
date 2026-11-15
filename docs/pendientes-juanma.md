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
  personas. Hasta entonces la web muestra `[[FALTA: captura]]` con el nombre del caso arriba (el build las lista) y **no se publica así**.
  Se cargan en `web/src/assets/` y se referencian en `web/src/content/casos/<caso>.md` (campo `capturas`, con `alt`).
  Tarea 5.4 de `openspec/changes/landing-una-pagina`.
- [ ] **Precio del plan mensual** (no va en la web, pero lo vas a necesitar para la propuesta): qué incluye y cuánto sale.
- [ ] **Oral, si querés contarlo con más calor**: que es el consultorio de tu mamá y que antes los turnos llegaban a su celular. Hoy la web lo dice sin nombrarla; contarlo es decisión tuya.
- [ ] **Integraciones que hacés de verdad** (WhatsApp, Mercado Pago, Google Calendar, CRM…): si me las decís, las nombro en las tarjetas; da confianza local. No las puse sin tu confirmación.
- [ ] **Datos legales en el pie** (nombre completo, ciudad, CUIT si querés): en Argentina tranquiliza a quien desconfía; la competencia local lo muestra. Decisión tuya.
- [ ] Confirmar la URL de Instagram (se asume `instagram.com/almadaortiz.dev`).
- [ ] **Otros proyectos para «Cosas que armé»** (estilo Etch: una línea cada uno, de rubros distintos; propios o internos, sin nombres de
  empresas). Con 5 o 6 líneas la web comunica «hago lo que sea» sin un titular. No se inventan. Se cargan en
  `web/src/data/proyectos.ts`; mientras esté vacío, la grilla no se muestra.
- [ ] **Dos tonos nuevos, mezclas de tu paleta** (propuesta): `--papel` (crema + 30 % salvia) para una tarjeta y `--musgo-hondo` (musgo + 40 % pino) para dos tarjetas y el marco «años de oficio» del hero, porque crema sobre musgo puro no llega a 4.5:1. Confirmar o pedir otra cosa.
- [ ] **«Lo que hago / Lo que no hago»** (idea de Humaan): los textos los redacté yo como compromisos de cualquier profesional serio; revisalos, cambialos o sumá los tuyos (con tu humor). Están en `web/src/components/secciones/ComoTrabajo.astro`. También el manifiesto de «¿Qué necesitás?» y las palabras que rotan en el cierre. Dejé **fuera**, hasta que lo valides, dos compromisos con peso: «Usar tus datos para otra cosa que no sea tu proyecto» (protección de datos, clínicas y RRHH) y «Esconder cómo funciona lo que armo» (transparencia/código); si querés alguno, decime cómo lo querés prometer.
- [ ] Más casos reales: clínicas y empresas de RRHH (hay experiencia, falta elegir qué contar).
- [ ] Si «Fuera del código» (hockey, cocina, rock nacional, viajes) vuelve en otra versión: hoy quedó afuera por el tope de 5 secciones.

## Resuelto (2026-10-10)

Stack, hosting y mail (ver `03-arquitectura.md`) · el sitio actual lo sirve Cloudflare Pages desde la raíz de `main` · «más de 7 años» (2026-10-27) · dominio principal juanmalmada.com · titular «Todo el sistema, un solo proveedor.» · no se nombran empresas · perfiles con experiencia:
clínicas y RRHH · todo a presupuesto · canales: WhatsApp, Instagram, mail · respuesta (quitado el 2026-11-15: ya no se promete un plazo) ·
sin foto · assets de marca completos · Instagram `almadaortiz.dev`.
