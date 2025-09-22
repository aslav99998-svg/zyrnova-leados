import React, { useEffect, useState } from "react";
export default function Channels(){
  const [st,setSt]=useState({});
  useEffect(()=>{ (async()=>{ const j=await (await fetch("/channels/status",{credentials:"include"})).json(); setSt(j); })(); },[]);
  const connect = async (path)=>{ const j=await (await fetch("/channels/"+path,{method:"POST",credentials:"include"})).json(); alert(j.note||"saved"); };
  return (<div className="wrap"><h2>Channels</h2>
    <div className="grid3">
      <div className="card"><div>Instagram</div><div>{st.instagram?.connected?"Connected":"Not connected"}</div></div>
      <div className="card"><div>Facebook</div><div>{st.facebook?.connected?"Connected":"Not connected"}</div></div>
      <div className="card"><div>WhatsApp</div><div>{st.whatsapp?.connected?"Connected":"Not connected"} <div><button className="btn small" onClick={()=>connect("whatsapp/connect")}>Connect</button></div></div></div>
      <div className="card"><div>LinkedIn</div><div>{st.linkedin?.connected?"Connected":"Not connected"} <div><button className="btn small" onClick={()=>connect("linkedin/connect")}>Connect</button></div></div></div>
    </div>
    <div className="small muted" style={{marginTop:8}}>WhatsApp și LinkedIn sunt demo; adaugă chei reale în backend.</div>
  </div>);
}
