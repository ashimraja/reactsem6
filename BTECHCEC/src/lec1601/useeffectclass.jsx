import * as React from "react";

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({'id':1,'name':'John Doe'})
        },10000)
    })
}

function ApiSimulation(){
    const [user, setUser] = React.useState("loading");
    const [id, setId] = React.useState("loading");
    React.useEffect(()=>{
        fetchUser().then((user) => {
            setId(user.id);
            setUser(user.name)
        });
    })
    return(
        <div>
            User: {user}, <br/>
            Id: {id} <br/>
        </div>
    )
}
export default ApiSimulation