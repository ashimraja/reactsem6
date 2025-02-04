import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleInterest from './lec0402/simpleInterest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleInterest/>
  </StrictMode>
)
