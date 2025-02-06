import React, { useEffect, useState } from 'react'
import Form from './form1'

const ResumeForm = () => {

  const[page,setPage]=useState('')

  return (
    <div>
      <button onClick={()=>setPage('1')} disabled={page==='1'} >Basic Info</button>
      <button onClick={()=>setPage('2')} disabled={page==='2'} >Qualification</button>
      <button onClick={()=>setPage('3')} disabled={page==='3'} >Cricket Level</button>
      <button onClick={()=>setPage('4')} disabled={page==='4'} >Show Result</button>
      <Form i={page}/>
    </div>
    
  )
}

export default ResumeForm
