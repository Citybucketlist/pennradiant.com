/* PennRadiant.com website — shared components (React 18 + Babel).
   Exported to window for every page. Catalog links point to catalog.pennradiant.com. */
const { useState, useEffect } = React;

/* ---- icons (Lucide-style inline SVG) ---- */
const I = {
  search:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  phone:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  user:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  menu:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  chevR:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m9 18 6-6-6-6"/></svg>,
  chevD:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"/></svg>,
  x:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  check:(p)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
};
const A = "../assets";
const CAT = "https://catalog.pennradiant.com";

function Button({ variant="red", size, children, ...rest }) {
  return <button className={["btn","btn-"+variant,size==="lg"?"btn-lg":size==="sm"?"btn-sm":""].join(" ")} {...rest}>{children}</button>;
}

/* ---- navigation model (real PRP nav) ---- */
const NAV = [
  { label:"Home", href:"index.html" },
  { label:"Gas Heating", href:"gas-heating.html" },
  { label:"Electric Heating", href:"electric-heating.html" },
  { label:"Parts", href:"parts.html", sub:[
    ["Space Ray Heater Parts", "space-ray-parts.html"],
    ["Sure Flame Heater Parts", "sure-flame-parts.html"],
    ["Heat Wagon Heater Parts", "heat-wagon-parts.html"],
  ]},
  { label:"Sure Flame", href:"sure-flame-parts.html", sub:[
    ["Sure Flame S100", "sure-flame-parts.html"],
    ["Sure Flame S405", "sure-flame-s405-parts.html"],
    ["Sure Flame SE405", "sure-flame-parts.html"],
    ["Sure Flame S1505", "sure-flame-s1505-parts.html"],
    ["Sure Flame S1505B", "sure-flame-s1505b-parts.html"],
    ["Sure Flame UB12E", "sure-flame-parts.html"],
    ["Sure Flame UB18", "sure-flame-parts.html"],
    ["Sure Flame FN20", "sure-flame-parts.html"],
    ["Sure Flame FN42", "sure-flame-parts.html"],
    ["ST2 & ST3 Torch Heads", "sure-flame-parts.html"],
  ]},
  { label:"Cooling", href:"cooling.html" },
  { label:"Services", sub:[
    ["History", "history.html"],
    ["Sample Quote / Invoice", "quote-invoice.html"],
    ["Product Manuals", "product-manuals.html"],
    ["Spec Sheets", "spec-sheets.html"],
    ["Territories", "territories.html"],
    ["Railcar Thaw Sheds", "railcar-thaw-shed.html"],
    ["Penn Radiant YouTube", "https://www.youtube.com/@PennRadiant"],
    ["Privacy Policy", "privacy.html"],
  ]},
  { label:"Contact", href:"contact.html" },
];

function Header({ active }) {
  const ext = (h)=> /^https?:/.test(h);
  return (
    <header className="hdr hdr-blue">
      <div className="wrap hdr-main">
        <div className="left">
          <button className="burger" aria-label="Menu"><I.menu width="26" height="26"/></button>
          <a href="index.html"><img className="hdr-logo" src={A+"/logos/pennradiant-red.png"} alt="PennRadiant.com"/></a>
          <img className="lf" src={A+"/logos/usa-flag.png"} alt="USA"/>
        </div>
        <a className="contact" href="tel:18004382503">
          <span className="phone"><I.phone/>1.800.438.2503</span>
        </a>
      </div>
      <nav className="hdr-nav navy"><div className="wrap">
        {NAV.map((n,idx)=>(
          <div className="navitem" key={idx}>
            <a className={active===n.label?"active":""} href={n.href||"#"} {...(n.external?{target:"_blank",rel:"noreferrer"}:{})}>
              {n.label}{n.sub && <I.chevD className="caret"/>}
            </a>
            {n.sub && (
              <div className={"dropdown"+(n.sub.length>7?" two":"")}>
                {n.sub.map(([label,href],j)=>(
                  <a key={j} href={href} {...(ext(href)?{target:"_blank",rel:"noreferrer"}:{})}>{label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
        <span className="nav-tagline">Built to Last in the USA · <b>Since 1965</b></span>
      </div></nav>
      <div className="searchbar"><div className="wrap inner">
        <I.search width="18" height="18" style={{color:"var(--prp-gray-500)"}}/>
        <input placeholder="Search the entire catalog — part # or item name…" onKeyDown={e=>{if(e.key==="Enter")window.open(CAT,"_blank");}}/>
        <a className="btn btn-red btn-sm" href={CAT} target="_blank" rel="noreferrer">Search</a>
        <a className="btn btn-outline btn-sm" href="contact.html">Request a Quote</a>
      </div></div>
    </header>
  );
}

/* ---- rotating banners ---- */
const BANNERS = [
  { img:A+"/headers/parts.jpg",        alt:"Infrared Tube Heater Parts",                            href:"parts.html" },
  { img:A+"/headers/elements.jpg",     alt:"Metal Sheath Replacement Heating Elements",             href:"electric-heating.html" },
  { img:A+"/headers/restaurant.jpg",   alt:"Restaurant & Hospitality Heaters — Wind Blocker Series",href:"gas-heating.html" },
  { img:A+"/headers/cng.jpg",          alt:"CNG Approved Infrared Tube Heaters",                    href:"gas-heating.html" },
  { img:A+"/headers/railcar.jpg",      alt:"Railcar Thaw Sheds",                                    href:"railcar-thaw-shed.html" },
  { img:A+"/headers/direct-fired.jpg", alt:"Industrial Radiant Heaters",                            href:"gas-heating.html" },
  { img:A+"/headers/carwash.jpg",      alt:"Car / Truck Wash Tube Heaters — Built for Harsh Environments", href:"gas-heating.html" },
  { img:A+"/headers/electric.jpg",     alt:"Electric Infrared & Space Heaters",                     href:"electric-heating.html" },
];
function BannerCarousel() {
  const [i,setI]=useState(0); const [paused,setPaused]=useState(false);
  useEffect(()=>{ if(paused)return; const t=setInterval(()=>setI(p=>(p+1)%BANNERS.length),5000); return ()=>clearInterval(t); },[paused]);
  const go=(n)=>setI((n+BANNERS.length)%BANNERS.length);
  const open=(h)=> /^https?:/.test(h)?window.open(h,"_blank"):(window.location.href=h);
  return (
    <section className="carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      <div className="carousel-track">
        {BANNERS.map((b,idx)=>(
          <button key={idx} className={"slide"+(idx===i?" active":"")} tabIndex={idx===i?0:-1} aria-hidden={idx!==i} aria-label={b.alt} onClick={()=>open(b.href)}>
            <img src={b.img} alt={b.alt}/>
          </button>
        ))}
        <button className="car-arrow left" aria-label="Previous" onClick={()=>go(i-1)}><I.chevR width="24" height="24" style={{transform:"rotate(180deg)"}}/></button>
        <button className="car-arrow right" aria-label="Next" onClick={()=>go(i+1)}><I.chevR width="24" height="24"/></button>
        <div className="car-dots">{BANNERS.map((_,idx)=>(<button key={idx} className={"dot"+(idx===i?" on":"")} aria-label={"Banner "+(idx+1)} onClick={()=>go(idx)}/>))}</div>
      </div>
    </section>
  );
}

function IntroBand() {
  return (
    <section className="introband"><div className="wrap intro-inner">
      <div className="intro-copy">
        <h1 className="intro-h1">Industrial Infrared <span>Heating &amp; Cooling</span> Solutions</h1>
        <p>Serving industrial heating &amp; cooling since 1965 — gas-fired and electric heaters, replacement parts, fans and portable cooling. Built to last, in the USA.</p>
      </div>
      <div className="intro-cta">
        <a className="btn btn-red btn-lg" href={CAT} target="_blank" rel="noreferrer">Shop All Products</a>
        <a className="btn btn-outline btn-lg" href="contact.html">Request a Quote</a>
      </div>
    </div></section>
  );
}

function PartsFinder() {
  return (
    <section className="pf"><div className="wrap pf-inner">
      <img className="pf-icon" src={A+"/products/cat-parts.jpg"} alt=""/>
      <div className="pf-lbl">Replacement<b>Parts Finder</b></div>
      <div className="pf-field">
        <div className="h">Quickly find parts from our entire catalog!</div>
        <div className="pf-input">
          <I.search width="20" height="20"/>
          <input placeholder="Part # or Item Name" onKeyDown={e=>{if(e.key==="Enter")window.open(CAT,"_blank");}}/>
          <a className="btn btn-red btn-sm" href={CAT} target="_blank" rel="noreferrer">Find</a>
        </div>
      </div>
    </div></section>
  );
}

const BRANDS = ["space-ray.png","heat-wagon.png","sure-flame.png","sunstar.png","fostoria.jpg","tpi.png","aitken.png","schaefer.png","prokool.png","waycool.png"].map(f=>A+"/brands/"+f);
function BrandWall() {
  return (
    <section className="wrap section">
      <div className="wall-title">Authorized distributor &amp; parts source for</div>
      <div className="wall">{BRANDS.map((s,i)=>(<div className="cell" key={i}><img src={s} alt=""/></div>))}</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-grid">
        <div>
          <img className="ft-logo" src={A+"/logos/pennradiant-logo.png"} alt="PennRadiant.com"/>
          <p>Penn Radiant's broad range of commercial &amp; industrial HVAC products spans gas-fired and electric heaters, replacement parts, and cooling equipment — fans, portable A/C and evaporative coolers.</p>
        </div>
        <div><h4>Products</h4><ul>
          <li><a href="gas-heating.html">Gas Heating</a></li>
          <li><a href="electric-heating.html">Electric Heating</a></li>
          <li><a href="parts.html">Parts</a></li>
          <li><a href="cooling.html">Cooling</a></li>
          <li><a href="railcar-thaw-shed.html">Thaw Sheds</a></li>
        </ul></div>
        <div><h4>Company</h4><ul>
          <li><a href="history.html">History</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="product-manuals.html">Product Manuals</a></li>
          <li><a href="territories.html">Territories</a></li>
          <li><a href="https://www.youtube.com/@PennRadiant" target="_blank" rel="noreferrer">YouTube</a></li>
        </ul></div>
        <div>
          <h4>Contact</h4>
          <div className="contact-meta" style={{fontSize:"14.5px"}}>
            <div><a href="tel:18004382503" style={{color:"#fff",fontWeight:800}}>1.800.438.2503</a></div>
            <div style={{color:"#9aa6b0"}}>Fax: 412.635.8016</div>
            <div><a href="mailto:info@pennradiant.com">info@pennradiant.com</a></div>
          </div>
          <div className="ft-addr">
            <b>Shipping</b>8105 Perry Highway, Pittsburgh PA 15237
            <b>Mailing</b>PO Box 1354, Wexford PA 15090
          </div>
        </div>
      </div>
      <div className="wrap ft-bottom">
        <span>© 2025 Penn Radiant Products. All rights reserved.</span>
        <span>Proudly American-made since 1965</span>
      </div>
    </footer>
  );
}

Object.assign(window, { PRP_I:I, PRPButton:Button, Header, Footer, BannerCarousel, IntroBand, PartsFinder, BrandWall, PRP_CAT:CAT, PRP_A:A });
