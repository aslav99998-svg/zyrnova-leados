import { Router } from "express"; const r=Router();
const store=[{ _id:"tpl1", name:"Restaurant Coaching — Starter (RO)", industry:"restaurant", language:"ro", installs:0,
  triggers:[{type:"intent",value:"time_objection",reply:"Înțeleg. Pot reveni peste 2 zile, e ok?",includeBooking:false},
            {type:"keyword",value:"pret",reply:"Sesiunile încep de la 249€. Vrei detalii pe pachetul de start?",includeBooking:true}],
  isStoreItem:true }]; let mine=[];
r.get("/store", (_req,res)=> res.json({ items:store }));
r.post("/store/install/:id", (req,res)=>{ const tpl=store.find(x=>x._id===req.params.id); if(!tpl) return res.status(404).json({ok:false});
  tpl.installs++; const clone={...tpl,_id:"mine_"+Date.now(),isStoreItem:false}; mine.unshift(clone); res.json({ ok:true, installed:clone }); });
r.get("/mine", (_req,res)=> res.json({ items:mine }));
export default r;
