// node --test tests/   (Node ≥ 22.18 corre .ts sin dependencias; estos módulos no tienen imports)
import test from "node:test";
import assert from "node:assert/strict";
import { temas, temaInicial } from "../src/data/temas.ts";
import { MENSAJE_BASE, NUMERO_WHATSAPP, urlWhatsApp } from "../src/lib/whatsapp.ts";

const texto = (url) => decodeURIComponent(new URL(url).searchParams.get("text"));

test("hay seis chips, con «Otra idea» al final", () => {
  assert.deepEqual(
    temas.map((t) => t.chip),
    ["Una web o app", "Una plataforma", "Turnos", "Gestión", "Datos", "Otra idea"],
  );
  assert.equal(temas.at(-1).vista.tipo, "invitacion");
});

test("el tema inicial existe y los ids no se repiten", () => {
  assert.ok(temas.some((t) => t.id === temaInicial));
  assert.equal(new Set(temas.map((t) => t.id)).size, temas.length);
});

test("sin tema el mensaje es el genérico", () => {
  const url = urlWhatsApp();
  assert.equal(new URL(url).pathname, `/${NUMERO_WHATSAPP}`);
  assert.equal(texto(url), "Hola Juanma, te escribo desde la web.");
  assert.equal(texto(url), MENSAJE_BASE);
});

for (const t of temas) {
  test(`tema «${t.chip}»: el link de WhatsApp lleva su mensaje`, () => {
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

test("ningún texto de los temas trae cifras ni frases prohibidas", () => {
  const prohibidas = /soluciones (integrales|innovadoras)|siguiente nivel|transformación digital|\d+\s?%/i;
  for (const t of temas) assert.doesNotMatch(`${t.ejemplo} ${t.frase} ${t.bajada}`, prohibidas);
});

test("cada tema trae su bajada y su tono de hero (mezcla 0–40 %), y el tono inicial es el del estado inicial", () => {
  for (const t of temas) {
    assert.ok(t.bajada.length > 20 && t.bajada.length <= 110, `${t.id}: bajada de ${t.bajada.length} caracteres (entra en 3–4 líneas del celular)`);
    assert.ok(Number.isInteger(t.mezcla) && t.mezcla >= 0 && t.mezcla <= 40, `${t.id}: mezcla ${t.mezcla}`);
  }
  assert.equal(temas.find((t) => t.id === temaInicial).mezcla, 0);
});

test("el contraste de crema sobre cada tono del hero es de al menos 7:1 (pino mezclado con musgo)", () => {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const pino = [0x13, 0x3a, 0x2e], musgo = [0x3f, 0x7a, 0x5c], crema = [0xf3, 0xef, 0xe3];
  for (const t of temas) {
    const f = t.mezcla / 100;
    const fondo = pino.map((v, i) => v + (musgo[i] - v) * f);
    const ratio = (L(crema) + 0.05) / (L(fondo) + 0.05);
    assert.ok(ratio >= 7, `${t.id}: contraste ${ratio.toFixed(2)}`);
  }
});
