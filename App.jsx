import {useState} from "react";

export default function App(){
 const [scenario,setScenario]=useState("");
 const [result,setResult]=useState("");

 async function submit(){
  const r=await fetch("http://localhost:8000/generate",{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({scenario})
  });
  const data=await r.json();
  setResult(data.message);
 }

 return (
 <div style={{padding:30}}>
 <h1>Smart Situation Assistant</h1>
 <input value={scenario} onChange={e=>setScenario(e.target.value)} />
 <button onClick={submit}>Generate</button>
 <p>{result}</p>
 </div>
 )
}