/* Penn Radiant — Website UI kit components
   React 18 + Babel. All components exported to window at the end so index.html can use them.
   Icons are inline SVGs in the Lucide style (search/phone/user/menu/chevron/x/check). */

const { useState, useEffect } = React;

/* ----------------------------- icons ----------------------------- */
const I = {
  search: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  phone:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  user:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  menu:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  chevR:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m9 18 6-6-6-6"/></svg>,
  x:      (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  check:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
};

const LOGO = "../../assets/logos/pennradiant-logo.png";
const SINCE = "../../assets/logos/since-1965.png";

/* ----------------------------- data ----------------------------- */
const CATEGORIES = [
  { id:"gas",     name:"Gas Heaters",     img:"../../assets/products/cat-heating.jpg" },
  { id:"electric",name:"Electric Heaters",img:"../../assets/products/cat-electric.jpg" },
  { id:"parts",   name:"Heater Parts",    img:"../../assets/products/cat-parts.jpg" },
  { id:"space",   name:"Space Heaters",   img:"../../assets/products/cat-electric.jpg" },
  { id:"cooling", name:"Cooling",         img:"../../assets/products/cat-cooling.jpg" },
  { id:"thaw",    name:"Thaw Equipment",  img:"../../assets/products/cat-elements.jpg" },
];

const BLOCKS = [
  { t1:"INDUSTRIAL",  t2:"COOLING FANS",      tone:"cool",  spec:["Drum & man-coolers","Exhaust"],   img:"../../assets/products/cat-cooling.jpg", cat:"cooling" },
  { t1:"DIRECT FIRED", t2:"HEATERS",           tone:"heat",  spec:["110k–1.5M Btu","Propane"],        img:"../../assets/products/cat-heating.jpg", cat:"gas" },
  { t1:"INFRARED",     t2:"TUBE HEATER PARTS", tone:"parts", spec:["Electrodes","Tubes","Motors"],     img:"../../assets/products/cat-elements.jpg", cat:"parts" },
];

const BANNERS = [
  { img:"../../assets/headers/parts.jpg",        alt:"Infrared Tube Heater Parts",                            cat:"parts" },
  { img:"../../assets/headers/elements.jpg",     alt:"Metal Sheath Replacement Heating Elements",             cat:"electric" },
  { img:"../../assets/headers/restaurant.jpg",   alt:"Restaurant & Hospitality Heaters — Wind Blocker Series", cat:"gas" },
  { img:"../../assets/headers/cng.jpg",          alt:"CNG Approved Infrared Tube Heaters",                    cat:"gas" },
  { img:"../../assets/headers/railcar.jpg",      alt:"Railcar Thaw Sheds",                                    cat:"thaw" },
  { img:"../../assets/headers/direct-fired.jpg", alt:"Industrial Radiant Heaters",                            cat:"gas" },
];

const BRANDS = [
  "space-ray.png","heat-wagon.png","sure-flame.png","sunstar.png","fostoria.jpg","tpi.png",
  "aitken.png","schaefer.png","prokool.png","waycool.png",
].map(f=>"../../assets/brands/"+f);

const PRODUCTS = {
  gas: { title:["HIGH INTENSITY","GAS HEATERS"], sub:"High-intensity ceramic & direct-fired gas heaters from Space-Ray and Heat Wagon — natural gas or propane.", items:[
    { brand:"Space-Ray", name:"High Intensity Ceramic Heater — DK Series", spec:"40,000–160,000 Btu · NG/LP", pn:"SR-DK-40", img:"../../assets/products/cat-heating.jpg" },
    { brand:"Space-Ray", name:"Infrared Tube Heater — PTS Series", spec:"100,000–250,000 Btu", pn:"SR-PTS-100", img:"../../assets/products/cat-electric.jpg" },
    { brand:"Heat Wagon",name:"Direct Fired Portable Heater", spec:"110,000–1,500,000 Btu", pn:"HW-DF-400", img:"../../assets/products/cat-heating.jpg" },
  ]},
  parts: { title:["HEATER","PARTS"], sub:"Genuine replacement parts — electrodes, burner motors, tubes, controls and ceramic burner heads. Built to last.", items:[
    { brand:"PennRadiant", name:"Combustion Blower Motor Assembly", spec:"115V · Ball Bearing", pn:"30-BLW-115", img:"../../assets/products/cat-parts.jpg" },
    { brand:"Space-Ray", name:"Spark Electrode — PSE-GF Series", spec:"7\" ignition cable incl.", pn:"30295000", img:"../../assets/products/cat-parts.jpg" },
    { brand:"PennRadiant", name:"Aluminized Firing Tube", spec:"4\" dia · 10 ft", pn:"FT-410", img:"../../assets/products/cat-elements.jpg" },
  ]},
  cooling: { title:["INDUSTRIAL","COOLING"], sub:"Drum & man-cooler fans, exhaust ventilators, misting fans and portable A/C units for harsh environments.", items:[
    { brand:"Schaefer", name:"Industrial Drum Fan — 24\"", spec:"Multiple mounts · USA made", pn:"SCH-24DF", img:"../../assets/products/cat-cooling.jpg" },
    { brand:"Pro-Kool", name:"Portable Evaporative Cooler", spec:"Custom models", pn:"PK-EVAP", img:"../../assets/products/cat-cooling.jpg" },
    { brand:"WayCool",  name:"Crane Cab Fan — 250V DC", spec:"12\"–24\" sizes", pn:"WC-CC250", img:"../../assets/products/cat-cooling.jpg" },
  ]},
};
PRODUCTS.electric = { title:["ELECTRIC","HEATERS"], sub:"Overhead electric infrared, quartz tube lamps and replacement heating elements.", items:PRODUCTS.gas.items };
PRODUCTS.space = { title:["SPACE","HEATERS"], sub:"Portable electric and portable electric infrared space heaters, 1.5 kW – 60 kW.", items:PRODUCTS.gas.items };
PRODUCTS.thaw = { title:["THAW","EQUIPMENT"], sub:"Railcar thaw sheds, thawing stations and portable makeup-air for frozen material.", items:PRODUCTS.cooling.items };

/* ----------------------------- Button ----------------------------- */
function Button({ variant="red", size, children, ...rest }) {
  const cls = ["btn", "btn-"+variant, size==="lg"?"btn-lg":size==="sm"?"btn-sm":""].join(" ");
  return <button className={cls} {...rest}>{children}</button>;
}

/* ----------------------------- Header ----------------------------- */
function Header({ active, onNav, onQuote, onSearch }) {
  const [q, setQ] = useState("");
  const nav = [["Home","home"],["Gas Heating","gas"],["Electric Heating","electric"],["Parts","parts"],["Cooling","cooling"],["Thaw Equipment","thaw"]];
  return (
    <header className="hdr">
      <div className="wrap hdr-top">
        <div className="hdr-left">
          <button className="burger" aria-label="Menu"><I.menu width="26" height="26"/></button>
          <img className="hdr-logo" src={LOGO} alt="PennRadiant.com" onClick={()=>onNav("home")}/>
        </div>
        <div className="hdr-right">
          <div className="hdr-phone"><I.phone width="22" height="22"/><div><span className="e">Call our experts</span>1.800.438.2503</div></div>
          <button className="icon-btn" aria-label="Search" onClick={()=>onSearch("")}><I.search width="22" height="22"/></button>
          <button className="icon-btn" aria-label="Account"><I.user width="22" height="22"/></button>
        </div>
      </div>
      <nav className="hdr-nav"><div className="wrap"><ul>
        {nav.map(([label,id])=>(
          <li key={id}><a className={active===id?"active":""} onClick={()=>onNav(id)}>{label}</a></li>
        ))}
      </ul></div></nav>
      <div className="searchbar"><div className="wrap inner">
        <I.search width="18" height="18" style={{color:"var(--prp-gray-500)"}}/>
        <input placeholder="Search the entire catalog — part # or item name…"
          value={q} onChange={e=>setQ(e.target.value)}
          onKeyDown={e=>{ if(e.key==="Enter") onSearch(q); }}/>
        <Button variant="red" size="sm" onClick={()=>onSearch(q)}>Search</Button>
        <Button variant="outline" size="sm" onClick={onQuote}>Request a Quote</Button>
      </div></div>
    </header>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero({ onQuote, onShop }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><img src={SINCE} alt="Since 1965"/></div>
          <h1>Industrial Infrared<br/>Heating &amp; Cooling Solutions</h1>
          <p>Penn Radiant Products was started in <b>1965 by Del Lieb</b>. Since the beginning PRP has evolved to offer all types of heating and cooling products — from gas fired to electric heating equipment to misting fans and portable air conditioning units.</p>
          <div className="hero-cta">
            <Button variant="white" size="lg" onClick={onShop}>Shop All Products</Button>
            <Button variant="ghost" size="lg" onClick={onQuote}>Request a Quote</Button>
          </div>
        </div>
        <div className="hero-photo">
          <img src="../../assets/products/install-carwash.jpg" alt="Penn Radiant infrared tube heater installed in an industrial facility"/>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CategoryGrid ----------------------------- */
function CategoryGrid({ onCategory }) {
  return (
    <section className="wrap section-pad-sm">
      <div className="cat-grid">
        {CATEGORIES.map(c=>(
          <div className="cat-row" key={c.id} onClick={()=>onCategory(c.id)}>
            <img src={c.img} alt=""/>
            <div className="nm">{c.name}</div>
            <I.chevR className="cv" width="22" height="22"/>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- PartsFinder ----------------------------- */
function PartsFinder({ onSearch }) {
  const [q,setQ] = useState("");
  return (
    <section className="pf"><div className="wrap pf-inner">
      <img className="pf-icon" src="../../assets/products/cat-parts.jpg" alt=""/>
      <div className="pf-lbl">Replacement<b>Parts Finder</b></div>
      <div className="pf-field">
        <div className="h">Quickly find parts from our entire catalog!</div>
        <div className="pf-input">
          <I.search width="20" height="20"/>
          <input placeholder="Part # or Item Name" value={q}
            onChange={e=>setQ(e.target.value)}
            onKeyDown={e=>{ if(e.key==="Enter") onSearch(q); }}/>
          <Button variant="red" size="sm" onClick={()=>onSearch(q)}>Find</Button>
        </div>
      </div>
    </div></section>
  );
}

/* ----------------------------- CategoryBlocks ----------------------------- */
function CategoryBlocks({ onCategory }) {
  return (
    <section className="wrap section">
      <div className="eyebrow-row">
        <h2><span className="lt">SHOP BY</span> POPULAR CATEGORY</h2>
        <a style={{color:"var(--prp-blue)",fontWeight:700}} onClick={()=>onCategory("gas")}>View all →</a>
      </div>
      <div className="blocks">
        {BLOCKS.map((b,i)=>(
          <div className="block" key={i} onClick={()=>onCategory(b.cat)}>
            <div className={"block-tag "+b.tone}>
              <span className="t1">{b.t1}</span><span className="t2">{b.t2}</span>
            </div>
            <div className="block-lower">
              <div className="block-info">
                <div className="block-spec">{b.spec.map((s,j)=>(<span key={j}><i className="tri">▸</i>{s}</span>))}</div>
              </div>
              <div className="block-img"><img src={b.img} alt={b.t2}/></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- FeatureBand ----------------------------- */
function FeatureBand({ onQuote }) {
  return (
    <section className="band">
      <img className="band-bg" src="../../assets/products/install-carwash.jpg" alt=""/>
      <div className="band-shade"></div>
      <div className="wrap band-inner">
        <span className="eb">Built for harsh environments</span>
        <h2>Car / Truck Wash Tube Heaters</h2>
        <ul>
          <li><i className="tri">▸</i>Indoor or outdoor rated — exposed to rain &amp; snow</li>
          <li><i className="tri">▸</i>Wind resistance up to 40 mph (Wind Blocker Series®)</li>
          <li><i className="tri">▸</i>Protective silicone gaskets · totally enclosed combustion</li>
        </ul>
        <Button variant="red" size="lg" onClick={onQuote}>Request a Quote</Button>
      </div>
    </section>
  );
}

/* ----------------------------- BrandWall ----------------------------- */
function BrandWall() {
  return (
    <section className="wrap section">
      <div className="wall-title">Authorized distributor &amp; parts source for</div>
      <div className="wall">
        {BRANDS.map((src,i)=>(<div className="cell" key={i}><img src={src} alt=""/></div>))}
      </div>
    </section>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer({ onNav, onQuote }) {
  return (
    <footer className="ft">
      <div className="wrap ft-grid">
        <div>
          <img className="ft-logo" src={LOGO} alt="PennRadiant.com"/>
          <p>Industrial infrared heating &amp; cooling solutions — built to last, in the USA, since 1965. Sales &amp; expert support: <b style={{color:"#fff"}}>1.800.438.2503</b> · sales@pennradiant.com</p>
        </div>
        <div><h4>Products</h4><ul>
          <li><a onClick={()=>onNav("gas")}>Gas Heaters</a></li>
          <li><a onClick={()=>onNav("electric")}>Electric Heaters</a></li>
          <li><a onClick={()=>onNav("parts")}>Heater Parts</a></li>
          <li><a onClick={()=>onNav("cooling")}>Cooling</a></li>
          <li><a onClick={()=>onNav("thaw")}>Thaw Equipment</a></li>
        </ul></div>
        <div><h4>Brands</h4><ul>
          <li><a href="https://spaceray.com" target="_blank" rel="noreferrer">Space-Ray</a></li>
          <li><a href="https://heatwagon.com" target="_blank" rel="noreferrer">Heat Wagon</a></li>
          <li><a>Sure Flame</a></li><li><a>SunStar</a></li><li><a>Fostoria</a></li>
        </ul></div>
        <div><h4>Company</h4><ul>
          <li><a onClick={onQuote}>Request a Quote</a></li>
          <li><a>Contact Us</a></li><li><a>About PRP</a></li><li><a>Privacy Policy</a></li>
        </ul></div>
      </div>
      <div className="wrap ft-bottom">
        <span>© {new Date().getFullYear()} Penn Radiant Products. All rights reserved.</span>
        <span className="flag">Proudly American-made since 1965</span>
      </div>
    </footer>
  );
}

/* ----------------------------- CategoryPage ----------------------------- */
function CategoryPage({ cat, onNav, onQuote }) {
  const data = PRODUCTS[cat] || PRODUCTS.gas;
  return (
    <div>
      <div className="wrap crumb"><a onClick={()=>onNav("home")}>Home</a><I.chevR width="14" height="14"/><span>{data.title.join(" ")}</span></div>
      <div className="wrap">
        <div className="page-head"><h1><span className="lt">{data.title[0]}</span> {data.title[1]}</h1></div>
        <p className="page-sub">{data.sub}</p>
        <div className="prod-grid">
          {data.items.map((p,i)=>(
            <div className="prod" key={i}>
              <div className="prod-img"><img src={p.img} alt={p.name}/></div>
              <div className="prod-meta">
                <div className="prod-brand">{p.brand}</div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-spec">{p.spec}</div>
              </div>
              <div className="prod-foot">
                <span className="pn">Part&nbsp;# {p.pn}</span>
                <Button variant="red" size="sm" onClick={onQuote}>Quote</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- SearchResults ----------------------------- */
function SearchResults({ query, onNav, onQuote }) {
  const pool = [...PRODUCTS.gas.items, ...PRODUCTS.parts.items, ...PRODUCTS.cooling.items];
  const q = (query||"").toLowerCase();
  const hits = q ? pool.filter(p=>(p.name+p.pn+p.brand).toLowerCase().includes(q)) : pool;
  return (
    <div className="wrap results">
      <div className="crumb" style={{padding:"0 0 14px"}}><a onClick={()=>onNav("home")}>Home</a><I.chevR width="14" height="14"/><span>Search</span></div>
      <h2>{query ? `Results for “${query}”` : "All catalog items"}</h2>
      <div className="meta">{hits.length} item{hits.length!==1?"s":""} found · can’t find it? <a style={{color:"var(--prp-blue)",fontWeight:600}} onClick={onQuote}>Ask our parts experts</a></div>
      {hits.map((p,i)=>(
        <div className="res-row" key={i}>
          <img src={p.img} alt=""/>
          <div className="ri">
            <div className="pn">{p.brand} · #{p.pn}</div>
            <div className="rn">{p.name}</div>
            <div className="rs">{p.spec}</div>
          </div>
          <Button variant="outline" size="sm" onClick={onQuote}>Request Quote</Button>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- QuoteModal ----------------------------- */
function QuoteModal({ onClose }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        {!sent ? (<>
          <div className="modal-head">
            <div><h3>Request a Quote</h3><p>Tell us what you need — our experts reply fast.</p></div>
            <button className="modal-x" onClick={onClose}><I.x width="18" height="18"/></button>
          </div>
          <form className="modal-body" onSubmit={e=>{e.preventDefault();setSent(true);}}>
            <div className="fld-row">
              <div className="fld"><label>First name</label><input required placeholder="Mike"/></div>
              <div className="fld"><label>Last name</label><input required placeholder="Lieb"/></div>
            </div>
            <div className="fld"><label>Email</label><input type="email" required placeholder="you@company.com"/></div>
            <div className="fld"><label>Phone</label><input placeholder="(412) 555-0142"/></div>
            <div className="fld"><label>What do you need?</label>
              <select defaultValue=""><option value="" disabled>Select a category…</option>
                <option>Gas Heaters</option><option>Electric Heaters</option><option>Heater Parts</option>
                <option>Cooling</option><option>Thaw Equipment</option><option>Not sure — need help</option>
              </select>
            </div>
            <div className="fld"><label>Details / part numbers</label><textarea rows="3" placeholder="Model, part #, quantity, application…"></textarea></div>
            <Button variant="red" size="lg" type="submit" style={{width:"100%",justifyContent:"center"}}>Send Request</Button>
          </form>
        </>) : (
          <div className="modal-done">
            <div className="ck"><I.check width="30" height="30"/></div>
            <h3>Request sent!</h3>
            <p>Thanks — a Penn Radiant expert will get back to you shortly. For urgent needs call <b>1.800.438.2503</b>.</p>
            <div style={{marginTop:20}}><Button variant="blue" onClick={onClose}>Back to site</Button></div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- BannerCarousel ----------------------------- */
function BannerCarousel({ onCategory }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % BANNERS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (n) => setI((n + BANNERS.length) % BANNERS.length);
  return (
    <section className="carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      <div className="carousel-track">
        {BANNERS.map((b, idx) => (
          <button key={idx} className={"slide" + (idx===i?" active":"")} tabIndex={idx===i?0:-1}
            onClick={()=>onCategory(b.cat)} aria-label={b.alt} aria-hidden={idx!==i}>
            <img src={b.img} alt={b.alt}/>
          </button>
        ))}
      </div>
      <button className="car-arrow left" aria-label="Previous banner" onClick={(e)=>{e.stopPropagation();go(i-1);}}>
        <I.chevR width="24" height="24" style={{transform:"rotate(180deg)"}}/>
      </button>
      <button className="car-arrow right" aria-label="Next banner" onClick={(e)=>{e.stopPropagation();go(i+1);}}>
        <I.chevR width="24" height="24"/>
      </button>
      <div className="car-dots">
        {BANNERS.map((_, idx) => (
          <button key={idx} className={"dot" + (idx===i?" on":"")} aria-label={"Go to banner "+(idx+1)} onClick={()=>go(idx)}/>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- IntroBand ----------------------------- */
function IntroBand({ onQuote, onShop }) {
  return (
    <section className="introband"><div className="wrap intro-inner">
      <div className="intro-copy">
        <h1 className="intro-h1">Industrial Infrared <span>Heating &amp; Cooling</span> Solutions</h1>
        <p>Serving industrial heating &amp; cooling since 1965 — gas-fired and electric heaters, replacement parts, fans and portable cooling. Built to last, in the USA.</p>
      </div>
      <div className="intro-cta">
        <Button variant="red" size="lg" onClick={onShop}>Shop All Products</Button>
        <Button variant="outline" size="lg" onClick={onQuote}>Request a Quote</Button>
      </div>
    </div></section>
  );
}

Object.assign(window, {
  PRPButton: Button, Header, Hero, BannerCarousel, IntroBand, CategoryGrid, PartsFinder, CategoryBlocks,
  FeatureBand, BrandWall, Footer, CategoryPage, SearchResults, QuoteModal, PRP_ICONS: I,
});
