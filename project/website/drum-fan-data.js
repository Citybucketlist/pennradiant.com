/* Penn Fan — Type D Drum Fans.
   Source: PennFanCatalog2015.pdf (Type D performance tables). Flow = CFM @ 0" w.g.
   Galvanized STEEL blade is standard; nylon & cast-aluminum are options.
   Model code: D[dia][elec][hp][rpm]  (B=460V 3ph, C=115/230V 1ph; rpm suffix
   X=1100-1200, Z=800-900, blank≈1750). Mount code appended, e.g. -4LWC.
   NOTE: pennfan.com's current Drum-Performance.pdf differs slightly from this 2015
   catalog on a few CFM values / model names — using the 2015 catalog per direction. */
window.DRUM_FAN = {
  type: "D",
  name: "Industrial Drum Fans",
  sizes: [24, 30, 36, 42, 48],
  blades: [
    { key:"steel", label:"Galvanized Steel", note:"Standard", std:true },
    { key:"nylon", label:"Nylon Reinforced", note:"Option" },
    { key:"alum",  label:"Cast Aluminum",   note:"Option" }
  ],
  // Mounting configurations offered (clean per-mount renders from pennfan.com).
  mounts: [
    { code:"4L",   name:"Four Legs",                  img:"cooling/drum/4l.png",       desc:"Rigid four-leg stand — a stable, permanent spot-cooling base." },
    { code:"4LWC", name:"Four Legs w/ Casters",       img:"cooling/drum/4lwc.png",     desc:"Four legs on locking casters — roll it anywhere on the floor.", popular:true },
    { code:"CMTS", name:"Ceiling Mount Tilt & Swivel",img:"cooling/drum/cmts.png",     desc:"Overhead bracket that tilts and swivels to aim air from above." },
    { code:"YMT",  name:"Yoke Mount Tilt",            img:"cooling/drum/yoke.png",     desc:"Wall- or floor-yoke that pivots to tilt the fan up or down." },
    { code:"P",    name:"Pedestal",                    img:"cooling/drum/pedestal.png", desc:"Single-column pedestal base — tilts up for directed airflow." }
  ],
  mountsNote: "Additional mounts — T-Base, Yoke Mount Tilt-Swivel, fixed Ceiling Mount and Wall Mount — available on request.",
  // Dimension drawing (generic A/B/C/D shape, same for every drum) + documented
  // dimensions keyed by "size-mount". Only D48B7.5X-4LWC is published today; add rows
  // as Penn Fan / Mike supply them and the Dimensions panel fills in automatically.
  // A/B/C/D are set by blade size & mounting; motor/HP affects weight only.
  dimsDrawing: "cooling/drum/dims-d48.png",
  dimsRefLabel: "D48B7.5X · 48″ · Four Legs w/ Casters",
  dims: {
    "48-4LWC": { model:"D48B7.5X-4LWC", A:'84.5"', B:'48.5"', C:'60"', D:'34.5"', weight:"~870 lbs" }
  },
  phases: [
    { key:"3", label:"3-Phase", volts:"208-230/460 V · 3-phase" },
    { key:"1", label:"1-Phase", volts:"115/230 V · 1-phase" }
  ],
  // models: {ph, size, model, hp, rpm, volts, cfm:{steel,nylon,alum}}
  models: [
    // ---- 3 Phase ----
    { ph:"3", size:24, model:"D24B1",    hp:"1",   rpm:1765, volts:"208-230/460/3/60 VAC", cfm:{steel:7680,  nylon:7970,  alum:8240} },
    { ph:"3", size:24, model:"D24B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:9030,  nylon:9500,  alum:9500} },
    { ph:"3", size:24, model:"D24B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:9674,  nylon:10500, alum:10500} },
    { ph:"3", size:24, model:"D24B3/4X", hp:"3/4", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:7020,  nylon:7660,  alum:7660} },
    { ph:"3", size:30, model:"D30B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:11807, nylon:12800, alum:12800} },
    { ph:"3", size:30, model:"D30B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:12861, nylon:14400, alum:14400} },
    { ph:"3", size:30, model:"D30B3",    hp:"3",   rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:14793, nylon:17200, alum:17200} },
    { ph:"3", size:30, model:"D30B1X",   hp:"1",   rpm:1155, volts:"208-230/460/3/60 VAC", cfm:{steel:10032, nylon:12000, alum:12000} },
    { ph:"3", size:30, model:"D30B1.5X", hp:"1.5", rpm:1170, volts:"208-230/460/3/60 VAC", cfm:{steel:11693, nylon:13900, alum:13900} },
    { ph:"3", size:36, model:"D36B5",    hp:"5",   rpm:1750, volts:"208-230/460/3/60 VAC", cfm:{steel:20268, nylon:24700, alum:25800} },
    { ph:"3", size:36, model:"D36B2X",   hp:"2",   rpm:1170, volts:"208-230/460/3/60 VAC", cfm:{steel:16883, nylon:17700, alum:19100} },
    { ph:"3", size:36, model:"D36B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:18421, nylon:21500, alum:21500} },
    { ph:"3", size:36, model:"D36B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:22351, nylon:25900, alum:25900} },
    { ph:"3", size:42, model:"D42B7.5",  hp:"7.5", rpm:1770, volts:"208-230/460/3/60 VAC", cfm:{steel:28105, nylon:32500, alum:32500} },
    { ph:"3", size:42, model:"D42B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:22386, nylon:26000, alum:26000} },
    { ph:"3", size:42, model:"D42B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:25963, nylon:30900, alum:30700} },
    { ph:"3", size:42, model:"D42B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:31094, nylon:35200, alum:35200} },
    { ph:"3", size:48, model:"D48B3Z",   hp:"3",   rpm:865,  volts:"208-230/460/3/60 VAC", cfm:{steel:25591, nylon:30800, alum:30800} },
    { ph:"3", size:48, model:"D48B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:31177, nylon:35600, alum:35600} },
    { ph:"3", size:48, model:"D48B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:34910, nylon:42000, alum:42000} },
    // ---- 1 Phase ----
    { ph:"1", size:24, model:"D24C1",    hp:"1",   rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:7658,  nylon:7950,  alum:7950} },
    { ph:"1", size:24, model:"D24C1.5",  hp:"1.5", rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:9030,  nylon:9500,  alum:9500} },
    { ph:"1", size:24, model:"D24C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:9702,  nylon:11000, alum:11000} },
    { ph:"1", size:24, model:"D24C3/4X", hp:"3/4", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:7020,  nylon:7570,  alum:7570} },
    { ph:"1", size:30, model:"D30C1.5",  hp:"1.5", rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:11807, nylon:12200, alum:12200} },
    { ph:"1", size:30, model:"D30C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:12420, nylon:13700, alum:13700} },
    { ph:"1", size:30, model:"D30C3",    hp:"3",   rpm:1755, volts:"115/230/1/60 VAC", cfm:{steel:14751, nylon:16900, alum:16900} },
    { ph:"1", size:30, model:"D30C1X",   hp:"1",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:10207, nylon:11900, alum:11900} },
    { ph:"1", size:30, model:"D30C1.5X", hp:"1.5", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:11600, nylon:13400, alum:13400} },
    { ph:"1", size:36, model:"D36C5",    hp:"5",   rpm:1735, volts:"115/230/1/60 VAC", cfm:{steel:20931, nylon:25600, alum:25500} },
    { ph:"1", size:36, model:"D36C2X",   hp:"2",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:15750, nylon:18000, alum:18000} },
    { ph:"1", size:36, model:"D36C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:18342, nylon:21500, alum:21500} },
    { ph:"1", size:42, model:"D42C7.5",  hp:"7.5", rpm:1745, volts:"115/230/1/60 VAC", cfm:{steel:27708, nylon:32100, alum:32100} },
    { ph:"1", size:42, model:"D42C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:22386, nylon:26000, alum:26000} }
  ]
};
