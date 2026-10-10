"""Extrae los vectores del logo, ícono, firma y m desde el PDF exportado de Figma y arma los SVG de marca.

No redibuja nada: convierte los trazados del PDF tal cual a paths SVG y solo cambia los rellenos
para las variantes de color.
"""
import sys
import pymupdf as fitz

PDF, OUT = sys.argv[1], sys.argv[2]
doc = fitz.open(PDF)

PINO, MUSGO, SALVIA, CREMA, LIMA = "#133A2E", "#3F7A5C", "#A8C5AE", "#F3EFE3", "#D4E85C"


def hx(c):
    return "#%02X%02X%02X" % tuple(round(x * 255) for x in c)


def path_d(dr, ox, oy):
    out, last = [], None
    f = lambda p: f"{p.x - ox:.2f} {p.y - oy:.2f}"
    for it in dr["items"]:
        op = it[0]
        if op == "l":
            a, b = it[1], it[2]
            if last is None or abs(last.x - a.x) > 1e-3 or abs(last.y - a.y) > 1e-3:
                out.append("M" + f(a))
            out.append("L" + f(b)); last = b
        elif op == "c":
            a, c1, c2, b = it[1], it[2], it[3], it[4]
            if last is None or abs(last.x - a.x) > 1e-3 or abs(last.y - a.y) > 1e-3:
                out.append("M" + f(a))
            out.append(f"C{f(c1)} {f(c2)} {f(b)}"); last = b
        elif op == "re":
            r = it[1]
            out.append(f"M{r.x0-ox:.2f} {r.y0-oy:.2f}H{r.x1-ox:.2f}V{r.y1-oy:.2f}H{r.x0-ox:.2f}Z"); last = None
        elif op == "qu":
            q = it[1]
            out.append("M" + f(q.ul) + "L" + f(q.ur) + "L" + f(q.lr) + "L" + f(q.ll) + "Z"); last = None
    if dr.get("closePath"):
        out.append("Z")
    return "".join(out)


def grab(page, idxs):
    drs = doc[page - 1].get_drawings()
    return [drs[i] for i in idxs]


def svg(parts, pad=0, recolor=None, extra="", title=""):
    """parts: lista de (drawing, rol). recolor: dict rol->color o color único."""
    r = fitz.Rect(parts[0][0]["rect"])
    for dr, _ in parts[1:]:
        r |= dr["rect"]
    ox, oy = r.x0 - pad, r.y0 - pad
    w, h = r.width + 2 * pad, r.height + 2 * pad
    body = []
    for dr, rol in parts:
        color = hx(dr["fill"])
        if isinstance(recolor, str):
            color = recolor
        elif recolor and rol in recolor:
            color = recolor[rol]
        rule = ' fill-rule="evenodd"' if dr.get("even_odd") else ""
        body.append(f'  <path data-parte="{rol}" fill="{color}"{rule} d="{path_d(dr, ox, oy)}"/>')
    t = f"  <title>{title}</title>\n" if title else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" '
            f'width="{w:.0f}" height="{h:.0f}" role="img">\n{t}' + "\n".join(body) + extra + "\n</svg>\n"), (w, h, ox, oy)


def save(name, content):
    with open(f"{OUT}/{name}", "w") as fh:
        fh.write(content)


# --- Logo principal <jm> (página 01 · Logotipo) ---
L = grab(2, [6, 7, 8, 9, 10, 11, 12])
logo = list(zip(L, ["cinta-clara", "cinta-oscura", "j", "punto", "m", "cinta-clara", "cinta-oscura"]))
NOMBRE = "Juan Martín Almada Ortiz"
save("logo-jm-crema.svg", svg(logo, title=NOMBRE)[0])
save("logo-jm-pino.svg", svg(logo, recolor={"j": PINO, "m": PINO}, title=NOMBRE)[0])
save("logo-jm-1tinta-crema.svg", svg(logo, recolor=CREMA, title=NOMBRE)[0])
save("logo-jm-1tinta-pino.svg", svg(logo, recolor=PINO, title=NOMBRE)[0])

# <jm▌>: el mismo logo + un cursor de bloque entre la m y el ">" (agregado, no está en el Figma)
_, (w, h, ox, oy) = svg(logo)
m_dr = L[4]["rect"]; cinta = L[5]["rect"]
hueco = cinta.x0 - m_dr.x1
cw = round(hueco * 0.42, 2)
cx = m_dr.x1 - ox + (hueco - cw) / 2
cy0, cy1 = m_dr.y0 - oy, m_dr.y1 - oy
cursor = (f'\n  <g id="cursor">\n    <rect fill="{LIMA}" x="{cx:.2f}" y="{cy0:.2f}" width="{cw}" height="{cy1-cy0:.2f}" rx="2"/>\n  </g>')
save("logo-jm-cursor.svg", svg(logo, extra=cursor, title=NOMBRE)[0])

# --- Ícono </j> (círculo pino + chevrones salvia + j crema + punto lima) ---
I = grab(2, [16, 17, 18, 19, 20])
icono = list(zip(I, ["fondo", "cinta", "cinta", "j", "punto"]))
s, _ = svg(icono, title=NOMBRE)
save("icono-j.svg", s); save("favicon.svg", s)
save("icono-j-sin-fondo.svg", svg(icono[1:], title=NOMBRE)[0])
# </j> sin círculo para fondo claro: j pino, chevrones musgo, punto lima
save("icono-j-pino.svg", svg(icono[1:], recolor={"j": PINO, "cinta": MUSGO}, title=NOMBRE)[0])
# </j> una tinta crema (sin círculo)
save("icono-j-1tinta-crema.svg", svg(icono[1:], recolor=CREMA, title=NOMBRE)[0])

# --- Firma ---
F = grab(5, [46])
firma = [(F[0], "firma")]
for n, c in [("crema", CREMA), ("pino", PINO), ("lima", LIMA)]:
    save(f"firma-{n}.svg", svg(firma, recolor=c, title="Firma de Juanma")[0])

# --- m suelta y patrón (portada: paso 140 px, filas cada 118 px, filas pares corridas 70 px) ---
M = grab(1, [3])[0]
d_m = path_d(M, M["rect"].x0, M["rect"].y0)
mw, mh = M["rect"].width, M["rect"].height
save("m.svg", f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {mw:.2f} {mh:.2f}" width="{mw:.0f}" height="{mh:.0f}">\n'
     f'  <path fill="currentColor" d="{d_m}"/>\n</svg>\n')
tile_w, tile_h = 140, 236
patron = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {tile_w} {tile_h}" width="{tile_w}" height="{tile_h}">\n'
          f'  <defs><path id="m" d="{d_m}"/></defs>\n'
          f'  <g fill="{MUSGO}" fill-opacity="0.45">\n'
          f'    <use href="#m" x="0" y="0"/>\n'
          f'    <use href="#m" x="70" y="118"/>\n'
          f'    <use href="#m" x="-70" y="118"/>\n'
          f'  </g>\n</svg>\n')
save("patron-m.svg", patron)
print("ok")
