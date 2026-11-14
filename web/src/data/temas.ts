// Las tarjetas «¿Qué te está comiendo el tiempo?»: una por problema, como lo diría quien lo vive. Una sola fuente para la
// sección y para el mensaje de WhatsApp de cada una. Sin imports a propósito: lo usa también el test (node:test).

// Fondo de la tarjeta (tonos de la paleta del manual; ver tokens.css). El texto lo decide el CSS según el fondo.
export type Fondo = "pino" | "salvia" | "papel" | "musgo";

export interface Tema {
  id: string;
  titulo: string; // el problema, en palabras de quien lo vive (título de la tarjeta)
  nombre: string; // cómo se llama lo que armo para eso
  solucion: string; // qué cambia, en una o dos líneas
  fondo: Fondo;
  pasos?: string[]; // mini diagrama (patrón pipeline del manual), solo en las tarjetas que lo piden
  mensaje: string; // mensaje de WhatsApp al tocar la tarjeta: el problema ya escrito
}

export const temas: Tema[] = [
  {
    id: "turnos",
    titulo: "Te escriben y te llaman todo el día",
    nombre: "Turnos, reservas y pedidos online",
    solucion: "Tus clientes o pacientes sacan turno o hacen el pedido solos, a cualquier hora, y a vos te llega ordenado. Con confirmación y recordatorio.",
    fondo: "pino",
    mensaje: "Hola Juanma, me escriben y me llaman todo el día para turnos o pedidos y quiero ordenarlo.",
  },
  {
    id: "web",
    titulo: "Tu web no te trae nada",
    nombre: "Webs y apps a medida",
    solucion: "Una web que se ve bien en el celular, carga rápido y lleva a la gente a escribirte. Si hace falta, también la app.",
    fondo: "salvia",
    mensaje: "Hola Juanma, tengo una web que no me sirve y quiero una que funcione.",
  },
  {
    id: "gestion",
    titulo: "Todo vive en planillas y chats",
    nombre: "Sistemas de gestión",
    solucion: "Un solo lugar para cargar clientes, pedidos, stock o trámites, y que todo el equipo vea lo mismo.",
    fondo: "papel",
    pasos: ["planillas", "se ordenan", "un solo lugar"],
    mensaje: "Hola Juanma, tengo todo en planillas y chats y quiero un sistema.",
  },
  {
    id: "datos",
    titulo: "Los números los sabés a fin de mes",
    nombre: "Tableros y reportes que se arman solos",
    solucion: "Conecto lo que ya usás y te armo un tablero que se actualiza solo. Lo mirás cuando quieras.",
    fondo: "musgo",
    pasos: ["tus fuentes", "se conectan", "tablero"],
    mensaje: "Hola Juanma, quiero ver mis números sin armarlos a mano.",
  },
  {
    id: "plataforma",
    titulo: "Necesitás que clientes o empresas entren con su usuario",
    nombre: "Portales y plataformas, con todo lo que las sostiene",
    solucion: "Usuarios, publicaciones, postulaciones y paneles. Y las integraciones con lo que ya tenés.",
    fondo: "pino",
    mensaje: "Hola Juanma, necesito armar una plataforma.",
  },
  {
    id: "otra",
    titulo: "No sabés bien qué necesitás",
    nombre: "Charlemos igual",
    solucion: "Me contás cómo trabajás hoy y vemos juntos qué conviene armar primero. La primera charla no tiene costo.",
    fondo: "salvia",
    mensaje: "Hola Juanma, no sé bien qué necesito, pero quiero mejorar cómo trabajo.",
  },
];
