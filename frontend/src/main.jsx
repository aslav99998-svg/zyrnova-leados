import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inbox from "./pages/Inbox.jsx";
import ROI from "./pages/ROI.jsx";
import LeadFinder from "./pages/LeadFinder.jsx";
import Channels from "./pages/Channels.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import TemplatesStore from "./pages/TemplatesStore.jsx";
import Reports from "./pages/Reports.jsx";
import PrivacyCenter from "./pages/PrivacyCenter.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Billing from "./pages/Billing.jsx";

function App(){
  return (
    <BrowserRouter>
      <div className="top">
        <div className="brand">Zyrnova LeadOS</div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/inbox">Inbox</Link>
          <Link to="/roi">ROI</Link>
          <Link to="/lead-finder">Lead Finder</Link>
          <Link to="/channels">Channels</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/billing">Billing</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/roi" element={<ROI/>}/>
        <Route path="/lead-finder" element={<LeadFinder/>}/>
        <Route path="/channels" element={<Channels/>}/>
        <Route path="/case-studies" element={<CaseStudies/>}/>
        <Route path="/templates" element={<TemplatesStore/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/privacy" element={<PrivacyCenter/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")).render(<App/>);
