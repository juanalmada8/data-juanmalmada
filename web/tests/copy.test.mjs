// Copy del sitio: frases prohibidas (docs/specs/02-contenido.md), cifras inventadas y límites de tipo de proyecto.
import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const raiz = new URL("../src/", import.meta.url).pathname;
const archivos = [];
const recorrer = (dir) => {
  for (const n of readdirSync(dir)) {
    const ruta = join(dir, n);
    if (statSync(ruta).isDirectory()) recorrer(ruta);
    else if (/\.(astro|md)$/.test(n) || ruta.includes("/data/")) archivos.push(ruta);
  }
};
recorrer(raiz);

// Se ignora el CSS y los bloques <script> para mirar solo texto visible y datos.
const limpio = (t) => t.replace(/<style[\s\S]*?<\/style>/g, "").replace(/<script[\s\S]*?<\/script>/g, "");
// «100% remoto» es un dato confirmado (no una cifra de ahorro), así que se excluye de la búsqueda de porcentajes.
const textos = archivos.map((f) => [f.replace(raiz, ""), limpio(readFileSync(f, "utf8")).replace(/100% remoto/g, "remoto total")]);

const prohibidas = [
  /soluciones integrales/i, /soluciones innovadoras/i, /transformación digital/i, /llev(amos|á) tu negocio al siguiente nivel/i,
  /potenci[aá] tu negocio/i, /impuls[aá] tu negocio/i, /optimiz[aá]/i, /maximiz[aá]/i, /\bROI\b/, /desbloque[aá]/i,
  /sin fricción/i, /de manera eficiente/i, /en la era digital/i, /experiencias únicas/i, /innovador/i, /de vanguardia/i,
  /a medida de tus necesidades/i, /sinergia/i, /robusto/i, /escalable/i, /ofrecemos/i,
];
const limitan = [/solo hago/i, /sólo hago/i, /únicamente (hago|armo)/i, /me especializo en/i, /especialista en/i];
const cifras = [/\b\d+\s?%/, /\+\s?\d+\s?%/, /ahorr[aá] \$/i, /\$\s?\d/];

for (const [nombre, lista] of [["frase prohibida", prohibidas], ["límite de tipo de proyecto", limitan]]) {
  test(`el copy no tiene: ${nombre}`, () => {
    for (const [archivo, t] of textos) for (const re of lista) assert.doesNotMatch(t, re, `${archivo} contiene ${re}`);
  });
}

// Las cifras se buscan solo en el texto visible: sin etiquetas, para no confundirse con atributos (width="100%").
test("el copy no tiene: cifra o promesa numérica", () => {
  for (const [archivo, t] of textos)
    for (const re of cifras) assert.doesNotMatch(t.replace(/<[^>]*>/g, " "), re, `${archivo} contiene ${re}`);
});

test("no usa comillas inglesas en el texto (van las latinas «así»)", () => {
  for (const [archivo, t] of textos.filter(([a]) => a.endsWith(".astro"))) {
    const html = t.split("---").slice(2).join("---"); // solo el marcado, no el frontmatter
    assert.doesNotMatch(html.replace(/<[^>]+>/g, ""), /“|”/, archivo);
  }
});

test("se escaneó el sitio entero (hay archivos .astro, datos y casos)", () => {
  const nombres = textos.map(([n]) => n);
  assert.ok(nombres.some((n) => n.includes("secciones/QueHago.astro")));
  assert.ok(nombres.some((n) => n.startsWith("data/temas.ts")));
  assert.ok(nombres.some((n) => n.startsWith("content/casos/oral.md")));
});

// Metadatos por defecto (src/layouts/Base.astro): largos recomendados.
test("título ≤ 60 y descripción ≤ 155 caracteres, sin lista cerrada de servicios", () => {
  const base = readFileSync(new URL("../src/layouts/Base.astro", import.meta.url), "utf8");
  const titulo = /titulo = "([^"]+)"/.exec(base)[1];
  const descripcion = /descripcion = "([^"]+)"/.exec(base)[1];
  assert.ok(titulo.length <= 60, `título de ${titulo.length} caracteres`);
  assert.ok(descripcion.length <= 155, `descripción de ${descripcion.length} caracteres`);
  assert.doesNotMatch(`${titulo} ${descripcion}`, /la web, los turnos|webs, apps y datos/i);
});

test("el hero muestra los hechos de sitio.ts y los enlaces directos en orden: WhatsApp, Instagram, mail", () => {
  const hero = readFileSync(new URL("../src/components/secciones/Hero.astro", import.meta.url), "utf8");
  for (const dato of ["sitio.experiencia", "sitio.respuesta", "sitio.base"]) assert.ok(hero.includes(dato), `falta ${dato}`);
  const orden = ["contacto.whatsapp", "contacto.instagram", "contacto.mail"].map((c) => hero.indexOf(c));
  assert.ok(orden.every((i) => i >= 0) && orden[0] < orden[1] && orden[1] < orden[2], "enlaces fuera de orden");
});
