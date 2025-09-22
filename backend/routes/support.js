import { Router } from "express"; const r=Router();
r.post("/ai", (req,res)=>{ const q=(req.body?.q||"").slice(0,400);
  const a=`Here is how to proceed in Zyrnova: 1) Connect Channels. 2) Install a template. 3) Import leads via Lead Finder. 4) Engage from Inbox. Question was: ${q}`;
  res.json({ ok:true, text:a });
});
export default r;
