/* Reusable Heat Wagon / Sure Flame model-detail template.
   A model page sets window.MODEL = {...} then loads this file. Renders into #root.
   MODEL shape:
   { brand, sku, title, blurb, hero, heroContain, manual,
     crumb:[[label,href],...], specs:[[label,value],...],
     groups:[{ id,name,diagram,cap,parts:[{no,pn,d,price,ns}] | null, reqNote }],
     top:[uid...], featured:{img,title,body,eb} }
*/
const { useState } = React;
const I = PRP_I, A = PRP_A;
const money = (n) => n==null ? "" : "$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});

function QtyStep({ qty, set }) {
  return (
    <div className="qstep">
      <button aria-label="Decrease" onClick={()=>set(Math.max(0,qty-1))}>–</button>
      <span>{qty}</span>
      <button aria-label="Increase" onClick={()=>set(qty+1)}>+</button>
    </div>
  );
}

function PartsTable({ group, qmap, setQ }) {
  return (
    <table className="parts-table">
      <thead><tr>
        <th className="no-col">Item</th><th>Part #</th><th>Description</th>
        <th className="price-col">Net Price</th><th className="qty-col">Qty</th><th className="act-col"></th>
      </tr></thead>
      <tbody>
        {group.parts.map((p)=>{
          const key = p.uid; const qty = qmap[key] || 0;
          return (
            <tr key={key}>
              <td className="no-col">{p.no!=null ? <span className="bub">{p.no}</span> : <span className="bub none" title="Not shown on diagram">NS</span>}</td>
              <td className="pn">{p.pn}</td>
              <td className="desc">{p.d}{p.ns && <small className="ns">Not shown on diagram</small>}</td>
              <td className="price-col">{p.price!=null ? money(p.price) : <span style={{color:"var(--prp-blue)",fontWeight:800,fontSize:"13px"}}>QUOTE</span>}</td>
              <td className="qty-col"><QtyStep qty={qty} set={(n)=>setQ(key,n)}/></td>
              <td className="act-col">
                {qty>0 ? <span className="added"><I.check width="16" height="16"/>Added</span>
                       : <button className="btn btn-outline btn-sm" onClick={()=>setQ(key,1)}>Add to Quote</button>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function ModelApp() {
  const M = window.MODEL;
  // assign uids
  M.groups.forEach(g=> (g.parts||[]).forEach((p,i)=>{ p.uid = g.id+"-"+i; }));
  const ALL = {}; M.groups.forEach(g=> (g.parts||[]).forEach(p=> ALL[p.uid]=p));
  const firstWithParts = (M.groups.find(g=>g.parts) || M.groups[0]).id;

  const [active, setActive] = useState(firstWithParts);
  const [qmap, setQmap] = useState({});
  const setQ = (key,n)=> setQmap(m=>{ const c={...m}; if(n<=0) delete c[key]; else c[key]=n; return c; });
  const group = M.groups.find(g=>g.id===active);
  const totalItems = Object.values(qmap).reduce((a,b)=>a+b,0);
  const totalEst = Object.entries(qmap).reduce((s,[k,q])=> s + (ALL[k]?.price||0)*q, 0);
  const top = (M.top||[]).map(uid=>ALL[uid]).filter(Boolean);

  return (
    <React.Fragment>
      <Header active="Parts" />

      <div className="wrap crumb">
        {M.crumb.map(([label,href],i)=>(
          <React.Fragment key={i}><a href={href}>{label}</a><I.chevR width="14" height="14"/></React.Fragment>
        ))}
        <span>{M.title}</span>
      </div>

      <section className="model-hero"><div className="wrap inner">
        <div className={"icon"+(M.heroContain?" photo":"")}><img src={M.hero} alt={M.title}/></div>
        <div>
          <div className="sku">{M.sku}</div>
          <h1>{M.title}</h1>
          <p>{M.blurb}</p>
          {M.specs && <div className="spec-chips">{M.specs.map(([l,v],i)=>(<div className="chip" key={i}><b>{l}:</b> {v}</div>))}</div>}
          <div className="model-actions">
            <a className="btn btn-red btn-lg" href="contact.html">Request a Quote</a>
            <a className="btn btn-outline btn-lg" href={M.manual||"https://www.pennradiant.com/product_manuals.html"} target="_blank" rel="noreferrer">Download Manual</a>
          </div>
        </div>
      </div></section>

      {top.length>0 && (
        <section className="wrap section" style={{paddingTop:"30px",paddingBottom:"0"}}>
          <div className="eyebrow-row" style={{marginBottom:"14px"}}><h2 style={{fontSize:"22px"}}><span className="lt">MOST-REQUESTED</span> PARTS</h2></div>
          <div className="toprow">
            {top.map((p,i)=>{ const on=(qmap[p.uid]||0)>0; return (
              <div className="topcard" key={p.uid}>
                <div className="rank">{i+1}</div>
                <div className="info"><div className="pn">{p.pn}{p.price!=null?" · "+money(p.price):""}</div><div className="nm">{p.d}</div></div>
                <button className={"qa"+(on?" on":"")} aria-label={on?"Added":"Add to quote"} onClick={()=>setQ(p.uid, on?0:1)}>
                  {on ? <I.check width="18" height="18"/> : <span style={{fontSize:"22px",lineHeight:1}}>+</span>}
                </button>
              </div>
            );})}
          </div>
        </section>
      )}

      <section className="wrap section" style={{paddingTop:"24px"}}>
        <div className="group-tabs">
          {M.groups.map(g=>(
            <button key={g.id} className={"gtab"+(g.id===active?" on":"")} onClick={()=>setActive(g.id)}>
              {g.name} {(g.parts||g.count)!=null && <span className="cnt">{g.parts? g.parts.length : g.count}</span>}
            </button>
          ))}
        </div>

        {group.diagram && (
          <div className="diagram">
            <img src={group.diagram} alt={group.cap+" diagram"}/>
            <div className="cap">Find your part by its <b>red number</b> on the <b>{group.cap}</b> diagram, then match it in the table below.</div>
          </div>
        )}

        {group.parts
          ? <PartsTable group={group} qmap={qmap} setQ={setQ}/>
          : (
            <div className="featured" style={{marginTop:group.diagram?"20px":"0"}}>
              <div className="pic" style={{background:"var(--prp-gray-100)",display:"grid",placeItems:"center",minHeight:"150px"}}>
                <I.search width="40" height="40" style={{color:"var(--prp-gray-500)"}}/>
              </div>
              <div className="body">
                {group.count!=null && <span className="eb">{group.count} parts</span>}
                <h3>{group.name} — full list &amp; pricing</h3>
                <p>{group.reqNote || "Our team will confirm the exact part and current price for the "+group.name.toLowerCase()+". Call 1.800.438.2503 with your model & serial number."}</p>
                <a className="btn btn-red btn-sm" href="contact.html">Request {group.name} pricing</a>
              </div>
            </div>
          )}

        {group.featured && (
          <div className="featured">
            <div className="pic"><img src={group.featured.img} alt={group.featured.title}/></div>
            <div className="body">
              <span className="eb">{group.featured.eb||"Featured part"}</span>
              <h3>{group.featured.title}</h3>
              <p>{group.featured.body}</p>
              <a className="btn btn-blue btn-sm" href="contact.html">Ask about this part</a>
            </div>
          </div>
        )}

        <p className="prp-caption" style={{marginTop:"18px"}}>Net prices shown are from the Penn Radiant catalog and may change — confirm current pricing &amp; availability at 1.800.438.2503.</p>
      </section>

      <div className={"quotebar"+(totalItems>0?" show":"")}><div className="wrap inner">
        <div className="lbl"><b>{totalItems}</b> item{totalItems!==1?"s":""} in your quote <span>Est. {money(totalEst)}</span></div>
        <a className="btn btn-red" href="contact.html">Review &amp; Request Quote</a>
      </div></div>

      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ModelApp />);
