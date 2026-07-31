/* Penn Fan — Type T Table Fans (low-profile fans for under conveyors, tables & floor level).
   Source: PennFanCatalog2015.pdf (Type T performance). Flow = CFM @ 0" w.g.
   Galvanized STEEL blade standard; nylon & cast-aluminum options.
   Model code: T[dia][elec][hp][rpm] + mount, e.g. T24B1-S (B=460V 3ph, C=115/230V 1ph;
   rpm suffix X=1100-1200). Penn Fan publishes no dimensions ("call us") — no dims panel. */
window.TABLE_FAN = {
  type: "T",
  name: "Table Fans",
  sizes: [18, 20, 24, 30, 36, 40],
  blades: [
    { key:"steel", label:"Galvanized Steel", note:"Standard", std:true },
    { key:"nylon", label:"Nylon Reinforced", note:"Option" },
    { key:"alum",  label:"Cast Aluminum",   note:"Option" }
  ],
  mounts: [
    { code:"S", name:"Standard Tilt", img:"cooling/table/standard.png", desc:"Low-profile tilt base — slides under a conveyor or table and angles the air where you need it.", popular:true },
    { code:"P", name:"Pedestal Tilt", img:"cooling/table/pedestal.png", desc:"Round pedestal base that tilts — a free-standing spot fan you can aim." }
  ],
  mountsNote: "Low-profile design fits under conveyors, rolling decks & tables; custom configurations available on request.",
  phases: [
    { key:"3", label:"3-Phase", volts:"208-230/460 V · 3-phase" },
    { key:"1", label:"1-Phase", volts:"115/230 V · 1-phase" }
  ],
  models: [
    // ---- 3 Phase ----
    { ph:"3", size:18, model:"T18B1/3",  hp:"1/3", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:3432,  nylon:3900,  alum:3900} },
    { ph:"3", size:18, model:"T18B3/4",  hp:"3/4", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:4635,  nylon:5240,  alum:5240} },
    { ph:"3", size:20, model:"T20B1/2",  hp:"1/2", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:4346,  nylon:5500,  alum:5500} },
    { ph:"3", size:20, model:"T20B1/2X", hp:"1/2", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:4078,  nylon:5040,  alum:5040} },
    { ph:"3", size:20, model:"T20B1",    hp:"1",   rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:5689,  nylon:6740,  alum:6740} },
    { ph:"3", size:24, model:"T24B1/2X", hp:"1/2", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:6044,  nylon:6700,  alum:6700} },
    { ph:"3", size:24, model:"T24B1",    hp:"1",   rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:7795,  nylon:8050,  alum:8050} },
    { ph:"3", size:24, model:"T24B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:9030,  nylon:9500,  alum:9500} },
    { ph:"3", size:24, model:"T24B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:9674,  nylon:10500, alum:10500} },
    { ph:"3", size:30, model:"T30B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:12861, nylon:13700, alum:13700} },
    { ph:"3", size:30, model:"T30B3",    hp:"3",   rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:14793, nylon:16700, alum:16700} },
    { ph:"3", size:30, model:"T30B5",    hp:"5",   rpm:1750, volts:"208-230/460/3/60 VAC", cfm:{steel:17807, nylon:20100, alum:20100} },
    { ph:"3", size:36, model:"T36B5",    hp:"5",   rpm:1750, volts:"208-230/460/3/60 VAC", cfm:{steel:20268, nylon:25300, alum:24900} },
    { ph:"3", size:40, model:"T40B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:29802, nylon:34400, alum:34400} },
    // ---- 1 Phase ----
    { ph:"1", size:18, model:"T18C1/3",  hp:"1/3", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:3432,  nylon:3900,  alum:3900} },
    { ph:"1", size:18, model:"T18C3/4",  hp:"3/4", rpm:1755, volts:"115/230/1/60 VAC", cfm:{steel:4554,  nylon:5330,  alum:5330} },
    { ph:"1", size:20, model:"T20C1/2",  hp:"1/2", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:4346,  nylon:5500,  alum:5500} },
    { ph:"1", size:20, model:"T20C1",    hp:"1",   rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:5689,  nylon:6740,  alum:6740} },
    { ph:"1", size:24, model:"T24C1",    hp:"1",   rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:7658,  nylon:7950,  alum:7950} },
    { ph:"1", size:24, model:"T24C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:9702,  nylon:10500, alum:10500} },
    { ph:"1", size:30, model:"T30C2",    hp:"2",   rpm:1740, volts:"115/230/1/60 VAC", cfm:{steel:12420, nylon:13700, alum:13700} },
    { ph:"1", size:30, model:"T30C3",    hp:"3",   rpm:1755, volts:"115/230/1/60 VAC", cfm:{steel:14751, nylon:16900, alum:16900} },
    { ph:"1", size:36, model:"T36C5",    hp:"5",   rpm:1735, volts:"115/230/1/60 VAC", cfm:{steel:20931, nylon:25600, alum:25600} },
    { ph:"1", size:36, model:"T36C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:18342, nylon:21500, alum:21500} }
  ]
};
