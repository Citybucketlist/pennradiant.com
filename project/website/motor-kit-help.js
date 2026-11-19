/* "Which Motor Kit Do I Need?" section for sr-motor-kit.html.
   Drawn blower wheels spin up when the section scrolls into view, then a red
   ring traces each rim and arrows label the rim and blade count.
   The wheels carry the PennRadiant.com sticker and watermark.
   Usage: window.PRP_mountMotorHelp(containerElement) */
(function () {
  const A = "../assets";
  const P = A + "/products/space-ray/parts/";
  const KITS = [
    {pn:"42928000", nm:"High Temp Motor Replacement Kit", kit:P + "42928000-hero.png", real:P + "03723000-closeup.jpg",
     wheelPn:"03723000", mfr:"Revcor", type:"smooth", blades:22,
     notes:[["Smooth rolled lip"], ["22 blades,", "wider spacing"]],
     href:"contact.html?part=42928000", go:"Get a Quote"},
    {pn:"42928010", nm:"Motor Replacement Kit", kit:P + "42928010-kit.jpg", real:P + "03723020-closeup.jpg",
     wheelPn:"03723020", mfr:"Beckett", type:"banded", blades:34,
     notes:[["Banded rim,", "exposed blade tabs"], ["34 blades,", "tighter spacing"]],
     href:"part-detail.html?pn=42928010", go:"View Kit"}
  ];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}[c]));
  const nw = s => s.replace(/ (\S+)$/, "&nbsp;$1");

  function wheelSVG(w, idx) {
    const cx = 132, cy = 150, R = 108, f = n => n.toFixed(1), pt = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const id = "mkw" + idx;
    let blades = "", tabs = "";
    for (let i = 0; i < w.blades; i++) {
      const a = i * 2 * Math.PI / w.blades, [x1, y1] = pt(R * .58, a), [qx, qy] = pt(R * .78, a + .05), [x2, y2] = pt(R * .92, a + .2);
      blades += `<path d="M${f(x1)} ${f(y1)}Q${f(qx)} ${f(qy)} ${f(x2)} ${f(y2)}" stroke="url(#${id}b)" stroke-width="${w.type === "banded" ? 4.2 : 6.5}"/>`;
      if (w.type === "banded") {
        const [tx, ty] = pt(R * .955, a + .2), deg = (a + .2) * 180 / Math.PI;
        tabs += `<g transform="translate(${f(tx)} ${f(ty)}) rotate(${f(deg)})"><rect x="-4.6" y="-2.6" width="9.2" height="5.2" rx="2.4" fill="#3b3e44"/><rect x="-2.4" y="-1.2" width="4.8" height="2.4" rx="1.1" fill="#e4e6ea"/></g>`;
      }
    }
    const rim = w.type === "banded"
      ? `<circle cx="${cx}" cy="${cy}" r="${R * .955}" fill="none" stroke="url(#${id}m)" stroke-width="${R * .095}"/>${tabs}
         <circle cx="${cx}" cy="${cy}" r="${R * 1.002}" fill="none" stroke="#7b7e85" stroke-width="1.4"/><circle cx="${cx}" cy="${cy}" r="${R * .908}" fill="none" stroke="#6f727a" stroke-width="1.4"/>`
      : `<circle cx="${cx}" cy="${cy}" r="${R * .958}" fill="none" stroke="url(#${id}m)" stroke-width="${R * .085}"/>
         <circle cx="${cx}" cy="${cy}" r="${R * .958}" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-dasharray="40 60 18 90 30 120"/>
         <circle cx="${cx}" cy="${cy}" r="${R * 1.0}" fill="none" stroke="#7b7e85" stroke-width="1.4"/><circle cx="${cx}" cy="${cy}" r="${R * .915}" fill="none" stroke="#6f727a" stroke-width="1.4"/>`;
    const [rx, ry] = pt(R * .96, -0.72), [bx, by] = pt(R * .76, 0.62);
    const lab = (lines, x, y, cls) => `<text class="mh-lb ${cls}" x="${x}" y="${y}">${lines.map((t, k) => `<tspan x="${x}" dy="${k ? 18 : 0}">${esc(t)}</tspan>`).join("")}</text>`;
    return `<svg class="mh-svg" viewBox="0 0 452 300" role="img" aria-label="${w.mfr} blower wheel ${w.wheelPn}: ${w.notes.map(n => n.join(" ")).join("; ")}">
      <defs>
        <linearGradient id="${id}m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef0f3"/><stop offset=".45" stop-color="#b8bbc2"/><stop offset=".7" stop-color="#d9dbe0"/><stop offset="1" stop-color="#8d9098"/></linearGradient>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e7e9ec"/><stop offset="1" stop-color="#9da0a8"/></linearGradient>
        <radialGradient id="${id}h" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#e9ebee"/><stop offset=".7" stop-color="#b3b6bd"/><stop offset="1" stop-color="#8f929a"/></radialGradient>
      </defs>
      <ellipse cx="${cx}" cy="${cy + R + 14}" rx="${R * .8}" ry="9" fill="#1c1c1e" opacity=".12"/>
      <g class="mh-rot" style="transform-origin:${cx}px ${cy}px">
        <circle cx="${cx}" cy="${cy}" r="${R * .93}" fill="#3a3d43"/>
        <g fill="none" stroke-linecap="butt">${blades}</g>
        <circle cx="${cx}" cy="${cy}" r="${R * .58}" fill="url(#${id}h)" stroke="#8b8e96" stroke-width="1.2"/>
        <circle cx="${cx}" cy="${cy}" r="${R * .45}" fill="none" stroke="#9a9da4" stroke-width="1.4"/>
        <circle cx="${cx}" cy="${cy}" r="${R * .33}" fill="none" stroke="#a5a8ae" stroke-width="1.2"/>
        <circle cx="${cx}" cy="${cy}" r="${R * .17}" fill="#dcdee2" stroke="#86898f" stroke-width="1.4"/>
        <circle cx="${cx}" cy="${cy}" r="${R * .065}" fill="#25272b"/>
        <rect x="${cx + R * .12}" y="${cy - 3}" width="${R * .07}" height="6" rx="1.5" fill="#55585e"/>
        <path id="${id}t" d="M${f(cx - R * .395)} ${cy} a${f(R * .395)} ${f(R * .395)} 0 1 1 ${f(R * .79)} 0 a${f(R * .395)} ${f(R * .395)} 0 1 1 ${f(-R * .79)} 0" fill="none"/>
        <text class="mh-stamp hi" dy="1"><textPath href="#${id}t" startOffset="2%">${w.mfr.toUpperCase()}</textPath></text>
        <text class="mh-stamp"><textPath href="#${id}t" startOffset="2%">${w.mfr.toUpperCase()}</textPath></text>
        <image href="${A}/logos/pr-sticker-sm.png" x="${f(cx - R * .36)}" y="${f(cy + R * .2)}" width="${f(R * .62)}" height="${f(R * .62 * 70 / 520)}" transform="rotate(-24 ${cx} ${cy})" preserveAspectRatio="xMidYMid meet"/>
        ${rim}
      </g>
      <g class="mh-wm" aria-hidden="true">
        <rect x="${cx - 74}" y="${f(cy + R * .5)}" width="148" height="26" rx="6" fill="#1c1c1e" fill-opacity=".42"/>
        <text x="${cx}" y="${f(cy + R * .5 + 18.5)}" text-anchor="middle"><tspan class="b">PennRadiant</tspan><tspan class="c">.com</tspan></text>
      </g>
      <circle class="mh-hl" cx="${cx}" cy="${cy}" r="${R * .96}" pathLength="1" fill="none" stroke="var(--prp-red,#EB1D27)" stroke-width="3" stroke-dasharray="${w.type === "banded" ? ".02 .012" : "1"}"/>
      <path class="mh-ar a1" pathLength="1" d="M286 58 Q ${f(rx + 40)} ${f(ry - 34)} ${f(rx + 6)} ${f(ry - 4)}" fill="none" stroke="var(--prp-red,#EB1D27)" stroke-width="3" stroke-linecap="round"/>
      <path class="mh-ah h1" d="M${f(rx + 6)} ${f(ry - 4)} l13 -1 M${f(rx + 6)} ${f(ry - 4)} l4 -12" fill="none" stroke="var(--prp-red,#EB1D27)" stroke-width="3" stroke-linecap="round"/>
      ${lab(w.notes[0], 292, 56, "l1")}
      <path class="mh-ar a2" pathLength="1" d="M286 230 Q ${f(bx + 56)} ${f(by + 40)} ${f(bx + 8)} ${f(by + 6)}" fill="none" stroke="var(--prp-red,#EB1D27)" stroke-width="3" stroke-linecap="round"/>
      <path class="mh-ah h2" d="M${f(bx + 8)} ${f(by + 6)} l12 4 M${f(bx + 8)} ${f(by + 6)} l2 12" fill="none" stroke="var(--prp-red,#EB1D27)" stroke-width="3" stroke-linecap="round"/>
      ${lab(w.notes[1], 292, 226, "l2")}
    </svg>`;
  }

  window.PRP_mountMotorHelp = function (host) {
    if (!host || host.dataset.mounted) return;
    host.dataset.mounted = "1";
    host.classList.add("mh-sec");
    host.innerHTML = `
      <div class="eyebrow-row"><h2><span class="lt">WHICH</span> MOTOR KIT DO&nbsp;I&nbsp;NEED?</h2></div>
      <p class="mk-lead">Pull the old motor and look at its blower wheel. The rim and the blade count tell you which kit&nbsp;fits.</p>
      <div class="mh-grid">${KITS.map((w, i) => `<div class="mh-card" data-i="${i}">
        <div class="mh-wheel" title="Hover to spin again">${wheelSVG(w, i)}</div>
        <div class="mh-real"><img src="${w.real}" alt="Close-up of ${w.mfr} blower wheel ${w.wheelPn}" loading="lazy"><span><b>${w.mfr} blower wheel ${w.wheelPn}</b><span>Actual wheel, close up. Look for <q>${w.mfr.toUpperCase()}</q> stamped on the&nbsp;hub.</span></span></div>
        <a class="mh-kit" href="${w.href}"><span class="ki"><img src="${w.kit}" alt="" loading="lazy"></span><span class="kt"><span class="pn">P/N ${w.pn}</span><b>${nw(esc(w.nm))}</b></span><span class="go">${w.go} &rarr;</span></a>
      </div>`).join("")}</div>
      <div class="mh-foot"><span>Still not sure? Call <a href="tel:18004382503">1.800.438.2503</a> with your heater's model and serial&nbsp;number.</span><button type="button" class="btn btn-outline mh-replay">&#8635; Replay</button></div>`;
    const cards = [...host.querySelectorAll(".mh-card")];
    const play = c => { c.classList.remove("play"); void c.offsetWidth; c.classList.add("play"); };
    host.querySelector(".mh-replay").addEventListener("click", () => cards.forEach(play));
    cards.forEach(c => c.querySelector(".mh-wheel").addEventListener("mouseenter", () => {
      if (!c.classList.contains("play") || c.classList.contains("spinning")) return;
      c.classList.add("spinning");
      const r = c.querySelector(".mh-rot");
      r.style.animation = "none"; void r.getBoundingClientRect(); r.style.animation = ""; r.classList.add("again");
      setTimeout(() => { r.classList.remove("again"); c.classList.remove("spinning"); }, 1700);
    }));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { cards.forEach(play); io.disconnect(); } }, {threshold: .35});
      io.observe(host.querySelector(".mh-grid"));
    } else cards.forEach(play);
  };
})();
