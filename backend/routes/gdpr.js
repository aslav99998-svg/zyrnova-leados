import { Router } from "express"; const r=Router();
r.get("/me/export", (_req,res)=> res.json({ profile:{ email:"demo@user" }, leads:[], messages:[], bookings:[] }));
r.post("/me/delete", (_req,res)=> res.json({ ok:true, note:"Deletion job queued (demo)." }));
r.post("/me/consent", (req,res)=> res.json({ ok:true, consent:{ type:req.body?.type, granted:!!req.body?.granted, ts:Date.now() } }));
export default r;
