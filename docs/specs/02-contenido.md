# 02 — Contenido

> Punto de partida. Los textos de acá son **dirección**, no copy final: se pulen iterando con Juanma.

## El mensaje central

Todo el sitio empuja una idea: **lo que pagás hoy te ahorra tiempo y plata mañana.**
No se vende tecnología, se vende lo que cambia en el día a día: menos tareas a mano, todo en un mismo lugar,
y números claros para decidir. Cada sección tiene que poder responder «¿y esto en qué me ahorra?».

Reglas para sostenerlo sin caer en humo:
- El ahorro se muestra con **ejemplos concretos** (horas que ya no se pierden, planillas que desaparecen, turnos que
  se sacan solos), no con porcentajes inventados.
- Números de ahorro solo si salen de un caso real y el cliente los confirma.
- «Inversión» se dice sin vergüenza: es plata bien puesta, no un gasto.

## Para quién: hablarle a todos sin hablarle a nadie en genérico

El público va de un consultorio a una empresa grande o un organismo público. La voz es la misma para todos;
lo que cambia son los **ejemplos**. Cuando un texto es genérico, bajalo a un caso de alguno de estos perfiles:

| Perfil | Le duele | Ejemplo que entiende |
|---|---|---|
| Consultorios y clínicas (**con experiencia real**) | Turnos por teléfono, ausencias, agenda en papel | «Tus pacientes sacan turno solos y les llega el recordatorio.» |
| Comercios, estudios, emprendimientos | Planillas sueltas, no saber qué vende o qué deja plata | «Ventas, stock y caja en un tablero que mirás desde el celular.» |
| Empresas medianas y grandes | Datos repartidos entre sistemas, reportes que se arman a mano | «El reporte del lunes se arma solo y llega a las 8.» |
| Empresas de RRHH (**con experiencia real**) | Legajos, ausencias y novedades en planillas sueltas; reportes de dotación a mano | «Las novedades del mes se cargan en un lugar y el reporte sale solo.» |
| Gobierno y organismos | Trámites manuales, información dispersa, transparencia | «Un sistema que ordena los pedidos y muestra en qué estado está cada uno.» |
| Equipos técnicos (secundario) | Falta alguien que cruce datos, nube, back y front | Detalle técnico en los casos (stack, arquitectura). |

Los ejemplos de la tabla son ilustrativos de **tipos de problema**; no se presentan como clientes ni casos hechos.
Juanma tiene trabajos reales en **salud (clínicas)** y **empresas de RRHH**: esos perfiles pueden decir «ya lo hice»,
pero sin nombres ni detalles hasta que haya un caso confirmado.

## Voz: «Habla como es: de frente.»

| Principio | Qué significa |
|---|---|
| **En criollo** | Voseo, cercanía, cero tecnicismos sin traducir. *Si lo entiende la odontóloga, lo entiende cualquiera* (también el gerente). |
| **Con energía** | Frases cortas, verbos de acción, algo de humor. Que se note que le encanta lo que hace. |
| **Al detalle** | Pasos claros, tiempos concretos, ejemplos reales. Nada de promesas vagas. |

Con empresas y gobierno se sigue usando el vos y la cercanía, pero con menos chiste y más precisión.

**Así sí**
- «Te armo la web, el sistema de turnos y te explico cómo usarlo. Vos ocupate de tus pacientes.»
- «¿Seguís anotando todo en un Excel? Contame cómo trabajás y lo automatizamos.»
- «Lo que hoy te lleva una mañana por semana, que lo haga el sistema.»

**Así no**
- «Ofrecemos soluciones integrales de transformación digital.»
- «Implementamos arquitecturas ETL cloud-native escalables.»
- «Optimizá tus procesos y maximizá tu ROI.»

Primera persona del singular (es una persona, no una agencia): «te armo», «trabajo», nunca «ofrecemos».
Tecnicismos traducidos: **KPIs** → «los números que importan»; **pipeline** → «todo conectado»; **cloud** → «la nube»,
y si hace falta el término técnico, va después de la explicación, no antes.

### Palabras y giros prohibidos en el copy público

Suenan a plantilla o a IA. Si aparecen, reescribí:

> soluciones integrales · transformación digital · potenciá / impulsá tu negocio · llevá tu negocio al siguiente nivel ·
> optimizá / maximizá · ROI · desbloqueá · sin fricción · de manera eficiente · en el mundo actual / en la era digital ·
> experiencias únicas · innovador · de vanguardia · a medida de tus necesidades · sinergia · robusto ·
> escalable (de cara al cliente) · «no solo X, sino también Y» · tríadas de adjetivos · emojis

Y en general: nada de títulos con dos puntos explicativos, nada de rayas (—) encadenando ideas en cada párrafo,
nada de cerrar cada sección con una pregunta retórica.

Excepción: **«de punta a punta»** y **«todo el sistema»** son frases de la marca. Usalas, sin gastarlas.

## Datos fijos (usar tal cual)

- Nombre: **Juan Martín Almada Ortiz**. Corto: **Juanma**.
- Ubicación: **Argentina · 100% remoto** (sin ciudad: Juanma no quiere destacar de dónde es).
- Disponibilidad: no se dice nada (ni plazos ni «respondo ni bien lo veo»).
- Experiencia: **más de 7 años** (decisión de Juanma, 2026-10-27). Ingeniero de datos y desarrollador full stack, en equipos multidisciplinarios y empresas de distintos rubros.
- Formación: **Sistemas en la UNLP**.
- Fuera del código: **hockey**, **cocina**, **rock nacional** (y alternativo), **viajes**.
- Contacto, siempre los cuatro y en este orden (lo define `redes` en `web/src/data/sitio.ts`, y lo usan hero, Contacto y pie): **WhatsApp** con mensaje precargado (principal), **Instagram**
  (`instagram.com/almadaortiz.dev`), **LinkedIn**, **mail** (decisión de Juanma, 2026-11-17: «siempre lo mismo, todo junto»).
- Dominio principal: **juanmalmada.com**.
- Respuesta en **menos de 24&nbsp;h hábiles**.
- Precios: **todo a presupuesto.** No se muestran precios ni paquetes.
- **No se nombran las empresas** donde trabajó (Mercado Libre, Cencosud, Ualá, Naranja X): fue como consultor y empleado.
  Ni nombres ni logos.

## Mapa del sitio

```
/        Una sola página, con anclas: #que-hago, #casos, #como-trabajo, #contacto
/404
```

No hay páginas internas, modales ni formularios (cambio `landing-una-pagina`).

## Home: una sola página, a ancho completo con tarjetas

> **Historial 2026-10-10 → 2026-11-14.** Landing de 8 secciones → editor de código → página editorial → una página de 5
> secciones con selector → panel fijo a un costado → tarjetas grandes de color (referencias de Juanma, Etch y thoughtbot) →
> **mensaje desde lo que le pasa a quien entra** (`docs/propuesta-mensaje.md`, aprobada el 2026-11-14). La fuente de verdad del
> comportamiento es el cambio OpenSpec `landing-una-pagina`. Esto resume el contenido.

**Mensaje:** la persona que entra no busca «un sistema de gestión»: busca dejar de contestar mensajes a la noche, de pasar pedidos a
una planilla, de esperar a fin de mes para ver los números. Titular: **«Tu negocio, más simple y bajo control.»** (2026-11-15; lo que gana el cliente: tiempo, comodidad y control) No habla solo de
negocios: Juanma aplica a todo lo que se pueda mejorar. El lema del manual, **«Un solo proveedor, todo el sistema.»**, va en el pie.

**Posicionamiento:** una persona de oficio, no una agencia. Armo lo que ven los clientes y lo que ve quien lo maneja: la web, el
sistema y los números. Hablás directo con quien lo construye.

**Qué NO dice la web (pedido de Juanma, 2026-11-15):** ningún plazo de respuesta («menos de 24 h»), la ciudad (General Belgrano; a lo sumo «Argentina») ni «consultorios» como público. Tampoco «respondo ni bien lo veo» ni «gratis» / «sin costo»: la plata se habla en la propuesta. Un test lo vigila (`tests/copy.test.mjs`).

**Modelo de negocio (opción B, elegida por Juanma):** proyectos a medida por etapas, con presupuesto por etapa; **la primera
charla no tiene costo**; después del proyecto, **plan mensual de soporte y mejoras** (sin precio en la web, todo a presupuesto).

| Sección | Contenido |
|---|---|
| Hero | Barra y hero en pino. «Tu negocio, más simple / y *bajo control*.» y, debajo, **la bajada en un solo párrafo** (vuelta al texto de antes, 2026-11-17; sin etiquetas): «Armo soluciones a medida: sistemas de gestión, bots con inteligencia artificial, webs y tableros con tus datos. Para que ahorres tiempo, trabajes más cómodo y sepas en todo momento qué pasa en tu negocio.» Después, los botones «Charlemos» (lima) y «Ver lo que armé» (secundario, lleva a #casos), tres **beneficios** con un tilde lima («Ahorrás tiempo» · «Trabajás más cómodo» · «Sabés qué pasa en tu negocio»), la etiqueta «O escribime directo» con los **cuatro canales** en pastillas (componente `Redes`, mismo orden que en Contacto y el pie) y la línea de confianza sin caja: «Más de 7 años armando sistemas · Trabajo en forma remota en todo el país». A la derecha, **el carrusel «Lo que puedo armar»** (`CarruselHero.astro`, columna `--ancho-marcos`; en celular, debajo del texto a ancho completo): seis diapositivas, cada una una tarjeta crema con una ilustración de interfaz HTML/CSS decorativa (`aria-hidden`, sin números ni nombres de personas), el nombre en serif y una línea. 1) **Turnos online** — «Tus clientes eligen el horario solos.» (lista «Agenda de hoy» con `09:00`, `10:30`, `16:00` y «Confirmado» en lima en la segunda); 2) **Bots con inteligencia artificial** — «Contestan las consultas por vos.» (chat «¿Te queda en talle 40?» / «¡Sí! ¿Te lo reservo?»); 3) **Sistemas de gestión** — «Clientes, pedidos y stock en un solo lugar.» (tabla Remera / Buzo / Campera con «Hay stock», «Quedan pocos», «Sin stock»); 4) **Tableros con tus datos** — «Ves qué funciona y qué no.» («Ventas del mes», línea ascendente con punto lima, sin números en los ejes); 5) **Webs y tiendas online** — «Pensadas para que te escriban y te compren.» (mini página con dos productos y botón «Comprar»); 6) **Portales y plataformas** — «Cada usuario entra con su cuenta.» (avatar sin cara, «Mi cuenta» y pestañas «Inicio» / «Mis datos» / «Mensajes»). Debajo, seis puntos («Ir a la diapositiva N», 44 px táctiles) y el botón «Pausar» / «Reanudar» (`aria-pressed`). **Movimiento (WCAG 2.2.2):** avanza solo cada 5 s en bucle; se pausa con el mouse encima, con foco de teclado adentro, al tocar y con el botón; con `prefers-reduced-motion` arranca en pausa y sin animación. Sin JavaScript es una pista que se desliza (scroll-snap) y los controles se ocultan. Reemplaza al panel «Hoy en tu negocio» y sus chips (pedido de Juanma, 2026-11-17: el panel ponía una sola solución como principal). El collage de capturas de Oral y Staffy y su pie salieron del hero (las capturas están en «Cosas que armé»). La firma y `hola_mundo()` salieron del hero (la firma vive en la nota de Juanma). |
| Cosas que armé | Tres tarjetas en una fila (Oral, Staffy y «El próximo puede ser el tuyo»). **Cada caso se titula por el resultado** (campo `resultado`): «Los pacientes reservan solos.» (Oral) y «Candidatos filtrados con IA.» (Staffy); el nombre del cliente va en una **pastilla** (`--fs-small`, peso 800, fondo del color del texto al 12 %) y, a la derecha, un botón chico «Visitar el sitio ↗» (`.boton.sec`, con `aria-label` «Visitar el sitio de {nombre} (se abre en otra pestaña)»). Orden de la tarjeta: captura, pastilla y botón, resultado (`h3`), última parte y «Ver más» (siempre al pie; las tarjetas tienen la misma altura). **Primero el trabajo:** las capturas reales van arriba y grandes (escritorio a todo el ancho de la tarjeta, celu encima). **Los dos casos tienen el mismo formato (2026-11-17):** dos partes con los mismos rótulos, «Qué es» (oculta en «Ver más») y «Qué armé» (el panel visible), de largo parecido (tres renglones en escritorio). Testimonio y video son opcionales: aparecen solo si el caso los trae (hoy no hay datos). Contenido: **Oral** (eje: autogestión de pacientes): *Qué es* — «Un consultorio odontológico que coordinaba los turnos por mensaje de texto y con una agenda en papel.»; *Qué armé* — «Una web donde los pacientes reservan solos, con confirmación y recordatorio por mail, y un panel para el consultorio.» **Staffy**: *Qué es* — «Un portal de empleo para profesionales IT que conecta personas con empresas de Latinoamérica y Estados Unidos.»; *Qué armé* — «El portal completo: lo que ven los candidatos, el panel de cada empresa, un filtro de candidatos con inteligencia artificial y avisos por mail.» La grilla «Y otras cosas que armé» (`proyectos.ts`) sigue vacía y oculta. |
| Todo conectado | Entre «Cosas que armé» y «Qué resuelvo» (`#conectado`). Título en dos renglones: «Lo que necesitás, / todo conectado en *un solo lugar*.» Grilla bento 2×2 (7fr + 5fr, 5fr + 7fr) de cuatro tarjetas de color, cada una con una **ilustración de interfaz en HTML/CSS** arriba (decorativa) y el título y una línea abajo: *Turnos online* (pino; «Tus clientes eligen día y horario solos.»; mini calendario lun–vie con un día en lima, tres horarios y la notificación «✓ Turno confirmado»), *Bots con inteligencia artificial* (salvia; «Contestan las consultas aunque estés ocupado.»; chat con «¿Hacen envíos al interior?» y «¡Sí, a todo el país! ¿Querés que te pase precios y medios de pago?» (sin hablar de turnos, para que no repita la tarjeta de arriba)), *Sistemas de gestión* (papel; «Clientes, pedidos y stock en un solo lugar.»; tabla de tres pedidos —Entregado, En camino, Nuevo—) y *Tableros con tus datos* (musgo hondo; «Ves qué funciona y qué no, al día.»; seis barras, la última en lima, y la notificación «Actualizado hoy»). Debajo, a la izquierda, el enlace «¿Lo tuyo es otra cosa? Contámelo» a `#contacto`. Sin cifras ni nombres de personas. Idea tomada de Tiendanube. |
| Qué resuelvo | Título «¿Te suena *alguna* de estas?» (sin bajada; absorbe a la antigua sección «¿Te suena?», fusionada el 2026-11-15) y 6 tarjetas: **arriba el problema** y **abajo, en un panel propio, la solución** (nombre y una línea) con «Esto me pasa →» a WhatsApp con el problema ya escrito. Las seis, en orden: *Te escriben y te llaman todo el día* (Turnos y pedidos online), *Respondés las mismas preguntas una y otra vez* (Bots con inteligencia artificial), *Todo vive en planillas, cuadernos y chats* (Sistemas de gestión), *Tenés datos y no sabés qué hacer con ellos* (Tableros con tus datos), *Tu web no te trae clientes* (Webs, apps y plataformas) y *Lo tuyo no está en la lista* (Contame la idea). Fuente: `web/src/data/temas.ts`. Entra en una pantalla. |
| Una nota de Juanma | Entre «Qué resuelvo» y «Cómo trabajo» (`#nota`, título solo para lector de pantalla). Columna angosta, sin caja, con la firma y «Juanma» al final. Texto: «Hola, soy Juanma. // Me escriben con cosas como «quiero un sistema para los turnos», «quiero un bot que conteste los mensajes» o «tengo un montón de datos y no sé qué hacer con ellos». // Mi respuesta casi siempre es la misma: se puede hacer. Hace más de 7 años que armo sistemas para empresas de distintos rubros, y también para negocios y proyectos que necesitan el suyo. // Lo que más me importa es que lo que armemos se use y te simplifique el día. Al principio es una inversión; con el tiempo, te devuelve horas y tranquilidad. // Si tenés algo en mente, escribime y lo charlamos.» (cada `//` es un párrafo). Escrita con las palabras de Juanma del chat: pendiente que la revise. |
| Cómo trabajo | Título «Cómo trabajo.», sin intro. Charla («Me contás qué necesitás y cómo trabajás hoy. No hace falta que sepas de tecnología.») · Propuesta («Te paso por escrito qué armaría, en qué orden y cuánto sale.») · Desarrollo («Lo armo por etapas. Lo vas viendo funcionar antes del final.») · Soporte («Te lo dejo andando y te enseño a usarlo. Si querés, sigo con soporte y mejoras todos los meses.»), y «Lo que hago» / «Lo que no hago». |
| Preguntas | «Preguntas que me hacen siempre.» Acordeón de `<details>` (todo cerrado, sin JavaScript, sin animación), en una columna de lectura, sin cajas: *¿Cuánto sale?* · *¿Tengo que saber de tecnología?* · *Ya uso planillas o un sistema. ¿Hay que tirar todo?* · *¿Qué pasa cuando está terminado?* · *¿Trabajás con gente de cualquier parte del país?* Responde las dudas antes de que las hagan; sin cifras ni precios. |
| Contacto | «Contame qué *necesitás*.», «Escribime y lo charlamos. Con un mensaje alcanza.» y los **cuatro canales juntos** como tarjetas iguales (componente `Redes`, variante `tarjetas`; 2×2 en celu, una fila desde 64 rem): WhatsApp en lima («Es lo más rápido.»), Instagram («Lo que voy armando.»), LinkedIn («Mi recorrido.») y Mail («Si preferís escribir con calma.»), las tres últimas en salvia. Sin el texto «yo» ni la firma: pasaron a la nota de Juanma (2026-11-15). Se sacó la línea que rotaba. Pie: lema del manual, los mismos cuatro canales en pastillas y «Argentina · 100% remoto · año». Contacto + pie entran en una pantalla. |

**Barra:** pino a ancho completo, logo `<jm>` en crema (ícono `</j>` en el celular), índice numerado 01–04 con tramos de progreso, y
«Charlemos» en lima (la puerta de entrada, siempre a mano; sin hablar de plata). Los capítulos son 01 Casos (su tramo cubre también «Todo conectado») · 02 Qué resuelvo (su tramo cubre también la nota) · 03 Cómo trabajo (su tramo sigue también «Preguntas») · 04 Contacto.

**Orden de la página (2026-11-15):** promesa → prueba → oferta → proceso → dudas → acción: Hero · Cosas que armé · Todo conectado · Qué resuelvo · Una nota de Juanma · Cómo trabajo · Preguntas · Contacto. La prueba va temprano y la acción es una sola, repetida: escribir por WhatsApp.

**Botón flotante de WhatsApp (solo celular y tablet, menos de 64 rem):** pastilla lima abajo a la derecha que aparece al pasar el hero y se esconde cuando Contacto o el pie están a la vista. Sin JavaScript queda siempre visible.

**WhatsApp:** cada tarjeta manda su problema ya escrito (fuente: `web/src/data/temas.ts`). El mensaje base, fuera de las tarjetas, termina
abierto para que la persona siga con su caso: «Hola Juanma, vi tu web. Hoy hago esto a mano: ».

**Sin adornos:** no hay etiquetas sobre los títulos, líneas finas ni cajas definidas por un borde; las superficies se definen
por su relleno. Titulares de dos renglones o menos desde 768 px. Nada que se lea baja de 13 px. La lima queda para los botones principales, la tarjeta de WhatsApp, el botón de «El próximo», el botón flotante de WhatsApp, una `m` del patrón, los tildes de los beneficios del hero y los detalles de las ilustraciones (pastilla «Confirmado», punto del gráfico, punto activo del carrusel), más los estados de foco y hover.

## Migración del contenido actual

Se lleva **casi todo** lo del `index.html` actual. Cambia la voz, no la sustancia.

| Hoy | Va a |
|---|---|
| Hero «control y previsibilidad» | Bajada del hero y el «qué te ahorra» de cada servicio |
| Resultados: seguimiento diario, proceso estandarizado, decisión informada | 2. Qué hago → «Dashboards y análisis» |
| Soluciones: reportería, integración de fuentes, alertas | 2. Qué hago → «Dashboards y análisis». Cada «Aplicable cuando…» se vuelve pregunta: «¿Armás el reporte a mano todos los lunes?» |
| Método de 4 pasos | 6. Cómo trabajo |
| Experiencia: Mercado Libre · Cencosud · Ualá · Naranja X | **No va.** Decisión de Juanma: no se nombran. |
| Sobre mí + «convertir datos dispersos en un sistema de gestión confiable» | 7. Hola, soy Juanma, reescrito |
| Contacto: mail, WhatsApp, LinkedIn | 8. Contacto + formulario |
| «Respuesta en menos de 24h hábiles» | (quitado el 2026-11-15: no se promete un plazo) |
| Footer «Buenos Aires, Argentina» | «Argentina · 100% remoto» |

## Plantilla de caso (`web/src/content/casos/<id>.md`)

Un caso = un archivo + sus capturas. El esquema está en `web/src/content.config.ts` y **falla el build** si falta un campo.

```yaml
nombre: "Oral Odontología Familiar"
url: "https://oral.com.ar"              # sitio real; abre en otra pestaña
partes:                                  # todos los casos: «Qué es» (en «Ver más») y «Qué armé» (la que se destaca)
  - titulo: "Qué es"
    texto: "Un consultorio odontológico que coordinaba los turnos por mensaje de texto y con una agenda en papel."
  - titulo: "Qué armé"
    texto: "Una web donde los pacientes reservan solos, con confirmación y recordatorio por mail, y un panel para el consultorio."
capturas:                                # reales; vacío = placeholder visible [[FALTA]]
  - src: "../../assets/oral-turnos.png"
    alt: "Pantalla de reserva de turnos de Oral"   # obligatorio
    marco: celu                          # celu | ventana (marco decorativo)
orden: 1
publicado: true                          # false = no aparece
```

Reglas: solo lo que Juanma contó; sin métricas, ahorros ni testimonios que no estén confirmados; capturas sin datos
de personas (anonimizar antes de subir). `npm run build` lista en consola las capturas que faltan (`[FALTA] captura de …`).
Agregar un caso nuevo = crear su archivo; aparece como una tarjeta más, sin tocar componentes.

## SEO y metadatos

- Title home: «Juan Martín Almada Ortiz · Sistemas a medida» (≤ 60 caracteres).
- Description: «Sistemas a medida, bots con inteligencia artificial, webs y tableros con tus datos. Para que tu negocio sea más simple y esté bajo control.» (≤ 155 caracteres).
- OG image propia por página (1200×630), con la marca.
