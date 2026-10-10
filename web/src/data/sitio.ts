// Datos fijos del sitio. Fuente: docs/specs/02-contenido.md («Datos fijos») y el index.html original.

const mensajeWhatsApp = "Hola Juanma, te escribo desde la web.";

export const sitio = {
  nombre: "Juan Martín Almada Ortiz",
  corto: "Juanma",
  lema: "Un solo proveedor, todo el sistema.",
  base: "General Belgrano, Buenos Aires",
  url: "https://juanmalmada.com",
  respuesta: "menos de 24 h hábiles",
};

// En orden de preferencia: WhatsApp, Instagram (cuando exista), mail. LinkedIn aparte.
export const contacto = {
  whatsapp: `https://wa.me/5492241583314?text=${encodeURIComponent(mensajeWhatsApp)}`,
  instagram: null as string | null, // [[FALTA: usuario de Instagram]]
  mail: "juanalmada1395@gmail.com", // pasa a hola@juanmalmada.com cuando esté el correo con dominio (1.7)
  linkedin: "https://www.linkedin.com/in/juan-martin-almada-ortiz/",
};
