const http = require("http");
const server = http.createServer((req,res)=>{

  if(req.url==="/"&&req.method==="GET") {
    res.end("Server is running");
  }
else if(req.url==="/about"&&req.method==="GET") {
    res.end("This is the About page");
  }
  else{
   

    
    res.end("404");
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
