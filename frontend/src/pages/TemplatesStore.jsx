import React, { useEffect, useState } from "react";
export default function TemplatesStore(){
  const [store,setStore]=useState([]); const [mine,setMine]=useState([]);
  const refresh=async()=>{ const s=await (await fetch("/templates/store",{credentials:"include"})).json(); const m=await (await fetch("/templates/mine",{credentials:"include"})).json(); setStore(s.items||[]); setMine(m.items||[]); };
  useEffect(()=>{ refresh(); },[]);
  const install=async(id)=>{ const j=await (await fetch("/templates/store/install/"+id,{method:"POST",credentials:"include"})).json(); if(j.ok) refresh(); };
  return (<div className="wrap"><h2>Templates</h2>
    <div className="card"><div>Store</div><ul className="clean">{store.map(t=>(<li key={t._id} style={{padding:"8px 0",borderBottom:"1px solid #1e2235"}}><div>{t.name}</div><div className="small muted">{t.industry} · {t.language}</div><button className="btn small" onClick={()=>install(t._id)}>Install</button></li>))}{store.length===0 && <li className="small muted">Store is empty.</li>}</ul></div>
    <div className="card" style={{marginTop:12}}><div>My Templates</div><ul className="clean">{mine.map(t=>(<li key={t._id} style={{padding:"8px 0",borderBottom:"1px solid #1e2235"}}><div>{t.name}</div><div className="small muted">{t.industry} · {t.language}</div></li>))}{mine.length===0 && <li className="small muted">No templates yet.</li>}</ul></div>
  </div>);
}
