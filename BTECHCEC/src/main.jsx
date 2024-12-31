import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyComponent from './comp1.jsx'
import Component1 from './lec2412/component1.jsx'
import TimeTable from './lec2412/TimeTable.jsx'
import PropExmp from './lec3112/propscomp3.jsx'
import Anonymous from './lec3112/anonymous.jsx'
import DefaultProps1 from './lec3112/defaultprops.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyComponent/> */}
    {/* <Component1/> */}
    {/* <TimeTable/> */}
    {/* <PropExmp/> */}
    {/* <Anonymous var1={false} var2={'hello'} var3={'green'}/> */}
    <br />
    <DefaultProps1/>
    <br />
    <DefaultProps1 var1={true} />
    <br />
    <DefaultProps1 var2={'orange'} />
    <br />
    <DefaultProps1 var3={'New Text'} />
    <br />
    <DefaultProps1 var1={true} var2={'red'}/>
    <br />
    <DefaultProps1 var1={true} var2={'blue'} var3={'ABC'}/>
  </StrictMode>
)
