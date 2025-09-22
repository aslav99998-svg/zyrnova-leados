import React, { useEffect, useState } from "react";
export default function ROI(){
  const [k, setK] = useState(null);
  useEffect(()=>{ (async()=>{ const j = await (await fetch("/analytics/roi",{credentials:"include"})).json(); setK(j); })(); },[]);
  return (<div className="wrap">
    <h2>ROI Dashboard</h2>
    {!k && <div className="small muted">Loading...</div>}
    {k && (<div className="grid3">
      <div className="card"><div>{k.revenue}</div><div className="small muted">Revenue</div></div>
      <div className="card"><div>{k.costs}</div><div className="small muted">Costs</div></div>
      <div className="card"><div>{k.profit}</div><div className="small muted">Profit</div></div>
      <div className="card"><div>{k.calls}</div><div className="small muted">Calls</div></div>
    </div>)}
  </div>);
}
