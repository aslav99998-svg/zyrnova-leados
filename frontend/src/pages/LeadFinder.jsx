import React, { useState, useEffect } from "react";
export default function LeadFinder(){
  const [imports, setImports] = useState([]);
  const [summary, setSummary] = useState(null);
  const refresh = async ()=>{ const j = await (await fetch("/leadfinder/imports",{credentials:"include"})).json(); setImports(j.items||[]); };
  useEffect(()=>{ refresh(); },[]);
  const onUpload = async (e)=>{ const f=e.target.files[0]; if(!f) return; const fd=new FormData(); fd.append("csv",f);
    const j = await (await fetch("/leadfinder/upload",{method:"POST",credentials:"include",body:fd})).json();
    if(j.ok){ setSummary(j.summary); refresh(); } else { alert(j.error); } };
  return (<div className="wrap">
    <h2>Lead Finder</h2>
    <div className="card"><p>Import CSV (name,email,domain). The app validates emails and scores quality.</p><input type="file" accept=".csv" onChange={onUpload}/>{summary && <div className="small muted" style={{marginTop:8}}>Total: {summary.total} • Valid: {summary.valid} • Invalid: {summary.invalid}</div>}</div>
    <h3 style={{marginTop:16}}>Recent imports</h3>
    <div className="card"><ul className="clean">{imports.map(it=>(<li key={it._id} style={{padding:"8px 0",borderBottom:"1px solid #1e2235"}}>{it.filename} — {it.total} rows • valid: {it.valid} • invalid: {it.invalid}</li>))}{imports.length===0 && <li className="small muted">No imports.</li>}</ul></div>
  </div>);
}
