/* Penn Fan — Type C Crane Cab Fans.
   Source: pennfan.com Crane-Performance.pdf (the 2015 catalog has no crane table).
   Flow = CFM at free air. Galvanized STEEL blade standard; nylon & cast-aluminum options.
   Crane fans come in THREE power types: A=250V DC, B=3-phase, C=1-phase.
   Model code: C[dia][elec][hp] + mount, e.g. C12A-SB. Dimensions documented for the
   C12A-SB (12"/Standard Base) build; others confirmed at quote. */
window.CRANE_FAN = {
  type: "C",
  name: "Crane Cab Fans",
  sizes: [12, 16, 18, 20, 24],
  blades: [
    { key:"steel", label:"Galvanized Steel", note:"Standard", std:true },
    { key:"nylon", label:"Nylon Reinforced", note:"Option" },
    { key:"alum",  label:"Cast Aluminum",   note:"Option" }
  ],
  // Power type stands in for "phase" — crane fans add a 250V DC option for cab power.
  phases: [
    { key:"A", label:"250V DC", volts:"250 V DC" },
    { key:"B", label:"3-Phase", volts:"208-230/460 V · 3-phase" },
    { key:"C", label:"1-Phase", volts:"115/208-230 V · 1-phase" }
  ],
  mounts: [
    { code:"SB", name:"Standard Base",   img:"cooling/crane/sb.png", desc:"Flat foot to set down or bolt in place — the go-to crane-cab & pulpit mount.", popular:true },
    { code:"TD", name:"Truck Dock Arm",  img:"cooling/crane/td.png", desc:"Long horizontal arm that reaches out over a dock or bay door." },
    { code:"RA", name:"Right Angle Arm", img:"cooling/crane/ra.png", desc:"Right-angle wall bracket that aims the fan down into a space." },
    { code:"CM", name:"Ceiling Mount",   img:"cooling/crane/cm.png", desc:"Overhead frame to hang the fan and direct air from above." }
  ],
  mountsNote: "Wall- or ceiling-mount in any position; custom brackets available on request.",
  // Dimension drawing + documented dimensions keyed by "size-mount". Only C12A-SB today.
  dimsDrawing: "cooling/crane/dims-c12.png",
  dimsRefLabel: "C12A-SB · 12″ · Standard Base",
  dims: {
    "12-SB": { model:"C12A-SB", H:'24-3/16"', W:'14"', D:'16-1/4"', weight:"~60 lbs",
               sound:"64.1 dB(A) @ 5 ft", drawing:"cooling/crane/dims-c12.png" }
  },
  // models: {ph(=power A/B/C), size, model, hp, rpm, volts, cfm:{steel,nylon,alum}}
  models: [
    { ph:"A", size:12, model:"C12A",  hp:".33", rpm:1800, volts:"250 V DC",              cfm:{steel:1523, nylon:1950, alum:1940} },
    { ph:"B", size:12, model:"C12B",  hp:".33", rpm:1765, volts:"208-230/460/3/60 VAC",  cfm:{steel:1493, nylon:2060, alum:1760} },
    { ph:"C", size:12, model:"C12C",  hp:".33", rpm:1735, volts:"115/208-230/1/60 VAC",  cfm:{steel:1468, nylon:2020, alum:1870} },
    { ph:"A", size:16, model:"C16A",  hp:".33", rpm:1800, volts:"250 V DC",              cfm:{steel:2915, nylon:3190, alum:3190} },
    { ph:"B", size:16, model:"C16B",  hp:".33", rpm:1765, volts:"208-230/460/3/60 VAC",  cfm:{steel:2938, nylon:3310, alum:3390} },
    { ph:"C", size:16, model:"C16C",  hp:".33", rpm:1735, volts:"115/208-230/1/60 VAC",  cfm:{steel:2888, nylon:3250, alum:3340} },
    { ph:"A", size:18, model:"C18A",  hp:".33", rpm:1800, volts:"250 V DC",              cfm:{steel:3233, nylon:3920, alum:3920} },
    { ph:"B", size:18, model:"C18B",  hp:".33", rpm:1765, volts:"208-230/460/3/60 VAC",  cfm:{steel:3170, nylon:3840, alum:3840} },
    { ph:"C", size:18, model:"C18C",  hp:".33", rpm:1735, volts:"115/208-230/1/60 VAC",  cfm:{steel:3116, nylon:3780, alum:3780} },
    { ph:"A", size:20, model:"C20A",  hp:".33", rpm:1800, volts:"250 V DC",              cfm:{steel:3392, nylon:4080, alum:4080} },
    { ph:"B", size:20, model:"C20B",  hp:".33", rpm:1765, volts:"208-230/460/3/60 VAC",  cfm:{steel:3368, nylon:3990, alum:3990} },
    { ph:"C", size:20, model:"C20C",  hp:".33", rpm:1735, volts:"115/208-230/1/60 VAC",  cfm:{steel:3396, nylon:3930, alum:3930} },
    { ph:"B", size:24, model:"C24B1", hp:"1",   rpm:1765, volts:"208-230/460/3/60 VAC",  cfm:{steel:7485, nylon:7960, alum:8080} },
    { ph:"C", size:24, model:"C24C1", hp:"1",   rpm:1745, volts:"115/208-230/1/60 VAC",  cfm:{steel:7593, nylon:7860, alum:7970} }
  ]
};
