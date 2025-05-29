const http =require('http')
const path =require('path')
const fs=require('fs')
const server =http.createServer((req,res)=>{
    if (req.url==='/'){
       fs.readFile(path.join(__dirname,'index.html'), (err,data)=>{
        if (err){
            res.WriteHead(500);//this gives status to the server 
            res.end('Error handeling')//basically what I'll get on the screen when I run into an error
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }

       })

    }
    

})
server.listen(8080)
