// asynchronous programming----

function register(){
  setTimeout(()=>{
    console.log("register function called"); 
  },2000);
}
function sendEmail(){
  setTimeout(()=>{

    console.log("sendEmail function called");
  },1000);
}    
function login(){
  setTimeout(()=>{
    console.log("login function called");  
  },3000);
}
function getData(){
  setTimeout(()=>{ 
    console.log("getData function called");
  },2000);
}
function DisplayData(){
  setTimeout(()=>{
    console.log("DisplayData function called");  
  },1000);
}

register();
sendEmail();
login();
getData();
DisplayData();   
console.log("other Application");



