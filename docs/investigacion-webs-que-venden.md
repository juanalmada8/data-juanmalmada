# Investigación: cómo se arman hoy las webs que venden (2026-11-15)

> Pedido de Juanma: mirar webs reales que venden, de cualquier rubro, cómo cuentan sus casos y qué se repite, y traerlo aplicado a su web.
> Método: capturas completas a 1440 px y extracción de títulos y botones de 12 sitios (capturas en el scratchpad de la sesión, no en el repo).
> Límite honesto: no tengo los números de conversión de estas empresas; lo que sigue es **lo que se repite** en sitios que viven de vender,
> no una prueba de que cada cosa funcione.

## Sitios mirados

| Sitio | Rubro | Por qué sirve |
|---|---|---|
| [AgendaPro](https://agendapro.com/ar) | Software de turnos (Argentina) | El más parecido a tu cliente: pymes y negocios locales, en voseo. |
| [Tiendanube](https://www.tiendanube.com/) | Tiendas online (Argentina) | Vende a pymes de todo el país. |
| [10Pines](https://10pines.com/) | Estudio de software (Buenos Aires) | Hace lo mismo que vos, a escala de empresa. |
| [thoughtbot](https://thoughtbot.com/case-studies) | Estudio de software (EE. UU.) | La referencia que te gustó; mirada su página de casos. |
| [Basecamp](https://basecamp.com/) | Software de proyectos | Vende con la voz del fundador, en primera persona. |
| [Calendly](https://calendly.com/), [Zapier](https://zapier.com/), [Stripe](https://stripe.com/), [Linear](https://linear.app/) | Software | Cómo presentan beneficios, prueba e integraciones. |
| [Etch](https://etch.co/) | Estudio chico de software | Lista de proyectos de una línea. |
| [Squarespace](https://es.squarespace.com/) | Webs | Ejemplos reales y preguntas frecuentes. |

## Lo que se repite

1. **El titular promete un resultado, en dos frases cortas y con las palabras del cliente.**
   AgendaPro: «Llenamos tu agenda. Vos solo atendé.» Calendly: «All the work around meetings, handled.» Ninguno dice qué tecnología usa.
   → Tu titular («Tu negocio, más simple y bajo control.») ya va por ahí. Se queda.

2. **Dos botones arriba: uno para escribir y otro para ver pruebas.**
   Tiendanube: «Creá tu tienda gratis» + «Hablá con un especialista». Basecamp: «Try free» + «Check out example projects».
   → Sumar «Ver lo que armé» al lado de «Charlemos».

3. **La prueba aparece inmediatamente después del hero.** Números (AgendaPro: «+30.000 negocios»), logos (10Pines, Stripe) o casos.
   → Ya lo hicimos: «Cosas que armé» va segundo. Números y logos no tenemos y no se inventan.

4. **Los casos se titulan con el resultado, no con el nombre del cliente.**
   thoughtbot: «Upskilling while shipping faster», «10x faster releases»; el nombre del cliente va chico, arriba. 10Pines: logo + una línea de qué se hizo.
   → El título de cada caso pasa a ser lo que cambió («Los pacientes reservan solos.») y el nombre va como etiqueta.

5. **Una carta del dueño, en primera persona y firmada.** Basecamp abre con «Hey there— Tell me if this sounds about right…», firmada por su fundador.
   Es lo más humano de todo lo que vi y no necesita foto.
   → Es el lugar natural para tu firma (hoy «da vueltas» en Contacto). Una nota corta tuya, firmada, en el medio de la página.

6. **Se responden las objeciones antes de que pregunten.** AgendaPro: «Nos encargamos de la migración» (en 3 pasos) y 12 preguntas frecuentes.
   Squarespace y Tiendanube también tienen preguntas.
   → Ya tenés «Preguntas que me hacen siempre», incluida «¿Hay que tirar todo?». Se queda.

7. **El llamado a la acción se repite en cada tramo** (AgendaPro repite «Empezá gratis» unas cinco veces).
   → En el celular ya está el botón flotante de WhatsApp; en escritorio, la barra lo tiene siempre a mano. Alcanza.

8. **Clientes reales con nombre, foto y rubro** (Basecamp, Calendly, AgendaPro, thoughtbot con video).
   → Es lo que más falta y depende de vos: dos frases de clientes y el video de Oral.

9. **«Funciona con lo que ya usás»** (Calendly, Zapier: logos de integraciones).
   → Solo si me confirmás qué integraciones hacés de verdad (WhatsApp, Mercado Pago, Google Calendar…).

## Lo que NO conviene copiar
- Números grandes y logos de clientes: no tenemos y no se inventan.
- «Gratis» y precios en la web: decidiste hablar de plata en la propuesta.
- Fotos de stock (AgendaPro usa muchas): las reglas del repo no las permiten y se nota.

## Tiendanube, de cerca
Mirada pantalla por pantalla (2026-11-15). Tres patrones que sirven y se adaptan, sin copiar precios, «gratis», cifras, fotos de modelos ni logos:
1. **«Todo conectado, en un solo lugar»:** una grilla *bento* de tarjetas grandes con un visual que muestra el producto y el título encima. Es la forma más clara de decir que hay muchas cosas distintas bajo un mismo techo.
2. **Pantallas con «notificaciones» flotantes** (el chat de WhatsApp con un pedido, la tarjeta de «ventas asistidas»): un pedacito de interfaz sobre la imagen que la hace sentir viva.
3. **Títulos de sección en dos renglones:** el beneficio y, abajo, la aclaración («Vendé donde está tu cliente / Todo conectado, en un solo lugar»).
Aplicado en: sección «Todo conectado» y chips del hero (`docs/plan-tiendanube.md`).

## Qué se aplica ahora
Ver `docs/plan-ajustes-investigacion.md`: segundo botón en el hero, casos titulados por resultado y la nota firmada de Juanma
(que reemplaza el texto «yo» de Contacto). El resto de la web, que a Juanma le gustó, no se toca.
Segunda tanda: ver «Tiendanube, de cerca» (sección «Todo conectado» y chips del hero).
