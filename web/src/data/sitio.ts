// Datos fijos del sitio: único lugar para nombre, contacto y base. Fuente: docs/specs/02-contenido.md.
import { urlWhatsApp } from "../lib/whatsapp";

export const sitio = {
  nombre: "Juan Martín Almada Ortiz",
  corto: "Juanma",
  lema: "Un solo proveedor, todo el sistema.", // lema del manual: va en el pie
  titular: "Todo el sistema, un solo proveedor.", // titular del hero (decisión de Juanma, 2026-10-27)
  base: "General Belgrano, Buenos Aires",
  url: "https://juanmalmada.com",
  experiencia: "más de 7 años",
  respuesta: "menos de 24 h hábiles",
};

// Orden de preferencia: WhatsApp, Instagram, mail. LinkedIn aparte, en el pie.
export const contacto = {
  whatsapp: urlWhatsApp(),
  instagram: "https://instagram.com/almadaortiz.dev",
  mail: "juanalmada1395@gmail.com",
  linkedin: "https://www.linkedin.com/in/juan-martin-almada-ortiz/",
};
