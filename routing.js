const server= require("http")

server.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("home page")
    }
    else
    if(req.url==="/about")
    {
        res.write("this about page")
    }
    else{

         res.write("404 page not found")
    }

    
     res.end("")

}).listen(4001,()=>{
console.log("server is started")
})