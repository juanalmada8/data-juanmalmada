// Lee los SVG de web/public/brand/ en build. Nunca se dibujan a mano (AGENTS.md, regla 2).
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const carpeta = join(process.cwd(), "public", "brand");

export interface Svg {
  archivo: string;
  existe: boolean;
  ancho: number;
  alto: number;
  /** Contenido interno del <svg> (sin la etiqueta raíz ni el <title>). */
  interior: string;
  viewBox: string;
}

export function leerSvg(archivo: string): Svg {
  const ruta = join(carpeta, archivo);
  if (!existsSync(ruta)) {
    return { archivo, existe: false, ancho: 0, alto: 0, interior: "", viewBox: "" };
  }
  const crudo = readFileSync(ruta, "utf8");
  const viewBox = /viewBox="([^"]+)"/.exec(crudo)?.[1] ?? "0 0 100 100";
  const [, , ancho, alto] = viewBox.split(/\s+/).map(Number);
  const interior = crudo
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .trim();
  return { archivo, existe: true, ancho, alto, interior, viewBox };
}
