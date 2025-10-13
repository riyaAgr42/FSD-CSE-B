const url="https://api.github.com/users/riyaAgr42"
const res=fetch(url);
res.then((resp)=>{
  return resp.json();
})
.then((data)=>{
  console.log("Data",data);
})
.catch((err)=>{
  console.log("Error",err);
})
.finally(()=>{
  console.log("last statement");
})