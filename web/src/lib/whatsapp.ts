// Armado del link de WhatsApp. Sin imports a propósito: lo usa también el test (node:test).

export const NUMERO_WHATSAPP = "5492241583314";
// Termina abierto: quien escribe sigue la frase con su caso, sin tener que pensar cómo empezar ni borrar nada.
export const MENSAJE_BASE = "Hola Juanma, vi tu web. Hoy hago esto a mano: ";

export function urlWhatsApp(mensaje: string = MENSAJE_BASE): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
