import React,{useState} from "react"; import { useNavigate, Link } from "react-router-dom";
export default function Login(){ const nav=useNavigate(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [err,setErr]=useState("");
  const doLogin=async()=>{ setErr(""); const r=await fetch("/auth/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})}); const j=await r.json(); if(j.ok){ nav("/"); } else { setErr(j.error||"Login failed"); } };
  return (<div className="wrap"><h2>Login</h2><div className="card" style={{display:"grid",gap:8,maxWidth:420}}>
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
    {err && <div className="small" style={{color:"#e14c4c"}}>{err}</div>}
    <button className="btn" onClick={doLogin}>Login</button>
    <div className="small">No account? <Link to="/signup">Create one</Link></div></div></div>);
}
