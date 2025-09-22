import React,{useState} from "react";
export default function PrivacyCenter(){
  const [marketing,setMarketing]=useState(false); const [analytics,setAnalytics]=useState(false);
  const save=(type,granted)=>fetch("/gdpr/me/consent",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({type,granted})});
  const exportData=async()=>{ const r=await fetch("/gdpr/me/export",{credentials:"include"}); const j=await r.json(); const blob=new Blob([JSON.stringify(j,null,2)],{type:"application/json"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="zyrnova_export.json"; a.click(); URL.revokeObjectURL(url); };
  const del=async()=>{ if(!confirm("Delete account & data?")) return; await fetch("/gdpr/me/delete",{method:"POST",credentials:"include"}); alert("Requested."); };
  return (<div className="wrap"><h2>Privacy Center</h2><div className="card" style={{display:"grid",gap:12}}>
    <label><input type="checkbox" checked={marketing} onChange={e=>{setMarketing(e.target.checked);save("marketing",e.target.checked);}}/> Marketing emails</label>
    <label><input type="checkbox" checked={analytics} onChange={e=>{setAnalytics(e.target.checked);save("analytics",e.target.checked);}}/> Analytics cookies</label>
    <div style={{display:"flex",gap:8}}>
      <button className="btn" onClick={exportData}>Export my data (JSON)</button>
      <button className="btn danger" onClick={del}>Delete my account & data</button>
    </div></div></div>);
}
