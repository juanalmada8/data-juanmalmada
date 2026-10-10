// Comportamiento del editor: pestañas, navegación por #hash, explorador como cajón y terminal.
// Todo es mejora progresiva: sin este script el sitio se lee como una página larga.

const PRINCIPAL = "hola";
const mq = window.matchMedia("(max-width: 51.99rem)");

export function iniciarEditor() {
  const ide = document.querySelector<HTMLElement>("[data-ide]");
  if (!ide) return;

  const paneles = new Map<string, HTMLElement>();
  ide.querySelectorAll<HTMLElement>("[data-panel]").forEach((p) => paneles.set(p.dataset.panel!, p));
  const contenedor = ide.querySelector<HTMLElement>("[data-paneles]")!;
  const tira = ide.querySelector<HTMLElement>("[data-pestanas]")!;
  const rutaActual = ide.querySelector<HTMLElement>("[data-ruta-actual]");
  const explorador = ide.querySelector<HTMLElement>("#explorador")!;
  const btnArchivos = ide.querySelector<HTMLButtonElement>(".btn-archivos")!;
  const tituloBase = document.title;

  tira.hidden = false;
  btnArchivos.hidden = false;

  const abiertos: string[] = [];
  let actual = "";

  // ---------- Pestañas ----------
  function pintarPestanas() {
    tira.replaceChildren(
      ...abiertos.map((id) => {
        const p = paneles.get(id)!;
        const ruta = p.dataset.ruta!;
        const nombre = ruta.split("/").pop()!;
        const li = document.createElement("div");
        li.className = "pestana";
        const abrir = document.createElement("button");
        if (id === actual) abrir.setAttribute("aria-current", "true");
        abrir.type = "button";
        abrir.className = "p-abrir";
        abrir.textContent = nombre;
        abrir.title = ruta;
        abrir.addEventListener("click", () => ir(id, true));
        li.append(abrir);
        if (abiertos.length > 1) {
          const cerrar = document.createElement("button");
          cerrar.type = "button";
          cerrar.className = "p-cerrar";
          cerrar.setAttribute("aria-label", `Cerrar ${nombre}`);
          cerrar.textContent = "×";
          cerrar.addEventListener("click", () => cerrarPestana(id));
          li.append(cerrar);
        }
        return li;
      }),
    );
    tira.querySelector("[aria-current]")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  function cerrarPestana(id: string) {
    const i = abiertos.indexOf(id);
    if (i < 0 || abiertos.length === 1) return;
    abiertos.splice(i, 1);
    if (id === actual) ir(abiertos[Math.max(0, i - 1)], true);
    else pintarPestanas();
  }

  // ---------- Abrir un archivo ----------
  function mostrar(id: string, enfocar: boolean) {
    const panel = paneles.get(id) ?? paneles.get(PRINCIPAL)!;
    id = panel.dataset.panel!;
    if (!abiertos.includes(id)) abiertos.push(id);
    actual = id;

    paneles.forEach((p, k) => p.classList.toggle("activo", k === id));
    ide!.querySelectorAll<HTMLAnchorElement>(".explorador a[data-abrir]").forEach((a) => {
      if (a.dataset.abrir === id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (rutaActual) rutaActual.textContent = panel.dataset.ruta!;
    const titulo = panel.querySelector("h1, h2")?.textContent?.trim();
    document.title = id === PRINCIPAL ? tituloBase : `${titulo} · ${panel.dataset.ruta}`;

    pintarPestanas();
    contenedor.scrollTop = 0;
    if (mq.matches) window.scrollTo({ top: 0 });
    if (enfocar) panel.focus({ preventScroll: true });
  }

  function ir(id: string, enfocar = true) {
    cerrarCajon();
    if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
    mostrar(id, enfocar);
  }

  // Links internos (explorador, «siguiente →», botones): interceptar para no saltar con el scroll.
  ide.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-abrir]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    ir(a.dataset.abrir!);
  });
  window.addEventListener("popstate", () => mostrar(location.hash.slice(1) || PRINCIPAL, false));

  // ---------- Cajón del explorador (celular) ----------
  function cerrarCajon() {
    explorador.classList.remove("abierto");
    btnArchivos.setAttribute("aria-expanded", "false");
  }
  btnArchivos.addEventListener("click", () => {
    const abrir = !explorador.classList.contains("abierto");
    explorador.classList.toggle("abierto", abrir);
    btnArchivos.setAttribute("aria-expanded", String(abrir));
    if (abrir) explorador.querySelector<HTMLElement>("a[aria-current], a")?.focus();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && explorador.classList.contains("abierto")) {
      cerrarCajon();
      btnArchivos.focus();
    }
  });
  explorador.addEventListener("focusout", (e) => {
    const destino = e.relatedTarget as Node | null;
    if (mq.matches && destino && !explorador.contains(destino)) cerrarCajon();
  });
  document.addEventListener("click", (e) => {
    const t = e.target as Node;
    if (explorador.classList.contains("abierto") && !explorador.contains(t) && !btnArchivos.contains(t)) cerrarCajon();
  });

  // ---------- Terminal ----------
  iniciarTerminal(ide, paneles, ir);

  history.scrollRestoration = "manual";
  mostrar(location.hash.slice(1) || PRINCIPAL, false);
  requestAnimationFrame(() => window.scrollTo({ top: 0 }));
}

function iniciarTerminal(ide: HTMLElement, paneles: Map<string, HTMLElement>, ir: (id: string) => void) {
  const term = ide.querySelector<HTMLElement>("[data-terminal]")!;
  const salida = term.querySelector<HTMLElement>("[data-term-salida]")!;
  const form = term.querySelector<HTMLFormElement>("[data-term-form]")!;
  const input = form.querySelector<HTMLInputElement>("input")!;
  const toggle = term.querySelector<HTMLButtonElement>("[data-term-toggle]")!;
  form.hidden = false;
  toggle.hidden = false;

  const links = {
    whatsapp: ide.querySelector<HTMLAnchorElement>(".escribime")!.href,
    mail: ide.querySelector<HTMLAnchorElement>('a[href^="mailto:"]')?.href ?? "",
    linkedin: ide.querySelector<HTMLAnchorElement>('a[href*="linkedin.com"]')?.href ?? "",
  };

  // En el celular arranca plegada para no tapar contenido.
  const plegar = (si: boolean) => {
    term.classList.toggle("plegada", si);
    toggle.setAttribute("aria-expanded", String(!si));
  };
  plegar(mq.matches);
  toggle.addEventListener("click", () => plegar(!term.classList.contains("plegada")));

  const historial: string[] = [];
  let pos = 0;

  function escribir(html: string) {
    const p = document.createElement("p");
    p.innerHTML = html;
    salida.append(p);
    salida.scrollTop = salida.scrollHeight;
  }
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

  function buscar(q: string): string | undefined {
    const n = q.toLowerCase().replace(/^\.?\//, "");
    for (const [id, p] of paneles) {
      const ruta = p.dataset.ruta!.toLowerCase();
      if (id === n || ruta === n || ruta.split("/").pop() === n) return id;
    }
    for (const [id, p] of paneles) if (p.dataset.ruta!.toLowerCase().includes(n) || id.includes(n)) return id;
    return undefined;
  }

  function abrirLink(nombre: keyof typeof links, texto: string) {
    if (!links[nombre]) return escribir("No encontré ese link.");
    escribir(`<span class="ok">→</span> ${texto} <a href="${links[nombre]}" target="_blank" rel="noopener noreferrer">${esc(links[nombre].replace(/^mailto:/, ""))}</a>`);
    window.open(links[nombre], nombre === "mail" ? "_self" : "_blank", "noopener");
  }

  const comandos: Record<string, (args: string[]) => void> = {
    ayuda: () =>
      escribir(
        [
          "<span class='cmd'>ls</span> ver los archivos",
          "<span class='cmd'>abrir</span> &lt;archivo&gt; abrir uno (ej: <span class='cmd'>abrir turnos</span>)",
          "<span class='cmd'>whatsapp</span> · <span class='cmd'>mail</span> · <span class='cmd'>linkedin</span> escribirme",
          "<span class='cmd'>limpiar</span> borrar la terminal",
        ].join("<br>"),
      ),
    ls: () => escribir([...paneles.values()].map((p) => esc(p.dataset.ruta!)).join("&nbsp;&nbsp; ")),
    abrir: (a) => {
      if (!a[0]) return escribir("¿Qué abro? Probá <span class='cmd'>abrir turnos</span>.");
      const id = buscar(a.join(" "));
      if (!id) return escribir(`No encontré «${esc(a.join(" "))}». Probá <span class='cmd'>ls</span>.`);
      escribir(`<span class="ok">→</span> abriendo ${esc(paneles.get(id)!.dataset.ruta!)}`);
      ir(id);
    },
    whatsapp: () => abrirLink("whatsapp", "abriendo WhatsApp"),
    mail: () => abrirLink("mail", "abriendo tu correo"),
    linkedin: () => abrirLink("linkedin", "abriendo LinkedIn"),
    contacto: () => comandos.abrir(["contacto"]),
    limpiar: () => salida.replaceChildren(),
    sudo: () => escribir("Acá el único root soy yo. Pero escribime y lo charlamos."),
    rock: () => escribir("♪ de fondo, siempre. Seguimos."),
  };
  const alias: Record<string, string> = {
    help: "ayuda", "?": "ayuda", cat: "abrir", open: "abrir", cd: "abrir", vim: "abrir", code: "abrir",
    clear: "limpiar", wsp: "whatsapp", email: "mail", contactar: "contacto", dir: "ls",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const linea = input.value.trim();
    input.value = "";
    if (!linea) return;
    historial.push(linea);
    pos = historial.length;
    escribir(`<span class="ok">$</span> <span class="eco">${esc(linea)}</span>`);
    const [cmd, ...args] = linea.split(/\s+/);
    const nombre = alias[cmd.toLowerCase()] ?? cmd.toLowerCase();
    const fn = comandos[nombre];
    if (fn) fn(args);
    else if (buscar(linea)) comandos.abrir([linea]);
    else escribir(`No conozco «${esc(cmd)}». Escribí <span class="cmd">ayuda</span>.`);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && pos > 0) {
      input.value = historial[--pos];
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      pos = Math.min(historial.length, pos + 1);
      input.value = historial[pos] ?? "";
      e.preventDefault();
    }
  });

  // Atajo: Ctrl/⌘ + ` enfoca la terminal (como en los editores).
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "`") {
      e.preventDefault();
      plegar(false);
      input.focus();
    }
  });
}
