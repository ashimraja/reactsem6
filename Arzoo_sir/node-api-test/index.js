const express =require('express');
const app=express();
const port=300;
const birds = require('./birds')

// app.get("/",(req,res)=>res.send('Hello World!'));
// app.get('/uni',(req,res)=>res.send('Rk University'));
// app.get('/uni/school',(req,res)=>res.send('School of Engineering'));
// app.get('/uni/school/student',(req,res)=>res.json({"name":"Ashim","section":"4cec"}));
// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })
//   const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   const cb2 = function (req, res) {
//     res.send('Hello from C!')
//   }
// app.get('/example/c', [cb0, cb1, cb2])

//   app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from D!')
//   })
// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })
app.use('/birds', birds)
////create endpoints for students to perform crud operation and for staff also generate seprate file for student and staff
app.listen(port,()=>console.log(`Example app listening on port ${port}`));