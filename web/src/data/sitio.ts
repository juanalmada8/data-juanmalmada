// Datos fijos del sitio: único lugar para nombre y contacto. Sin plazos de respuesta (pedido de Juanma). Fuente: docs/specs/02-contenido.md.
import { urlWhatsApp } from "../lib/whatsapp";

export const sitio = {
  nombre: "Juan Martín Almada Ortiz",
  corto: "Juanma",
  lema: "Un solo proveedor, todo el sistema.", // lema del manual: va en el pie
  titular: "Todo el sistema, un solo proveedor.", // titular del hero (decisión de Juanma, 2026-10-27)
  ubicacion: "Argentina · 100% remoto", // sin ciudad ni plazos (pedido de Juanma, 2026-11-15)
  url: "https://juanmalmada.com",
  experiencia: "más de 7\u00a0años",
};

// Datos de contacto: una sola fuente. El orden de los canales lo define `redes`, justo abajo.
export const contacto = {
  whatsapp: urlWhatsApp(),
  instagram: "https://instagram.com/almadaortiz.dev",
  mail: "juanalmada1395@gmail.com",
  linkedin: "https://www.linkedin.com/in/juan-martin-almada-ortiz/",
};

// Los cuatro canales, siempre en este orden y siempre todos (hero, contacto y pie): un solo lugar (pedido de Juanma, 2026-11-17).
// `detalle` solo se muestra en las tarjetas de Contacto.
export type Red = { id: "whatsapp" | "instagram" | "linkedin" | "mail"; nombre: string; url: string; detalle: string; externa: boolean };
export const redes: Red[] = [
  { id: "whatsapp", nombre: "WhatsApp", url: contacto.whatsapp, detalle: "Es lo más rápido.", externa: true },
  { id: "instagram", nombre: "Instagram", url: contacto.instagram, detalle: "Lo que voy armando.", externa: true },
  { id: "linkedin", nombre: "LinkedIn", url: contacto.linkedin, detalle: "Mi recorrido.", externa: true },
  { id: "mail", nombre: "Mail", url: `mailto:${contacto.mail}`, detalle: "Si preferís escribir con calma.", externa: false },
];
