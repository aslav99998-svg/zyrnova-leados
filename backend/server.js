import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import analyticsRoutes from "./routes/analytics.js";
import inboxRoutes from "./routes/inbox.js";
import gdprRoutes from "./routes/gdpr.js";
import leadFinderRoutes from "./routes/leadfinder.js";
import channelsRoutes from "./routes/channels.js";
import caseStudyRoutes from "./routes/casestudies.js";
import templatesRoutes from "./routes/templates.js";
import reportsRoutes from "./routes/reports.js";
import supportRoutes from "./routes/support.js";
import authRoutes from "./routes/auth.js";
import billingRoutes from "./routes/billing.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } }));

const requireAuth = (_req,_res,next)=>{ next(); };

app.get("/", (_req,res)=>res.send("Zyrnova LeadOS Backend OK"));
app.get("/health", (_req,res)=>res.json({ ok:true }));

app.use("/analytics", requireAuth, analyticsRoutes);
app.use("/inbox", requireAuth, inboxRoutes);
app.use("/gdpr", requireAuth, gdprRoutes);
app.use("/leadfinder", requireAuth, leadFinderRoutes);
app.use("/channels", requireAuth, channelsRoutes);
app.use("/casestudies", requireAuth, caseStudyRoutes);
app.use("/templates", requireAuth, templatesRoutes);
app.use("/reports", requireAuth, reportsRoutes);
app.use("/support", requireAuth, supportRoutes);
app.use("/auth", authRoutes);
app.use("/billing", billingRoutes);

app.listen(PORT, ()=>console.log(`Backend on :${PORT}`));
