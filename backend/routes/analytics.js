import { Router } from "express"; const r=Router();
r.get("/roi", (_req,res)=> res.json({ revenue:5000, costs:950, profit:4050, calls:18 }));
export default r;
