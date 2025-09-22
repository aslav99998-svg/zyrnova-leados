import { Router } from "express"; const r=Router();
r.get("/kpi", (_req,res)=> res.json({ leads:120, hot:34, calls:18, revenue:5400,
  byChannel:[{channel:"email",leads:60,hot:14},{channel:"instagram",leads:40,hot:12},{channel:"facebook",leads:20,hot:8}] }));
r.get("/export/datastudio", (_req,res)=>{ const rows=["date,channel,leads,hot,calls,revenue","2025-09-01,email,20,5,3,900","2025-09-01,instagram,15,4,3,800","2025-09-01,facebook,8,2,1,300"].join("\n");
  res.setHeader("Content-Type","text/csv"); res.setHeader("Content-Disposition","attachment; filename=zyrnova_reports.csv"); res.send(rows); });
export default r;
