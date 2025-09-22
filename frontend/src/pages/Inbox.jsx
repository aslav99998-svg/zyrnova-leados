import React, { useEffect, useState } from "react";
function Tab({active,onClick,children}){ return <button className={active?"btn acc small":"btn small"} onClick={onClick}>{children}</button>; }
export default function Inbox(){
  const [tab,setTab] = useState("email");
  const [threads,setThreads] = useState([]);
  useEffect(()=>{ (async()=>{ const j = await (await fetch(`/inbox/list?channel=${tab}`,{credentials:"include"})).json(); setThreads(j.items||[]); })(); },[tab]);
  const draft = async (id)=>{ const j = await (await fetch("/inbox/ai-draft",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({threadId:id,channel:tab})})).json(); alert(j.text); };
  return (<div className="wrap"><h2>Unified Inbox</h2>
    <div style={{display:"flex",gap:8,marginBottom:12}}>
      <Tab active={tab==="email"} onClick={()=>setTab("email")}>Email</Tab>
      <Tab active={tab==="instagram"} onClick={()=>setTab("instagram")}>Instagram</Tab>
      <Tab active={tab==="facebook"} onClick={()=>setTab("facebook")}>Facebook</Tab>
    </div>
    <div className="grid2">
      <div className="card">
        <ul className="clean">
          {threads.map(t=>(<li key={t.id} style={{padding:"8px 0",borderBottom:"1px solid #1e2235"}}>
            <div>{t.subject}</div><div className="small muted">{t.preview}</div>
            <button className="btn small" onClick={()=>draft(t.id)}>AI draft reply</button>
          </li>))}
          {threads.length===0 && <li className="small muted">No threads</li>}
        </ul>
      </div>
      <div className="card"><div className="small muted">Select a thread to view details.</div></div>
    </div>
  </div>);
}
