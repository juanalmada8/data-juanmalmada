// Resaltador mínimo para los snippets del sitio (no es un parser: alcanza para 5–8 líneas escritas a mano).

const escapar = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const claves: Record<string, string[]> = {
  ts: ["const", "await", "async", "function", "return", "import", "from", "export", "if"],
  tsx: ["const", "export", "function", "return", "import", "from"],
  sql: ["SELECT", "FROM", "GROUP", "BY", "AS", "SUM", "WHERE", "ORDER"],
  yml: [],
  sh: [],
};

const comentario: Record<string, RegExp> = {
  ts: /(\/\/.*)$/,
  tsx: /(\/\/.*)$/,
  sql: /(--.*)$/,
  yml: /(#.*)$/,
  sh: /(#.*)$/,
};

export function resaltar(codigo: string, lang: string): string[] {
  return codigo.split("\n").map((linea) => {
    const m = comentario[lang]?.exec(linea);
    const cuerpo = m ? linea.slice(0, m.index) : linea;
    const coment = m ? `<span class="c">${escapar(m[1])}</span>` : "";

    let html = escapar(cuerpo);
    // strings
    html = html.replace(/(&quot;|")([^"]*)(")/g, '<span class="s">"$2"</span>');
    // claves YAML
    if (lang === "yml") html = html.replace(/^(\s*)([\w-]+):/, '$1<span class="k">$2</span>:');
    if (lang === "sh") html = html.replace(/^(\$)(\s+)(\S+)/, '<span class="p">$1</span>$2<span class="k">$3</span>');
    const lista = claves[lang] ?? [];
    if (lista.length) {
      const re = new RegExp(`\\b(${lista.join("|")})\\b`, "g");
      html = html.replace(re, (k, _g, off: number, todo: string) => {
        // no tocar dentro de un span ya generado
        const antes = todo.slice(0, off);
        return antes.lastIndexOf("<span") > antes.lastIndexOf("</span>") ? k : `<span class="k">${k}</span>`;
      });
    }
    // funciones: palabra seguida de (
    html = html.replace(/\b([a-záéíóúñ_]+)(?=\()/gi, '<span class="f">$1</span>');
    return html + coment;
  });
}
