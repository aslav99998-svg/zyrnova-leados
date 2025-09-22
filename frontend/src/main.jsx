import React from "react";
import { createRoot } from "react-dom/client";

function App(){
  return (
    <div style={{padding:16, color:"#eee", background:"#0b0f1a"}}>
      Zyrnova LeadOS UI — it works!
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
