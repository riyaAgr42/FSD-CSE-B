import http from 'http';
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.write("Home page")
  }else if(req.url==="/about"){
    res.write("About Page")
  }else{
    res.write("Error: 404 page not found")
  }
  res.end();
})

server.listen(3001,()=>{
  console.log("server is working on port 8001")
})