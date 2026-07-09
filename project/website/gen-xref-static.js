/* Regenerates the static <noscript> interchange table inside element-cross-reference.html.
   This page is client-rendered (Babel-in-browser), which crawlers index poorly — the
   noscript table guarantees the cross-reference part numbers are in the served HTML.
   Run from project/website:  node gen-xref-static.js                                     */
const fs = require("fs");
const path = require("path");

global.window = {};
require("./aitken-data.js");
require("./fostoria-data.js");

const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const u = (v, suf) => (v ? (/[A-Za-z]$/.test(v) ? v : v + suf) : "");

const rows = [];
(window.AITKEN_PARTS || []).forEach(p => {
  const s = p.specs || {};
  const alts = [];
  (p.xref || []).forEach(x => {
    if (x.pn) alts.push(x.pn);
    if (x.old) alts.push(x.old + " (old #)");
  });
  rows.push({
    ourPn: p.pn, brand: "Aitken",
    wv: [u(s.watts, "W"), u(s.volts, "V")].filter(Boolean).join(" / "),
    type: s.type || "", fits: s.fits || "", alts,
    href: "aitken-element.html?pn=" + encodeURIComponent(p.pn),
  });
});
(window.FOSTORIA_PARTS || []).forEach(p => {
  const alts = [];
  if (p.old) alts.push(p.old + " (old #)");
  (p.xref || []).forEach(x => { if (x.pn) alts.push(x.pn); });
  rows.push({
    ourPn: p.former, brand: "Fostoria / TPI",
    wv: [p.watts, p.volts].filter(Boolean).join(" / "),
    type: p.type || "", fits: p.fits || "", alts,
    href: "fostoria-element.html?pn=" + encodeURIComponent(p.id),
  });
});

const tbody = rows.map(r =>
  "      <tr>" +
  `<td><a href="${esc(r.href)}">${esc(r.ourPn)}</a></td>` +
  `<td>${esc(r.brand)}</td>` +
  `<td>${esc(r.wv || "-")}</td>` +
  `<td>${esc(r.type || "-")}</td>` +
  `<td>${esc(r.fits || "-")}</td>` +
  `<td>${r.alts.length ? esc(r.alts.join(", ")) : "Cross-reference pending"}</td>` +
  "</tr>"
).join("\n");

const file = path.join(__dirname, "element-cross-reference.html");
const html = fs.readFileSync(file, "utf8");
const open = '<tbody id="xr-static">', close = "</tbody>";
const i = html.indexOf(open);
if (i < 0) throw new Error("marker <tbody id=\"xr-static\"> not found");
const j = html.indexOf(close, i);
if (j < 0) throw new Error("closing </tbody> not found");

const out = html.slice(0, i + open.length) + "\n" + tbody + "\n    " + html.slice(j);
fs.writeFileSync(file, out);

const withAlts = rows.filter(r => r.alts.length).length;
console.log(`noscript table: ${rows.length} rows (${withAlts} with cross-references)`);
