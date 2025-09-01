// Creating server using node js
// console.log("hello world");

// const http = require('http');


// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.end("This is home page");
//     }
// })

// server.listen(3000,()=>{
//     console.log("Server is listening on port 3000");
    
// })


// creating server using express js
const express = require('express');
const app = express();
const morgan = require('morgan');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
// dbConnection();

// Third party middleware
// mogran is a logger which shows all the req and res related details on the terminal also with their run time
app.use(morgan('dev'));
app.set('view engine','ejs');

// custom middleware

// app.use((req,res,next)=>{
//     console.log("This is custom middleware");
//     const a =10;
//     const b = 20;
//     console.log(a + b);
//     return next();
    
    
// },(req,res)=>{
// res.render('index')    
// })


// for getting data on our server we need to add two line of code
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.post('/get-data',(req,res)=>{
    // const data = req.query;
    const data = req.body;

    console.log(data);
    res.send('Data received')
})

app.get('/',(req,res)=>{
    res.render('index')
    // res.send("This is home page");
    console.log("This is home page using ejs");
    
})

app.get('/about',(req,res)=>{
    res.send("This is about page");
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async (req,res,next)=>{
    // console.log(req.body);

    // destructuring
    const {username,email,password} = req.body;

   const newUser =  await userModel.create({
        username:username,
        email:email,
        password:password
    })
  
    res.send(newUser);
    
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})




