const express =require('express');
const app= express();
const port = 3000;
let books=[
    {
        id:123,
        title:'My First Book',
        author:'Me and You',
        publication:'Never',
        price:500,
        publication_year:2025
    },
]
app.use(express.json())
//fetch all books
app.get('/',(req,res)=>res.json(books));
//to add new books
app.post('/',(req,res)=>{
    const{id, title, author, publication, price, publication_year}=req.body;
    books=[
        ...books,
        {id, title, author, publication, price, publication_year},
    ];
    res.json(books);
});
//to update books
app.put('/:id',(req,res)=>{
    const id= req.params.id;
    const{title, author, publication, price, publication_year}=req.body;
    books = books.map((book)=>
        book.id==id ? {id,title,author,publication,price,publication_year} 
        : book
    );
    res.json(books);
})
//to delet books
app.delete('/:id',(req,res)=>{
    const id= req.params.id;
    books=books.filter((book)=> 
        book.id !=id 
    );
    res.json(books);
})
app.listen(port,()=>console.log(`Example app listening on port ${port}`));