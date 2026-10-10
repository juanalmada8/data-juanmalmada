# 04 — Calidad

Dos listas: **que no parezca IA** y **definición de hecho**. Son una guía para revisar antes de cerrar una tarea;
si algún ítem no aplica o Juanma decide otra cosa, se ajusta la lista.

## Que no parezca hecho por IA

La regla general: **cada elemento tiene que poder responder «¿por qué está acá?»** con algo que salga de la marca,
del contenido real o de una necesidad del usuario. Si la respuesta es «porque las landings tienen esto», va afuera.

### Composición
- [ ] No es el esqueleto de siempre (hero centrado + dos botones + tres tarjetas con ícono + testimonios + CTA).
      Si se parece, reordená con jerarquía real: un elemento manda, los demás acompañan.
- [ ] Las grillas tienen ritmo: tamaños distintos, alternancia oscuro/claro/color, algún elemento que rompe la grilla
      (sticker rotado, firma, patrón que se sale del borde). Nada de N tarjetas idénticas solo por llenar.
- [ ] Alineaciones exactas: todo cae en la grilla o tiene un motivo para salirse. Bordes ópticos revisados
      (comillas, títulos grandes en serif, íconos).
- [ ] La asimetría es intencional y escasa, no ruido.

### Estética
- [ ] Sin blobs con blur, gradientes de malla, glow, glassmorphism, neón ni «noise» decorativo.
- [ ] Sin sombras difusas grandes. Sin `rounded-2xl + shadow-lg` en todo.
- [ ] Sin íconos en cada tarjeta por reflejo. Ningún ícono de cohete, rayo, cerebro o chispitas ✨.
- [ ] Sin mockups falsos (ventanas de navegador con UI inventada, gráficos de mentira). Solo capturas reales.
      (El editor de la home no es un mockup: es la interfaz real del sitio y todo funciona.)
- [ ] Sin fotos de stock ni imágenes generadas por IA. El sitio no lleva foto de Juanma.
- [ ] Sin emojis en la interfaz.

### Movimiento
- [ ] Animaciones con propósito: el cursor que titila, una aparición sobria al entrar en pantalla, hover con respuesta clara.
- [ ] Nada de contadores animados, parallax en todo, texto que se escribe solo en cada título, ni cursores custom.
- [ ] `prefers-reduced-motion: reduce` apaga todo lo no esencial (el cursor queda fijo).

### Texto
- [ ] Nada de la lista de prohibidos de `02-contenido.md`.
- [ ] Datos reales o marcador `[[FALTA: …]]`. Cero testimonios, métricas, logos o clientes inventados.
- [ ] Cada párrafo dice algo concreto (un ejemplo, un tiempo, un resultado). Si se puede borrar sin perder nada, se borra.
- [ ] Sin rayas largas (—) en cada frase, sin tríadas de adjetivos, sin «no solo… sino también».
- [ ] Ortotipografía de `01-marca.md` (comillas latinas, ¿¡, sentence case, `…`, `&nbsp;`).

## Definición de hecho

### Técnica
- [ ] `npm run build` y `npm run check` sin errores ni warnings nuevos.
- [ ] Sin errores en consola del navegador.
- [ ] HTML semántico: un `h1` por página, jerarquía de títulos sin saltos, `header`/`main`/`footer`/`nav`, `lang="es-AR"`.
- [ ] Todo color/tipo/espacio sale de `tokens.css`.
- [ ] Imágenes con `width`/`height`, `alt` útil (o `alt=""` si son decorativas), formatos modernos, lazy debajo del pliegue.
- [ ] Links externos con `rel="noopener noreferrer"`.

### Backend (`api/`)
- [ ] `ruff check`, `ruff format --check`, chequeo de tipos y `pytest` en verde (también en CI).
- [ ] Cada endpoint tiene tests del caso feliz, de validación (422) y de abuso (rate limit / honeypot).
- [ ] Entradas validadas con Pydantic; nada de datos del usuario en logs más allá de lo necesario.
- [ ] Sin secretos en el código ni en los commits; nuevas variables documentadas en `.env.example`.
- [ ] CORS limitado al origen del front. Errores devuelven JSON con mensaje entendible, sin stack traces.
- [ ] `GET /health` responde.

### Formularios
- [ ] Funcionan sin JS (POST normal + redirección) y mejoran con JS.
- [ ] Cada campo con `<label>` visible, `autocomplete` correcto y error asociado con `aria-describedby`.
- [ ] Estados de envío, error y éxito redactados en la voz de marca.

### Accesibilidad
- [ ] Contrastes según la tabla de `01-marca.md` (nada de lima/salvia sobre crema para texto).
- [ ] Navegable entero con teclado; foco visible y con estilo de marca (no el outline por defecto borrado).
- [ ] Áreas táctiles ≥ 44×44 px.
- [ ] El cursor animado y los patrones decorativos con `aria-hidden="true"`.

### Responsive
- [ ] Capturas revisadas en **360**, **768**, **1440** px. Sin scroll horizontal. El hero se entiende en 360 sin scrollear.
- [ ] Probado con zoom de texto al 200%.

### Performance
- [ ] Lighthouse móvil ≥ 95 en Performance, Accesibilidad, Buenas prácticas y SEO.
- [ ] JS de la home < 15 kB gzip. Fuentes con `preload` solo para las que se ven arriba del pliegue.

### Cierre
- [ ] Tarea tildada en `docs/ROADMAP.md`.
- [ ] Decisiones no triviales en el registro de `03-arquitectura.md`.
- [ ] Faltantes nuevos anotados en `docs/pendientes-juanma.md`.
- [ ] Subagente `revisor-de-marca` corrido y sin observaciones abiertas.
