import * as React from "react";

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({'id':1,'name':'John Doe','list':['ashim','raja','rku','react']})
        },10000)
    })
}

function ApiSimulation2(){
    const [data, setData] = React.useState(['loading']);
    React.useEffect(()=>{
        fetchUser().then((data) => {
            setData(data.list);
        });
    })
    return(
        <div>
            <ul>
                {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </div>
    )
}
export default ApiSimulation2