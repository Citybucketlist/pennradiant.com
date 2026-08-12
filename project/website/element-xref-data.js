/* Penn Radiant — Replacement Element Interchange.
   Source: Mike Lieb's "Replacement Elements (Old Part Numbers) Spec Sheets" —
   TPI/Fostoria CH & FHK Metal-Sheath X-Ref chart (M. Abell, TPI, 2.1.2014),
   Chromalox UTUA-LT sheet, Spectrum/Comfort GL list, + Mike's notes doc.
   Each row = an element WE supply, plus every legacy part #, OEM #, UPC and
   heater model it replaces, grouped by manufacturer. Numbers are shown AND
   searchable (search collapses dashes/#, so 641-35661 / 64135661 / #641-35661
   all match). "our" links to our element page. */
window.ELEMENT_XREF = [
  // ---------------- 2 kW U-Rod ----------------
  { our:"HE20208", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE20208", wv:"2000 W / 208 V", kw:"2 kW", type:"U-Rod",
    heaters:["CH-220-1A","CH-220-1C","CH-620-3A","CH-620-3C","FHK-220-1A","FHK-620-3A","OH-2028","OH-628","PPH-628"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21002","641-35661","641-70241","04877702"], upc:"686334-445832" },
      { brand:"Spectrum / Comfort", nums:["GL208R2000"], equiv:true }
    ] },
  { our:"HE20240", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE20240", wv:"2000 W / 240 V", kw:"2 kW", type:"U-Rod",
    heaters:["CH-224-1A","CH-224-1C","CH-624-3A","CH-624-3C","FHK-224-1A","FHK-624-3A","OH-202","OH-623","PPH-623"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21004","641-35611","641-70251","04877902"], upc:"686334-445795" },
      { brand:"Chromalox", nums:["UTUA-224LT"], pcn:"106016" },
      { brand:"Spectrum / Comfort", nums:["GL240R2000"], equiv:true }
    ] },
  { our:"642-21005", ourBrand:"Fostoria / TPI · direct replacement", ourHref:"fostoria-elements.html", wv:"2000 W / 277 V", kw:"2 kW", type:"U-Rod", note:"Direct replacement (USA-made) — no Aitken 277 V twin.",
    heaters:["CH-227-1A","CH-227-1C","CH-627-3A","CH-627-3C","FHK-227-1A","FHK-627-3A"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21005","641-36051","641-70261","04878002"], upc:"686334-445849" },
      { brand:"Spectrum / Comfort", nums:["GL277R2000"], equiv:true }
    ] },
  { our:"HE20480", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE20480", wv:"2000 W / 480 V", kw:"2 kW", type:"U-Rod",
    heaters:["CH-248-1A","CH-248-1C","CH-648-3A","CH-648-3C","FHK-248-1A","FHK-648-3A","OH-204","OH-643","PPH-643"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21008","641-35621","641-70271","04878302"], upc:"686334-445801" },
      { brand:"Chromalox", nums:["UTUA-248LT"], pcn:"106024" },
      { brand:"Spectrum / Comfort", nums:["GL480R2000"], equiv:true }
    ] },
  { our:"HE20600", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE20600", wv:"2000 W / 600 V", kw:"2 kW", type:"U-Rod",
    heaters:["CH-257-1A","CH-257-1C","CH-657-3A","CH-657-3C","FHK-257-1A","FHK-657-3A","OH-206","OH-663","PPH-663"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21009","641-50011","641-70281","04878402"], upc:"686334-445887" }
    ] },
  // ---------------- 4.5 kW U-Rod ----------------
  { our:"HE45208", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE45208", wv:"4500 W / 208 V", kw:"4.5 kW", type:"U-Rod",
    heaters:["CH-420-1A","CH-420-1C","CH-1320-3A","CH-1320-3B","CH-2720-3B","CH-2720-3C","FHK-420-1A","FHK-1320-3A","OH-4528","PHX-4528","SH-13528"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21010","641-36061","641-70001","04878502"], upc:"686334-445856" },
      { brand:"Spectrum / Comfort", nums:["GL208R4500"], equiv:true }
    ] },
  { our:"HE45240", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE45240", wv:"4500 W / 240 V", kw:"4.5 kW", type:"U-Rod",
    heaters:["CH-424-1A","CH-424-1C","CH-1324-3A","CH-1324-3B","CH-2724-3B","CH-2724-3C","FHK-424-1A","FHK-1324-3A","OH-452","PHX-452","SH-135231"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21012","641-35631","641-70011","04878702"], upc:"686334-445818" },
      { brand:"Chromalox", nums:["UTUA-424LT"], pcn:"106032" },
      { brand:"Spectrum / Comfort", nums:["GL240R4500"], equiv:true }
    ] },
  { our:"642-21013", ourBrand:"Fostoria / TPI · direct replacement", ourHref:"fostoria-elements.html", wv:"4500 W / 277 V", kw:"4.5 kW", type:"U-Rod", note:"Direct replacement (USA-made) — no Aitken 277 V twin.",
    heaters:["CH-427-1A","CH-427-1C","CH-1327-3A","CH-1327-3B","FHK-427-1A","FHK-1327-3A"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21013","641-36071","641-70021","04878802"], upc:"686334-445863" },
      { brand:"Spectrum / Comfort", nums:["GL277R4500"], equiv:true }
    ] },
  { our:"HE45480", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE45480", wv:"4500 W / 480 V", kw:"4.5 kW", type:"U-Rod",
    heaters:["CH-448-1A","CH-448-1C","CH-1348-3A","CH-1348-3B","CH-2748-3B","CH-2748-3C","FHK-448-1A","FHK-1348-3A","OH-454","PHX-454","SH-135431"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21016","641-35641","641-70031","04879102"], upc:"686334-446174" },
      { brand:"Chromalox", nums:["UTUA-448LT"], pcn:"106040" },
      { brand:"Spectrum / Comfort", nums:["GL480R4500"], equiv:true }
    ] },
  { our:"HE45600", ourBrand:"Aitken", ourHref:"aitken-element.html?pn=HE45600", wv:"4500 W / 600 V", kw:"4.5 kW", type:"U-Rod",
    heaters:["CH-457-1A","CH-457-1C","CH-1357-3A","CH-1357-3B","CH-2757-3B","CH-2757-3C","FHK-457-1A","FHK-1357-3A","OH-456","PHX-456","SH-13563"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21017","641-50021","641-70041","04879202"], upc:"686334-445894" },
      { brand:"Spectrum / Comfort", nums:["GL600R4500"], equiv:true }
    ] },
  // ---------------- 1.8 kW (CH/FHK-212) ----------------
  { our:"642-21001", ourBrand:"Fostoria / TPI · direct replacement", ourHref:"fostoria-elements.html", wv:"1800 W / 120 V", kw:"1.8 kW", type:"U-Rod", note:"Direct replacement (USA-made).",
    heaters:["CH-212-1A","CH-212-1C","FHK-212-1CA"],
    refs:[
      { brand:"Fostoria / TPI", nums:["642-21001","641-37211","641-70321","04877602"], upc:"686334-445870" }
    ] }
];
/* Manufacturer landing copy (per Mike's notes). "heaters" = reference photos of
   the heaters that run each brand's elements, so customers can visually match. */
window.ELEMENT_XREF_BRANDS = [
  { key:"Fostoria / TPI", slug:"fostoria-tpi",
    blurb:"Fostoria / TPI discontinued their individual U-Rod metal-sheath elements. We supply USA-made direct replacements — identical wattage, voltage, physical size & installation — for the CH (fixed) and FHK (portable) heater lines. Each ships complete with element, reflector insert and mounting hardware.",
    heaters:[{ img:"heaters/fostoria-fhk.png", cap:"Fostoria FHK-Series", sub:"portable infrared" }] },
  { key:"Chromalox", slug:"chromalox",
    blurb:"Chromalox UTUA-LT tubular elements (INCOLOY sheath, 9/16-18 bulkhead fittings) cross-reference directly to our Aitken HE-series elements for OH, SH, PPH and PHX radiant heaters.",
    heaters:[{ img:"heaters/chromalox-chromastar.png", cap:"Chromalox ChromaStar", sub:"infrared radiant" }] },
  { key:"Spectrum / Comfort", slug:"spectrum-comfort",
    blurb:"Spectrum Rail Heating no longer sells the Comfort IR / HB / RFX heaters. Their GL-series elements are an INCOLOY-840 hairpin (0.375\" dia.) — a different physical form than our U-Rod, so these are matched on \u003cb\u003ewattage \u0026 voltage only\u003c/b\u003e. Send us your heater model \u0026 serial and we\u2019ll confirm the right element before you order.",
    heaters:[
      { img:"heaters/comfort-ir.png", cap:"Comfort IR", sub:"infrared" },
      { img:"heaters/comfort-rfx.png", cap:"Comfort RFX", sub:"reflector" },
      { img:"heaters/comfort-rb.png", cap:"Comfort RB", sub:"radiant bank" }
    ] }
];
