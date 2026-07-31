/* Penn Fan — Type M Mancooling Fans (open-face high-velocity mancoolers).
   Source: PennFanCatalog2015.pdf (Type M performance). Flow = CFM @ 0" w.g.
   Galvanized STEEL blade standard; nylon & cast-aluminum options.
   Model code: M[dia][elec][hp][rpm] + mount, e.g. M36B5X-4LWC (B=460V 3ph, C=115/230V 1ph;
   rpm suffix X=1100-1200, Z=800-900, blank≈1750). Penn Fan publishes no dimensions
   ("call us for model dimensions, weights or custom configurations") — no dims panel yet. */
window.MANCOOLER_FAN = {
  type: "M",
  name: "Industrial Mancooler Fans",
  sizes: [24, 30, 36, 42, 48],
  blades: [
    { key:"steel", label:"Galvanized Steel", note:"Standard", std:true },
    { key:"nylon", label:"Nylon Reinforced", note:"Option" },
    { key:"alum",  label:"Cast Aluminum",   note:"Option" }
  ],
  mounts: [
    { code:"4L",   name:"Four Legs",            img:"cooling/mancooler/4l.png",   desc:"Rigid four-leg stand for a fixed high-velocity cooling station." },
    { code:"4LWC", name:"Four Legs w/ Casters", img:"cooling/mancooler/4lwc.png", desc:"Four legs on locking casters — roll the mancooler wherever the heat is.", popular:true },
    { code:"WM",   name:"Wall Mount",           img:"cooling/mancooler/wm.png",   desc:"Wall bracket that lifts the fan up and out of the floor space." },
    { code:"YMT",  name:"Yoke Mount",           img:"cooling/mancooler/yoke.png", desc:"Yoke frame to hang or wall-mount and tilt/swivel the airflow." }
  ],
  mountsNote: "Additional mounts — T-Base and Ceiling Mount Tilt/Swivel — available on request.",
  phases: [
    { key:"3", label:"3-Phase", volts:"208-230/460 V · 3-phase" },
    { key:"1", label:"1-Phase", volts:"115/230 V · 1-phase" }
  ],
  models: [
    // ---- 3 Phase ----
    { ph:"3", size:24, model:"M24B1",    hp:"1",   rpm:1765, volts:"208-230/460/3/60 VAC", cfm:{steel:7680,  nylon:7960,  alum:7960} },
    { ph:"3", size:24, model:"M24B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:9030,  nylon:9290,  alum:9290} },
    { ph:"3", size:24, model:"M24B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:9674,  nylon:11000, alum:11000} },
    { ph:"3", size:24, model:"M24B3/4X", hp:"3/4", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:7020,  nylon:7570,  alum:7570} },
    { ph:"3", size:30, model:"M30B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:11807, nylon:12200, alum:12200} },
    { ph:"3", size:30, model:"M30B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:12861, nylon:13700, alum:13700} },
    { ph:"3", size:30, model:"M30B3",    hp:"3",   rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:14793, nylon:16700, alum:16700} },
    { ph:"3", size:30, model:"M30B1X",   hp:"1",   rpm:1155, volts:"208-230/460/3/60 VAC", cfm:{steel:10032, nylon:11900, alum:11900} },
    { ph:"3", size:30, model:"M30B1.5X", hp:"1.5", rpm:1170, volts:"208-230/460/3/60 VAC", cfm:{steel:11693, nylon:13200, alum:13200} },
    { ph:"3", size:36, model:"M36B5",    hp:"5",   rpm:1750, volts:"208-230/460/3/60 VAC", cfm:{steel:20268, nylon:25800, alum:24800} },
    { ph:"3", size:36, model:"M36B2X",   hp:"2",   rpm:1170, volts:"208-230/460/3/60 VAC", cfm:{steel:15566, nylon:19100, alum:19100} },
    { ph:"3", size:36, model:"M36B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:18342, nylon:20700, alum:20700} },
    { ph:"3", size:36, model:"M36B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:22351, nylon:25100, alum:25000} },
    { ph:"3", size:42, model:"M42B7.5",  hp:"7.5", rpm:1770, volts:"208-230/460/3/60 VAC", cfm:{steel:null,  nylon:31700, alum:31700} },
    { ph:"3", size:42, model:"M42B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:22386, nylon:26000, alum:25500} },
    { ph:"3", size:42, model:"M42B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:25963, nylon:30900, alum:31200} },
    { ph:"3", size:42, model:"M42B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:31094, nylon:35600, alum:35600} },
    { ph:"3", size:48, model:"M48B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:32614, nylon:35600, alum:35600} },
    { ph:"3", size:48, model:"M48B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:34910, nylon:42000, alum:42000} },
    // ---- 1 Phase ----
    { ph:"1", size:24, model:"M24C1",    hp:"1",   rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:7658,  nylon:7950,  alum:7950} },
    { ph:"1", size:24, model:"M24C1.5",  hp:"1.5", rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:9030,  nylon:9290,  alum:9500} },
    { ph:"1", size:24, model:"M24C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:9702,  nylon:10400, alum:10500} },
    { ph:"1", size:24, model:"M24C3/4X", hp:"3/4", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:7020,  nylon:7660,  alum:7660} },
    { ph:"1", size:30, model:"M30C1.5",  hp:"1.5", rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:11807, nylon:12200, alum:12200} },
    { ph:"1", size:30, model:"M30C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:12420, nylon:13700, alum:13700} },
    { ph:"1", size:30, model:"M30C3",    hp:"3",   rpm:1755, volts:"115/230/1/60 VAC", cfm:{steel:14446, nylon:16900, alum:16900} },
    { ph:"1", size:30, model:"M30C1X",   hp:"1",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:11509, nylon:11900, alum:11900} },
    { ph:"1", size:30, model:"M30C1.5X", hp:"1.5", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:11600, nylon:13400, alum:13400} },
    { ph:"1", size:36, model:"M36C5",    hp:"5",   rpm:1735, volts:"115/230/1/60 VAC", cfm:{steel:20094, nylon:25600, alum:25600} },
    { ph:"1", size:36, model:"M36C2X",   hp:"2",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:15750, nylon:17700, alum:18000} },
    { ph:"1", size:36, model:"M36C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:18342, nylon:21500, alum:21500} },
    { ph:"1", size:42, model:"M42C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:22386, nylon:26000, alum:26000} }
  ]
};
