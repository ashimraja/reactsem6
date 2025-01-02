import {useState} from 'react'
function StateExmp1(){
    const [name, setName]= useState('RKU');
    const [age, setAge]= useState(45);
    const [color,setColor]=useState('Red');
    const [checkbold, setCheckBold]=useState('');
    return(
        <div>
            <input onChange={(e)=>setName(e.target.value)} value={name}/>
            <p>{name}</p>
            <br />
            <input onChange={(e)=>setAge(e.target.value)} value={age} type='number'/>
            <h2>{age}</h2>
            <input type="radio" name='colour' onChange={()=>setColor('Blue')} />Blue
            <input type="radio" name='colour' onChange={()=>setColor('Yellow')} />Yellow
            <input type="radio" name='colour' onChange={()=>setColor('Green')} />Green
            <p  style={{fontWeight: checkbold, background:color , height:age+'px', fontSize:age+'px'}}>{name} is {age} years old.</p>
            <input onChange={()=>checkbold==='bold'?setCheckBold(''):setCheckBold('bold')} type="checkbox" name="" id="" /> make bold
        </div>
    )
}
export default StateExmp1