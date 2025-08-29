 const server= require("http")
 const user=[
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Ram"},
    {"id": 3, "name": "Charlie"}
 ]
 
 server.createServer((req,res)=>{
     if(req.url=="/")
     {
         res.write("home page")
     }
     else
        if (req.url=='/user')
        {
            res.write(JSON.stringify(user))
        } 
     else
     if(req.url=="/about")
     {
         res.write("this about page")
     }
     else{
 
          res.write("404 page not found")
     }
 
     
      res.end("")
 
 }).listen(4003,()=>{
 console.log("server is started")
 })