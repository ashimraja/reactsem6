const express =require('express');
const app=express();
const port=300;
app.get("/",(req,res)=>res.send('Hello World!'));
app.get('/uni',(req,res)=>res.send('Rk University'));
app.get('/uni/school',(req,res)=>res.send('School of Engineering'));
app.get('/uni/school/student',(req,res)=>res.send('MD Ashim Raja'));
app.listen(port,()=>console.log(`Example app listening on port ${port}`));