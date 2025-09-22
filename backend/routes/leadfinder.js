import { Router } from "express"; import csv from "csvtojson"; const r=Router();
const validEmail=e=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
r.post("/upload", async (req,res)=>{ try{
  if(!req.files || !req.files.csv) return res.status(400).json({ ok:false, error:"Upload CSV as 'csv' field" });
  const rows = await csv().fromString(req.files.csv.data.toString("utf-8"));
  let valid=0,invalid=0; const out=[];
  for(const row of rows){ const email=String(row.email||"").trim(); const ok=validEmail(email); ok?valid++:invalid++; out.push({ email, name:row.name||"", domain:row.domain||"", valid:ok, score: ok?0.7:0.1 }); }
  res.json({ ok:true, summary:{ total:rows.length, valid, invalid }, sample: out.slice(0,10) });
}catch(e){ res.status(500).json({ ok:false, error:e.message }); }});
r.get("/imports", (_req,res)=> res.json({ items:[] }));
export default r;
