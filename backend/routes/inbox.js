import { Router } from "express"; const r=Router();
r.get("/list", (req,res)=>{ const ch=req.query.channel||"email";
  res.json({ items:[{id:ch+"-1",subject:ch.toUpperCase()+" thread #1",preview:"Last message..."},
                    {id:ch+"-2",subject:ch.toUpperCase()+" thread #2",preview:"Last message..."}] }); });
r.post("/ai-draft", (_req,res)=> res.json({ ok:true, text:"Thanks for reaching out! Would tomorrow or Thursday work for a quick call?" }));
export default r;
