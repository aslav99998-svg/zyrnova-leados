import { Router } from "express"; const r=Router(); let items=[];
r.get("/", (_req,res)=> res.json({ items }));
r.post("/", (req,res)=>{ const cs={ _id:String(Date.now()), ...req.body }; items.unshift(cs); res.json({ ok:true, item:cs }); });
r.delete("/:id", (req,res)=>{ items=items.filter(x=>x._id!==req.params.id); res.json({ ok:true }); });
export default r;
