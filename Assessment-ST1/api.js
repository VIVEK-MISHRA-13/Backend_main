const express = require('express');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));



app.get('/user',(req,res)=>{
    res.json(
        {
            name:"Amit",
            age:"25"
        }
    )
})

app.listen(5000,()=>{
    console.log("Server is running on port number 5000");
})