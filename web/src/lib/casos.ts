import { getCollection } from "astro:content";

// Casos publicados, en orden. Avisa en el build qué casos no tienen captura (se muestra un placeholder visible).
let cache: ReturnType<typeof leer> | undefined;

async function leer() {
  const casos = (await getCollection("casos", ({ data }) => data.publicado)).sort(
    (a, b) => a.data.orden - b.data.orden,
  );
  for (const c of casos.filter((c) => c.data.capturas.length === 0)) {
    console.warn(`[FALTA] captura de ${c.data.nombre} (src/content/casos/${c.id}.md)`);
  }
  return casos;
}

export const cargarCasos = () => (cache ??= leer());
