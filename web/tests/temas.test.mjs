// node --test tests/   (Node ≥ 22.18 corre .ts sin dependencias; estos módulos no tienen imports)
import test from "node:test";
import assert from "node:assert/strict";
import { temas } from "../src/data/temas.ts";
import { MENSAJE_BASE, NUMERO_WHATSAPP, urlWhatsApp } from "../src/lib/whatsapp.ts";

const texto = (url) => decodeURIComponent(new URL(url).searchParams.get("text"));

test("hay seis tarjetas, con «Otra idea» al final y los ids sin repetir", () => {
  assert.deepEqual(
    temas.map((t) => t.titulo),
    ["Webs y apps a medida", "Portales y plataformas", "Turnos y reservas online", "Sistemas de gestión", "Automatización y datos", "Otra idea"],
  );
  assert.equal(new Set(temas.map((t) => t.id)).size, temas.length);
});

test("sin tema el mensaje es el genérico", () => {
  const url = urlWhatsApp();
  assert.equal(new URL(url).pathname, `/${NUMERO_WHATSAPP}`);
  assert.equal(texto(url), "Hola Juanma, te escribo desde la web.");
  assert.equal(texto(url), MENSAJE_BASE);
});

for (const t of temas) {
  test(`tema «${t.titulo}»: el link de WhatsApp lleva su mensaje`, () => {
    const url = urlWhatsApp(t.mensaje);
    assert.ok(url.startsWith("https://wa.me/"));
    assert.equal(texto(url), t.mensaje);
    assert.match(t.mensaje, /^Hola Juanma, /);
  });
}

test("«Una plataforma» y «Otra idea» tienen los mensajes pedidos", () => {
  const por = (id) => temas.find((t) => t.id === id).mensaje;
  assert.equal(por("plataforma"), "Hola Juanma, quiero armar una plataforma");
  assert.equal(por("otra"), "Hola Juanma, tengo una idea para armar");
});

test("ningún texto de los temas trae cifras ni frases prohibidas, y las preguntas van con voseo", () => {
  const prohibidas = /soluciones (integrales|innovadoras)|siguiente nivel|transformación digital|\d+\s?%/i;
  for (const t of temas) {
    assert.doesNotMatch(`${t.titulo} ${t.pregunta} ${t.solucion}`, prohibidas);
    assert.match(t.pregunta, /^¿.*\?$/, `${t.id}: la pregunta va entre signos`);
    assert.doesNotMatch(t.pregunta, /\b(tienes|necesitas|quieres|puedes|haces)\b/i, `${t.id}: voseo`);
  }
});

test("cada par texto/fondo de las tarjetas pasa el contraste AA (4.5:1) con los tonos reales de la paleta", () => {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const mezcla = (a, b, pa) => a.map((v, i) => v * pa + b[i] * (1 - pa)); // color-mix(in srgb, a pa%, b)
  const pino = [0x13, 0x3a, 0x2e], musgo = [0x3f, 0x7a, 0x5c], salvia = [0xa8, 0xc5, 0xae], crema = [0xf3, 0xef, 0xe3];
  const pares = {
    pino: [crema, pino],
    salvia: [pino, salvia],
    papel: [pino, mezcla(salvia, crema, 0.3)],
    musgo: [crema, mezcla(musgo, pino, 0.6)],
  };
  for (const t of temas) {
    const [texto, fondo] = pares[t.fondo];
    const [a, b] = [L(texto), L(fondo)];
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    assert.ok(ratio >= 4.5, `${t.id} (${t.fondo}): contraste ${ratio.toFixed(2)}`);
  }
});
