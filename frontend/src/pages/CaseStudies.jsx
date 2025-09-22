import React, { useEffect, useState } from "react";
export default function CaseStudies(){
  const [items,setItems]=useState([]); const [form,setForm]=useState({title:"",industry:"",summary:"",videoUrl:""});
  const refresh=async()=>{ const j=await (await fetch("/casestudies",{credentials:"include"})).json(); setItems(j.items||[]); }; useEffect(()=>{ refresh(); },[]);
  const save=async()=>{ const j=await (await fetch("/casestudies",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)})).json(); if(j.ok){ setForm({title:"",industry:"",summary:"",videoUrl:""}); refresh(); } };
  const del=async(id)=>{ if(!confirm("Delete?")) return; await fetch("/casestudies/"+id,{method:"DELETE",credentials:"include"}); refresh(); };
  return (<div className="wrap"><h2>Case Studies</h2>
    <div className="card" style={{display:"grid",gap:8}}>
      <input placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
      <input placeholder="Industry" value={form.industry} onChange={e=>setForm({...form,industry:e.target.value})}/>
      <input placeholder="Video URL (optional)" value={form.videoUrl} onChange={e=>setForm({...form,videoUrl:e.target.value})}/>
      <textarea placeholder="Summary / Metrics" value={form.summary} onChange={e=>setForm({...form,summary:e.target.value})}/>
      <button className="btn" onClick={save}>Add case study</button>
    </div>
    <div className="grid2" style={{marginTop:12}}>
      {items.map(cs=>(<div key={cs._id} className="card"><div>{cs.title}</div><div className="small muted">{cs.industry}</div><p>{cs.summary}</p>{cs.videoUrl && <a href={cs.videoUrl} target="_blank" rel="noreferrer">Watch video</a>}<div style={{marginTop:8}}><button className="btn danger small" onClick={()=>del(cs._id)}>Delete</button></div></div>))}
      {items.length===0 && <div className="small muted">No case studies yet.</div>}
    </div>
  </div>);
}
