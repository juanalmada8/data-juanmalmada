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
- Experiencia: **8 años** trabajando con datos.
- Formación: **Sistemas en la UNLP**.
- Fuera del código: **hockey**, **cocina**, **rock nacional** (y alternativo), **viajes**.
- Contacto (de `index.html` actual, mantener), en este orden: **WhatsApp** con mensaje precargado (principal),
  **MD de Instagram** (cuando exista la cuenta), **mail**. LinkedIn como link aparte.
- Respuesta en **menos de 24&nbsp;h hábiles**.
- Precios: **todo a presupuesto.** No se muestran precios ni paquetes.
- **No se nombran las empresas** donde trabajó (Mercado Libre, Cencosud, Ualá, Naranja X): fue como consultor y empleado.
  Ni nombres ni logos.

## Mapa del sitio (inicial)

```
/                    Home (una página, con anclas por sección)
/proyectos/<slug>    Un caso por proyecto real
/gracias             Confirmación del formulario (funciona sin JS)
/404
/apps/<nombre>       Más adelante
```

## Home: editorial, siguiendo el manual

> **Historial 2026-10-10.** Landing con secciones → editor de código («todo muy AI») → editor descartado («complicado
> para el usuario»). Queda una página editorial simple que se scrollea, con el manual como guía de color
> (crema domina) y un guiño de terminal en la tarjeta del hero.

Orden y fondo (ritmo claro · oscuro · color del manual):

| # | Sección | Fondo | Qué tiene |
|---|---|---|---|
| — | Hero | crema | Meta (nombre · General Belgrano · 100% remoto), «Un solo proveedor, *todo el sistema*.», bajada, WhatsApp. Tarjeta pino girada con `hola_mundo()`, `<jm▌>` y 2 líneas de terminal. |
| 01 | Qué hago | crema + tarjetas blancas | 4 servicios: problema (palabras del cliente) → qué armo → qué te ahorra. Cierre «¿Lo tuyo no está en la lista? Contame igual.» |
| 02 | Todo conectado | pino + placa salvia | Patrón pipeline del manual. |
| 03 | Para quién | salvia | 5 perfiles; «ya trabajé en esto» solo en clínicas y RRHH. |
| 04 | Cómo trabajo | crema + placa lima | 4 pasos del método viejo; inversión y presupuesto. |
| 05 | Proyectos | crema | Lista de casos; hoy el del consultorio «en preparación» con `[[FALTA]]`. |
| 06 | Sobre mí | crema | Tarjeta pino con firma lima (como la lámina «Quién es»), rasgos en pino/lima/musgo, fuera del código. Sin foto. |
| 07 | Contacto | pino | WhatsApp (lima), mail, LinkedIn, patrón de datos. |

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

## Plantilla de caso (`/proyectos/<slug>`)

```yaml
titulo: "Turnos online para un consultorio"
cliente: "Consultorio odontológico"   # o nombre real si hay permiso
rubro: "Salud"
tamanio: "chico"                      # chico | mediano | grande | sector público
anio: 2026
servicios: ["web", "turnos", "datos"]
resultado: "Los pacientes sacan turno solos, 24/7."   # una línea, verificable
ahorro: ""                            # solo si el cliente lo confirma (ej. "ya no atienden el teléfono para turnos")
portada: "./portada.webp"
publicado: false
```

Cuerpo, en este orden: **Antes** (cómo trabajaban y qué les costaba) · **Qué armamos** · **Cómo quedó** (capturas reales) ·
**Qué ahorran hoy** (tiempo, plata, errores; solo lo confirmado) · **Lo técnico** (opcional, para equipos técnicos).

## SEO y metadatos

- Title home: «Juan Martín Almada Ortiz · Webs, apps y datos» (≤ 60 caracteres).
- Description: una frase en la voz de la marca que mencione el ahorro, ≤ 155 caracteres.
- OG image propia por página (1200×630), con la marca.
