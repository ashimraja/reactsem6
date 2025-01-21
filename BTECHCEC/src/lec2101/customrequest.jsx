import { useEffect, useState } from "react";
import {Promise} from 'bluebird';
Promise.config({cancellation:true})

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({id:1,name: 'John'})
        },5000)
    })
}

function NewComponent1(){
    const [id,setId]=useState('loading...');
    const [name,setName]=useState('');
    useEffect(()=>{
        const promise =fetchUser().then((var1)=>{
            setId(var1.id);
            setName(var1.name);
        })
        return()=>{
            promise.cancel();
        }
    })
    return(
        <div>
            User ID: {id}, <br/>
            User Name: {name}
        </div>
    )
}
export default NewComponent1