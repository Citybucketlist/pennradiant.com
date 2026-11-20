/* WB Series "Commonly Replaced Parts" rollover map.
   Roll over a part (its cutout, label or P# tag), or one of the part cards,
   and the rest of the sheet fades while that part is outlined in red both as
   a cutout and where it sits inside the open heater.
   Usage: PRP_mountWBParts(hostElement, {sheet, pdf, img: pn => url, href: pn => url, cta}) */
(function () {
  const PARTS = [{"pn":"30632100","nm":"Ignition Module","sub":"Fenwal #35-602906-915","cut":["M290.0 636.0 L290.0 682.0 L301.0 687.5 L305.5 693.0 L304.5 718.5 L307.0 725.5 L314.5 732.0 L327.0 736.0 L447.0 737.0 L448.0 696.0 L451.0 694.0 L454.0 696.0 L455.0 737.0 L588.5 736.0 L606.5 729.5 L619.0 714.0 L616.0 676.5 L621.0 674.0 L617.0 629.5 L607.5 610.5 L603.5 567.5 L597.0 560.5 L356.5 554.0 L330.0 557.0 L323.5 560.0 L318.0 568.0 L312.5 608.5 L297.0 624.5 L293.5 633.5Z"],"inside":[1338,343,1430,398],"label":[100,768,288,802],"pill":[310,758,592,813]},{"pn":"30279870","nm":"Transformer","sub":"120/24V, 20VA","cut":["M615.0 498.5 L615.0 505.5 L622.5 517.5 L629.5 523.0 L640.0 526.5 L665.0 524.0 L669.5 527.5 L672.5 537.0 L677.0 540.5 L697.5 538.5 L707.0 544.5 L711.5 544.5 L720.0 535.0 L740.0 532.5 L753.0 526.5 L763.0 537.0 L769.5 534.0 L769.0 517.5 L776.5 507.0 L774.5 488.0 L790.5 474.0 L793.5 468.5 L787.0 446.0 L790.0 440.5 L841.0 431.0 L862.0 432.0 L877.0 436.5 L897.5 447.0 L910.0 456.5 L919.5 467.5 L924.0 479.5 L925.0 501.5 L919.0 530.5 L896.5 561.0 L867.5 587.5 L842.0 603.0 L807.5 616.0 L765.0 605.5 L737.5 593.0 L732.5 586.0 L731.5 588.0 L738.0 602.5 L761.5 614.5 L763.0 618.0 L750.0 620.5 L689.0 617.0 L677.0 609.0 L679.5 615.5 L691.0 627.5 L853.0 627.5 L860.5 623.5 L863.5 627.5 L870.5 627.5 L877.0 623.5 L877.5 618.0 L903.5 605.0 L920.5 590.0 L929.0 579.0 L938.5 556.0 L941.5 554.0 L941.5 530.0 L938.5 528.0 L936.5 499.5 L932.5 481.5 L927.5 474.5 L922.5 457.5 L916.0 445.5 L902.0 433.5 L888.5 426.5 L871.0 422.0 L828.5 421.5 L754.0 432.0 L746.5 420.5 L730.5 420.5 L726.5 426.0 L722.5 420.0 L674.0 419.0 L670.5 421.5 L641.5 483.5 L627.5 488.0Z"],"inside":[1568,303,1697,412],"label":[1218,155,1468,195],"pill":[1495,145,1782,202]},{"pn":"30739010","nm":"Terminal Block","sub":"6 pole","cut":["M900.5 733.5 L894.5 724.0 L880.0 717.0 L876.5 717.5 L880.0 720.5 L878.0 725.0 L872.0 723.5 L874.5 717.5 L863.0 718.0 L853.5 728.5 L848.5 726.0 L845.5 721.0 L822.0 721.0 L816.0 729.5 L816.0 750.0 L812.5 752.5 L809.0 749.5 L810.5 735.5 L805.0 723.5 L780.5 723.5 L776.5 731.5 L777.5 751.5 L770.0 755.0 L767.0 753.0 L767.5 742.0 L762.5 730.5 L763.5 726.0 L739.5 726.5 L737.5 732.0 L739.0 755.0 L728.5 758.0 L725.0 754.5 L722.0 729.5 L701.0 729.5 L697.5 733.0 L698.0 758.0 L692.0 760.5 L684.5 758.0 L683.5 741.5 L680.5 732.5 L656.0 732.5 L654.0 751.0 L658.5 817.0 L661.5 821.5 L683.5 821.5 L688.0 818.0 L687.5 791.5 L697.0 789.0 L700.5 791.0 L703.0 817.0 L728.5 815.5 L728.0 788.0 L739.0 785.5 L742.0 787.5 L744.0 813.5 L769.5 812.0 L773.0 807.0 L771.0 785.5 L778.0 782.5 L781.0 784.5 L785.5 810.5 L810.5 809.0 L815.0 805.5 L814.0 783.0 L817.0 781.0 L820.0 783.0 L821.0 795.5 L824.5 799.5 L826.0 807.5 L851.0 806.0 L858.5 801.5 L858.0 796.0 L861.0 794.0 L864.5 796.5 L866.5 805.0 L892.5 803.0 L901.5 798.0 L901.5 788.0 L898.5 786.0 L898.5 781.5 L901.5 779.5 L901.5 761.5 L897.0 758.0 L897.5 753.0 L893.5 747.5 L893.5 744.0Z"],"inside":[1040,528,1232,662],"label":[703,832,977,868],"pill":[703,650,987,709]},{"pn":"30295060","nm":"Electrode / Flame Sensor","sub":"#PSE-GF45","cut":["M1589.5 943.5 L1601.5 943.5 L1605.5 947.5 L1628.5 955.0 L1707.5 952.0 L1713.5 954.0 L1717.5 958.5 L1718.0 974.5 L1721.0 982.5 L1726.5 986.5 L1734.0 987.0 L1745.0 980.0 L1744.0 952.5 L1747.0 950.5 L1773.0 950.0 L1790.5 942.0 L1917.5 937.5 L1926.5 933.0 L1935.5 934.5 L1944.5 927.0 L1940.0 925.0 L1938.0 920.5 L1935.5 922.0 L1927.0 912.5 L1929.5 908.5 L1926.0 910.0 L1923.0 908.0 L1924.5 902.5 L1918.0 901.0 L1743.0 904.0 L1741.5 892.5 L1744.5 890.5 L1772.0 889.5 L1783.5 882.5 L1819.5 882.0 L1854.0 878.5 L1901.0 878.5 L1912.5 871.5 L1913.5 868.0 L1912.0 866.0 L1866.5 866.0 L1815.5 871.0 L1785.0 871.5 L1779.0 865.0 L1743.0 865.0 L1740.0 863.0 L1738.5 829.5 L1736.5 826.0 L1727.5 826.0 L1716.5 837.0 L1714.5 858.0 L1710.0 864.5 L1680.5 866.5 L1631.5 865.5 L1621.0 870.0 L1606.5 881.0 L1597.0 879.5 L1592.5 885.0 L1595.5 887.5 L1611.0 887.5 L1630.0 892.0 L1708.0 891.5 L1715.5 898.5 L1716.0 919.5 L1709.5 925.5 L1630.5 927.5 L1611.5 937.5 L1607.5 942.0Z"],"inside":[1858,472,1966,578],"label":[1432,962,1708,998],"pill":[1562,762,1848,818]}];
  const W = 2000, H = 1049, PAD = 8;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}[c]));
  const nw = s => esc(s).replace(/ (\S+)$/, "&nbsp;$1");
  const rect = (r, p, extra) => `<rect x="${r[0] - p}" y="${r[1] - p}" width="${r[2] - r[0] + 2 * p}" height="${r[3] - r[1] + 2 * p}" rx="${8 + p}" ${extra}/>`;

  window.PRP_mountWBParts = function (host, o) {
    if (!host || host.dataset.mounted) return;
    host.dataset.mounted = "1";
    host.classList.add("wpm");
    const masks = PARTS.map((p, i) => `<mask id="wpmM${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}">
        <rect width="${W}" height="${H}" fill="#fff"/>
        ${p.cut.map(d => `<path d="${d}" fill="#000" stroke="#000" stroke-width="18" stroke-linejoin="round"/>`).join("")}
        ${[p.inside, p.label, p.pill].map(r => rect(r, PAD, 'fill="#000"')).join("")}
      </mask>`).join("");
    const outlines = PARTS.map((p, i) => `<g class="wpm-ol" data-i="${i}">
        ${p.cut.map(d => `<path d="${d}"/>`).join("")}
        ${rect(p.inside, PAD, "")}
        <g class="wpm-in" transform="translate(${Math.min(p.inside[0] - PAD, W - 262)} ${p.inside[1] - PAD - 12})"><rect x="0" y="-40" width="256" height="44" rx="22"/><text x="128" y="-11" text-anchor="middle">INSIDE THE HEATER</text></g>
      </g>`).join("");
    const hits = PARTS.map((p, i) => `<g class="wpm-hit" data-i="${i}" tabindex="-1" aria-label="${esc(p.nm)} ${p.pn}">
        ${p.cut.map(d => `<path d="${d}" stroke-width="20"/>`).join("")}
        ${[p.inside, p.label, p.pill].map(r => rect(r, PAD, "")).join("")}
      </g>`).join("");
    host.innerHTML = `
      <div class="wpm-fig">
        <img class="wpm-img" src="${o.sheet}" width="${W}" height="${H}" alt="Commonly replaced parts for Space-Ray WB Series heaters: ignition module 30632100, transformer 30279870, terminal block 30739010 and electrode flame sensor 30295060, shown as parts and inside an open heater." loading="lazy">
        <svg class="wpm-svg" viewBox="0 0 ${W} ${H}" aria-hidden="true">
          <defs>${masks}</defs>
          <rect class="wpm-dim" width="${W}" height="${H}"/>
          ${outlines}
          ${hits}
        </svg>
      </div>
      <p class="wpm-hint">${matchMedia("(hover: none)").matches ? "Tap" : "Roll over"} a part to see where it sits inside the&nbsp;heater.</p>
      <div class="wpm-cards">${PARTS.map((p, i) => `<a class="wpm-card" data-i="${i}" href="${o.href(p.pn)}">
        <span class="ph"><img src="${o.img(p.pn)}" alt="" loading="lazy"></span>
        <span class="tx"><span class="pn">P/N ${p.pn}</span><b>${nw(p.nm)}</b><span class="sub">${esc(p.sub).replace(/-/g, "\u2011")}</span><span class="go">${esc(o.cta || "Request a Quote")} &rarr;</span></span>
      </a>`).join("")}</div>
      ${o.pdf ? `<p class="wpm-pdf"><a href="${o.pdf}" target="_blank" rel="noopener">&#8595; Download the WB Series parts sheet (PDF)</a></p>` : ""}`;
    const svg = host.querySelector(".wpm-svg"), dim = svg.querySelector(".wpm-dim");
    const ols = [...svg.querySelectorAll(".wpm-ol")], cards = [...host.querySelectorAll(".wpm-card")];
    let cur = -1;
    const set = i => {
      if (i === cur) return; cur = i;
      if (i < 0) { dim.classList.remove("on"); } else { dim.setAttribute("mask", `url(#wpmM${i})`); dim.classList.add("on"); }
      ols.forEach((g, k) => g.classList.toggle("on", k === i));
      cards.forEach((c, k) => c.classList.toggle("on", k === i));
    };
    svg.querySelectorAll(".wpm-hit").forEach(g => {
      const i = +g.dataset.i;
      g.addEventListener("mouseenter", () => set(i));
      g.addEventListener("click", () => set(i));
    });
    svg.addEventListener("mouseleave", () => set(-1));
    cards.forEach(c => {
      const i = +c.dataset.i;
      c.addEventListener("mouseenter", () => set(i)); c.addEventListener("focus", () => set(i));
      c.addEventListener("mouseleave", () => set(-1)); c.addEventListener("blur", () => set(-1));
    });
  };
})();
