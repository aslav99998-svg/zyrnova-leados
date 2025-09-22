import React, { useEffect, useState } from "react";
export default function Reports(){
  const [kpi,setKpi]=useState(null);
  useEffect(()=>{ (async()=>{ const j=await (await fetch("/reports/kpi",{credentials:"include"})).json(); setKpi(j); })(); },[]);
  const exportDS=()=>{ window.location.href="/reports/export/datastudio"; };
  return (<div className="wrap"><h2>Reports</h2>{!kpi && <div className="small muted">Loading...</div>}
    {kpi && (<div className="card"><div>Leads: {kpi.leads} · Hot: {kpi.hot} · Calls: {kpi.calls} · Revenue: {kpi.revenue}</div>
      <div style={{marginTop:8}}><ul className="clean">{kpi.byChannel.map(x=>(<li key={x.channel}>{x.channel}: {x.leads} leads · {x.hot} hot</li>))}</ul></div>
      <button className="btn" onClick={exportDS}>Export for Data Studio (CSV)</button></div>)}
  </div>);
}
