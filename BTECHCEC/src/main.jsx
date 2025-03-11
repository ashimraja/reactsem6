import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResumeForm from './lec0602/ResumeForm.jsx'
import MyMonolithicComp from './lec1103/monolithicccomp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyMonolithicComp/>
  </StrictMode>
)
