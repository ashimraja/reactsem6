import { useState } from "react";
import ShowPage from "./showPage";

const SimpleInterest = () => {

  const[page,setPage]= useState(1);

  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column" ,textAlign:"center", height:"100vh", gap:"10px"}}>
      <div style={{display:"flex",gap:"10px"}}>
      <button onClick={()=>setPage(1)} disabled={page===1} >Priciple</button>
      <button onClick={()=>setPage(2)} disabled={page===2} >Rate</button>
      <button onClick={()=>setPage(3)} disabled={page===3} >Duration</button>
      <button onClick={()=>setPage(4)} disabled={page===4} >Sow Result</button>
      </div>
      
      <ShowPage i={page}/>
    </div>
  )
}

export default SimpleInterest
