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
- Base: **General Belgrano, Buenos Aires** · **100% remoto**.
- Experiencia: **más de 7 años** (decisión de Juanma, 2026-10-27). Ingeniero de datos y desarrollador full stack, en equipos multidisciplinarios y empresas de distintos rubros.
- Formación: **Sistemas en la UNLP**.
- Fuera del código: **hockey**, **cocina**, **rock nacional** (y alternativo), **viajes**.
- Contacto, en este orden: **WhatsApp** con mensaje precargado según el tema elegido (principal), **Instagram**
  (`instagram.com/almadaortiz.dev`), **mail**. LinkedIn queda en el pie.
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
una planilla, de esperar a fin de mes para ver los números. Titular: **«Todo anda. Pero el sistema sos vos.»** No habla solo de
negocios: Juanma aplica a todo lo que se pueda mejorar. El lema del manual, **«Un solo proveedor, todo el sistema.»**, va en el pie.

**Posicionamiento:** una persona de oficio, no una agencia. Armo lo que ven los clientes y lo que ve quien lo maneja: la web, el
sistema y los números. Hablás directo con quien lo construye.

**Modelo de negocio (opción B, elegida por Juanma):** proyectos a medida por etapas, con presupuesto por etapa; **la primera
charla no tiene costo**; después del proyecto, **plan mensual de soporte y mejoras** (sin precio en la web, todo a presupuesto).

| Sección | Contenido |
|---|---|
| Hero | Barra y hero en pino. «Todo anda. / Pero el sistema *sos vos*.», bajada «Turnos por mensaje, pedidos en un cuaderno, los números en una planilla que solo entendés vos. Armo el sistema para que todo funcione sin que estés encima.», CTA «Contame cómo trabajás hoy», enlaces directos y tres marcos: «Soy Juanma. Armo las dos puntas: lo que ven tus clientes y lo que ves vos.» con la firma, «Más de 7 años de oficio», «Te respondo en menos de 24 h hábiles» con la base y `hola_mundo()`. |
| ¿Te suena? | Sobre salvia, cuatro escenas como mensajes alternados que quien entra reconoce (turnos a la noche, el stock en la cabeza de una persona, el reporte del lunes armado el domingo, las mismas preguntas por WhatsApp) y «Nada de esto se arregla con más horas tuyas. Se arregla con un sistema.» Reemplaza a la franja que corría. |
| ¿Qué te está comiendo el tiempo? | El manifiesto «Armo sistemas que se usan de verdad. Lo que invertís hoy te ahorra *tiempo y plata* mañana.» y 6 tarjetas **por problema** (título = el problema; debajo, cómo se llama lo que armo y qué cambia), con «Esto me pasa →» que abre WhatsApp con el problema ya escrito. La última: «No sabés bien qué necesitás» (charla sin costo). Debajo, una línea para empresas y organismos (integraciones, procesos de datos, plataformas con backend). |
| Cosas que armé | Oral destacado: antes daban los turnos por mensaje de texto y los anotaban en una agenda en papel; hoy los pacientes reservan solos. Staffy: el portal (parte pública y panel de la empresa), un primer filtro de candidatos con IA conectado por APIs y mails automáticos; hoy, mejoras en su plataforma de RRHH («armé el portal y hoy sigo trabajando con ellos»). «El próximo puede ser el tuyo». La grilla «Y otras cosas que armé» (`proyectos.ts`) sigue vacía: lo de Staffy fue a su tarjeta para no repetirlo. |
| Cómo trabajo | Charla (sin costo, «no hace falta que sepas de tecnología») · Propuesta (por escrito, qué, en qué orden y cuánto sale) · Desarrollo (por etapas, lo ves funcionar antes del final) · Soporte (te enseño a usarlo; si querés, plan mensual). Debajo, «Lo que hago» / «Lo que no hago». |
| Contacto | «Contame cómo *trabajás* hoy.», «Un mensaje alcanza. Te respondo en menos de 24 h hábiles y vemos juntos qué conviene armar primero.», tarjetas «Contame por WhatsApp» («Es lo más rápido.») y «Prefiero mail», la línea que cambia «Armemos el sistema de tu consultorio / equipo / empresa / idea / negocio.», Instagram aparte y el texto «yo» (ingeniero de datos y desarrollador full stack, más de 7 años en empresas de distintos rubros, también para consultorios, negocios y proyectos; General Belgrano, 100% remoto; hablás siempre conmigo). Pie: lema del manual, LinkedIn, base y año. |

**Barra:** pino a ancho completo, logo `<jm>` en crema (ícono `</j>` en el celular), índice numerado 01–04 con tramos de progreso, y
«Escribime» en lima (corto, para que entre al lado del índice).

**WhatsApp:** cada tarjeta manda su problema ya escrito (fuente: `web/src/data/temas.ts`). El mensaje base, fuera de las tarjetas, termina
abierto para que la persona siga con su caso: «Hola Juanma, vi tu web. Hoy hago esto a mano: ».

**Sin adornos:** no hay etiquetas sobre los títulos, líneas finas ni cajas definidas por un borde; las superficies se definen
por su relleno. Titulares de dos renglones o menos desde 768 px. Nada que se lea baja de 13 px. La lima queda para los botones principales, la tarjeta de WhatsApp, el botón de «El próximo», la pastilla `hola_mundo()` y una `m` del patrón, más los estados de foco y hover.

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
| «Respuesta en menos de 24h hábiles» | 8. Contacto (confirmado) |
| Footer «Buenos Aires, Argentina» | «General Belgrano · 100% remoto» |

## Plantilla de caso (`web/src/content/casos/<id>.md`)

Un caso = un archivo + sus capturas. El esquema está en `web/src/content.config.ts` y **falla el build** si falta un campo.

```yaml
nombre: "Oral Odontología Familiar"
url: "https://oral.com.ar"              # sitio real; abre en otra pestaña
resumen: "El sitio de un consultorio odontológico, con turnos online y panel de gestión."   # una línea
bullets:                                 # exactamente 3, cortos: qué se armó
  - "La web del consultorio."
  - "Reserva de turnos online, con confirmación y recordatorio por mail."
  - "Lista de espera y un panel para gestionar todo."
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
- Description: «Turnos, pedidos, gestión y números que se actualizan solos. Lo que invertís hoy te ahorra tiempo mañana, y hablás con quien lo construye.» (≤ 155 caracteres, menciona el ahorro).
- OG image propia por página (1200×630), con la marca.
