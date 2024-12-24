import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyComponent from './comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComponent/>
  </StrictMode>
)
