import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyComponent from './comp1.jsx'
import Component1 from './lec2412/component1.jsx'
import TimeTable from './lec2412/TimeTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyComponent/> */}
    {/* <Component1/> */}
    <TimeTable/>
  </StrictMode>
)
