// Las tarjetas «¿Te suena alguna de estas?»: cada una separa el problema (arriba) de la solución (abajo). Una sola fuente para la
// sección y para el mensaje de WhatsApp de cada una. Sin imports a propósito: lo usa también el test (node:test).

// Fondo de la tarjeta (tonos de la paleta del manual; ver tokens.css). El texto lo decide el CSS según el fondo.
export type Fondo = "pino" | "salvia" | "papel" | "musgo";

export interface Tema {
  id: string;
  titulo: string; // el problema, en palabras de quien lo vive (título de la tarjeta)
  nombre: string; // cómo se llama lo que armo para eso
  solucion: string; // qué cambia, en una o dos líneas
  fondo: Fondo;
  mensaje: string; // mensaje de WhatsApp al tocar la tarjeta: el problema ya escrito
}

export const temas: Tema[] = [
  {
    id: "turnos",
    titulo: "Te escriben y te llaman todo el día",
    nombre: "Turnos y pedidos online",
    solucion: "Tus clientes reservan o piden solos, a cualquier hora, y a vos te llega ordenado.",
    fondo: "pino",
    mensaje: "Hola Juanma, me escriben y me llaman todo el día para turnos o pedidos y quiero ordenarlo.",
  },
  {
    id: "bot",
    titulo: "Respondés las mismas preguntas una y otra vez",
    nombre: "Bots con inteligencia artificial",
    solucion: "Contestan las consultas de tus clientes por vos, aunque estés ocupado.",
    fondo: "salvia",
    mensaje: "Hola Juanma, quiero un bot que conteste las consultas de mis clientes.",
  },
  {
    id: "gestion",
    titulo: "Todo vive en planillas, cuadernos y chats",
    nombre: "Sistemas de gestión",
    solucion: "Clientes, pedidos, stock y equipo en un solo lugar, siempre al día.",
    fondo: "papel",
    mensaje: "Hola Juanma, tengo todo en planillas y chats y quiero un sistema.",
  },
  {
    id: "datos",
    titulo: "Tenés datos y no sabés qué hacer con ellos",
    nombre: "Tableros con tus datos",
    solucion: "Ves qué funciona, qué no y dónde conviene poner el foco.",
    fondo: "musgo",
    mensaje: "Hola Juanma, quiero entender mis datos y sacarles provecho.",
  },
  {
    id: "web",
    titulo: "Tu web no te trae clientes",
    nombre: "Webs, apps y plataformas",
    solucion: "Pensadas para que te encuentren y te escriban, desde el celular o la compu.",
    fondo: "pino",
    mensaje: "Hola Juanma, quiero una web o una plataforma que funcione.",
  },
  {
    id: "otra",
    titulo: "Lo tuyo no está en la lista",
    nombre: "Contame la idea",
    solucion: "Si se puede armar con tecnología, lo vemos juntos.",
    fondo: "salvia",
    mensaje: "Hola Juanma, tengo una idea y quiero ver si se puede armar.",
  },
];
