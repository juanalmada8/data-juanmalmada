// Las tarjetas «¿Qué necesitás?»: una sola fuente para la sección y para el mensaje de WhatsApp de cada una.
// Sin imports a propósito: lo usa también el test (node:test).

// Fondo de la tarjeta (tonos de la paleta del manual; ver tokens.css). El texto lo decide el CSS según el fondo.
export type Fondo = "pino" | "salvia" | "papel" | "musgo";

export interface Tema {
  id: string;
  titulo: string; // título de la tarjeta
  pregunta: string; // el problema como lo diría el cliente
  solucion: string; // qué se resuelve, en una línea
  fondo: Fondo;
  pasos?: string[]; // mini diagrama (patrón pipeline del manual), solo en las tarjetas que lo piden
  mensaje: string; // mensaje de WhatsApp al tocar la tarjeta
}

export const temas: Tema[] = [
  {
    id: "web",
    titulo: "Webs y apps a medida",
    pregunta: "¿Tu web no se ve bien en el celular?",
    solucion: "Armo una web o una app pensada para el celular, donde tus clientes encuentran lo que buscan sin llamarte.",
    fondo: "pino",
    mensaje: "Hola Juanma, quiero armar una web o app",
  },
  {
    id: "plataforma",
    titulo: "Portales y plataformas",
    pregunta: "¿Necesitás que usuarios y empresas trabajen en un mismo sistema?",
    solucion: "Armo el portal y lo que lo sostiene: usuarios, publicaciones, postulaciones y paneles.",
    fondo: "salvia",
    mensaje: "Hola Juanma, quiero armar una plataforma",
  },
  {
    id: "turnos",
    titulo: "Turnos y reservas online",
    pregunta: "¿Pasás el día atendiendo el teléfono para dar turnos?",
    solucion: "Tus clientes reservan solos y reciben la confirmación y el recordatorio.",
    fondo: "papel",
    mensaje: "Hola Juanma, quiero armar un sistema de turnos",
  },
  {
    id: "gestion",
    titulo: "Sistemas de gestión",
    pregunta: "¿Todo anda en planillas, cuadernos y chats sueltos?",
    solucion: "Un sistema donde se ordena el trabajo de todo el equipo, sin planillas ni chats sueltos.",
    fondo: "musgo",
    pasos: ["planillas", "se ordenan", "un solo lugar"],
    mensaje: "Hola Juanma, quiero armar un sistema de gestión",
  },
  {
    id: "datos",
    titulo: "Automatización y datos",
    pregunta: "¿Armás el reporte a mano todos los lunes?",
    solucion: "Conecto tus fuentes y armo reportes y tableros que se actualizan solos.",
    fondo: "pino",
    pasos: ["tus fuentes", "se conectan", "tablero"],
    mensaje: "Hola Juanma, quiero armar algo con mis datos",
  },
  {
    id: "otra",
    titulo: "Otra idea",
    pregunta: "¿Lo tuyo no está en la lista?",
    solucion: "Es justo para lo que estoy: contame qué tenés en mente y lo armamos.",
    fondo: "salvia",
    mensaje: "Hola Juanma, tengo una idea para armar",
  },
];
