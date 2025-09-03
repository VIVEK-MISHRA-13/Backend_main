const express = require('express')
const app = express();
const data = require('./data');


app.get('/users',(req,res)=>{
    // res.send(data);
    res.json({
        message:"data successfully displayed",
        data:data,
        time:new Date().toLocaleString()
    })
})

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.listen(3000,()=>{
    console.log("Server is started on port number 3000");
    
})