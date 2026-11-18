// node --test tests/   (Node ≥ 22.18 corre .ts sin dependencias; estos módulos no tienen imports)
import test from "node:test";
import assert from "node:assert/strict";
import { temas } from "../src/data/temas.ts";
import { MENSAJE_BASE, NUMERO_WHATSAPP, urlWhatsApp } from "../src/lib/whatsapp.ts";

const texto = (url) => decodeURIComponent(new URL(url).searchParams.get("text"));

test("hay seis tarjetas por problema, con la de «lo tuyo no está en la lista» al final y los ids sin repetir", () => {
  assert.deepEqual(temas.map((t) => t.id), ["turnos", "bot", "gestion", "datos", "web", "otra"]);
  assert.equal(temas.at(-1).titulo, "Lo tuyo no está en la lista");
  assert.equal(new Set(temas.map((t) => t.id)).size, temas.length);
});

test("sin tema el mensaje es el genérico", () => {
  const url = urlWhatsApp();
  assert.equal(new URL(url).pathname, `/${NUMERO_WHATSAPP}`);
  assert.equal(texto(url), MENSAJE_BASE);
  assert.match(MENSAJE_BASE, /^Hola Juanma, vi tu web\./); // con espacios para que la persona cuente su caso
});

for (const t of temas) {
  test(`tema «${t.titulo}»: el link de WhatsApp lleva su mensaje`, () => {
    const url = urlWhatsApp(t.mensaje);
    assert.ok(url.startsWith("https://wa.me/"));
    assert.equal(texto(url), t.mensaje);
    assert.match(t.mensaje, /^Hola Juanma, /);
  });
}

test("cada mensaje de WhatsApp cuenta el problema de su tarjeta (no un «quiero un servicio» genérico)", () => {
  const por = (id) => temas.find((t) => t.id === id).mensaje;
  assert.match(por("turnos"), /me escriben y me llaman/);
  assert.match(por("bot"), /bot que conteste/);
  assert.match(por("web"), /web o una plataforma/);
  assert.match(por("otra"), /tengo una idea/);
});

test("ningún texto de los temas trae cifras ni frases prohibidas, y va con voseo", () => {
  const prohibidas = /soluciones (integrales|innovadoras)|siguiente nivel|transformación digital|\d+\s?%/i;
  for (const t of temas) {
    const todo = `${t.titulo} ${t.nombre} ${t.solucion} ${t.mensaje}`;
    assert.doesNotMatch(todo, prohibidas);
    assert.doesNotMatch(todo, /\b(tienes|necesitas|quieres|puedes|haces|sabes|usas)\b/i, `${t.id}: voseo`);
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

test("sobre el pino de la barra y el hero: crema y lima pasan AA (4.5:1) y la salvia del itálico también", () => {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const ratio = (a, b) => (Math.max(L(a), L(b)) + 0.05) / (Math.min(L(a), L(b)) + 0.05);
  const pino = [0x13, 0x3a, 0x2e], crema = [0xf3, 0xef, 0xe3], lima = [0xd4, 0xe8, 0x5c], salvia = [0xa8, 0xc5, 0xae];
  for (const [nombre, c] of [["crema", crema], ["lima", lima], ["salvia", salvia]]) assert.ok(ratio(c, pino) >= 4.5, `${nombre} sobre pino: ${ratio(c, pino).toFixed(2)}`);
});

test("«Todo conectado» y los chips del hero: pino sobre lima, crema y blanco; crema sobre musgo hondo (pastillas y notificaciones) pasan AA (4.5:1)", () => {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const ratio = (a, b) => (Math.max(L(a), L(b)) + 0.05) / (Math.min(L(a), L(b)) + 0.05);
  const mezcla = (a, b, pa) => a.map((v, i) => v * pa + b[i] * (1 - pa));
  const pino = [0x13, 0x3a, 0x2e], musgo = [0x3f, 0x7a, 0x5c], salvia = [0xa8, 0xc5, 0xae], crema = [0xf3, 0xef, 0xe3], lima = [0xd4, 0xe8, 0x5c], blanco = [255, 255, 255];
  const musgoHondo = mezcla(musgo, pino, 0.6);
  const pares = {
    "pino sobre lima (día, horario y «Nuevo»)": [pino, lima],
    "pino sobre crema (notificaciones y globo del cliente)": [pino, crema],
    "pino sobre blanco (tabla de pedidos)": [pino, blanco],
    "pino sobre salvia («Entregado»)": [pino, salvia],
    "crema sobre musgo hondo («En camino»)": [crema, musgoHondo],
    "crema sobre pino (globo del bot)": [crema, pino],
    "musgo hondo sobre crema (tilde de la notificación)": [musgoHondo, crema],
  };
  for (const [nombre, [a, b]] of Object.entries(pares)) assert.ok(ratio(a, b) >= 4.5, `${nombre}: ${ratio(a, b).toFixed(2)}`);
});
