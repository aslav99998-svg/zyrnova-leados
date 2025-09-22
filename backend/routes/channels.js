import { Router } from "express"; const r=Router();
r.get("/status", (_req,res)=> res.json({ instagram:{connected:true}, facebook:{connected:true}, whatsapp:{connected:false}, linkedin:{connected:false} }));
r.post("/whatsapp/connect", (_req,res)=> res.json({ ok:true, note:"Saved WhatsApp API config (stub)." }));
r.post("/linkedin/connect", (_req,res)=> res.json({ ok:true, note:"LinkedIn connection saved (stub)." }));
export default r;
