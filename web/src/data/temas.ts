// Las tarjetas «¿Qué te está consumiendo el tiempo?»: cada una separa el problema (arriba, breve y reconocible) de la solución
// (abajo, en otro tono). Una sola fuente para la sección y para el mensaje de WhatsApp de cada tarjeta.
// Sin imports a propósito: lo usa también el test (node:test).

// Tono de la parte de arriba (el problema); la solución va en el tono claro que le corresponde (ver QueHago.astro).
export type Fondo = "pino" | "musgo";

export interface Tema {
  id: string;
  titulo: string; // el problema, en palabras de quien lo vive
  nombre: string; // cómo se llama lo que armo para eso
  solucion: string; // qué cambia, en una línea
  fondo: Fondo;
  mensaje: string; // mensaje de WhatsApp al tocar la tarjeta: el problema ya escrito
}

export const temas: Tema[] = [
  {
    id: "turnos",
    titulo: "Te escriben y te llaman todo el día",
    nombre: "Turnos y pedidos online",
    solucion: "Tus clientes reservan solos, a cualquier hora, y a vos te llega ordenado.",
    fondo: "pino",
    mensaje: "Hola Juanma, me escriben y me llaman todo el día para turnos o pedidos y quiero ordenarlo.",
  },
  {
    id: "web",
    titulo: "Tu web no te trae nada",
    nombre: "Webs y apps a medida",
    solucion: "Rápida, clara en el celular y pensada para que te escriban.",
    fondo: "musgo",
    mensaje: "Hola Juanma, tengo una web que no me sirve y quiero una que funcione.",
  },
  {
    id: "gestion",
    titulo: "Todo vive en planillas y chats",
    nombre: "Sistemas de gestión",
    solucion: "Un solo lugar donde todo el equipo ve lo mismo.",
    fondo: "pino",
    mensaje: "Hola Juanma, tengo todo en planillas y chats y quiero un sistema.",
  },
  {
    id: "datos",
    titulo: "Los números los sabés a fin de mes",
    nombre: "Tableros que se arman solos",
    solucion: "Conecto lo que ya usás y lo mirás cuando quieras.",
    fondo: "musgo",
    mensaje: "Hola Juanma, quiero ver mis números sin armarlos a mano.",
  },
  {
    id: "plataforma",
    titulo: "Necesitás que tus clientes entren con su usuario",
    nombre: "Portales y plataformas",
    solucion: "Usuarios, paneles e integraciones con lo que ya tenés.",
    fondo: "pino",
    mensaje: "Hola Juanma, necesito armar una plataforma.",
  },
  {
    id: "otra",
    titulo: "No sabés bien qué necesitás",
    nombre: "Charlemos igual",
    solucion: "Me contás cómo trabajás hoy y vemos qué conviene. Sin costo.",
    fondo: "musgo",
    mensaje: "Hola Juanma, no sé bien qué necesito, pero quiero mejorar cómo trabajo.",
  },
];
