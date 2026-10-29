// Los chips del selector «¿Qué necesitás?»: una sola fuente para el hero y para el mensaje de WhatsApp.
// Sin imports a propósito: lo usa también el test (node:test).

export type Vista =
  | { tipo: "capturas"; casos: string[] } // captura real de uno o más casos (ids de la colección `casos`)
  | { tipo: "pipeline" } // patrón pipeline del manual
  | { tipo: "datos" } // patrón de datos del manual
  | { tipo: "invitacion" }; // «Otra idea»: texto + botón de contacto

export interface Tema {
  id: string;
  chip: string; // texto del chip
  ejemplo: string; // un ejemplo, en una línea
  frase: string; // qué se resuelve
  bajada: string; // la bajada del hero cuando se elige este tema
  mezcla: number; // % de musgo mezclado con el pino en el fondo del hero (0–40): el tono de cada tema
  vista: Vista;
  mensaje: string; // mensaje de WhatsApp si el visitante elige este tema
}

export const temas: Tema[] = [
  {
    id: "web",
    chip: "Una web o app",
    ejemplo: "Una web o una app hecha a tu medida.",
    frase: "Tus clientes encuentran lo que buscan desde el celular, sin tener que llamarte.",
    bajada: "Armo sistemas a medida: desde la app que usan tus clientes hasta los datos que te ayudan a decidir.",
    mezcla: 0,
    vista: { tipo: "capturas", casos: ["oral", "staffy"] },
    mensaje: "Hola Juanma, quiero armar una web o app",
  },
  {
    id: "plataforma",
    chip: "Una plataforma",
    ejemplo: "Un portal con usuarios, publicaciones, postulaciones y paneles.",
    frase: "Tus usuarios y tu equipo trabajan en un mismo lugar, cada uno con lo suyo.",
    bajada: "Portales y plataformas con su backend: usuarios, publicaciones, postulaciones y paneles.",
    mezcla: 12,
    vista: { tipo: "capturas", casos: ["staffy"] },
    mensaje: "Hola Juanma, quiero armar una plataforma",
  },
  {
    id: "turnos",
    chip: "Turnos",
    ejemplo: "Turnos online con confirmación y recordatorio por mail.",
    frase: "Tus clientes reservan solos y vos dejás de atender el teléfono para dar turnos.",
    bajada: "Reservas online con confirmación y recordatorio por mail, para que tus clientes saquen turno solos.",
    mezcla: 24,
    vista: { tipo: "capturas", casos: ["oral"] },
    mensaje: "Hola Juanma, quiero armar un sistema de turnos",
  },
  {
    id: "gestion",
    chip: "Gestión",
    ejemplo: "Un sistema para ordenar pedidos, clientes o trámites.",
    frase: "Lo que hoy vive en planillas y cuadernos, en un solo lugar.",
    bajada: "Un sistema a tu medida que ordena el trabajo de todo el equipo, sin planillas sueltas.",
    mezcla: 32,
    vista: { tipo: "pipeline" },
    mensaje: "Hola Juanma, quiero armar un sistema de gestión",
  },
  {
    id: "datos",
    chip: "Datos",
    ejemplo: "Reportes y tableros que se actualizan solos.",
    frase: "Las cifras que importan, listas cuando las necesitás, sin armar el reporte a mano.",
    bajada: "Conecto tus fuentes y armo reportes y tableros que se actualizan solos.",
    mezcla: 40,
    vista: { tipo: "datos" },
    mensaje: "Hola Juanma, quiero armar algo con mis datos",
  },
  {
    id: "otra",
    chip: "Otra idea",
    ejemplo: "Contame qué tenés en mente y lo armamos",
    frase: "Contame qué tenés en mente y lo armamos",
    bajada: "Lo tuyo puede no estar en la lista. Contame qué tenés en mente y lo armamos.",
    mezcla: 6,
    vista: { tipo: "invitacion" },
    mensaje: "Hola Juanma, tengo una idea para armar",
  },
];

export const temaInicial = temas[0].id;
