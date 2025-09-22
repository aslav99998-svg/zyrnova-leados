import React,{useState} from "react"; import { useNavigate, Link } from "react-router-dom";
export default function Signup(){ const nav=useNavigate(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [name,setName]=useState(""); const [err,setErr]=useState("");
  const doSignup=async()=>{ setErr(""); const r=await fetch("/auth/signup",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password,name})}); const j=await r.json(); if(j.ok){ nav("/billing"); } else { setErr(j.error||"Signup failed"); } };
  return (<div className="wrap"><h2>Create account</h2><div className="card" style={{display:"grid",gap:8,maxWidth:420}}>
    <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
    {err && <div className="small" style={{color:"#e14c4c"}}>{err}</div>}
    <button className="btn" onClick={doSignup}>Continue</button>
    <div className="small">Have an account? <Link to="/login">Login</Link></div></div></div>);
}
