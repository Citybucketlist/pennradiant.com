/* Penn Fan — Type EX Exhaust / Panel Fans (through-wall supply or exhaust).
   Source: PennFanCatalog2015.pdf (Type EX, direct-drive performance). Flow = CFM @ 0" w.g.
   Galvanized STEEL blade standard; nylon & cast-aluminum options.
   Model code: EX[dia][elec][hp][rpm] + config, e.g. EX24B1-EG (B=460V 3ph, C=115/230V 1ph;
   rpm suffix X=1100-1200, Z=800-900). Config = guard option. Belt-drive (BD) versions
   also exist (site only). Penn Fan publishes no dimensions ("call us") — no dims panel. */
window.EXHAUST_FAN = {
  type: "EX",
  name: "Exhaust / Panel Fans",
  sizes: [12, 14, 16, 18, 20, 24, 30, 36, 42, 48, 54, 60],
  wideSizes: true,   // 12 sizes — render size control as a wrapping pill group
  configLabel: "configuration",
  blades: [
    { key:"steel", label:"Galvanized Steel", note:"Standard", std:true },
    { key:"nylon", label:"Nylon Reinforced", note:"Option" },
    { key:"alum",  label:"Cast Aluminum",   note:"Option" }
  ],
  // "mounts" here = guard configuration (the template's selector).
  mounts: [
    { code:"P",  name:"Panel Only",    img:"cooling/exhaust/panel.png", desc:"Bare panel fan for through-wall mounting — supply or exhaust air." },
    { code:"EG", name:"Exhaust Guard", img:"cooling/exhaust/eg.png",    desc:"Wire guard on the exhaust (weather) side — the common wall-exhaust build.", popular:true },
    { code:"IG", name:"Intake Guard",  img:"cooling/exhaust/ig.png",    desc:"Guard on the intake (room) side to keep hands & debris out of the blade." },
    { code:"BG", name:"Both Guards",   img:"cooling/exhaust/bg.png",    desc:"Guards on both the intake and exhaust sides for full protection." }
  ],
  mountsNote: "Belt-drive (BD) versions also available — call for details.",
  // Bolt-on accessories shown below the spec table.
  accessories: [
    { code:"H",  name:"Hood w/ Bird Screen", img:"cooling/exhaust/hood.png",    desc:"Weather hood with bird screen for outdoor wall exhaust." },
    { code:"L",  name:"Gravity Louvers",     img:"cooling/exhaust/louvers.png", desc:"Gravity-operated louvers open with airflow and close when the fan is off. Motorized louvers (ML) available." }
  ],
  phases: [
    { key:"3", label:"3-Phase", volts:"208-230/460 V · 3-phase" },
    { key:"1", label:"1-Phase", volts:"115/230 V · 1-phase" }
  ],
  models: [
    // ---- 3 Phase (direct drive) ----
    { ph:"3", size:12, model:"EX12B1/4",  hp:"1/4", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:1459,  nylon:1930,  alum:1790} },
    { ph:"3", size:14, model:"EX14B1/4",  hp:"1/4", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:2106,  nylon:2250,  alum:2390} },
    { ph:"3", size:16, model:"EX16B1/3",  hp:"1/3", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:2872,  nylon:3280,  alum:3240} },
    { ph:"3", size:18, model:"EX18B1/3",  hp:"1/3", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:3053,  nylon:3900,  alum:3900} },
    { ph:"3", size:18, model:"EX18B1/2",  hp:"1/2", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:3655,  nylon:4820,  alum:4820} },
    { ph:"3", size:20, model:"EX20B1/3",  hp:"1/3", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:3251,  nylon:3730,  alum:3730} },
    { ph:"3", size:20, model:"EX20B1/2",  hp:"1/2", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:4003,  nylon:5500,  alum:5500} },
    { ph:"3", size:20, model:"EX20B3/4",  hp:"3/4", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:4651,  nylon:6030,  alum:6030} },
    { ph:"3", size:24, model:"EX24B3/4",  hp:"3/4", rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:6437,  nylon:6750,  alum:6750} },
    { ph:"3", size:24, model:"EX24B1",    hp:"1",   rpm:1725, volts:"208-230/460/3/60 VAC", cfm:{steel:7022,  nylon:8050,  alum:8050} },
    { ph:"3", size:24, model:"EX24B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:8304,  nylon:9500,  alum:9500} },
    { ph:"3", size:24, model:"EX24B3/4X", hp:"3/4", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:6593,  nylon:7500,  alum:7500} },
    { ph:"3", size:30, model:"EX30B2",    hp:"2",   rpm:1735, volts:"208-230/460/3/60 VAC", cfm:{steel:11685, nylon:13700, alum:13700} },
    { ph:"3", size:30, model:"EX30B3",    hp:"3",   rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:13363, nylon:16900, alum:16900} },
    { ph:"3", size:30, model:"EX30B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:14089, nylon:16200, alum:16500} },
    { ph:"3", size:30, model:"EX30B3/4X", hp:"3/4", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:8335,  nylon:10200, alum:10200} },
    { ph:"3", size:30, model:"EX30B1X",   hp:"1",   rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:9253,  nylon:10400, alum:10400} },
    { ph:"3", size:30, model:"EX30B1.5X", hp:"1.5", rpm:1140, volts:"208-230/460/3/60 VAC", cfm:{steel:11288, nylon:13200, alum:13200} },
    { ph:"3", size:30, model:"EX30B1.5",  hp:"1.5", rpm:1760, volts:"208-230/460/3/60 VAC", cfm:{steel:10431, nylon:11900, alum:11900} },
    { ph:"3", size:36, model:"EX36B5",    hp:"5",   rpm:1750, volts:"208-230/460/3/60 VAC", cfm:{steel:19423, nylon:24900, alum:24900} },
    { ph:"3", size:36, model:"EX36B2X",   hp:"2",   rpm:1170, volts:"208-230/460/3/60 VAC", cfm:{steel:14115, nylon:19100, alum:19100} },
    { ph:"3", size:36, model:"EX36B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:17230, nylon:20400, alum:20400} },
    { ph:"3", size:36, model:"EX36B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:22351, nylon:24400, alum:25000} },
    { ph:"3", size:42, model:"EX42B3X",   hp:"3",   rpm:1165, volts:"208-230/460/3/60 VAC", cfm:{steel:19303, nylon:24500, alum:24500} },
    { ph:"3", size:42, model:"EX42B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:25125, nylon:31000, alum:31000} },
    { ph:"3", size:42, model:"EX42B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:30769, nylon:33400, alum:33400} },
    { ph:"3", size:48, model:"EX48B5X",   hp:"5",   rpm:1160, volts:"208-230/460/3/60 VAC", cfm:{steel:29423, nylon:34100, alum:34100} },
    { ph:"3", size:48, model:"EX48B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:34910, nylon:40600, alum:40600} },
    { ph:"3", size:48, model:"EX48B3Z",   hp:"3",   rpm:865,  volts:"208-230/460/3/60 VAC", cfm:{steel:25255, nylon:29700, alum:29700} },
    { ph:"3", size:48, model:"EX48B5Z",   hp:"5",   rpm:900,  volts:"208-230/460/3/60 VAC", cfm:{steel:30515, nylon:36600, alum:36600} },
    { ph:"3", size:54, model:"EX54B5Z",   hp:"5",   rpm:900,  volts:"208-230/460/3/60 VAC", cfm:{steel:33967, nylon:41100, alum:37500} },
    { ph:"3", size:54, model:"EX54B7.5X", hp:"7.5", rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:33068, nylon:44800, alum:40900} },
    { ph:"3", size:54, model:"EX54B7.5Z", hp:"7.5", rpm:870,  volts:"208-230/460/3/60 VAC", cfm:{steel:41109, nylon:46900, alum:46900} },
    { ph:"3", size:54, model:"EX54B10X",  hp:"10",  rpm:1180, volts:"208-230/460/3/60 VAC", cfm:{steel:39681, nylon:34300, alum:32100} },
    { ph:"3", size:60, model:"EX60B5Z",   hp:"5",   rpm:855,  volts:"208-230/460/3/60 VAC", cfm:{steel:37506, nylon:44700, alum:41200} },
    { ph:"3", size:60, model:"EX60B7.5Z", hp:"7.5", rpm:870,  volts:"208-230/460/3/60 VAC", cfm:{steel:43369, nylon:57900, alum:50600} },
    { ph:"3", size:60, model:"EX60B10Z",  hp:"10",  rpm:870,  volts:"208-230/460/3/60 VAC", cfm:{steel:52721, nylon:59200, alum:59200} },
    // ---- 1 Phase (direct drive) ----
    { ph:"1", size:12, model:"EX12C1/4",  hp:"1/4", rpm:1745, volts:"115/230/1/60 VAC", cfm:{steel:1476,  nylon:1810,  alum:1810} },
    { ph:"1", size:14, model:"EX14C1/4",  hp:"1/4", rpm:1745, volts:"115/230/1/60 VAC", cfm:{steel:2235,  nylon:2630,  alum:2420} },
    { ph:"1", size:16, model:"EX16C1/3",  hp:"1/3", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:2875,  nylon:3280,  alum:3150} },
    { ph:"1", size:16, model:"EX16C1/2",  hp:"1/2", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:2937,  nylon:3590,  alum:3590} },
    { ph:"1", size:18, model:"EX18C1/3",  hp:"1/3", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:4711,  nylon:3900,  alum:3900} },
    { ph:"1", size:18, model:"EX18C1/2",  hp:"1/2", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:4016,  nylon:4320,  alum:4820} },
    { ph:"1", size:20, model:"EX20C1/3",  hp:"1/3", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:3435,  nylon:3510,  alum:4030} },
    { ph:"1", size:20, model:"EX20C1/2",  hp:"1/2", rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:4346,  nylon:5500,  alum:4930} },
    { ph:"1", size:20, model:"EX20C3/4X", hp:"3/4", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:4078,  nylon:5660,  alum:5660} },
    { ph:"1", size:24, model:"EX24C3/4",  hp:"3/4", rpm:1755, volts:"115/230/1/60 VAC", cfm:{steel:6847,  nylon:6870,  alum:6870} },
    { ph:"1", size:24, model:"EX24C1",    hp:"1",   rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:7795,  nylon:8050,  alum:8050} },
    { ph:"1", size:24, model:"EX24C1.5",  hp:"1.5", rpm:1760, volts:"115/230/1/60 VAC", cfm:{steel:9030,  nylon:9500,  alum:9500} },
    { ph:"1", size:24, model:"EX24C3/4X", hp:"3/4", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:7020,  nylon:7420,  alum:7420} },
    { ph:"1", size:30, model:"EX30C2",    hp:"2",   rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:12787, nylon:14300, alum:14300} },
    { ph:"1", size:30, model:"EX30C3",    hp:"3",   rpm:1725, volts:"115/230/1/60 VAC", cfm:{steel:14499, nylon:17100, alum:17100} },
    { ph:"1", size:30, model:"EX30C3/4X", hp:"3/4", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:8884,  nylon:10800, alum:10800} },
    { ph:"1", size:30, model:"EX30C1X",   hp:"1",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:10410, nylon:10400, alum:10400} },
    { ph:"1", size:30, model:"EX30C1.5X", hp:"1.5", rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:11600, nylon:13200, alum:13200} },
    { ph:"1", size:36, model:"EX36C5",    hp:"5",   rpm:1750, volts:"115/230/1/60 VAC", cfm:{steel:20268, nylon:24900, alum:24900} },
    { ph:"1", size:36, model:"EX36C2X",   hp:"2",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:15750, nylon:19100, alum:19100} },
    { ph:"1", size:36, model:"EX36C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:18342, nylon:20400, alum:20400} },
    { ph:"1", size:42, model:"EX42C2X",   hp:"2",   rpm:1140, volts:"115/230/1/60 VAC", cfm:{steel:18102, nylon:21100, alum:21100} },
    { ph:"1", size:42, model:"EX42C3X",   hp:"3",   rpm:1165, volts:"115/230/1/60 VAC", cfm:{steel:22386, nylon:26000, alum:26000} }
  ]
};
