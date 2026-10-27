// Armado del link de WhatsApp. Sin imports a propósito: lo usa también el test (node:test).

export const NUMERO_WHATSAPP = "5492241583314";
export const MENSAJE_BASE = "Hola Juanma, te escribo desde la web.";

export function urlWhatsApp(mensaje: string = MENSAJE_BASE): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
