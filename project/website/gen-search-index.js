const fs=require('fs');
const files=fs.readdirSync('.').filter(f=>/-parts\.html$/.test(f));
const index=[]; const seen=new Set();
for(const f of files){
  const html=fs.readFileSync(f,'utf8');
  const m=html.indexOf('window.MODEL'); if(m<0) continue;
  const code=html.slice(m, html.indexOf('</script>', m));
  let MODEL; try{ MODEL=eval('(function(){var A="../assets";var window={};'+code+';return window.MODEL;})()'); }catch(e){ console.error('SKIP',f,e.message); continue; }
  if(!MODEL||!MODEL.groups) continue;
  const short=(MODEL.title||MODEL.sku||f).replace(/\s*—\s*Factory Parts.*$/i,'').replace(/\s*Parts$/i,'').trim();
  const brand=MODEL.brand||'', src=MODEL.hero||null;
  MODEL.groups.forEach(g=>(g.parts||[]).forEach(p=>{
    const pn=(p.pn||'').trim(); if(!pn||/^n\/?s$/i.test(pn)) return;
    const key=pn+'||'+f; if(seen.has(key)) return; seen.add(key);
    index.push({pn, nm:(p.d||'').trim(), cat:(brand?brand+' · ':'')+short, extra:short, src, href:f});
  }));
}
global.window={}; require('./regulator-data.js');
const R=window.GAS_REGULATORS||{};
[].concat(R.standard||[],R.highPressure||[]).forEach(r=>{
  const rpn=(r.pn||'').trim();
  index.push({pn: r.name, nm: r.spec||'', cat:'Gas Regulator · '+(r.brand||''), extra:(r.name||'')+' '+rpn+' '+(r.spec||''), src:r.img?('../assets/products/regulators/'+r.img):null, href:'gas-regulators.html'});
});
fs.writeFileSync('search-index.js','/* Auto-generated search index — Heat Wagon & Sure Flame model parts + gas regulators.\n   Regenerate with: node /tmp/gen-search-index.js (from project/website). */\nwindow.SEARCH_INDEX = '+JSON.stringify(index)+';\n');
console.log('entries:',index.length,'| regs w/ empty pn:',index.filter(i=>!i.pn).length);
