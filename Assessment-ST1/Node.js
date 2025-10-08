const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Home Page");
    }
    else if(req.url == '/about'){
        res.end("About Page");
    }
    else{
        res.end("404 Page Not Fount")
    }

})


server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})
